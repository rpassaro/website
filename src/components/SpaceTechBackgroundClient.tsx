"use client";
import dynamic from "next/dynamic";

const SpaceTechBackground = dynamic(() => import("@/components/SpaceTechBackground"), {
    ssr: false,
    loading: () => null,
});

export default function SpaceTechBackgroundClient() {
    return <SpaceTechBackground />;
}


