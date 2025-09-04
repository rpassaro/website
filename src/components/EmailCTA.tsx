"use client";
import { Mail } from "lucide-react";

export default function EmailCTA() {
    const email = "passaroryan@gmail.com";
    const subject = "Hello Ryan";
    const body = "Saw your site and wanted to connect.";

    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="flex items-center gap-3">
            <a
                href={mailto}
                className="rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:border-white/25 inline-flex items-center gap-2"
            >
                <Mail className="h-4 w-4 text-[var(--accent)]" /> Email
            </a>
            <a
                href={gmail}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm text-white/70 underline underline-offset-4 hover:text-white/90"
            >
                open in Gmail
            </a>
        </div>
    );
}


