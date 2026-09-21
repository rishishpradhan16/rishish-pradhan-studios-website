export interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string[];
}

export const articlesData: Article[] = [
  {
    id: "ai-10x-output",
    title: "How I Use AI & Systems Thinking to 10x Output as a Solo Engineer",
    subtitle: "Moving beyond 10% efficiency tweaks to true exponential leverage.",
    date: "Sep 2026",
    readTime: "5 min read",
    category: "Engineering & AI",
    tags: ["AI Leverage", "Solo Building", "Productivity", "Automation"],
    excerpt: "How shifting from incremental optimizations to 10x AI leverage allowed me to implement enterprise security frameworks, launch 5 Play Store apps, and run 20K+ audience platforms solo.",
    content: [
      "When most engineers evaluate AI tools, they look for 10% speedups — autocompleting syntax or drafting boilerplate comments. But as a solo builder operating with a 'Figure-it-out & Ship' mindset, a 10% improvement isn't enough. The goal is exponential leverage: doing the work of an entire cross-functional team in record time.",
      "### Principle 1: Leverage AI for Architectural Speed, Not Just Syntax",
      "Instead of asking AI to write individual functions, I use LLMs as architectural sounding boards. I feed high-level system requirements — such as container orchestration or automated security scanning pipelines — and use AI to challenge edge cases before writing code.",
      "```python\n# Operating Rule:\n# If I find myself doing a complex workflow twice -> I automate it using AI tooling.\n```",
      "### Principle 2: Enterprise Security Testing via Solo AI Frameworks",
      "During an enterprise mandate, I needed to implement critical security testing frameworks across the organization. Rather than manually writing hundreds of custom assertions, I built an automated AI-driven scanner that evaluated vulnerabilities and generated regression test suites automatically. The result? Organization-wide security compliance delivered by a single generalist engineer.",
      "### Principle 3: Rapid 0 → 1 Execution",
      "The combination of curiosity, consistency, and execution is unstoppable. By pairing clear system design principles with AI agent workflows, you eliminate friction between idea and production release."
    ]
  },
  {
    "id": "kahaaniverse-0-to-1",
    "title": "0 to 1 Product Development: Building & Monetizing Kahaaniverse",
    "subtitle": "From initial napkin wireframes to a live Play Store application.",
    "date": "Aug 2026",
    "readTime": "6 min read",
    "category": "Product & Android",
    "tags": ["Android", "Kotlin", "Product Design", "AdMob"],
    "excerpt": "A deep dive into architecting, developing, and monetizing Kahaaniverse — a multi-language storytelling platform for writers in Hindi, Hinglish, and English.",
    "content": [
      "Building Kahaaniverse was born out of a desire to give storytellers a clean, dedicated platform to share original content across Hindi, Hinglish, and English. But building a full-stack product solo comes with a strict requirement: extreme discipline across UI design, backend infrastructure, and monetization.",
      "### 1. Architecting for Native Android Performance",
      "We selected Kotlin and Jetpack Compose for Kahaaniverse to guarantee 60fps rendering, smooth custom typography, and responsive scroll dynamics even on lower-tier devices.",
      "```kotlin\n// Native Android Kotlin Stack\n// Designed for instant story loading and multi-language support\nclass StoryRepository(private val api: StoryService) {\n    suspend font fetchStories(language: String): Result<List<Story>> {\n        return api.getFeed(language)\n    }\n}\n```",
      "### 2. Monetization & Analytics Integration",
      "A product is only complete when it operates sustainably. Integrating Google AdMob along with Google Analytics enabled data-informed decisions without compromising user readability or app load speed.",
      "### Key Takeaways for Solo Builders",
      "- Start messy, ship fast, iterate relentlessly.\n- Prioritize smooth user experience over endless unreleased features.\n- Measure user retention through analytics early on."
    ]
  },
  {
    "id": "operating-philosophy",
    "title": "Learn Fast, Break Things, Automate Everything: My Engineering Philosophy",
    "subtitle": "The 5 core principles that guide my code, content, and career.",
    "date": "Jul 2026",
    "readTime": "4 min read",
    "category": "Mindset & Architecture",
    "tags": ["Philosophy", "Systems Thinking", "Automation", "Career"],
    "excerpt": "Why action beats perfection, how to build a 'figure-it-out' mindset, and how consistency and curiosity compound into impact.",
    "content": [
      "Over years of building products, scaling content channels to 20,000+ followers, and pioneering containerization in enterprise teams, I've distilled my approach into 5 non-negotiable operating principles.",
      "### The Formula: Consistency × Curiosity × Execution = Impact",
      "```javascript\nconst principles = {\n  learning: \"If I don't know it -> I'll figure it out\",\n  building: \"Start messy -> Ship fast -> Iterate relentlessly\",\n  automation: \"If I do it twice -> I automate it\",\n  ai: \"Leverage AI for 10x output, not 10% improvement\",\n  shipping: \"Done is better than perfect (then make it perfect)\"\n};\n```",
      "### 1. Curiosity & System Exploration",
      "When faced with unfamiliar tech — whether deploying Kubernetes clusters for the first time or creating custom shader effects — the rule is simple: dive in, break things, understand the system, then rebuild it cleaner.",
      "### 2. Building in Public & Content Systems",
      "Sharing knowledge through YouTube (8K+ & 4.5K+ channels) and Instagram (8K+) isn't just about audience growth; it's about holding yourself accountable to high engineering standards."
    ]
  }
];
