import React from "react";

const days = [
    { day: "Min", temps: "31°/25°" },
    { day: "Sen", temps: "29°/24°" },
    { day: "Sel", temps: "30°/25°" },
    { day: "Rab", temps: "30°/24°" },
    { day: "Kam", temps: "31°/25°" },
    { day: "Jum", temps: "29°/24°" },
];

const Forecast: React.FC = () => (
    <a
        href="#"
        tabIndex={0}
        className="widget-card widget-forecast flex flex-col bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
    >
        <h3 className="text-xl font-serif text-white mb-4">Prakiraan 7 Hari</h3>
        <div className="flex justify-between overflow-x-auto no-scrollbar">
            {days.map(({ day, temps }) => (
                <div
                    key={day}
                    className="text-center flex-shrink-0 w-16 p-2 border border-transparent rounded-lg hover:bg-[#247c6d]/20 hover:border-[#247c6d]/50"
                >
                    <p className="font-bold text-white">{day}</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto my-1 text-[#bf988a]"
                    >
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    <p className="text-sm text-white">{temps}</p>
                </div>
            ))}
        </div>
    </a>
);
export default Forecast;
