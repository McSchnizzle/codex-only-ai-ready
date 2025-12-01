import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#private-ai", label: "Private AI" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const whyUs = [
  {
    title: "Decades of tech leadership",
    body:
      "Part of the Vital Enterprises family: VTM with 30+ years leading global tech consortiums, Novus Labs with 17 years shipping complex consumer products.",
  },
  {
    title: "We know tech and business",
    body:
      "We understand how work is scheduled, how revenue flows, and where it gets stuck. We translate AI into process improvements, not buzzwords.",
  },
  {
    title: "We’ve already been doing this",
    body:
      "We’ve been working with AI-enabled products and are already helping organizations in the region, including nonprofits, design and implement AI strategies.",
  },
  {
    title: "Plain language, practical outcomes",
    body:
      "We explain in everyday terms, focus on measurable wins, and help your team get comfortable with AI instead of overwhelmed by it.",
  },
];

const audiences = [
  {
    title: "Home & field services",
    body:
      "Tree services, landscaping, HVAC, plumbing, and similar teams looking to improve scheduling, quoting, and follow-up.",
  },
  {
    title: "Coffee & food businesses",
    body:
      "Roasters, cafés, and food producers that want better customer communication and web presence.",
  },
  {
    title: "Professional practices",
    body:
      "Dental, legal, accounting, and clinic teams looking to streamline intake, reminders, and client communication.",
  },
  {
    title: "Manufacturers & distributors",
    body: "Smaller operations wanting better visibility into orders, inventory, and customer needs.",
  },
  {
    title: "Nonprofits & regional organizations",
    body:
      "Community-focused organizations needing to do more with limited staff while protecting sensitive data.",
  },
];

const capabilities = [
  {
    title: "Strategy & roadmaps",
    body:
      "Start with how your business works today, identify high-ROI use cases, and build a simple 6–12 month plan.",
  },
  {
    title: "Automation & agents",
    body:
      "Small internal tools and automations—from smarter scheduling and intake forms to AI-assisted report generation—reviewed by experienced engineers.",
  },
  {
    title: "Marketing & outreach",
    body:
      "Website refreshes, improved search presence, content calendars, and ethical, targeted cold outreach.",
  },
  {
    title: "Training & enablement",
    body:
      "Executive briefings, all-staff AI 101, and developer bootcamps so the team that uses AI daily feels confident and safe.",
  },
  {
    title: "Data & private AI",
    body:
      "Bring data together in Snowflake or Databricks, then build private AI assistants on-prem or in secure cloud setups.",
  },
];

const packages = [
  {
    title: "AI Essentials",
    price: "From $500/month (or $1,500/quarter)",
    who: "For small teams who want steady guidance and a few concrete AI wins each quarter.",
    items: [
      "Quarterly strategy & “What’s new in AI” session (60–90 minutes)",
      "Website & web presence review with a prioritized checklist",
      "One “quick win” deliverable per quarter (chatbot, content calendar, or email sequence)",
      "Reasonable email support for AI questions in between",
    ],
  },
  {
    title: "AI Growth",
    price: "From $1,000/month (or $3,000/quarter)",
    who: "For organizations moving from experiments to meaningful automation and internal tools.",
    items: [
      "Everything in AI Essentials",
      "A second working session each quarter focused on implementation",
      "One small automation or internal micro-tool per quarter",
      "A quarterly mini training session for your team (live or remote, recorded)",
    ],
  },
  {
    title: "Project-based engagements",
    price: "From $3,500–$10,000+",
    who: "For focused sprints or privacy-driven deployments.",
    items: [
      "AI Kickstart Sprint – from $3,500 (roadmap + first pilot in 4–6 weeks)",
      "Automation & Agentic Coding Sprint – from $8,000 (custom internal tool or workflow)",
      "On-Prem AI Appliance – from $10,000 + $1,000/month (local inference box with support)",
    ],
  },
];

const freeSessionItems = [
  "A short pre-call questionnaire so we understand how your organization runs",
  "A 60–90 minute conversation with an experienced AI consultant",
  "A 1-page AI Opportunities Snapshot with 3–5 ideas and rough ROI",
  "A recommendation on on-prem, secure cloud, or simple SaaS tools",
  "Suggestions for quick wins you can tackle in the first 30–90 days of 2026",
];

const privateAi = [
  "On-prem AI appliances installed on your network for local inference and private document Q&A.",
  "Locked-down Azure and AWS environments with private networking and clear policies.",
  "Training and guardrails so staff know what’s safe to do with AI tools.",
];

const aboutBullets = [
  "Practical projects that ship in weeks, not years.",
  "Clear explanation of what AI can and cannot do for you.",
  "A pace of adoption that respects your people, culture, and risk profile.",
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden />
          <div className="brand-text">
            <div className="brand-name">AI Ready PDX</div>
            <div className="brand-subline">A Vital Enterprises company</div>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="nav-cta">
          Book your free session
        </Link>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Serving Portland & the Pacific Northwest</div>
              <h1>Experienced tech leaders for your AI journey.</h1>
              <p className="lead">
                AI is moving into mainstream adoption. We help Portland-area businesses and nonprofits use it
                safely and practically — without needing a technical team.
              </p>
              <p className="supporting">
                Backed by 30 years of building and leading technology companies, we’ve already been rolling out AI
                solutions across more than a dozen organizations in the region.
              </p>
              <div className="cta-row">
                <Link href="#contact" className="btn primary">
                  Book your free December 2025 AI Readiness Session
                </Link>
                <Link href="#services" className="btn secondary">
                  Explore services
                </Link>
              </div>
              <div className="hero-footnote">Serving Portland and the Pacific Northwest</div>
            </div>
            <div className="stack">
              <div className="panel hero-art">
                <Image
                  src="/art/hero.png"
                  alt="Illustration of Portland small businesses with AI hints"
                  width={960}
                  height={600}
                  priority
                />
              </div>
              <div className="panel emphasis">
                <h3>Free AI Readiness Session – December 2025</h3>
                <p>For Portland-area businesses and nonprofits that book before December 31, 2025.</p>
                <ul className="list-check">
                  {freeSessionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="cta-row" style={{ marginTop: 16 }}>
                  <Link href="#contact" className="btn secondary">
                    Claim your session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="section">
          <div className="section-header">
            <div className="tag">Why work with AI Ready PDX?</div>
            <h2>Plain language, experienced leadership, measurable outcomes.</h2>
            <p className="muted">
              We bring decades of technology and business leadership, with AI implementations already live across
              the region.
            </p>
          </div>
          <div className="grid">
            {whyUs.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="who" className="section">
          <div className="section-header">
            <div className="tag">Who we help</div>
            <h2>Mostly non-technical organizations that want AI without becoming a tech company.</h2>
            <p className="muted">Local teams that need practical wins, not experiments.</p>
          </div>
          <div className="grid">
            {audiences.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-header">
            <div className="tag">What we do</div>
            <h2>Practical AI, tailored to how your business actually runs.</h2>
            <p className="muted">
              Understand where AI fits, then design and implement solutions your team can actually use.
            </p>
          </div>
          <div className="grid">
            {capabilities.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="free-session" className="section">
          <div className="section-header">
            <div className="tag">Free December 2025 offer</div>
            <h2>Free AI Readiness Session – December 2025</h2>
            <p className="muted">
              Limited availability for Portland-area businesses and nonprofits that book before December 31, 2025.
            </p>
          </div>
          <div className="panel">
            <h3>In your free session, you’ll get:</h3>
            <ul className="list-check">
              {freeSessionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 14 }} className="muted">
              There’s no obligation to work with us beyond the session — you keep the roadmap and ideas either way.
            </p>
            <div className="cta-row" style={{ marginTop: 16 }}>
              <Link href="#contact" className="btn primary">
                Book now
              </Link>
            </div>
          </div>
        </section>

        <section id="packages" className="section">
          <div className="section-header">
            <div className="tag">Packages & pricing</div>
            <h2>Founding-client pricing for early 2026.</h2>
            <p className="muted">Straightforward options focused on practical outcomes.</p>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <div key={item.title} className="package">
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <div className="who">{item.who}</div>
                <ul>
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 14 }} className="muted">
            Founding-client pricing is available for organizations that start in early 2026.
          </p>
        </section>

        <section id="private-ai" className="section">
          <div className="section-header">
            <div className="tag">Prefer your AI off the public internet?</div>
            <h2>Private & secure AI options</h2>
            <p className="muted">
              Some organizations can’t put sensitive data into public AI tools. We’ve worked in those environments
              for years.
            </p>
          </div>
          <div className="private-callout">
            <div className="private-card">
              <h3>On-prem AI</h3>
              <p className="muted">Local inference and private document Q&A on your own network.</p>
            </div>
            <div className="private-card">
              <h3>Secure cloud</h3>
              <p className="muted">Locked-down Azure and AWS environments with private networking.</p>
            </div>
            <div className="private-card">
              <h3>Training & guardrails</h3>
              <p className="muted">Policies and playbooks so staff know what’s safe to do with AI tools.</p>
            </div>
          </div>
          <ul className="list-check" style={{ marginTop: 18 }}>
            {privateAi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <div className="tag">About AI Ready PDX</div>
            <h2>Part of the Vital Enterprises family in the Pacific Northwest.</h2>
            <p className="muted">
              VTM has spent more than 30 years leading global technology consortiums and standards efforts. Novus
              Labs has spent 17 years working on complex consumer electronics products for leading brands. AI
              Support PDX brings that experience to Portland-area businesses and nonprofits.
            </p>
          </div>
          <div className="about-grid">
            <div className="card">
              <h3>Who we are</h3>
              <p className="muted">
                We’ve been working with AI and AI-enabled products for several years and are already helping
                organizations in the region — including local nonprofits and portfolio companies — design and
                implement AI strategies.
              </p>
            </div>
            <div className="card">
              <h3>How we work</h3>
              <ul>
                {aboutBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <div className="tag">Let’s talk</div>
            <h2>Let’s talk about AI in your business</h2>
            <p className="muted">
              Whether you’re curious, cautious, or already experimenting, we’ll follow up with next steps within two
              business days.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-meta">
              <div className="pill">Free December 2025 AI Readiness Session</div>
              <div className="panel">
                <h3>What to expect</h3>
                <p className="muted">
                  Tell us a bit about your organization and where you think AI could help. We’ll review and respond
                  with next steps and a short agenda for your free session.
                </p>
                <ul className="list-check">
                  <li>We respond within two business days.</li>
                  <li>Portland-area focus with remote options.</li>
                  <li>No obligation beyond the free session.</li>
                </ul>
              </div>
              <div className="panel">
                <h3>Prefer email?</h3>
                <p className="muted">Reach us at pbrown@vital-enterprises.com</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <div className="footer">AI Ready PDX · A Vital Enterprises company · Serving Portland and the Pacific Northwest</div>
    </div>
  );
}
