"use client";
import { useEffect, useRef } from "react";

type Layer = {
    pat: CanvasPattern;
    off: { x: number; y: number };
    vel: { x: number; y: number };
    scale: number;
};

export default function SpaceTechBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d", { alpha: true })!;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

        let w = 0, h = 0;
        let raf = 0;
        let tPrev = performance.now();
        const parallax = { x: 0, y: 0, tx: 0, ty: 0 };
        let bgGrad: CanvasGradient | null = null;
        let layers: Layer[] = [];

        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

        function makeStarTile(opts: {
            tile: number;
            count: number;
            sizeMin: number;
            sizeMax: number;
            blur: number;
            tint: [number, number, number];
            alpha: number;
            twinkle?: boolean;
        }): CanvasPattern {
            const { tile, count, sizeMin, sizeMax, blur, tint, alpha } = opts;
            const off = document.createElement("canvas");
            off.width = Math.floor(tile * dpr);
            off.height = Math.floor(tile * dpr);
            const octx = off.getContext("2d")!;
            octx.setTransform(dpr, 0, 0, dpr, 0, 0);

            octx.fillStyle = "transparent";
            octx.clearRect(0, 0, tile, tile);
            octx.globalCompositeOperation = "lighter";
            octx.shadowColor = `rgba(${tint[0]},${tint[1]},${tint[2]},0.35)`;
            octx.shadowBlur = blur;

            for (let i = 0; i < count; i++) {
                const x = Math.random() * tile;
                const y = Math.random() * tile;
                const r = sizeMin + Math.random() * (sizeMax - sizeMin);
                const tw = 0.75 + Math.random() * 0.5;
                octx.beginPath();
                octx.arc(x, y, r, 0, Math.PI * 2);
                octx.fillStyle = `rgba(${tint[0]},${tint[1]},255,${alpha * tw})`;
                octx.fill();
            }

            const pat = octx.createPattern(off, "repeat")!;
            return pat;
        }

        function resize() {
            const { innerWidth, innerHeight } = window;
            w = innerWidth; h = innerHeight;

            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            bgGrad = ctx.createRadialGradient(
                w * 0.55, h * 0.5, 0,
                w * 0.55, h * 0.5, Math.max(w, h) * 0.9
            );
            bgGrad.addColorStop(0, "rgba(16,22,45,0.4)");
            bgGrad.addColorStop(1, "rgba(2,4,10,0)");

            const total = Math.max(80, Math.min(Math.floor((w * h) / 2200), 320));

            const farCount = Math.floor(total * 0.4);
            const midCount = Math.floor(total * 0.35);
            const nearCount = total - farCount - midCount;

            const tile = 512;
            const farPat = makeStarTile({
                tile, count: farCount, sizeMin: 0.4, sizeMax: 1.2, blur: 6,
                tint: [140, 180, 255], alpha: 0.25
            });
            const midPat = makeStarTile({
                tile, count: midCount, sizeMin: 0.6, sizeMax: 1.6, blur: 10,
                tint: [160, 200, 255], alpha: 0.30
            });
            const nearPat = makeStarTile({
                tile, count: nearCount, sizeMin: 0.9, sizeMax: 2.0, blur: 14,
                tint: [180, 210, 255], alpha: 0.36
            });

            layers = [
                { pat: farPat, off: { x: 0, y: 0 }, vel: { x: 6, y: 4 }, scale: 0.9 },
                { pat: midPat, off: { x: 0, y: 0 }, vel: { x: 14, y: 10 }, scale: 1.0 },
                { pat: nearPat, off: { x: 0, y: 0 }, vel: { x: 26, y: 18 }, scale: 1.1 },
            ];
        }

        function onMove(e: PointerEvent | MouseEvent) {
            const cx = w / 2, cy = h / 2;
            const mx = "clientX" in e ? e.clientX : cx;
            const my = "clientY" in e ? e.clientY : cy;
            parallax.tx = clamp((mx - cx) / cx, -1, 1);
            parallax.ty = clamp((my - cy) / cy, -1, 1);
        }

        function frame(now: number) {
            const dt = Math.min((now - tPrev) / 1000, 0.05);
            tPrev = now;

            parallax.x += (parallax.tx - parallax.x) * 0.06;
            parallax.y += (parallax.ty - parallax.y) * 0.06;

            ctx.clearRect(0, 0, w, h);

            if (bgGrad) {
                ctx.fillStyle = bgGrad;
                ctx.fillRect(0, 0, w, h);
            }

            const warp = prefersReduced ? 1 : (0.85 + Math.sin(now * 0.0006) * 0.12);

            for (let i = 0; i < layers.length; i++) {
                const L = layers[i];
                L.off.x += (L.vel.x * warp + parallax.x * (6 + i * 8)) * dt;
                L.off.y += (L.vel.y * warp + parallax.y * (4 + i * 6)) * dt;

                ctx.save();
                ctx.globalCompositeOperation = "lighter";
                ctx.translate(-(L.off.x % 512), -(L.off.y % 512));
                ctx.fillStyle = L.pat;
                ctx.globalAlpha = 0.9;
                ctx.fillRect(0, 0, w + 512, h + 512);
                ctx.restore();
            }

            raf = requestAnimationFrame(frame);
        }

        resize();
        window.addEventListener("resize", resize, { passive: true });
        window.addEventListener("pointermove", onMove, { passive: true });

        if (prefersReduced) {
            frame(performance.now());
        } else {
            raf = requestAnimationFrame(frame);
        }

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
        };
    }, []);

    return (
        <div className="space-bg" aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}

