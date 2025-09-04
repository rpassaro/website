"use client";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Header() {
    return (
        <header className="border-b border-white/10 bg-[var(--surface)]/60 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
                <div className="flex items-center gap-4">
                    <a
                        href="/email"
                        title="Email me"
                        className="text-white/70 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/rpassaro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ryan-passaro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}


