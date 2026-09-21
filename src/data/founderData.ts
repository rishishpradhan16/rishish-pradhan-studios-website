export interface FounderProfile {
  name: string;
  handle: string;
  role: string;
  mindset: string;
  bias: string;
  superpower: string;
  currentFocus: Record<string, string>;
  philosophyQuote: string;
  equation: string;
  operatingPrinciples: Record<string, { label: string; text: string }>;
  activeMissions: string[];
  nextUnlocks: string[];
  contentPlatforms: {
    title: string;
    totalAudience: string;
    status: string;
    channels: { platform: string; metric: string; desc: string }[];
  };
  achievements: {
    id: string;
    title: string;
    badge: string;
    achievement: string;
    impact: string;
    tech: string[];
    iconName: string;
  }[];
}

export const fontData: FounderProfile = {
  name: "Rishish Pradhan",
  handle: "rishishpradhan16",
  role: "Generalist Engineer & Solo Builder",
  mindset: "Figure-it-out & Ship",
  bias: "Action over perfection",
  superpower: "0 → 1 in record time",
  currentFocus: {
    "🧠 Automation": "Automation frameworks & testing logic",
    "⚡ Product": "Building products end-to-end solo",
    "🤖 AI Workflows": "AI-powered workflows & tools",
    "🔧 Systems": "Systems thinking & architecture",
  },
  philosophyQuote: "Learn fast → Break things → Understand systems → Rebuild cleaner → Ship faster → Automate everything",
  equation: "Consistency × Curiosity × Execution = Impact",
  operatingPrinciples: {
    learning: { label: "Continuous Learning", text: "If I don't know it → I'll figure it out" },
    building: { label: "Rapid Building", text: "Start messy → Ship fast → Iterate relentlessly" },
    automation: { label: "Automation First", text: "If I do it twice → I automate it" },
    ai: { label: "AI Leverage", text: "Leverage AI for 10x output, not 10% improvement" },
    shipping: { label: "Bias for Action", text: "Done is better than perfect (then make it perfect)" },
  },
  activeMissions: [
    "🔧 Building automation frameworks that scale",
    "🚀 Shipping AI-powered productivity tools",
    "📚 Learning: Advanced system design patterns",
    "🎯 Experimenting: Growth & content systems",
  ],
  nextUnlocks: [
    "Personal productivity systems powered by AI tools",
    "Digital product systems for online platforms",
    "Build multiple real-world apps and ship them to Play Store",
    "Use AI to spot upcoming trends & convert insights into products",
  ],
  contentPlatforms: {
    title: "Fact-Based Content Systems",
    totalAudience: "20K+ Engaged Followers & Subscribers",
    status: "✅ Live & Growing",
    channels: [
      { platform: "YouTube Channel 1", metric: "8,000+ Subs", desc: "Fact-based content system & curated insights" },
      { platform: "YouTube Channel 2", metric: "4,500+ Subs", desc: "Fact-based content & trend breakdowns" },
      { platform: "Instagram Page", metric: "8,000+ Followers", desc: "Fact-based visual posts & high-engagement content" },
    ],
  },
  achievements: [
    {
      id: "security",
      title: "Security Pioneer",
      badge: "Enterprise AI Security",
      achievement: "Implemented critical security testing framework using AI",
      impact: "Solo execution with organization-wide deployment",
      tech: ["AI Automation", "Security Testing", "Python/CI"],
      iconName: "ShieldCheck",
    },
    {
      id: "devops",
      title: "DevOps Trailblazer",
      badge: "Infrastructure",
      achievement: "First in team to deploy Docker + Kubernetes containerization",
      impact: "Production-ready automated deployment pipeline",
      tech: ["Docker", "Kubernetes", "DevOps"],
      iconName: "Cpu",
    },
    {
      id: "fullstack",
      title: "Full-Stack Solo Builder",
      badge: "End-to-End Product",
      achievement: "Architected, built & launched Kahaaniverse from scratch",
      impact: "Full pipeline: Product Design → Dev → Testing → Play Store",
      tech: ["Android Kotlin", "AdMob", "Google Analytics"],
      iconName: "Layers",
    },
    {
      id: "content",
      title: "20K+ Audience Builder",
      badge: "Content Systems",
      achievement: "Built & scaled multiple fact-based content channels to 20,000+ total audience",
      impact: "Fact-based content creation & audience scaling",
      tech: ["Fact-Based Content", "YouTube 8K+", "Insta 8K+"],
      iconName: "Users",
    },
  ],
};
