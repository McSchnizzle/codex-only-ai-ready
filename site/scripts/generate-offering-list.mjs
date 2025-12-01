import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

const palette = {
  forest: "#0b3d2e",
  slate: "#1f3a5f",
  teal: "#2bbb9d",
  sand: "#f4f1ea",
  ink: "#1e2022",
  muted: "#2f3236",
};

const heroPath = path.join(process.cwd(), "public", "art", "hero.png");
const iconPath = path.join(process.cwd(), "public", "art", "icons.png");

function title(doc, text, size = 22, color = palette.forest) {
  doc.fillColor(color).font("Helvetica-Bold").fontSize(size).text(text);
  doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5);
}

function section(doc, heading, body) {
  doc.moveDown(0.4);
  title(doc, heading, 16);
  if (body) {
    doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5).text(body);
  }
}

function list(doc, items) {
  doc.list(items, {
    bulletRadius: 2,
    textIndent: 12,
    bulletIndent: 6,
  });
}

function pageRule(doc) {
  doc.moveDown(0.4);
  doc.strokeColor(palette.slate).lineWidth(1).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.4);
}

function renderHeader(doc) {
  title(doc, "AI Ready PDX");
  doc.fillColor(palette.ink).font("Helvetica").fontSize(12).text("Experienced tech leadership for your AI journey.");
  doc.fillColor(palette.muted).font("Helvetica").fontSize(11).text(
    "Practical AI strategy, implementation, and training for Portland-area and Pacific Northwest organizations."
  );
  doc.fillColor(palette.muted).font("Helvetica").fontSize(10.5).text(
    "A Vital Enterprises company – backed by 30+ years of technology leadership through VTM and 17+ years of engineering reality through Novus Labs."
  );
  doc.moveDown(0.5);
  if (fs.existsSync(heroPath)) {
    doc.image(heroPath, {
      fit: [doc.page.width - doc.page.margins.left - doc.page.margins.right, 170],
      align: "center",
    });
    doc.moveDown(0.4);
  }
}

function renderFooter(doc) {
  pageRule(doc);
  doc.font("Helvetica-Bold").fillColor(palette.ink).text("AI Ready PDX · A Vital Enterprises company");
  doc.font("Helvetica").fillColor(palette.muted).text("Serving Portland and the Pacific Northwest");
  doc.text("Email: hello@aireadypdx.com · Web: aireadypdx.com · Location: Portland, Oregon");
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").fillColor(palette.slate).text("“Let’s make your organization AI-ready — safely, calmly, and on your terms.”");
}

function main() {
  const doc = new PDFDocument({ size: "LETTER", margin: 36 });
  const outPath = path.resolve(process.cwd(), "..", "codex-offering-list.pdf");
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Page 1
  renderHeader(doc);

  section(doc, "Who we are", "AI, without the hype.\n\nAI Ready PDX helps mostly non-technical small and mid-sized organizations get real value from AI — safely, pragmatically, and at a pace your team can handle.\n\nWe draw on decades of work leading global technology consortiums (VTM) and building and testing complex products for top tech brands (Novus Labs). We’ve already been deploying AI-enabled tools and workflows across a growing set of regional organizations — now we’re bringing that experience to businesses and nonprofits across the Pacific Northwest.");

  section(doc, "Who we help", "We’re built for organizations like yours:");
  list(doc, [
    "Local service companies — landscaping, tree service, HVAC, plumbing, home services and trades that need better scheduling, routing, and follow-up.",
    "Coffee, food & retail — roasters, cafés, makers, and retailers who want stronger web presence, repeat business, and smoother operations.",
    "Professional practices — healthcare, legal, accounting, and boutique consulting firms that care about privacy, documentation, and efficient client communication.",
    "Manufacturers & distributors — smaller teams that need better visibility into orders, inventory, and production, without hiring a full data team.",
    "Nonprofits & regional organizations — workforce boards, community orgs, and social-impact groups that must do more with limited staff and sensitive data.",
  ]);

  section(doc, "How we help (service categories)", "A practical menu of AI services");

  const services = [
    {
      title: "1. Strategy & Readiness",
      bullets: [
        "AI readiness assessments and opportunity mapping",
        "6–12 month AI roadmaps tied to your real workflows and KPIs",
        "Fractional “Chief AI Officer” style guidance without the full-time headcount",
      ],
    },
    {
      title: "2. Visibility: Website, SEO, AEO & GEO",
      bullets: [
        "AI-assisted website refresh and modernization",
        "Answer Engine Optimization (AEO) / Generative Engine Optimization (GEO) so you show up in tools like ChatGPT, Claude, and Gemini — not just Google",
        "AI-powered content calendars and copy for web, social, and email",
      ],
    },
    {
      title: "3. Operations, Automation & Agentic Tools",
      bullets: [
        "Process mapping workshops to find high-ROI automation opportunities",
        "Lightweight internal tools built with agentic coding platforms (Claude Code, Lovable, Replit, etc.) — with experienced engineers reviewing every step",
        "Automations for scheduling, routing, intake, invoicing, reporting, and more",
      ],
    },
    {
      title: "4. Sales, Outreach & Customer Experience",
      bullets: [
        "Ethically-run cold outreach systems (secondary domains, warmup, AI-drafted sequences)",
        "AI-assisted email, proposal, and script writing",
        "Simple AI chatbots and voice agents to answer FAQs, qualify leads, and route inquiries",
      ],
    },
    {
      title: "5. Data & Private AI",
      bullets: [
        "Data clean-up and consolidation (e.g., “Snowflake Lite” for SMBs)",
        "Private “ask your documents” assistants on your internal policies, manuals, and records",
        "Secure on-prem or locked-down cloud AI environments for sensitive data",
      ],
    },
    {
      title: "6. Training & Enablement",
      bullets: [
        "Executive AI strategy briefings",
        "Whole-company “AI 101” workshops",
        "Developer / “citizen developer” bootcamps on modern agentic coding tools",
      ],
    },
  ];

  services.forEach((svc) => {
    doc.moveDown(0.2);
    doc.font("Helvetica-Bold").fillColor(palette.ink).fontSize(12.5).text(svc.title);
    doc.font("Helvetica").fillColor(palette.muted).fontSize(11.5);
    list(doc, svc.bullets);
  });

  doc.moveDown(0.5);
  title(doc, "Callout Box – Sovereign AI & Infrastructure", 14, palette.slate);
  doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5).text(
    "For organizations with strict privacy, IP, or compliance needs, we design and deploy:"
  );
  list(doc, [
    "On-prem, air-gapped AI appliances based on NVIDIA DGX Spark–class hardware — a desktop-sized supercomputer with enough unified memory to run serious open models locally.",
    "Secure cloud inference environments in Azure or AWS with private networking and clear guardrails.",
    "Clear, plain-language policies and staff training so your team knows what’s safe to do with AI tools.",
    "Your data stays where you need it — in your building or your private cloud — while you still get modern AI capabilities.",
  ]);

  // Footer page 1
  renderFooter(doc);

  // Page 2
  doc.addPage();
  renderHeader(doc);

  section(doc, "Ongoing packages (recurring options)", "Flexible engagement options\n\nWe offer a mix of retainers and sprints so you can start small and scale as you see results. Pricing below reflects typical “founding-client” ranges for regional organizations.");

  const packages = [
    {
      title: "Package 1: AI Foundations",
      price: "From $500/month or $1,500/quarter",
      body: "For small teams who want steady guidance and a couple of concrete wins each quarter.",
      bullets: [
        "Quarterly strategy & “What’s new in AI” working session (60–90 minutes)",
        "Review of your website, web presence, and AI exposure points with an actionable checklist",
        "One “quick win” per quarter (chatbot, 3-month content calendar, or cold-outreach sequence)",
        "Reasonable email support for AI questions between sessions",
      ],
    },
    {
      title: "Package 2: AI Growth",
      price: "From $1,000/month or $3,000/quarter",
      body: "For organizations ready to move from exploration to meaningful automation and custom tools.",
      bullets: [
        "Everything in AI Foundations",
        "A second working session per quarter focused on implementation",
        "One small automation or micro-tool per quarter (scheduling/route optimization, proposal workflows, internal assistants)",
        "A quarterly mini training for your team (live or remote, recorded)",
      ],
    },
    {
      title: "Package 3: Sovereign AI Partnership",
      price: "Typically from $2,500/month + project fees",
      body: "For teams that want AI as a core capability — with a partner for infrastructure, governance, and evolution.",
      bullets: [
        "Fractional “Chief AI Officer”–style leadership (governance, risk, and roadmapping)",
        "Design and deployment of on-prem or private-cloud AI environments",
        "Support for dedicated inference machines (e.g., NVIDIA DGX Spark–class) with patching and tuning",
        "Coordination with your IT / security teams; quarterly executive briefings",
        "Priority access to intensive training days and build sprints",
      ],
    },
  ];

  packages.forEach((pkg) => {
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fillColor(palette.ink).fontSize(13).text(pkg.title);
    doc.font("Helvetica-Bold").fillColor(palette.forest).fontSize(12).text(pkg.price);
    doc.font("Helvetica").fillColor(palette.muted).fontSize(11.5).text(pkg.body);
    list(doc, pkg.bullets);
  });

  section(doc, "Project sprints & one-time engagements", "Examples of one-time projects\n\nThese can stand alone or be layered into a package.");
  list(doc, [
    "AI Kickstart Sprint — from ~$3,500: 4–6 weeks to go from curiosity to a roadmap and launched pilot.",
    "Automation & Agentic Build Sprint — from ~$8,000: design and implementation of a specific internal tool or workflow automation.",
    "Website + AEO/GEO Refresh — from ~$2,500–$5,000: AI-driven content/structure updates plus a Generative Visibility Report.",
    "On-Prem AI Appliance Setup — typically ~$10,000 + $1,000/month for initial support: hardware selection, installation, configuration, models, and 6 months of support.",
  ]);

  doc.moveDown(0.3);
  title(doc, "Training Days & Bootcamps", 13, palette.slate);
  list(doc, [
    "Executive AI strategy days",
    "Whole-company “AI 101”",
    "Developer / “citizen developer” bootcamps focused on Claude Code, Lovable, Replit and related tools",
  ]);

  doc.moveDown(0.3);
  title(doc, "Grant-friendly, budget-savvy projects", 13, palette.slate);
  doc.fillColor(palette.muted).font("Helvetica").fontSize(11.5).text(
    "We actively track local and regional “digital transformation” and innovation grants and can help you frame projects that fit typical funding criteria — especially for nonprofits, neighborhood businesses, and under-resourced organizations."
  );

  section(doc, "What your first conversation includes", "Start with an AI Readiness & Possibility Session\n\nYour first step is a structured but friendly conversation:");
  list(doc, [
    "A short pre-call questionnaire so we understand your business model and workflows",
    "A 60–90 minute session with an experienced AI consultant",
    "A simple 1-page summary of your top 3–5 AI opportunities, including rough ROI",
    "A recommendation on whether simple SaaS, secure cloud, or on-prem AI is the right starting point for you",
    "Clear next-step options: retainer, sprint, or DIY with our notes",
    "You keep the roadmap either way.",
  ]);

  if (fs.existsSync(iconPath)) {
    doc.moveDown(0.4);
    doc.image(iconPath, {
      fit: [doc.page.width - doc.page.margins.left - doc.page.margins.right, 110],
      align: "center",
    });
  }

  renderFooter(doc);

  doc.end();
  stream.on("finish", () => {
    console.log(`Saved PDF -> ${outPath}`);
  });
}

main();
