"use client";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface)]/60 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/50">
            <div className="mx-auto flex max-w-5xl items-center justify-end px-6 py-3">
                <nav aria-label="Primary" className="flex items-center gap-4 text-sm text-white/80">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=passaroryan@gmail.com&su=${encodeURIComponent("Hello Ryan")}&body=${encodeURIComponent("Saw your site and wanted to connect.")}`}
                        title="Email me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="hidden sm:inline">Email</span>
                    </a>
                    <span className="text-white/30">•</span>
                    <a
                        href="https://github.com/rpassaro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Github className="h-5 w-5" />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <span className="text-white/30">•</span>
                    <a
                        href="https://www.linkedin.com/in/ryan-passaro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}


