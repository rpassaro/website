export default function QuiverPage() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-3xl font-bold text-[var(--accent)]">Quiver Quantitative — OCR &amp; Document Ingestion at Scale</h1>

            <div className="mt-6 space-y-8 text-white/85">
                <div>
                    <h2 className="text-xl font-semibold text-white">TL;DR</h2>
                    <p className="mt-2">
                        Re-architected an OCR pipeline for SEC-compliant government trade filings. Achieved higher accuracy and lower latency via preprocessing, layout-aware parsing, and scalable workers on [GCP/AWS], delivering [~4×] throughput and [–30%] median latency.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Context</h2>
                    <p className="mt-2">
                        The previous pipeline struggled with skewed scans, small fonts, and nested tables, causing extraction errors and slow end-to-end times.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Problem</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>OCR confidence varied wildly by document type.</li>
                        <li>Throughput collapsed when large PDFs queued behind small ones (head-of-line blocking).</li>
                        <li>Excessive post-processing for parsing tables.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I Built</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Preprocessing: de-skew, denoise, adaptive thresholding; dynamic DPI upscaling for small glyphs.</li>
                        <li>Layout detection: page segmentation to route pages to table vs text parsers.</li>
                        <li>Hybrid OCR: combine a fast general OCR engine with a table-aware extractor; fall back for low-confidence spans.</li>
                        <li>Parallelism: split PDFs into pages → distribute across workers; work stealing to avoid long-PDF starvation.</li>
                        <li>Confidence-driven post-processing: only re-run expensive passes when below [threshold].</li>
                        <li>Observability: per-page accuracy, latency histograms, tail-latency alarms.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Results</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Accuracy: Increased accuracy by over 92% .</li>
                        <li>Latency: Increased speed of processing by over 3x.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Key Decisions</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Google Cloud Processing - Faster transactional speeds with far greater accuracy versus Tesseract.</li>
                        <li>Schema-first extraction (typed fields, validators) → fewer downstream corrections.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">What I’d Do Next</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                        <li>Add learned layout models for tables; expand language packs.</li>
                        <li>Active feedback loop: human corrections feed weak-supervision rules.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">Stack</h2>
                    <p className="mt-2">Python, GCP OCR Reader, SQL Database</p>
                </div>
            </div>
        </section>
    );
}


