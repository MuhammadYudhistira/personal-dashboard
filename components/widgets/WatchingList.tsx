import React from "react";

const watching = [
    { title: "Dune: Part Two", tag: "Menonton" },
    { title: "Shōgun", tag: "Selesai" },
    { title: "Fallout", tag: "Ingin Nonton" },
];

const WatchingList: React.FC = () => (
    <a
        href="#"
        tabIndex={0}
        className="widget-card widget-watching bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
    >
        <h3 className="text-xl font-serif text-white mb-4">Daftar Tontonan</h3>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
            {watching.map(({ title, tag }) => (
                <div key={title} className="flex-shrink-0 w-36 group">
                    <img
                        src={`https://placehold.co/200x300/bf988a/031c26?text=${encodeURIComponent(
                            title.split(" ")[0]
                        )}`}
                        alt={title}
                        className="w-full h-48 object-cover rounded-lg mb-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <h4 className="font-semibold text-white truncate">
                        {title}
                    </h4>
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            tag === "Menonton"
                                ? "bg-[#247c6d]/50 text-[#247c6d]"
                                : tag === "Selesai"
                                ? "bg-[#bf988a]/50 text-[#bf988a]"
                                : "bg-gray-500/50 text-gray-300"
                        }`}
                    >
                        {tag}
                    </span>
                </div>
            ))}
        </div>
    </a>
);
export default WatchingList;
