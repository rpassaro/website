"use client";
import { Mail } from "lucide-react";

export default function Header() {
    return (
        <header className="border-b border-white/10 bg-[var(--surface)]/60 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
                <a
                    href="mailto:passaroryan@gmail.com"
                    className="inline-flex items-center gap-2 text-white/70 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                >
                    <Mail className="h-4 w-4" />
                    <span>passaroryan@gmail.com</span>
                </a>
            </div>
        </header>
    );
}


