import { useParams } from "wouter";
import { Link } from "wouter";
import { getPost } from "../../lib/blogRegistry";
import { postComponents } from "./posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  const Content = slug ? postComponents[slug] : undefined;

  if (!post || !Content) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-[#e8e0d0] flex flex-col items-center justify-center px-6">
        <p className="text-2xl text-white mb-4">Post not found.</p>
        <Link href="/blog">
          <span className="text-emerald-400 hover:underline cursor-pointer">← Back to blog</span>
        </Link>
      </main>
    );
  }

  const faqSchema =
    post.faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "LeadSignal SA" },
    publisher: { "@type": "Organization", name: "LeadSignal SA" },
    keywords: post.keywords.join(", "),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#e8e0d0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <Link href="/blog">
          <span className="text-emerald-400 text-sm hover:underline cursor-pointer font-mono">
            ← All articles
          </span>
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-xs text-white/30 font-mono">{post.readingTime}</span>
          <span className="text-xs text-white/30 font-mono">{post.publishedAt}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
          {post.title}
        </h1>
        <p className="text-lg text-[#a89880] leading-relaxed">{post.description}</p>
      </header>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12 prose prose-invert prose-emerald prose-lg max-w-none">
        <Content />
      </article>

      {/* CTA */}
      <section className="border-t border-white/10 py-16 px-6 text-center">
        <p className="text-[#a89880] mb-6 max-w-xl mx-auto">
          Want these strategies implemented for your South African business?
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
