export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-organizations-need-one-platform",
    title: "Why Organizations Grow Faster With One Digital Platform",
    excerpt:
      "When your website, mobile app, forms, events, and email list all talk to each other, your team works faster and your audience stays engaged.",
    date: "2026-01-12",
    readTime: "6 min read",
    category: "Strategy",
    body: [
      "Most organizations outgrow disconnected tools. The website says one thing, the mobile app says another, and your event and email workflows are split across different dashboards.",
      "A single platform fixes that. At Bluesky Software, we connect your website, mobile app, forms, and communication modules into one smooth system. Your team updates content once and publishes everywhere.",
      "The result is less admin time, cleaner brand consistency, and better audience conversion. Whether you run a business, a church, or a member club, one platform gives you speed without losing control."
    ]
  },
  {
    slug: "designing-for-trust-in-2026",
    title: "Designing for Trust: What Modern Clients Expect in 2026",
    excerpt:
      "Clean design is no longer enough. People expect clarity, credibility, and fast interactions on every screen.",
    date: "2026-01-29",
    readTime: "5 min read",
    category: "Design",
    body: [
      "Visitors decide in seconds if your organization feels credible. That decision comes from layout clarity, content hierarchy, and how quickly users can find what matters.",
      "Our design approach keeps interfaces light, crisp, and easy to scan. We use clear structure and strategic motion so users feel guided rather than overwhelmed.",
      "Trust is built through consistency. Matching language and design across web, app, forms, events, and email ensures your audience sees one unified experience every time they interact with your brand."
    ]
  },
  {
    slug: "launch-checklist-for-clubs-and-churches",
    title: "Launch Checklist for Clubs, Schools, and Churches",
    excerpt:
      "Before launch day, make sure your organization has the right modules in place for real-world operations.",
    date: "2025-12-04",
    readTime: "4 min read",
    category: "Operations",
    body: [
      "The best launch plans focus on practical workflows. Start with contact forms, registrations, and segmented email subscriptions so you capture clean data from day one.",
      "Next, publish an events calendar and connect social auto-posting. This keeps members informed while reducing manual communication work for your team.",
      "Finally, test mobile navigation and onboarding from the perspective of first-time users. If they can register, subscribe, and find upcoming events quickly, your launch is ready."
    ]
  }
];

export const orderedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
