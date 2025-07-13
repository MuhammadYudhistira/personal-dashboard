"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { HomeIcon, CloudIcon, Book, FilmIcon, Calendar } from "lucide-react";

const DATA = [
    { label: "Cuaca", href: "/weather", icon: CloudIcon },
    { label: "Bacaan", href: "/reading", icon: Book },
    { label: "Tontonan", href: "/watching", icon: FilmIcon },
    { label: "Acara", href: "/events", icon: Calendar },
];

const DockNav = () => {
    return (
        <div className="fixed bottom-5 left-0 right-0 mb-2 z-30">
            <TooltipProvider delayDuration={100}>
                <Dock
                    direction="middle"
                    className="rounded-full border-[#bf988a] bg-white/5 shadow-lg backdrop-blur-sm border-2"
                    iconDistance={160}
                >
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={"/"}>
                                    <HomeIcon className="size-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="mb-2 bg-white text-black">
                                <p>Home</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    {DATA.map((item, index) => (
                        <DockIcon key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <a href={item.href} target="_blank">
                                        <item.icon className="size-6" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent className="mb-2 bg-white text-black">
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>
        </div>
    );
};

export default DockNav;
