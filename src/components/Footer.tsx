"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[var(--surface)]/60 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
                <span className="text-sm text-white/60">
                    © {new Date().getFullYear()} Ryan Passaro
                </span>
                <div className="flex gap-4">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=passaroryan@gmail.com&su=${encodeURIComponent("Hello Ryan")}&body=${encodeURIComponent("Saw your site and wanted to connect.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition hover:text-[var(--accent)] hover:drop-shadow-[0_0_6px_var(--accent)]"
                        title="Email me"
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
        </footer>
    );
}


