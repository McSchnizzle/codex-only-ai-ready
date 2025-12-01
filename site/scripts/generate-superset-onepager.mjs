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

function sectionTitle(doc, text) {
  doc.moveDown(0.6);
  doc.fillColor(palette.forest).font("Helvetica-Bold").fontSize(16).text(text);
  doc.moveDown(0.15);
  doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5);
}

function bulletList(doc, items) {
  doc.list(items, {
    bulletRadius: 2,
    textIndent: 12,
    bulletIndent: 6,
  });
}

function writeCTABox(doc, title, subtitle, bullets) {
  const boxStartY = doc.y;
  const boxX = doc.page.margins.left;
  const boxWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const padding = 10;

  doc.save();
  doc.fillColor("#ffffff");
  doc.roundedRect(boxX, boxStartY, boxWidth, 10, 10).fill("#ffffff"); // initial paint to avoid overlap
  doc.restore();

  doc.save();
  doc.roundedRect(boxX, boxStartY, boxWidth, 10, 10).fillOpacity(1);
  doc.restore();

  doc.moveDown(0.25);
  doc.fillColor(palette.forest).font("Helvetica-Bold").fontSize(15).text(title);
  doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5).text(subtitle);
  doc.moveDown(0.2);
  bulletList(doc, bullets);
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").text("No obligation; you keep the roadmap either way.");

  const boxEndY = doc.y + padding;
  const height = boxEndY - boxStartY;

  doc.save();
  doc.roundedRect(boxX, boxStartY, boxWidth, height, 12)
    .fillAndStroke(palette.sand, palette.teal);
  doc.restore();

  // Re-print content inside the box after drawing background
  doc.y = boxStartY + padding;
  doc.x = boxX + padding;
  doc.fillColor(palette.forest).font("Helvetica-Bold").fontSize(15).text(title, {
    width: boxWidth - padding * 2,
  });
  doc.fillColor(palette.ink).font("Helvetica").fontSize(11.5).text(subtitle, {
    width: boxWidth - padding * 2,
  });
  doc.moveDown(0.2);
  doc.list(bullets, {
    bulletRadius: 2,
    textIndent: 12,
    bulletIndent: 6,
    width: boxWidth - padding * 2,
  });
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").text("No obligation; you keep the roadmap either way.", {
    width: boxWidth - padding * 2,
  });

  doc.y = boxEndY + 6;
  doc.x = doc.page.margins.left;
}

function main() {
  const doc = new PDFDocument({ size: "LETTER", margin: 36 });
  const outPath = path.resolve(process.cwd(), "..", "codex-superset-onepager.pdf");
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Masthead
  doc.fillColor(palette.forest).font("Helvetica-Bold").fontSize(18).text("AI Ready PDX");
  doc.font("Helvetica").fontSize(11).fillColor(palette.muted).text("A Vital Enterprises company");
  doc.moveDown(0.3);
  doc.font("Helvetica-Bold").fillColor(palette.ink).text(
    "Portland-based AI consulting & implementation for small/midsize organizations."
  );
  doc.font("Helvetica").fillColor(palette.muted).text(
    "Backed by 30+ years of tech leadership (VTM) and 17+ years of engineering experience (Novus Labs) within the Vital Enterprises family."
  );
  doc.moveDown(0.4);

  // Hero
  doc.fillColor(palette.forest).font("Helvetica-Bold").fontSize(22).text(
    "Make AI a safe, practical part of your business."
  );
  doc.font("Helvetica").fontSize(12).fillColor(palette.ink).text(
    "AI has gone mainstream. AI Ready PDX is your local, experienced guide — a fractional Chief AI Officer for Portland / PNW organizations."
  );
  doc.font("Helvetica-Bold").fillColor(palette.slate).text(
    "30+ years tech leadership · Portland-based · Privacy-first (on prem & secure cloud)"
  );
  doc.moveDown(0.3);
  doc.font("Helvetica-Bold").fillColor(palette.teal).text("Book an AI Readiness Consultation — no obligation.");
  doc.moveDown(0.5);

  if (fs.existsSync(heroPath)) {
    doc.image(heroPath, {
      fit: [doc.page.width - doc.page.margins.left - doc.page.margins.right, 200],
      align: "center",
    });
    doc.moveDown(0.5);
  }

  sectionTitle(doc, "Why AI, why now — for organizations like yours?");
  bulletList(doc, [
    "AI is reliable infrastructure for everyday operations, not a lab experiment.",
    "Local businesses risk an “intelligence gap” as larger players move faster.",
    "Customers now find services via answer engines/AI tools; if AI can’t “see” you, you’re invisible.",
    "Leaders worry about privacy, compliance, and staff capacity — not more tools.",
  ]);

  sectionTitle(doc, "Who we are");
  bulletList(doc, [
    "Part of Vital Enterprises with VTM (30+ yrs) and Novus Labs (17 yrs) in serious tech and engineering.",
    "Portland-based team already rolling out AI strategies and tools across regional organizations.",
    "Privacy-first mindset with on-prem and secure cloud options for sensitive data.",
    "Jargon-light guidance; your fractional CAIO bridging strategy, implementation, and governance.",
  ]);

  sectionTitle(doc, "What we do");
  doc.font("Helvetica-Bold").fillColor(palette.ink).text("Assess & Plan", { continued: false });
  doc.font("Helvetica").fillColor(palette.muted);
  bulletList(doc, [
    "AI readiness assessments and opportunity mapping.",
    "Simple 6–12 month roadmaps aligned to your people and risk profile.",
  ]);
  doc.font("Helvetica-Bold").fillColor(palette.ink).text("Implement & Automate");
  doc.font("Helvetica").fillColor(palette.muted);
  bulletList(doc, [
    "AI-ready websites and AEO/GEO visibility so AI tools “see” your business.",
    "Practical automations: scheduling, intake, quoting, reporting, internal tools with agentic platforms.",
  ]);
  doc.font("Helvetica-Bold").fillColor(palette.ink).text("Private & Secure AI");
  doc.font("Helvetica").fillColor(palette.muted);
  bulletList(doc, [
    "On-prem AI appliances (e.g., NVIDIA DGX Spark class) for sovereign, air-gapped use.",
    "Locked-down Azure/AWS “on your data” setups with clear policies and controls.",
  ]);
  doc.font("Helvetica-Bold").fillColor(palette.ink).text("Train & Support");
  doc.font("Helvetica").fillColor(palette.muted);
  bulletList(doc, [
    "Executive AI strategy days, whole-company AI 101 workshops.",
    "Developer bootcamps on agentic tools; ongoing advisory/retainers.",
  ]);

  sectionTitle(doc, "Who we help");
  bulletList(doc, [
    "Home & field services (better scheduling, intake, follow-up).",
    "Coffee & food businesses (customer comms, web presence).",
    "Professional practices (dental, legal, accounting, clinics).",
    "Small manufacturers & distributors (visibility into orders, inventory, needs).",
    "Nonprofits & regional orgs (workforce, digital inclusion, sensitive data).",
  ]);

  sectionTitle(doc, "AI Readiness Consultation (low risk, high clarity)");
  writeCTABox(
    doc,
    "AI Readiness Consultation",
    "For Portland / PNW organizations with 5–100 employees.",
    [
      "Short pre-call questionnaire.",
      "60–90 minute strategy session (remote or in person).",
      "1-page AI Opportunities Snapshot with 3–5 ideas and rough ROI.",
      "Recommendation: on-prem vs. secure cloud vs. simple SaaS tools.",
      "Q1 action ideas — “first 30–90 days” plan.",
    ]
  );

  sectionTitle(doc, "Engagement models");
  bulletList(doc, [
    "Ongoing guidance: light retainer with quarterly strategy, “what’s new,” and one quick win per quarter.",
    "Project sprints: AI Kickstart Sprint; Automation & Agentic Coding Sprint — defined outcomes in weeks.",
    "Sovereign AI package: on-prem appliance + support for privacy-critical teams; locked-down cloud if a better fit.",
  ]);

  doc.moveDown(0.6);
  if (fs.existsSync(iconPath)) {
    doc.image(iconPath, {
      fit: [doc.page.width - doc.page.margins.left - doc.page.margins.right, 110],
      align: "center",
    });
    doc.moveDown(0.4);
  }

  doc.font("Helvetica-Bold").fillColor(palette.ink).text("AI Ready PDX · A Vital Enterprises company");
  doc.font("Helvetica").fillColor(palette.muted).text("Portland, Oregon · Serving the Pacific Northwest");
  doc.text("pbrown@vital-enterprises.com · aireadypdx.com");

  doc.end();
  stream.on("finish", () => {
    console.log(`Saved PDF -> ${outPath}`);
  });
}

main();
