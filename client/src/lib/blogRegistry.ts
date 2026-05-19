export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  category: string;
  readingTime: string;
  faq?: Array<{ q: string; a: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "b2b-lead-generation-south-africa-2026",
    title: "B2B Lead Generation in South Africa 2026: The Complete Playbook",
    description:
      "A comprehensive guide to B2B lead generation in South Africa for 2026 — covering outbound tactics, digital channels, POPIA compliance, and market-specific strategies for Johannesburg, Cape Town, and Durban.",
    keywords: [
      "b2b lead generation south africa",
      "b2b lead generation south africa 2026",
      "lead generation sa",
      "south africa business leads",
    ],
    publishedAt: "2026-05-18",
    category: "B2B Lead Generation",
    readingTime: "11 min read",
    faq: [
      {
        q: "What is the best B2B lead generation channel in South Africa in 2026?",
        a: "LinkedIn is the highest-ROI outbound channel for B2B in South Africa, particularly for reaching decision-makers in Johannesburg's Sandton CBD and Cape Town's Century City. Email outreach remains cost-effective for volume, while WhatsApp Business is increasingly used for follow-up in the SA market.",
      },
      {
        q: "Is cold email legal in South Africa?",
        a: "Yes, with conditions. Under POPIA (Protection of Personal Information Act), you must have a legitimate interest basis or consent to process personal information. B2B cold email to company addresses is generally permissible under legitimate interest, but you must include an opt-out mechanism and honour unsubscribe requests promptly.",
      },
      {
        q: "How long does B2B lead generation take to show results in South Africa?",
        a: "Outbound campaigns targeting Gauteng or Western Cape businesses typically see initial responses within 2–4 weeks. Building a reliable pipeline with consistent monthly leads usually takes 60–90 days of consistent outbound activity.",
      },
      {
        q: "What industries have the most B2B opportunities in South Africa?",
        a: "Financial services, mining and resources, property and construction, healthcare, logistics, and professional services (legal, accounting) are the largest B2B spend categories in South Africa. JSE-listed companies and their suppliers are high-value targets across all sectors.",
      },
      {
        q: "Do I need a local presence to sell B2B in South Africa?",
        a: "Not necessarily. Many businesses successfully sell into South Africa remotely, particularly for SaaS and consulting. However, having a local WhatsApp number, ZAR pricing, and references from South African clients significantly improves conversion rates.",
      },
    ],
  },
  {
    slug: "how-to-find-business-leads-johannesburg",
    title: "How to Find Business Leads in Johannesburg: A Practical Guide",
    description:
      "Step-by-step strategies for finding qualified business leads in Johannesburg — covering Sandton, Rosebank, and the CBD, using LinkedIn, data providers, events, and outbound outreach.",
    keywords: [
      "find business leads johannesburg",
      "johannesburg b2b leads",
      "lead generation johannesburg",
      "sandton business leads",
    ],
    publishedAt: "2026-05-18",
    category: "B2B Lead Generation",
    readingTime: "9 min read",
    faq: [
      {
        q: "Where are most B2B decision-makers located in Johannesburg?",
        a: "Sandton CBD — particularly around Sandton City, Katherine Street, and Alice Lane — is South Africa's financial capital and home to the highest concentration of corporate decision-makers. Rosebank and Parktown are secondary hubs for media, tech, and professional services firms.",
      },
      {
        q: "What is the best time to reach Johannesburg business contacts?",
        a: "Tuesday to Thursday between 09:00 and 11:00 SAST yields the highest response rates for cold outreach. Avoid Friday afternoons and Monday mornings. December (mid-month through January) is a near-complete shutdown period for most Johannesburg corporates.",
      },
      {
        q: "Are there good business directories for Johannesburg leads?",
        a: "The CIPC (Companies and Intellectual Property Commission) database, the Johannesburg Chamber of Commerce and Industry (JCCI) member directory, and sector-specific associations like SAPOA (property) and BASA (banking) are strong starting points for verified Johannesburg business contacts.",
      },
      {
        q: "How do I approach BBBEE-certified businesses in Johannesburg?",
        a: "Reference your own BBBEE level or your commitment to transformation in your outreach. Many large Johannesburg corporates have supplier diversity targets and actively seek BBBEE-compliant vendors. If you are not yet certified, mention your plans and focus on value delivered.",
      },
      {
        q: "Can I use Google Maps to find business leads in Johannesburg?",
        a: "Google Maps is useful for finding physical business locations, particularly for trade, retail, and professional services. For corporate B2B, LinkedIn and CIPC company search are more reliable. Combine both: verify a Google Maps listing, then find the decision-maker on LinkedIn.",
      },
    ],
  },
  {
    slug: "b2b-sales-south-africa-guide",
    title: "B2B Sales South Africa Guide: From First Contact to Closed Deal",
    description:
      "A practical guide to the full B2B sales cycle in South Africa — covering prospecting, qualification, proposal, and closing, with market-specific advice for Gauteng, Western Cape, and KZN.",
    keywords: [
      "b2b sales south africa",
      "south africa b2b sales guide",
      "selling to businesses south africa",
      "b2b sales cycle south africa",
    ],
    publishedAt: "2026-05-18",
    category: "Sales Strategy",
    readingTime: "12 min read",
    faq: [
      {
        q: "How long is the average B2B sales cycle in South Africa?",
        a: "For SMEs, deals typically close in 2–6 weeks. Mid-market companies (50–500 employees) average 6–12 weeks. Enterprise and government contracts in South Africa often take 6–18 months due to procurement processes, committee approvals, and BBBEE scoring requirements.",
      },
      {
        q: "Do South African businesses prefer formal proposals or presentations?",
        a: "Both are expected for mid-market and enterprise deals. A written proposal with clear ZAR pricing, implementation timeline, and references from local clients is standard. In-person or video presentations are often required before a decision is made at board level.",
      },
      {
        q: "How important is relationship-building in South African B2B sales?",
        a: "Extremely important. South African business culture, particularly in Gauteng and KZN, places high value on personal relationships and trust built over time. Initial meetings are often about building rapport rather than closing. Following up consistently without being pushy is critical.",
      },
      {
        q: "What payment terms are standard for B2B sales in South Africa?",
        a: "30-day payment terms (net 30) are most common for established relationships. New suppliers often start on 50% upfront, 50% on delivery. Large corporates and government entities may impose 60–90 day terms. Always clarify payment terms before contract signature.",
      },
      {
        q: "How do I handle price objections when selling to South African businesses?",
        a: "Anchor value in rand ROI — how many rand does your solution save or generate per month? Offering ZAR-denominated pricing removes currency uncertainty for local buyers. Flexible payment options (monthly retainer vs. annual) also reduce friction, particularly for SMEs watching cash flow.",
      },
    ],
  },
  {
    slug: "email-marketing-south-africa-businesses",
    title: "Email Marketing for South Africa Businesses: Strategy, Compliance, and Results",
    description:
      "How to run effective B2B email marketing campaigns targeting South African businesses — covering POPIA compliance, list building, subject line best practices, and deliverability for ZA inboxes.",
    keywords: [
      "email marketing south africa",
      "email marketing south africa businesses",
      "popia email marketing",
      "b2b email south africa",
    ],
    publishedAt: "2026-05-18",
    category: "Email Marketing",
    readingTime: "10 min read",
    faq: [
      {
        q: "Does POPIA affect B2B email marketing in South Africa?",
        a: "Yes. POPIA requires that you process personal information (including business email addresses) lawfully. For B2B email, legitimate interest is the most commonly used legal basis — you must document your legitimate interest assessment and always include an opt-out in every email. The Information Regulator can issue fines of up to R10 million for non-compliance.",
      },
      {
        q: "What email open rates should I expect for South African B2B campaigns?",
        a: "Well-targeted South African B2B campaigns typically see open rates of 22–35% for permission-based lists and 15–25% for cold outreach to verified business addresses. Reply rates for personalised cold email sequences average 3–8%. These are comparable to global benchmarks.",
      },
      {
        q: "What email service providers work best for South Africa?",
        a: "Mailchimp, ActiveCampaign, and Brevo (formerly Sendinblue) are widely used by South African businesses. For cold outbound, Instantly and Smartlead with custom domain warm-up are preferred. Ensure your sending infrastructure includes SPF, DKIM, and DMARC records to maintain deliverability.",
      },
      {
        q: "How do I build a B2B email list of South African businesses?",
        a: "The most reliable methods include: scraping CIPC company data, using LinkedIn Sales Navigator with ZA filters, purchasing verified ZA business lists from reputable providers, attending industry events (Markex, eCommerce Summit Africa), and running lead magnets on your website targeting ZA visitors.",
      },
      {
        q: "What subject lines work best for South African B2B emails?",
        a: "Direct, benefit-led subject lines outperform clever or cryptic ones in the SA market. Examples: 'How [Company Name] can reduce quote-to-client time by 40%' or 'Quick question about your lead follow-up process'. Avoid all-caps, excessive punctuation, and Americanisms that feel foreign to SA readers.",
      },
    ],
  },
  {
    slug: "linkedin-prospecting-south-africa",
    title: "LinkedIn Prospecting in South Africa: Find and Convert SA Decision-Makers",
    description:
      "A step-by-step LinkedIn prospecting system for South Africa — how to filter, connect, and convert decision-makers in Johannesburg, Cape Town, and Durban into qualified B2B leads.",
    keywords: [
      "linkedin prospecting south africa",
      "linkedin south africa b2b",
      "south africa linkedin leads",
      "linkedin sales navigator south africa",
    ],
    publishedAt: "2026-05-18",
    category: "LinkedIn",
    readingTime: "8 min read",
    faq: [
      {
        q: "How many LinkedIn users are there in South Africa?",
        a: "South Africa has approximately 12–14 million LinkedIn users as of 2026, making it the largest LinkedIn market on the African continent. The highest concentrations are in Gauteng (Johannesburg and Pretoria) and Western Cape (Cape Town), with a growing user base in KwaZulu-Natal (Durban).",
      },
      {
        q: "What is the best LinkedIn filter combination for South African B2B prospecting?",
        a: "Use Sales Navigator with: Location = South Africa (or specific city), Seniority = Director / VP / C-Level / Owner, Industry = your target sector, Company headcount = your ideal company size. Add 'Keywords' for specific titles like 'Head of Procurement' or 'Managing Director'.",
      },
      {
        q: "How many LinkedIn connection requests can I send per week in South Africa?",
        a: "LinkedIn's current limit is approximately 100–200 invitations per week for standard accounts. Sales Navigator users can send InMail credits (typically 50/month) without a connection required. Stay under 20–30 personalised connection requests per day to avoid triggering LinkedIn's spam detection.",
      },
      {
        q: "What should I say in a LinkedIn connection request to a South African executive?",
        a: "Keep it under 300 characters. Reference something specific: their company's recent news, a mutual connection, or a shared group. Example: 'Hi [Name] — I work with SMEs in Sandton on lead automation. Noticed [Company] is expanding — keen to connect and share a few ideas.' Never lead with a pitch.",
      },
      {
        q: "Is LinkedIn Sales Navigator worth it for the South African market?",
        a: "For B2B businesses targeting mid-market and enterprise companies in South Africa, Sales Navigator at ~R2,200/month pays for itself quickly. The advanced search filters, account alerts, and InMail credits make systematic prospecting across Johannesburg, Cape Town, and Durban significantly more efficient than free LinkedIn.",
      },
    ],
  },
];

export const getAllPosts = (): BlogPost[] =>
  blogPosts.slice().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
