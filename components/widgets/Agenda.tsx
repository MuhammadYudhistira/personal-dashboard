import React from "react";

const events = [
    { time: "10:00 – Design Sync", desc: "Bahas component library baru." },
    { time: "12:30 – Makan Siang dengan Alex", desc: "Downtown Cafe" },
    {
        time: "15:00 – Pengumpulan Proyek",
        desc: "Selesaikan dan unggah file proyek.",
    },
];

const Agenda: React.FC = () => (
    <a
        href="#"
        tabIndex={0}
        className="widget-card widget-agenda bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
    >
        <h3 className="text-xl font-serif text-white mb-4">Agenda Hari Ini</h3>
        <ul className="space-y-4">
            {events.map(({ time, desc }, i) => (
                <li key={i} className="flex items-start space-x-4">
                    <div className="flex flex-col items-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-[#247c6d]" />
                        {i < events.length - 1 && (
                            <div className="w-px h-12 bg-[#bf988a]/20" />
                        )}
                    </div>
                    <div>
                        <p className="font-semibold text-white">{time}</p>
                        <p className="text-sm text-[#bf988a]/70">{desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    </a>
);
export default Agenda;
