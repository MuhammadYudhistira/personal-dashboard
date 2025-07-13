"use client";

import React, { useState } from "react";

const ReadingTracker: React.FC = () => {
    const [page, setPage] = useState(145);
    const total = 320;
    const percent = Math.round((page / total) * 100);

    return (
        <a
            href="#"
            tabIndex={0}
            className="widget-card widget-reading bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
        >
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 h-full">
                <img
                    src="https://placehold.co/120x180/bf988a/031c26?text=Sampul+Buku"
                    alt="Book Cover"
                    className="w-24 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1 w-full">
                    <p className="text-sm text-[#bf988a]/70 mb-1">
                        Sedang Membaca
                    </p>
                    <h2 className="text-2xl font-serif text-white mb-1">
                        The Midnight Library
                    </h2>
                    <p className="text-md text-[#bf988a]/90 mb-4">
                        oleh Matt Haig
                    </p>
                    <div className="flex items-center justify-between text-sm text-[#bf988a]/70 mb-1">
                        <span>
                            Halaman {page} / {total}
                        </span>
                        <span>{percent}%</span>
                    </div>
                    <progress
                        className="w-full h-2 rounded-full"
                        value={percent}
                        max={100}
                    />
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, total))}
                        className="mt-4 bg-[#247c6d] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a594d] transition-colors flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        + Halaman
                    </button>
                </div>
            </div>
        </a>
    );
};
export default ReadingTracker;
