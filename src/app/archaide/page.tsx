export default function ArchaidePage() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-3xl font-bold text-[var(--accent)]">Archaide — Low-Latency Execution &amp; Order Management for Multi-Asset Strategies</h1>

            <div className="mt-6 space-y-8 text-white/85">
                <div>
                    <h2 className="text-xl font-semibold text-white">Results</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Latency: &lt;1s submit→ack</li>
                        <li>Uptime: 99%+ live trading</li>
                        <li>Ops: Faster onboarding with Zapier automation</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Stack</h2>
                    <p className="mt-2">Python, C++, JavaScript/Node, Docker, IBKR API, Alpaca REST, Zapier</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">TL;DR</h2>
                    <p className="mt-2">
                        Built and shipped equities &amp; derivatives trading algorithms with sub-second REST integrations to Interactive Brokers and Alpaca. Designed a production OMS (Python/C++/JavaScript) with robust error handling, reconciliation, and real-time feedback loops; added risk safeguards (position limits, kill-switch, automated rollbacks). Also automated lead-capture and onboarding with Zapier to cut manual ops and boost conversion.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Context</h2>
                    <p className="mt-2">
                        Archaide serves multiple client strategies with different instruments, venues, and latency needs. We needed a uniform path from signal → risk checks → order routing → reconciliation while keeping tails tight during market stress.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Problem</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Strategy code and order placement were tightly coupled, making it hard to add safeguards or swap brokers.</li>
                        <li>Intermittent broker API issues caused order mismatches and retries that occasionally drifted from strategy intent.</li>
                        <li>Onboarding new clients consumed significant manual time and slowed sales.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I Built</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Strategy adapters (Python) exposing a common interface for signal intake, position targets, and post-trade callbacks.</li>
                        <li>OMS pipeline in Python/C++ with:</li>
                        <li className="ml-6 list-disc">Pre-trade risk gates: position/sector caps, notional checks, and kill-switch logic.</li>
                        <li className="ml-6 list-disc">Idempotent order API with client order IDs and replay-safe retries.</li>
                        <li className="ml-6 list-disc">Dual-ledger reconciliation (internal vs. broker) plus periodic position audits.</li>
                        <li className="ml-6 list-disc">Real-time feedback loop to strategies (fills, rejects, price slippage, latency metrics).</li>
                        <li>Broker adapters for Interactive Brokers and Alpaca using sub-second REST calls; standardized error taxonomy and backoff.</li>
                        <li>Go-to-market ops: Zapier flows wiring forms → CRM → email/messaging → doc-sign → account-creation checklist; auto-provisioned dashboards for new clients.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Architecture (high level)</h2>
                    <p className="mt-2">Strategies → Risk Gate → Order Router/OMS → Broker Adapters (IBKR/Alpaca)</p>
                </div>



                <div>
                    <h2 className="text-xl font-semibold text-white">Key Decisions</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Separate risk gate before any network calls → consistent enforcement and simpler testing.</li>
                        <li>Replay-safe IDs so retries never double-fill.</li>
                        <li>Standardized error taxonomy across brokers → simpler alerting and SLOs.</li>
                        <li>Periodic reconciliations (positions, cash, fills) to catch silent drifts.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I’d Do Next</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Add FIX or websocket-native routes (where available) to shave latency variance.</li>
                        <li>Shadow orders / canary per strategy before rollout.</li>
                        <li>Latency budgets per stage with automated budget regression tests.</li>
                        <li>Bracket/OCO templating to simplify complex exits.</li>
                    </ul>
                </div>


            </div>
        </section>
    );
}


