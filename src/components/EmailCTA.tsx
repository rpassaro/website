"use client";
import { Mail } from "lucide-react";

export default function EmailCTA() {
    const email = "passaroryan@gmail.com";
    const subject = "Hello Ryan";
    const body = "Saw your site and wanted to connect.";

    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    return (
        <a
            href={mailto}
            className="rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:border-white/25 inline-flex items-center gap-2"
        >
            <Mail className="h-4 w-4 text-[var(--accent)]" /> Email
        </a>
    );
}


