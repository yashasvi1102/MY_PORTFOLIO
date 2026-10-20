import React, { useState, useEffect, useRef } from 'react';

// Portfolio Data
const portfolioData = {
  personal: {
    name: "Yashasvi Nagar",
    tagline: "AI Engineer | LLM Agents, RAG & Knowledge Graphs",
    heroDescription:
      "I build LLM systems that have to be right: agents with auditable decisions, retrieval grounded in source records, and knowledge graphs that stay fast as they grow. MS Information Systems @ Northeastern, Dec 2026.",
    email: "nagaryashasvi11@gmail.com",
    linkedin: "https://www.linkedin.com/in/yashasvi-nagar-b627542b2",
    github: "https://github.com/yashasvi1102",
    // Put your resume PDF in the /public folder with exactly this name
    resume: "/Yashasvi_Nagar_Resume.pdf",
    bio: [
      "I'm finishing my Master's in Information Systems at <strong>Northeastern University</strong> (December 2026), focused on building <strong>LLM-powered systems</strong> that people can actually trust: agents whose decisions can be audited, and retrieval that answers from real sources instead of guessing.",

      "Most recently I was an <strong>AI Full-Stack Engineer Co-op at Cernuvo</strong> (Jan–Jun 2026), where I shipped GraphRAG features end to end on Neo4j, designed the graph data model, and worked directly with the technical co-founder on architecture and product decisions.",

      "Lately I've been going deep on <strong>healthcare AI</strong>: an agentic prior-authorization assistant built on Medicare coverage policy, and a clinical analytics platform whose AI refuses to answer unless it can cite the patient records behind it.",

      "I'm looking for full-time <strong>AI Engineering</strong> roles starting <strong>January 2027</strong>, especially on teams building LLM products where accuracy matters."
    ]
  },

  whatIDo: [
    {
      title: "Agentic AI Workflows",
      description: "I design multi-step LLM agents with LangGraph and MCP, routing work through retrieval, rule checks, and actions, with deterministic logic wherever a decision needs to be auditable.",
      // TODO: add PriorAuthPilot repo URL when public (card becomes a link automatically)
      github: "",
      icon: "agent"
    },
    {
      title: "AI & GraphRAG Systems",
      description: "I build retrieval systems on Neo4j knowledge graphs so LLMs answer from connected context, following relationships across entities instead of searching isolated documents.",
      github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant",
      icon: "ai"
    },
    {
      title: "Healthcare AI",
      description: "I work with FHIR patient records and Medicare coverage policy, building AI that cites its sources, respects role-based access, and rejects answers it can't ground.",
      github: "https://github.com/yashasvi1102/mediquery",
      icon: "health"
    },
    {
      title: "Natural Language Processing",
      description: "I train and compare context-aware language models with PyTorch and BERT, including emotion recognition across multi-speaker conversations.",
      github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations",
      icon: "nlp"
    },
    {
      title: "Data Engineering & ETL",
      description: "I build bronze/silver/gold data pipelines with Databricks, Snowflake, dbt, and Azure Data Factory to turn raw data into something AI systems can rely on.",
      github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-",
      icon: "pipeline"
    },
    {
      title: "Graph & Data Modeling",
      description: "I design graph and dimensional data models, including entity schemas, indexing, and traversal patterns, tuned for fast queries as data grows.",
      github: "https://github.com/yashasvi1102/IMDb-Team-Project",
      icon: "database"
    }
  ],

  projects: [
    {
      id: 1,
      title: "PriorAuthPilot – Agentic Prior Authorization Assistant",
      status: "In progress",
      description: "An AI assistant that checks patient records against Medicare coverage policy before a prior authorization is submitted. Policy retrieval is filtered by payer, procedure, and jurisdiction so the wrong policy never reaches the model, coverage criteria are checked by testable rules instead of LLM judgment, and a LangGraph agent routes each case by denial risk. Three MCP servers wrap claims data, policy search, and submission tracking, and an appeal module turns denial codes into evidence-backed responses.",
      tags: ["LangGraph", "MCP", "RAG", "Healthcare"],
      // TODO: add repo URL when public (the GitHub link is hidden while empty)
      github: ""
    },
    {
      id: 2,
      title: "MediQuery – Clinical Analytics Platform with Safety-First AI",
      status: "",
      // TODO: only keep "92%+ precision" if you can explain exactly how it was measured
      description: "A healthcare analytics platform processing 10K+ synthetic FHIR patient records through a Snowflake Medallion pipeline with dbt. Its Neo4j GraphRAG agent has mandatory citation guards, so it rejects any answer it can't trace to source records, plus 4-tier role-based access and a natural-language cohort builder reaching 92%+ precision on adverse event detection.",
      tags: ["FHIR", "Neo4j", "GraphRAG", "Snowflake", "dbt"],
      github: "https://github.com/yashasvi1102/mediquery"
    },
    {
      id: 3,
      title: "CrimeGraphRAG – AI Crime Investigation Assistant",
      status: "",
      description: "An investigation assistant that answers natural-language questions over a knowledge graph linking crimes, suspects, organizations, locations, and evidence. The agent follows multi-hop connections in Neo4j to ground its answers, and a Streamlit dashboard lets investigators explore criminal networks visually.",
      tags: ["Neo4j", "GraphRAG", "Streamlit", "Python"],
      github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant"
    },
    {
      id: 4,
      title: "Emotion Recognition in Multi-Turn Conversations",
      status: "",
      description: "Context-aware emotion detection on the MELD dataset (13.7K utterances, 7 emotions). DialogueRNN reached 70.4% accuracy and 71.2% weighted F1, 11.3 points above a BERT baseline, by modeling each speaker's state across the conversation.",
      tags: ["PyTorch", "BERT", "NLP", "Streamlit"],
      github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations"
    },
    {
      id: 5,
      title: "End-to-End LA Crime Analytics – Medallion Architecture",
      status: "",
      description: "A data lakehouse on Databricks with Bronze, Silver, and Gold layers for LA crime data, with scalable Spark ETL pipelines powering crime trend analytics.",
      tags: ["Databricks", "Medallion", "Spark", "Azure"],
      github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-"
    }
  ]
};

// Reveal animation — defined OUTSIDE the main component so sections don't
// remount (and re-animate) every time the carousel advances.
const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const RevealSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Knowledge graph background
// A fixed graph of entities (nodes) and relationships (edges). Every few
// seconds a "query" starts at a labeled hub node and lights up a multi-hop
// traversal, the way GraphRAG walks a graph to gather context.
// Moving the mouse draws links to nearby nodes, like querying that region.
// ---------------------------------------------------------------------------
const KG_LABELS = [
  'Patient', 'Policy', 'Claim', 'Procedure', 'Diagnosis', 'Provider',
  'Suspect', 'Location', 'Evidence', 'Document', 'Payer', 'Encounter'
];

const KnowledgeGraphBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const CYAN = '0, 212, 255';
    const BLUE = '70, 130, 255';
    const HOP_MS = 420;          // time for a pulse to cross one edge
    const QUERY_EVERY_MS = 2800; // how often a new traversal starts
    const MOUSE_RADIUS = 150;

    let w = 0, h = 0, raf = 0, resizeTimer = 0;
    let nodes = [], edges = [], adj = [], queries = [];
    let lastQuery = -QUERY_EVERY_MS;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.min(85, Math.round((w * h) / 16000)));
      const hubCount = Math.round(count * 0.15);

      nodes = Array.from({ length: count }, (_, i) => {
        const hub = i < hubCount;
        return {
          ax: Math.random() * w,
          ay: Math.random() * h,
          x: 0,
          y: 0,
          r: hub ? 3.6 : 1.6 + Math.random() * 1.2,
          hub,
          label: hub ? KG_LABELS[i % KG_LABELS.length] : null,
          color: hub || Math.random() > 0.35 ? CYAN : BLUE,
          phase: Math.random() * Math.PI * 2,
          speed: 0.00018 + Math.random() * 0.00025,
          amp: 6 + Math.random() * 14,
          glow: 0
        };
      });
      nodes.forEach(n => { n.x = n.ax; n.y = n.ay; });

      // Connect each node to its nearest neighbours (hubs get more links)
      const seen = new Set();
      edges = [];
      adj = nodes.map(() => []);
      const maxDist = Math.max(w, h) * 0.22;

      nodes.forEach((n, i) => {
        const k = n.hub ? 4 : 2;
        nodes
          .map((m, j) => ({ j, d: Math.hypot(m.ax - n.ax, m.ay - n.ay) }))
          .filter(o => o.j !== i && o.d < maxDist)
          .sort((a, b) => a.d - b.d)
          .slice(0, k)
          .forEach(({ j }) => {
            const id = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (seen.has(id)) return;
            seen.add(id);
            const e = { a: i, b: j, glow: 0 };
            edges.push(e);
            adj[i].push({ to: j, e });
            adj[j].push({ to: i, e });
          });
      });

      queries = [];
    };

    // Breadth-first traversal from a hub, up to 3 hops
    const startQuery = (t) => {
      const hubs = nodes.map((n, i) => (n.hub ? i : -1)).filter(i => i >= 0 && adj[i].length);
      if (!hubs.length) return;
      const start = hubs[Math.floor(Math.random() * hubs.length)];
      const visited = new Set([start]);
      const steps = [];
      let frontier = [start];

      for (let depth = 0; depth < 3 && steps.length < 14; depth++) {
        const next = [];
        frontier.forEach(from => {
          adj[from].forEach(({ to, e }) => {
            if (visited.has(to) || steps.length >= 14) return;
            visited.add(to);
            next.push(to);
            steps.push({ from, to, e, start: t + depth * HOP_MS, done: false });
          });
        });
        frontier = next;
      }

      nodes[start].glow = 1;
      queries.push({ steps, end: t + 3 * HOP_MS + 100 });
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      // Gentle drift around each node's anchor so edges stay stable
      if (!reduceMotion) {
        nodes.forEach(n => {
          n.x = n.ax + Math.sin(t * n.speed + n.phase) * n.amp;
          n.y = n.ay + Math.cos(t * n.speed * 0.8 + n.phase) * n.amp * 0.7;
        });
      }

      // Base edges
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${CYAN}, 0.08)`;
      ctx.beginPath();
      edges.forEach(e => {
        const a = nodes[e.a], b = nodes[e.b];
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      });
      ctx.stroke();

      // Edges lit by a traversal
      edges.forEach(e => {
        if (e.glow < 0.02) return;
        const a = nodes[e.a], b = nodes[e.b];
        ctx.strokeStyle = `rgba(${CYAN}, ${0.1 + e.glow * 0.5})`;
        ctx.lineWidth = 1 + e.glow * 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        e.glow *= 0.985;
      });

      // Pulses travelling along the traversal edges
      queries.forEach(q => {
        q.steps.forEach(s => {
          if (s.done || t < s.start) return;
          const p = Math.min(1, (t - s.start) / HOP_MS);
          const a = nodes[s.from], b = nodes[s.to];
          const x = a.x + (b.x - a.x) * p;
          const y = a.y + (b.y - a.y) * p;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
          grad.addColorStop(0, `rgba(${CYAN}, 0.9)`);
          grad.addColorStop(1, `rgba(${CYAN}, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.fill();
          if (p >= 1) {
            s.done = true;
            s.e.glow = 1;
            nodes[s.to].glow = 1;
          }
        });
      });
      queries = queries.filter(q => t < q.end || q.steps.some(s => !s.done));

      // Links from the cursor to nearby nodes
      if (mouse.x > -999) {
        nodes.forEach(n => {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(${CYAN}, ${(1 - d / MOUSE_RADIUS) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        });
      }

      // Nodes
      ctx.font = "10px 'Space Mono', monospace";
      nodes.forEach(n => {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const near = d < MOUSE_RADIUS ? 1 - d / MOUSE_RADIUS : 0;
        const intensity = Math.min(1, n.glow + near * 0.6);

        if (intensity > 0.05) {
          const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
          halo.addColorStop(0, `rgba(${n.color}, ${intensity * 0.35})`);
          halo.addColorStop(1, `rgba(${n.color}, 0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${n.color}, ${(n.hub ? 0.65 : 0.4) + intensity * 0.35})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        if (n.hub) {
          ctx.strokeStyle = `rgba(${CYAN}, ${0.25 + intensity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = `rgba(150, 210, 235, ${0.28 + intensity * 0.5})`;
          ctx.fillText(`:${n.label}`, n.x + 9, n.y + 3);
        }

        n.glow *= 0.97;
      });

      if (!reduceMotion && t - lastQuery > QUERY_EVERY_MS) {
        startQuery(t);
        lastQuery = t;
      }
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        if (reduceMotion) draw(0);
      }, 200);
    };
    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    build();
    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      document.addEventListener('mouseleave', onMouseLeave);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="kg-canvas" aria-hidden="true" />;
};

const GitHubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const icons = {
  agent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="6" height="6" rx="1"/>
      <rect x="15" y="3" width="6" height="6" rx="1"/>
      <rect x="9" y="15" width="6" height="6" rx="1"/>
      <path d="M6 9v3h12V9M12 12v3"/>
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  nlp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 9h8M8 13h6"/>
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 12h16M4 18h16"/>
      <circle cx="8" cy="6" r="1.5"/><circle cx="16" cy="12" r="1.5"/><circle cx="10" cy="18" r="1.5"/>
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  )
};

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const projectCount = portfolioData.projects.length;

  // Auto-advance slideshow (pauses while the visitor is hovering/reading)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectCount);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused, projectCount]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projectCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projectCount) % projectCount);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'projects', 'whatido', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'What I Do', 'Contact'];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        :root {
          --primary: #00d4ff;
          --primary-glow: rgba(0, 212, 255, 0.4);
          --bg-dark: #0a0a0f;
          --bg-card: #12121a;
          --bg-card-hover: #1a1a25;
          --text-primary: #ffffff;
          --text-secondary: #c8c8d8;
          --text-muted: #9090a5;
          --border: #2a2a3a;
          --gradient-1: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .portfolio {
          font-family: 'Rajdhani', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          min-height: 100vh;
          overflow-x: hidden;
        }

        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        /* Background Animation */
        .bg-animation {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(0, 102, 255, 0.08) 0%, transparent 50%);
        }

        /* Knowledge graph canvas */
        .kg-canvas {
          position: absolute;
          inset: 0;
          display: block;
        }

        /* Soft vignette keeps text readable over the graph */
        .bg-animation::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10, 10, 15, 0.55) 100%);
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1rem 2rem;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 0.5rem 2rem;
          background: rgba(10, 10, 15, 0.95);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .logo span { color: white; }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a:hover, .nav-links a.active { color: var(--primary); }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s;
        }

        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: 0;
          padding: 0.4rem;
        }

        .mobile-menu span {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--primary);
        }

        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        .resume-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          box-shadow: 0 5px 20px var(--primary-glow);
        }

        .resume-btn svg {
          width: 16px;
          height: 16px;
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-greeting {
          font-family: 'Space Mono', monospace;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .hero-greeting::before {
          content: '';
          width: 30px;
          height: 2px;
          background: var(--primary);
        }

        .hero-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 1.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-description {
          color: var(--text-muted);
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 540px;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          margin-top: 0.5rem;
        }

        .hero-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          height: 52px;
          padding: 0 1.6rem;
          background: var(--gradient-1);
          color: var(--bg-dark);
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .hero-resume-btn svg { width: 18px; height: 18px; }

        .hero-resume-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px var(--primary-glow);
        }

        .hero-github-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: transparent;
          color: var(--primary);
          border: 1.5px solid var(--primary);
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .hero-github-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px var(--primary-glow);
        }

        /* Hero Image - Circular Frame */
        .hero-image-container {
          position: relative;
          width: 280px;
          height: 280px;
          margin: 0 auto;
          border-radius: 50%;
          padding: 6px;
          background: var(--gradient-1);
          box-shadow: 0 0 60px var(--primary-glow), 0 0 100px rgba(0, 212, 255, 0.15);
          animation: pulseGlow 3s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 60px var(--primary-glow), 0 0 100px rgba(0, 212, 255, 0.15); }
          50% { box-shadow: 0 0 80px var(--primary-glow), 0 0 140px rgba(0, 212, 255, 0.25); }
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg-dark);
          position: relative;
          z-index: 1;
        }

        .hero-image-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        /* Sections */
        section {
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .section-label::before, .section-label::after {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--primary);
        }

        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .section-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          margin: 1rem auto 0;
        }

        /* About */
        .about-text p {
          color: var(--text-secondary);
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-text strong { color: var(--text-primary); }

        /* Projects Slideshow */
        .slideshow-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .slideshow-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        .slide {
          display: none;
          width: 100%;
        }

        .slide.active {
          display: block;
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-content {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2.5rem;
          clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px));
        }

        .slide-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .slide-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          background: rgba(0, 212, 255, 0.1);
          color: var(--primary);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .slide-status {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          background: var(--primary);
          color: var(--bg-dark);
          font-weight: 700;
        }

        .slide-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .slide-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .slide-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s;
        }

        .slide-link:hover { gap: 1rem; }

        .slide-arrow {
          width: 50px;
          height: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .slide-arrow:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 212, 255, 0.1);
        }

        .slide-arrow svg {
          width: 24px;
          height: 24px;
        }

        .slide-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .slide-dot {
          width: 12px;
          height: 12px;
          border: 2px solid var(--border);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s;
        }

        .slide-dot:hover { border-color: var(--primary); }

        .slide-dot.active {
          background: var(--primary);
          border-color: var(--primary);
        }

        /* What I Do */
        .whatido-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .whatido-card {
          height: 100%;
          background: var(--bg-card);
          padding: 2.5rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all 0.3s;
          text-decoration: none;
          display: block;
        }

        a.whatido-card:hover {
          border-color: var(--primary);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15);
        }

        .whatido-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 1.5rem;
          color: var(--primary);
          transition: all 0.3s;
        }

        .whatido-icon svg {
          width: 100%;
          height: 100%;
        }

        a.whatido-card:hover .whatido-icon { transform: scale(1.1); }

        .whatido-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          transition: color 0.3s;
        }

        a.whatido-card:hover .whatido-title { color: var(--primary); }

        .whatido-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }

        /* Contact */
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 280px));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          justify-content: center;
        }

        .contact-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 1.5rem;
          text-decoration: none;
          text-align: center;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          transition: all 0.3s;
        }

        .contact-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
          color: var(--primary);
          transition: all 0.3s;
        }

        .contact-icon svg {
          width: 100%;
          height: 100%;
        }

        .contact-card:hover .contact-icon { transform: scale(1.1); }

        .contact-label {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .contact-value {
          color: var(--text-primary);
          font-size: 0.95rem;
          word-break: break-word;
        }

        /* Footer */
        footer {
          padding: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-text { color: var(--text-muted); }
        .footer-text span { color: var(--primary); }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover { color: var(--primary); }

        /* Reveal Animation */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-image { order: -1; }
          .hero-name { font-size: 3rem; }
          .hero-greeting { justify-content: center; }
          .hero-description { margin-left: auto; margin-right: auto; }
          .hero-buttons { justify-content: center; }
          .hero-image-container { width: 240px; height: 240px; }
          .slideshow-container { padding: 0 1rem; }
        }

        @media (max-width: 768px) {
          .navbar, .navbar.scrolled { padding: 0.75rem 1.25rem; }
          .nav-right { gap: 1rem; }
          .mobile-menu { display: flex; }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: rgba(10, 10, 15, 0.98);
            border-bottom: 1px solid var(--border);
          }
          .nav-links.open { display: flex; }
          .nav-links a { display: block; padding: 1rem 1.25rem; }
          .nav-links a::after { display: none; }
          .resume-btn { padding: 0.5rem 0.8rem; font-size: 0.75rem; }
          .hero-name { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .whatido-grid { grid-template-columns: 1fr; }
          .slideshow-container { padding: 0; gap: 0.5rem; }
          .slide-content { padding: 1.5rem; }
          .slide-title { font-size: 1.2rem; }
          .slide-description { font-size: 1rem; }
          .slide-arrow { width: 36px; height: 36px; }
          .hero-image-container { width: 200px; height: 200px; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after { animation: none !important; transition: none !important; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Background */}
      <div className="bg-animation">
        <KnowledgeGraphBackground />
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="logo" onClick={() => setMobileMenuOpen(false)}>Y<span>N</span></a>
          <div className="nav-right">
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-links">
              {navItems.map(item => {
                const sectionId = item === 'What I Do' ? 'whatido' : item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${sectionId}`}
                      className={activeSection === sectionId ? 'active' : ''}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="resume-btn">
              <DownloadIcon />
              Resume
            </a>
            <button
              className="mobile-menu"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="nav-links"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">{portfolioData.personal.name}</h1>
            <h2 className="hero-title">{portfolioData.personal.tagline}</h2>
            <p className="hero-description">{portfolioData.personal.heroDescription}</p>
            <div className="hero-buttons">
              <a
                href={portfolioData.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-btn"
              >
                <DownloadIcon />
                View Resume
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github-btn"
                aria-label="GitHub"
              >
                <GitHubIcon size={24} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <img src="yashasvi_photo.png" alt="Yashasvi Nagar" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="section-container">
          <RevealSection>
            <div className="section-header">
              <div className="section-label">Introduction</div>
              <h2 className="section-title">About Me</h2>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="about-text">
              {portfolioData.personal.bio.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-container">
          <RevealSection>
            <div className="section-header">
              <div className="section-label">My Work</div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">LLM agents, GraphRAG, and healthcare AI built so every answer can be traced back to a source</p>
            </div>
          </RevealSection>
          <div
            className="slideshow-container"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <button className="slide-arrow slide-prev" onClick={prevSlide} aria-label="Previous project">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slideshow-wrapper">
              {portfolioData.projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="slide-content">
                    <div className="slide-tags">
                      {project.status && <span className="slide-status">{project.status}</span>}
                      {project.tags.map(tag => <span key={tag} className="slide-tag">{tag}</span>)}
                    </div>
                    <h3 className="slide-title">{project.title}</h3>
                    <p className="slide-description">{project.description}</p>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="slide-link">
                        <GitHubIcon />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="slide-arrow slide-next" onClick={nextSlide} aria-label="Next project">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="slide-dots">
            {portfolioData.projects.map((project, index) => (
              <button
                key={index}
                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show project ${index + 1}: ${project.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="whatido">
        <div className="section-container">
          <RevealSection>
            <div className="section-header">
              <div className="section-label">My Expertise</div>
              <h2 className="section-title">What I Do</h2>
              <p className="section-subtitle">The kinds of systems I build, each backed by a project you can open</p>
            </div>
          </RevealSection>
          <div className="whatido-grid">
            {portfolioData.whatIDo.map((item, i) => {
              const inner = (
                <>
                  <div className="whatido-icon">{icons[item.icon]}</div>
                  <h3 className="whatido-title">{item.title}</h3>
                  <p className="whatido-description">{item.description}</p>
                </>
              );
              return (
                <RevealSection key={i}>
                  {item.github ? (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="whatido-card">
                      {inner}
                    </a>
                  ) : (
                    <div className="whatido-card">{inner}</div>
                  )}
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="section-container">
          <RevealSection>
            <div className="section-header">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Let's Connect</h2>
              <p className="section-subtitle">Open to full-time AI Engineering roles starting January 2027</p>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="contact-cards">
              <a href={`mailto:${portfolioData.personal.email}`} className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{portfolioData.personal.email}</div>
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <LinkedInIcon size={40} />
                </div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">Connect with me</div>
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <GitHubIcon size={40} />
                </div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">See my code</div>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2026 <span>Yashasvi Nagar</span></p>
          <div className="footer-links">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${portfolioData.personal.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}