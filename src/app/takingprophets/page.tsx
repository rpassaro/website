import Image from "next/image";
import uiImage from "./takingprophets_ui.png";

export default function TakingProphetsPage() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-3xl font-bold text-[var(--accent)]">Taking Prophets — Multi-Broker Order Routing with Sub-Second Latency</h1>

            <div className="mt-6 space-y-8 text-white/85">
                <div>
                    <h2 className="text-xl font-semibold text-white">TL;DR</h2>
                    <p className="mt-2">
                        I built a production API that routes orders across multiple broker integrations with sub-second p50 latency and resilient failover. It handles concurrent position updates, account metadata, and order lifecycle events with low latency and sustained high throughput.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Context</h2>
                    <p className="mt-2">
                        I co-run Taking Prophets, a project focused on making systematic trading execution simple for indie quants and small funds. Users connect their brokerage, define strategies, and place/monitor orders programmatically.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Problem</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Slow, sequential order processing during market open spikes.</li>
                        <li>Fragile error handling when a single broker API throttled or hiccupped.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I Built</h2>
                    <div className="mt-2 md:mt-3 md:grid md:grid-cols-2 md:gap-6">
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Flask REST API exposing endpoints for auth, account sync, order create/cancel, and position introspection.</li>
                            <li>Parallelized orchestration using Python multiprocessing + async I/O to fan out broker requests.</li>
                            <li>Circuit-breaker + retry policies per broker to survive rate limits and transient 5xxs.</li>
                            <li>Idempotency keys to make order creation safe on retries.</li>
                            <li>Structured logging with correlation IDs → trace a single order across services.</li>
                        </ul>
                        <div className="mt-4 md:mt-0">
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)]/40 max-w-md md:ml-auto">
                                <Image
                                    src={uiImage}
                                    alt="Taking Prophets application UI"
                                    priority
                                    sizes="(min-width: 1024px) 480px, 90vw"
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Architecture (high level)</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>API (Flask) → Task queue → Worker pool</li>
                        <li>Broker adapters (uniform interface) implementing auth, order placement, and status polling</li>
                        <li>PostgreSQL for durable state + Redis for fast coordination</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Results</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Latency: &lt;1s p50, ~2s p95; Uptime: 99%+</li>
                        <li>Users: 16 connected accounts</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Key Decisions</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Adapters over conditionals: broker quirks isolated behind a clean interface.</li>
                        <li>Idempotency by default: prevents double-fills on retries.</li>
                        <li>SLOs: design by p95, not averages.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I’d Do Next</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Move polling to webhooks/websockets where supported; cut latency + cost, if supported.</li>
                        <li>Canary deploys for adapter changes; shadow traffic to detect drift.</li>
                        <li>Batch margin checks to reduce pre-trade round-trips.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Stack</h2>
                    <p className="mt-2">Python, Flask, PostgreSQL, React, HTML5</p>
                </div>
            </div>
        </section>
    );
}


