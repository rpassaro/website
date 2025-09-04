export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-6 text-3xl font-bold text-[var(--accent)]">Resume</h2>
      <div className="mb-6 flex gap-4">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[var(--accent)] px-4 py-2 font-medium text-black hover:opacity-90"
        >
          View PDF
        </a>
        <a
          href="/Resume.pdf"
          download
          className="rounded-xl border border-white/20 px-4 py-2 font-medium text-white/80 hover:border-white/40"
        >
          Download
        </a>
      </div>
      <iframe
        src="/Resume.pdf#view=fitH"
        title="Resume PDF"
        className="h-[80vh] w-full rounded-xl border border-white/10"
      />
    </section>
  );
}


