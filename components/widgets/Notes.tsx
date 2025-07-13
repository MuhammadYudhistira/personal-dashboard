"use client";
import React, { useState } from "react";

const Notes: React.FC = () => {
    const [text, setText] = useState(
        "- Ide untuk proyek baru...\n- Ingat untuk cek tren desain terbaru."
    );

    return (
        <a
            href="#"
            tabIndex={0}
            className="widget-card widget-notes relative bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-5 mix-blend-overlay" />
            <h3 className="text-xl font-serif text-white mb-4">
                Catatan Cepat
            </h3>
            <textarea
                className="w-full h-32 bg-transparent text-[#bf988a] resize-none focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </a>
    );
};
export default Notes;
