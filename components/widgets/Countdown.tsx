import React from "react";

const items = [
    { label: "Batas Waktu Proyek", days: 3, urgent: true },
    { label: "Liburan", days: 23, urgent: false },
];

const Countdown: React.FC = () => (
    <a
        href="#"
        tabIndex={0}
        className="widget-card widget-countdown bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
    >
        <h3 className="text-xl font-serif text-white mb-4">Hitung Mundur</h3>
        <ul className="space-y-4">
            {items.map(({ label, days, urgent }) => (
                <li key={label} className="flex items-center justify-between">
                    <div>
                        <p className="font-semibold text-white">{label}</p>
                        <p className="text-sm text-[#bf988a]/70">
                            dalam {days} hari
                        </p>
                    </div>
                    <span
                        className={`px-2 py-1 text-xs font-bold rounded-full ${
                            urgent
                                ? "text-red-800 bg-red-300/50"
                                : "text-green-800 bg-green-300/50"
                        }`}
                    >
                        {urgent ? "Mendesak" : "Segera"}
                    </span>
                </li>
            ))}
        </ul>
    </a>
);
export default Countdown;
