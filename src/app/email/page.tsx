export default function EmailPage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h1 className="text-3xl font-bold text-[var(--accent)]">Let’s connect</h1>
            <p className="mt-4 text-lg text-white/80">
                Feel Free to Email Me at
                {" "}
                <a
                    href="mailto:passaroryan@gmail.com"
                    className="text-[var(--accent)] hover:underline"
                >
                    passaroryan@gmail.com
                </a>
                ,
            </p>
        </section>
    );
}


