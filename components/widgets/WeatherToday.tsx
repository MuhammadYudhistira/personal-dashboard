"use client";
import React, { useEffect, useState } from "react";

interface WeatherData {
    temp: number;
    description: string;
    icon: string;
    city: string;
    date: Date;
}

export default function WeatherToday({
    className = "",
}: {
    className?: string;
}) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (lat: number, lon: number) => {
        try {
            const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            if (!API_KEY) throw new Error("Missing OPENWEATHER_KEY");

            const url =
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=id`.replace(
                    /\s+/g,
                    ""
                );
            console.log("Fetching weather from:", url);

            const res = await fetch(url);
            console.log("🚀 ~ fetchWeather ~ res:", res);
            if (!res.ok) throw new Error("Jaringan cuaca tidak OK");
            const data = await res.json();
            console.log("Weather API response:", data);

            setWeather({
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                city: data.name,
                date: new Date(),
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error("Weather fetch error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation tidak didukung");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                console.log("[Geo] Berhasil:", latitude, longitude);
                fetchWeather(latitude, longitude);
            },
            (geoErr) => {
                console.warn("[Geo] Gagal:", geoErr.message);
                // ❗Pastikan fallback dipanggil dengan nilai default valid
                const fallbackLat = -6.1702;
                const fallbackLon = 106.6406;
                console.log("[Geo] Fallback ke:", fallbackLat, fallbackLon);
                fetchWeather(fallbackLat, fallbackLon);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    }, []);

    if (loading) {
        return (
            <div
                className={`widget-card flex items-center justify-center p-6 rounded-2xl bg-[#0e2a36]/50 border border-white/10 text-[#bf988a] ${className}`}
            >
                Memuat cuaca…
            </div>
        );
    }

    if (error || !weather) {
        return (
            <div
                className={`widget-card flex items-center justify-center p-6 rounded-2xl bg-[#0e2a36]/50 border border-red-400 text-red-300 ${className}`}
            >
                Gagal memuat cuaca
            </div>
        );
    }

    const dateStr = weather.date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section
            className={`widget-card relative flex flex-col justify-between bg-gradient-to-br from-[#247c6d]/30 to-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm overflow-hidden hover:-translate-y-1 ${className}`}
        >
            <div>
                <p className="font-medium text-white">{weather.city}</p>
                <p className="text-sm text-[#bf988a]/80">{dateStr}</p>
            </div>
            <div className="flex items-end justify-between">
                <p className="font-serif text-5xl text-white">
                    {weather.temp}°
                </p>
                <div className="text-right">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={weather.description}
                        className="w-12 h-12 inline-block"
                    />
                    <p className="text-sm text-white/90 capitalize">
                        {weather.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
