"use client";

import React, { useState } from "react";

type Todo = { text: string; done: boolean };

const initialTodos: Todo[] = [
    { text: "Selesaikan UI dasbor", done: false },
    { text: "Beli bahan makanan", done: false },
    { text: "Telepon bank", done: true },
];

const Todos: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggle = (index: number) =>
        setTodos((prev) =>
            prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
        );

    return (
        <a
            href="#"
            tabIndex={0}
            className="widget-card widget-todos relative bg-[#0e2a36]/50 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:-translate-y-1"
        >
            <h3 className="text-xl font-serif text-white mb-4">Tugas</h3>
            <ul className="space-y-3">
                {todos.map(({ text, done }, idx) => (
                    <li
                        key={idx}
                        className={`flex items-center ${
                            done ? "opacity-40" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => toggle(idx)}
                            className="h-5 w-5 rounded bg-transparent border-2 border-[#bf988a]/50 text-[#247c6d] focus:ring-[#247c6d]/50 mr-3"
                        />
                        <span className={done ? "line-through" : ""}>
                            {text}
                        </span>
                    </li>
                ))}
            </ul>
            <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#247c6d] rounded-full text-white flex items-center justify-center shadow-lg hover:bg-[#1a594d] transition-colors">
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
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </a>
    );
};
export default Todos;
