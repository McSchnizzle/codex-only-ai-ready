import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const heroPath = path.join(process.cwd(), "public", "art", "hero.png");
const ogPath = path.join(process.cwd(), "public", "art", "og.png");

const heroBase = fs.existsSync(heroPath)
  ? `data:image/png;base64,${fs.readFileSync(heroPath).toString("base64")}`
  : null;
const ogBase = fs.existsSync(ogPath)
  ? `data:image/png;base64,${fs.readFileSync(ogPath).toString("base64")}`
  : null;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>AI Ready PDX One-Pager</title>
  <style>
    :root {
      --forest: #0b3d2e;
      --slate: #1f3a5f;
      --teal: #2bbb9d;
      --sand: #f4f1ea;
      --ink: #1e2022;
      --muted: #2f3236;
    }
    * { box-sizing: border-box; }
    body {
      font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
      background: var(--sand);
      color: var(--ink);
      line-height: 1.6;
    }
    .page {
      max-width: 820px;
      margin: 0 auto;
      padding: 28px 28px 36px;
      background: #fff;
      box-shadow: 0 16px 50px rgba(0,0,0,0.08);
    }
    header {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 18px;
      align-items: center;
      margin-bottom: 18px;
    }
    h1 { margin: 0; font-size: 28px; line-height: 1.3; }
    h2 { margin: 12px 0 6px; font-size: 18px; }
    p { margin: 6px 0 10px; color: var(--muted); }
    .tag {
      display: inline-block;
      padding: 6px 10px;
      background: rgba(43,187,157,0.12);
      color: var(--forest);
      border-radius: 10px;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
    }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .full { grid-column: 1 / -1; }
    .card {
      border: 1px solid rgba(15,52,42,0.1);
      border-radius: 12px;
      padding: 12px 14px;
      background: rgba(255,255,255,0.98);
    }
    ul { margin: 8px 0 0 18px; color: var(--muted); }
    .hero-img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 28px rgba(0,0,0,0.08);
      background: #f7f7f5;
      padding: 6px;
    }
    .footer {
      margin-top: 16px;
      font-size: 12px;
      color: var(--muted);
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <div>
        <div class="tag">AI Ready PDX</div>
        <h1>Experienced tech leaders for your AI journey.</h1>
        <p>AI Ready PDX is led by experienced technology and business leaders from the Vital Enterprises family (including VTM and Novus Labs). We’ve spent decades helping companies adopt new technologies, and we’ve been working with AI-enabled products for years. Now we’re helping Portland-area businesses and nonprofits use AI to save time, win more work, and protect customer data — without needing a technical team.</p>
      </div>
      <div>
        ${heroBase ? `<img class="hero-img" src="${heroBase}" alt="Hero illustration" />` : ""}
      </div>
    </header>

    <div class="grid">
      <div class="card">
        <h2>Why AI, why now?</h2>
        <ul>
          <li>Your customers expect faster responses and more personalized service.</li>
          <li>Your team is busy; AI can help them handle more work without burning out.</li>
          <li>AI has moved beyond the lab. 2026 is the year it becomes standard equipment for organizations that use it wisely.</li>
        </ul>
      </div>
      <div class="card">
        <h2>What we do</h2>
        <ul>
          <li>Map your current workflows and find high-ROI AI opportunities</li>
          <li>Refresh your website and web presence with AI-assisted content and SEO/AEO insights</li>
          <li>Build practical automations: scheduling, intake forms, report generation, and more</li>
          <li>Create private, secure AI assistants on your data — on-prem or in the cloud</li>
          <li>Train your team to use AI safely and confidently</li>
        </ul>
      </div>

      <div class="card full">
        <h2>Free December 2025 AI Readiness Consultation</h2>
        <p>Book a free 60–90 minute session and you’ll receive:</p>
        <ul>
          <li>A quick pre-call questionnaire to understand how your organization runs</li>
          <li>A live strategy session focused on your specific workflows</li>
          <li>A 1-page AI Opportunities Snapshot (3–5 top ideas with rough ROI)</li>
          <li>Recommendations on whether on-prem, secure cloud, or simple tools fit you best</li>
          <li>A simple action plan for Q1 2026 (“first 30–90 days”)</li>
        </ul>
        <p><em>Available for Portland-area businesses and nonprofits that book before December 31, 2025.</em></p>
      </div>

      <div class="card">
        <h2>Ongoing support (2026 packages)</h2>
        <p><strong>AI Essentials – from $500/month</strong></p>
        <ul>
          <li>Quarterly strategy & “What’s new in AI” briefing</li>
          <li>Website & web presence review</li>
          <li>One quick-win deliverable per quarter (chatbot, content calendar, or email sequence)</li>
          <li>Email support for AI questions</li>
        </ul>
        <p><strong>AI Growth – from $1,000/month</strong></p>
        <ul>
          <li>Everything in Essentials</li>
          <li>Extra implementation session each quarter</li>
          <li>One small automation or micro-tool per quarter</li>
          <li>Quarterly mini training sessions for your team</li>
        </ul>
        <p><strong>Project-based options</strong></p>
        <ul>
          <li>AI Kickstart Sprint – from $3,500</li>
          <li>Automation & Agentic Coding Sprint – from $8,000</li>
          <li>On-Prem AI Appliance – from $10,000 + $1,000/month for 6 months support</li>
        </ul>
      </div>

      <div class="card">
        <h2>Private & secure options</h2>
        <ul>
          <li>On-prem AI appliances for local inference and private document Q&A</li>
          <li>Locked-down Azure / AWS environments with private networking</li>
          <li>Clear policies and staff training so AI usage aligns with your risk profile</li>
        </ul>
        ${ogBase ? `<img class="hero-img" src="${ogBase}" alt="Brand graphic" />` : ""}
      </div>
    </div>

    <div class="footer">
      <div><strong>AI Ready PDX · A Vital Enterprises company</strong></div>
      <div>Serving Portland and the Pacific Northwest · pbrown@vital-enterprises.com</div>
      <div>Web: aireadypdx.com</div>
    </div>
  </div>
</body>
</html>`;

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 2000 } });
  await page.setContent(html, { waitUntil: "networkidle" });
  const outPath = path.join(process.cwd(), "public", "one-pager.pdf");
  await page.pdf({ path: outPath, format: "Letter", printBackground: true });
  await browser.close();
  console.log(`Saved PDF -> ${outPath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
