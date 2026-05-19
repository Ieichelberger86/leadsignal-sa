import { Link } from "wouter";
import { getAllPosts } from "../../lib/blogRegistry";

const categoryColors: Record<string, string> = {
  "B2B Lead Generation": "bg-emerald-900/60 text-emerald-300 border border-emerald-700/40",
  "Sales Strategy": "bg-amber-900/60 text-amber-300 border border-amber-700/40",
  "Email Marketing": "bg-sky-900/60 text-sky-300 border border-sky-700/40",
  LinkedIn: "bg-violet-900/60 text-violet-300 border border-violet-700/40",
};

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#e8e0d0]">
      {/* Header */}
      <section className="pt-20 pb-12 px-6 text-center border-b border-white/10">
        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3 font-mono">
          LeadSignal SA — Resources
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          B2B Lead Generation Insights
        </h1>
        <p className="text-lg text-[#a89880] max-w-2xl mx-auto">
          Practical guides for finding and converting business leads in South Africa — Johannesburg,
          Cape Town, Durban, and beyond.
        </p>
      </section>

      {/* Post grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => {
            const badge = categoryColors[post.category] ?? "bg-white/10 text-white/60";
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-white/[0.055] transition-all cursor-pointer flex flex-col">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badge}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-white/30 font-mono">{post.readingTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#a89880] leading-relaxed flex-1">{post.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-white/30 font-mono">{post.publishedAt}</span>
                    <span className="text-xs text-emerald-400 group-hover:text-emerald-300 font-semibold">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-16 px-6 text-center">
        <p className="text-[#a89880] mb-6 max-w-xl mx-auto">
          Ready to turn these strategies into a working lead system for your South African business?
        </p>
        <Link href="/">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-colors">
            Get a Free Lead Audit
          </button>
        </Link>
      </section>
    </main>
  );
}
