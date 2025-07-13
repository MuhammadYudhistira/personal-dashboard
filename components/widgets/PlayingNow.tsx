import React from "react";

const PlayingNow: React.FC = () => (
    <a
        href="#"
        tabIndex={0}
        className="widget-card widget-spotify relative flex flex-col justify-between overflow-hidden bg-cover bg-center p-6 rounded-2xl shadow-lg border border-white/10 hover:-translate-y-1 spotify-bg"
        style={
            {
                "--bg-image":
                    "url('https://placehold.co/400x400/247c6d/031c26?text=Album+Art')",
            } as React.CSSProperties
        }
    >
        <div className="relative z-10 flex items-center space-x-4">
            <img
                src="https://placehold.co/80x80/247c6d/031c26?text=Art"
                alt="Album Art"
                className="w-16 h-16 rounded-lg shadow-md flex-shrink-0"
            />
            <div>
                <h3 className="font-bold text-white leading-tight">
                    After Hours
                </h3>
                <p className="text-sm text-white/80">The Weeknd</p>
            </div>
        </div>
        <div className="relative z-10 mt-4">
            <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                <div
                    className="bg-white h-1.5 rounded-full"
                    style={{ width: "45%" }}
                />
            </div>
            <div className="flex items-center justify-center space-x-6">
                {/* prev */}
                <button className="text-white/80 hover:text-white transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="11 19 2 12 11 5 11 19" />
                        <polygon points="22 19 13 12 22 5 22 19" />
                    </svg>
                </button>
                {/* play */}
                <button className="text-white bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                </button>
                {/* next */}
                <button className="text-white/80 hover:text-white transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="13 19 22 12 13 5 13 19" />
                        <polygon points="2 19 11 12 2 5 2 19" />
                    </svg>
                </button>
            </div>
        </div>
    </a>
);
export default PlayingNow;
