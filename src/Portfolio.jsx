// import React, { useState, useEffect, useRef } from 'react';

// // Portfolio Data
// const portfolioData = {
//   personal: {
//     name: "Yashasvi Nagar",
//     tagline: "Graduate Student | AI & Data Engineering",
//     email: "nagaryashasvi@gmail.com",
//     phone: "(617) 212-8032",
//     location: "Boston, Massachusetts, USA",
//     linkedin: "https://www.linkedin.com/in/yashasvi-nagar-b627542b2",
//     github: "https://github.com/yashasvi1102",
//     bio: [
//       "I am a Master's student in Information Systems at Northeastern University with a strong focus on <strong>Artificial Intelligence</strong>, <strong>Data Engineering</strong>, and <strong>Knowledge Graph systems</strong>. My work centers around building AI-powered data systems that combine machine learning, GraphRAG architectures, and scalable data pipelines to extract insights from complex datasets.",
//       "Currently, I work as a <strong>GraphRAG AI Full-Stack Co-Op at CareerGPT</strong>, where I develop graph-based AI features and build intelligent knowledge retrieval systems using Neo4j and modern AI frameworks.",
//       "My experience includes developing knowledge graph systems, machine learning models, data pipelines, and AI-powered analytics platforms using technologies such as Python, Azure, Snowflake, Databricks, and Neo4j.",
//       "I am passionate about solving real-world problems using AI, machine learning, and data engineering, and I am actively seeking opportunities in <strong>AI Engineering</strong>, <strong>Data Engineering</strong>, and <strong>Machine Learning</strong> roles."
//     ]
//   },

//   whatIDo: [
//     {
//       title: "AI & GraphRAG Systems",
//       description: "I build intelligent AI systems using Knowledge Graphs and GraphRAG architectures, combining Neo4j with LLMs for natural language querying and intelligent data retrieval.",
//       github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant",
//       icon: "ai"
//     },
//     {
//       title: "Natural Language Processing",
//       description: "I develop NLP solutions including emotion recognition, sentiment analysis, and context-aware models using PyTorch, BERT, and transformer architectures.",
//       github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations",
//       icon: "nlp"
//     },
//     {
//       title: "Data Engineering & ETL",
//       description: "I design and implement scalable data pipelines using Medallion Architecture, Azure Data Factory, Databricks, and Snowflake for end-to-end data solutions.",
//       github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-",
//       icon: "pipeline"
//     },
//     {
//       title: "Database Design & Modeling",
//       description: "I architect robust database solutions with dimensional modeling, OLTP to Data Warehouse migrations, and optimized schema designs using SQL Server and Oracle.",
//       github: "https://github.com/yashasvi1102/IMDb-Team-Project",
//       icon: "database"
//     },
//     {
//       title: "Machine Learning",
//       description: "I develop predictive models and ML solutions using Python and R, implementing algorithms for classification, regression, and data-driven insights.",
//       github: "https://github.com/yashasvi1102/Wine-Quality-Project",
//       icon: "ml"
//     },
//     {
//       title: "Data Visualization & Analytics",
//       description: "I create insightful dashboards and visualizations using Tableau and Power BI, transforming complex data into actionable business intelligence.",
//       github: "https://github.com/yashasvi1102/Kansas-City-Service-Operations",
//       icon: "chart"
//     }
//   ],
//   projects: [
//     { id: 1, title: "CrimeGraphRAG – AI Crime Investigation Assistant", description: "Built an AI-powered investigation system using Neo4j and GraphRAG. Designed a knowledge graph connecting crimes, suspects, organizations, and locations with natural language querying capabilities.", tags: ["Neo4j", "GraphRAG", "Streamlit", "Python"], github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant" },
//     { id: 2, title: "Emotion Recognition in Multi-Turn Conversations", description: "Built a context-aware emotion detection system using the MELD dataset (13k+ utterances). Implemented BERT, DialogueRNN, and attention-based models achieving 70.4% accuracy across 7 emotional categories.", tags: ["PyTorch", "BERT", "NLP", "Streamlit"], github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations" },
//     { id: 3, title: "End-to-End LA Crime Analytics – Medallion Architecture", description: "Designed and implemented a complete data lakehouse solution using Databricks with Bronze, Silver, and Gold layers for LA crime data analysis. Built scalable ETL pipelines for crime trend analytics.", tags: ["Databricks", "Medallion", "Spark", "Azure"], github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-" },
//     { id: 4, title: "IMDB Project", description: "A comprehensive IMDb data analysis project featuring database design, data modeling, and analytics on movie ratings, cast information, and box office performance trends.", tags: ["SQL", "Data Modeling", "Analytics"], github: "https://github.com/yashasvi1102/IMDb-Team-Project" },
//     { id: 5, title: "Wine Quality Prediction", description: "A machine learning project analyzing wine quality factors using R. Implements various ML algorithms for quality prediction based on chemical properties and sensory data.", tags: ["R", "Data Analysis", "ML"], github: "https://github.com/yashasvi1102/Wine-Quality-Project" }
//   ]
// };

// // Main Portfolio Component
// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-advance slideshow
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
      
//       const sections = ['hero', 'about', 'projects', 'whatido', 'contact'];
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Reveal animation hook
//   const useReveal = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
//         { threshold: 0.1 }
//       );
//       if (ref.current) observer.observe(ref.current);
//       return () => observer.disconnect();
//     }, []);

//     return [ref, isVisible];
//   };

//   const navItems = ['About', 'Projects', 'What I Do', 'Contact'];

//   // Section Components
//   const RevealSection = ({ children, className = '' }) => {
//     const [ref, isVisible] = useReveal();
//     return (
//       <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className}`}>
//         {children}
//       </div>
//     );
//   };

//   return (
//     <div className="portfolio">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
//         :root {
//           --primary: #00d4ff;
//           --primary-glow: rgba(0, 212, 255, 0.4);
//           --bg-dark: #0a0a0f;
//           --bg-card: #12121a;
//           --bg-card-hover: #1a1a25;
//           --text-primary: #ffffff;
//           --text-secondary: #c8c8d8;
//           --text-muted: #9090a5;
//           --border: #2a2a3a;
//           --gradient-1: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
//         }
        
//         * { margin: 0; padding: 0; box-sizing: border-box; }
        
//         .portfolio {
//           font-family: 'Rajdhani', sans-serif;
//           background: var(--bg-dark);
//           color: var(--text-primary);
//           min-height: 100vh;
//           overflow-x: hidden;
//         }
        
//         /* Background Animation */
//         .bg-animation {
//           position: fixed;
//           inset: 0;
//           z-index: 0;
//           overflow: hidden;
//           pointer-events: none;
//         }
        
//         .bg-animation::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: 
//             radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 80% 80%, rgba(0, 102, 255, 0.08) 0%, transparent 50%);
//         }
        
//         .grid-overlay {
//           position: absolute;
//           inset: 0;
//           background-image: 
//             linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
//           background-size: 50px 50px;
//           animation: gridMove 20s linear infinite;
//         }
        
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         .particles { position: absolute; inset: 0; }
        
//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: var(--primary);
//           border-radius: 50%;
//           opacity: 0.3;
//           animation: float 15s infinite;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
//           50% { transform: translateY(-100px) scale(1.5); opacity: 0.6; }
//         }
        
//         /* Navigation */
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           padding: 1rem 2rem;
//           z-index: 1000;
//           background: rgba(10, 10, 15, 0.8);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(0, 212, 255, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .navbar.scrolled {
//           padding: 0.5rem 2rem;
//           background: rgba(10, 10, 15, 0.95);
//         }
        
//         .nav-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
        
//         .logo {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: var(--primary);
//           text-decoration: none;
//         }
        
//         .logo span { color: white; }
        
//         .nav-links {
//           display: flex;
//           gap: 2rem;
//           list-style: none;
//         }
        
//         .nav-links a {
//           color: var(--text-secondary);
//           text-decoration: none;
//           font-size: 0.9rem;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           transition: color 0.3s;
//           position: relative;
//         }
        
//         .nav-links a:hover, .nav-links a.active { color: var(--primary); }
        
//         .nav-links a::after {
//           content: '';
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: var(--primary);
//           transition: width 0.3s;
//         }
        
//         .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
        
//         .mobile-menu {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//         }
        
//         .mobile-menu span {
//           width: 25px;
//           height: 2px;
//           background: var(--primary);
//         }
        
//         /* Hero */
//         .hero {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 6rem 2rem;
//           position: relative;
//           z-index: 1;
//         }
        
//         .hero-content {
//           max-width: 1200px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: center;
//         }
        
//         .hero-greeting {
//           font-family: 'Space Mono', monospace;
//           color: var(--primary);
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           margin-bottom: 1rem;
//         }
        
//         .hero-greeting::before {
//           content: '';
//           width: 30px;
//           height: 2px;
//           background: var(--primary);
//         }
        
//         .hero-name {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 4rem;
//           font-weight: 800;
//           background: var(--gradient-1);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 1rem;
//         }
        
//         .hero-title {
//           font-size: 1.8rem;
//           color: var(--text-secondary);
//           margin-bottom: 1.5rem;
//         }
        
//         .hero-description {
//           color: var(--text-muted);
//           font-size: 1.1rem;
//           max-width: 500px;
//           margin-bottom: 2rem;
//         }
        
//         .hero-buttons {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 2rem;
//         }
        
//         .btn {
//           padding: 1rem 2rem;
//           font-family: 'Rajdhani', sans-serif;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           text-decoration: none;
//           transition: all 0.3s;
//           clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
//         }
        
//         .btn-primary {
//           background: var(--gradient-1);
//           color: var(--bg-dark);
//         }
        
//         .btn-primary:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 40px var(--primary-glow);
//         }
        
//         .btn-secondary {
//           background: transparent;
//           color: var(--primary);
//           border: 2px solid var(--primary);
//         }
        
//         .btn-secondary:hover {
//           background: rgba(0, 212, 255, 0.1);
//         }
        
//         .hero-social {
//           display: flex;
//           gap: 1rem;
//         }
        
//         .social-link {
//           width: 50px;
//           height: 50px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid var(--border);
//           color: var(--text-secondary);
//           text-decoration: none;
//           transition: all 0.3s;
//           clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
//         }
        
//         .social-link svg {
//           width: 24px;
//           height: 24px;
//         }
        
//         .social-link:hover {
//           border-color: var(--primary);
//           color: var(--primary);
//           background: rgba(0, 212, 255, 0.1);
//           transform: translateY(-3px);
//         }
        
//         .hero-image-container {
//           position: relative;
//           width: 220px;
//           margin: 0 auto;
//         }
        
//         .hero-image-container img {
//           width: 100%;
//           height: auto;
//           display: block;
//           border-radius: 8px;
//           position: relative;
//           z-index: 1;
//           mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
//           -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
//         }
        
//         .hero-image-glow {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 150%;
//           height: 100%;
//           background: radial-gradient(ellipse at center top, rgba(0, 212, 255, 0.12) 0%, transparent 60%);
//           z-index: 0;
//           pointer-events: none;
//         }
        
//         .hero-image-dots {
//           display: none;
//         }
        
//         .hero-image-dots.top-right,
//         .hero-image-dots.bottom-left {
//           display: none;
//         }
        
//         /* Sections */
//         section {
//           padding: 6rem 2rem;
//           position: relative;
//           z-index: 1;
//         }
        
//         .section-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         .section-header {
//           text-align: center;
//           margin-bottom: 4rem;
//         }
        
//         .section-label {
//           font-family: 'Space Mono', monospace;
//           font-size: 0.9rem;
//           color: var(--primary);
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 1rem;
//         }
        
//         .section-label::before, .section-label::after {
//           content: '';
//           width: 40px;
//           height: 1px;
//           background: var(--primary);
//         }
        
//         .section-title {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 2.5rem;
//           font-weight: 700;
//         }
        
//         .section-subtitle {
//           color: var(--text-muted);
//           max-width: 600px;
//           margin: 1rem auto 0;
//         }
        
//         /* About */
//         .about-text p {
//           color: var(--text-secondary);
//           font-size: 1.1rem;
//           margin-bottom: 1.5rem;
//           line-height: 1.8;
//         }
        
//         /* Timeline */
//         .timeline {
//           position: relative;
//           padding-left: 2rem;
//         }
        
//         .timeline::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           height: 100%;
//           width: 2px;
//           background: linear-gradient(to bottom, var(--primary), transparent);
//         }
        
//         .timeline-item {
//           position: relative;
//           padding: 0 0 3rem 2rem;
//         }
        
//         .timeline-item::before {
//           content: '';
//           position: absolute;
//           left: -7px;
//           top: 0;
//           width: 16px;
//           height: 16px;
//           background: var(--bg-dark);
//           border: 3px solid var(--primary);
//           border-radius: 50%;
//           box-shadow: 0 0 20px var(--primary-glow);
//         }
        
//         .timeline-card {
//           background: var(--bg-card);
//           padding: 2rem;
//           border: 1px solid var(--border);
//           clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
//           transition: all 0.3s;
//         }
        
//         .timeline-card:hover {
//           border-color: var(--primary);
//           transform: translateX(10px);
//         }
        
//         .timeline-date {
//           font-family: 'Space Mono', monospace;
//           color: var(--primary);
//           font-size: 0.9rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .timeline-title {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1.3rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .timeline-company {
//           color: var(--text-secondary);
//           margin-bottom: 1rem;
//         }
        
//         .timeline-description {
//           list-style: none;
//           color: var(--text-secondary);
//         }
        
//         .timeline-description li {
//           padding-left: 1.5rem;
//           position: relative;
//           margin-bottom: 0.5rem;
//         }
        
//         .timeline-description li::before {
//           content: '▹';
//           position: absolute;
//           left: 0;
//           color: var(--primary);
//         }
        
//         /* Projects Slideshow */
//         .slideshow-container {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           max-width: 900px;
//           margin: 0 auto;
//         }
        
//         .slideshow-wrapper {
//           position: relative;
//           flex: 1;
//           overflow: hidden;
//         }
        
//         .slide {
//           display: none;
//           width: 100%;
//           opacity: 0;
//           transform: translateX(30px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
        
//         .slide.active {
//           display: block;
//           opacity: 1;
//           transform: translateX(0);
//         }
        
//         .slide-content {
//           background: var(--bg-card);
//           border: 1px solid var(--border);
//           padding: 2.5rem;
//           clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px));
//         }
        
//         .slide-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .slide-tag {
//           font-family: 'Space Mono', monospace;
//           font-size: 0.8rem;
//           padding: 0.4rem 1rem;
//           background: rgba(0, 212, 255, 0.1);
//           color: var(--primary);
//           border: 1px solid rgba(0, 212, 255, 0.3);
//         }
        
//         .slide-title {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//           color: var(--text-primary);
//         }
        
//         .slide-description {
//           color: var(--text-secondary);
//           font-size: 1.1rem;
//           line-height: 1.8;
//           margin-bottom: 2rem;
//         }
        
//         .slide-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           color: var(--primary);
//           text-decoration: none;
//           font-size: 1rem;
//           font-weight: 500;
//           transition: all 0.3s;
//         }
        
//         .slide-link:hover {
//           gap: 1rem;
//         }
        
//         .slide-link svg {
//           width: 20px;
//           height: 20px;
//         }
        
//         .slide-arrow {
//           width: 50px;
//           height: 50px;
//           background: var(--bg-card);
//           border: 1px solid var(--border);
//           color: var(--text-secondary);
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s;
//           flex-shrink: 0;
//         }
        
//         .slide-arrow:hover {
//           border-color: var(--primary);
//           color: var(--primary);
//           background: rgba(0, 212, 255, 0.1);
//         }
        
//         .slide-arrow svg {
//           width: 24px;
//           height: 24px;
//         }
        
//         .slide-dots {
//           display: flex;
//           justify-content: center;
//           gap: 0.75rem;
//           margin-top: 2rem;
//         }
        
//         .slide-dot {
//           width: 12px;
//           height: 12px;
//           border: 2px solid var(--border);
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.3s;
//         }
        
//         .slide-dot:hover {
//           border-color: var(--primary);
//         }
        
//         .slide-dot.active {
//           background: var(--primary);
//           border-color: var(--primary);
//         }
        
//         /* What I Do */
//         .whatido-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 2rem;
//         }
        
//         .whatido-card {
//           background: var(--bg-card);
//           padding: 2.5rem;
//           border: 1px solid var(--border);
//           clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
//           transition: all 0.3s;
//           text-decoration: none;
//           display: block;
//         }
        
//         .whatido-card:hover {
//           border-color: var(--primary);
//           transform: translateY(-8px);
//           box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15);
//         }
        
//         .whatido-icon {
//           width: 50px;
//           height: 50px;
//           margin-bottom: 1.5rem;
//           color: var(--primary);
//           transition: all 0.3s;
//         }
        
//         .whatido-icon svg {
//           width: 100%;
//           height: 100%;
//         }
        
//         .whatido-card:hover .whatido-icon {
//           transform: scale(1.1);
//         }
        
//         .whatido-title {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1.2rem;
//           color: var(--text-primary);
//           margin-bottom: 1rem;
//           transition: color 0.3s;
//         }
        
//         .whatido-card:hover .whatido-title {
//           color: var(--primary);
//         }
        
//         .whatido-description {
//           color: var(--text-secondary);
//           font-size: 1rem;
//           line-height: 1.7;
//         }
        
//         /* Contact */
//           font-family: 'Space Mono', monospace;
//           font-size: 0.85rem;
//           color: var(--primary);
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           transition: all 0.3s;
//         }
        
//         .whatido-card:hover .whatido-link {
//           gap: 0.75rem;
//         }
        
//         /* Education */
//         .education-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//           gap: 2rem;
//         }
        
//         .education-card {
//           background: var(--bg-card);
//           padding: 2rem;
//           border: 1px solid var(--border);
//           border-left: 4px solid var(--primary);
//           clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px));
//           transition: all 0.3s;
//         }
        
//         .education-card:hover {
//           border-color: var(--primary);
//           transform: translateY(-5px);
//         }
        
//         .education-degree {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1.2rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .education-school {
//           color: var(--primary);
//           margin-bottom: 0.5rem;
//         }
        
//         .education-date {
//           font-family: 'Space Mono', monospace;
//           color: var(--text-muted);
//           font-size: 0.9rem;
//         }
        
//         /* Certifications */
//         .certifications-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 2rem;
//         }
        
//         .cert-card {
//           background: var(--bg-card);
//           padding: 2rem;
//           border: 1px solid var(--border);
//           clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
//           display: flex;
//           gap: 1.5rem;
//           transition: all 0.3s;
//         }
        
//         .cert-card:hover {
//           border-color: var(--primary);
//           transform: translateY(-5px);
//         }
        
//         .cert-icon {
//           font-size: 2.5rem;
//         }
        
//         .cert-title {
//           font-family: 'Orbitron', sans-serif;
//           font-size: 1rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .cert-issuer {
//           color: var(--primary);
//           font-size: 0.95rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .cert-date {
//           font-family: 'Space Mono', monospace;
//           color: var(--text-muted);
//           font-size: 0.85rem;
//         }
        
//         /* Contact */
//         .contact-cards {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 1.5rem;
//           max-width: 900px;
//           margin: 0 auto;
//         }
        
//         .contact-card {
//           background: var(--bg-card);
//           border: 1px solid var(--border);
//           padding: 1.5rem;
//           text-decoration: none;
//           text-align: center;
//           clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
//           transition: all 0.3s;
//         }
        
//         .contact-card:hover {
//           border-color: var(--primary);
//           transform: translateY(-5px);
//         }
        
//         .contact-icon {
//           width: 40px;
//           height: 40px;
//           margin: 0 auto 1rem;
//           color: var(--primary);
//           transition: all 0.3s;
//         }
        
//         .contact-icon svg {
//           width: 100%;
//           height: 100%;
//         }
        
//         .contact-card:hover .contact-icon {
//           transform: scale(1.1);
//         }
        
//         .contact-label {
//           color: var(--text-muted);
//           font-size: 0.85rem;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           margin-bottom: 0.5rem;
//         }
        
//         .contact-value {
//           color: var(--text-primary);
//           font-size: 0.95rem;
//         }
        
//         /* Footer */
//         footer {
//           padding: 2rem;
//           border-top: 1px solid var(--border);
//           text-align: center;
//           position: relative;
//           z-index: 1;
//         }
        
//         .footer-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }
        
//         .footer-text {
//           color: var(--text-muted);
//         }
        
//         .footer-text span { color: var(--primary); }
        
//         .footer-links {
//           display: flex;
//           gap: 1.5rem;
//         }
        
//         .footer-links a {
//           color: var(--text-muted);
//           text-decoration: none;
//           transition: color 0.3s;
//         }
        
//         .footer-links a:hover { color: var(--primary); }
        
//         /* Reveal Animation */
//         .reveal {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s ease;
//         }
        
//         .reveal.active {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         /* Responsive */
//         @media (max-width: 992px) {
//           .hero-content { grid-template-columns: 1fr; text-align: center; }
//           .hero-name { font-size: 3rem; }
//           .hero-buttons { justify-content: center; }
//           .hero-social { justify-content: center; }
//           .hero-image-container { width: 200px; }
//           .slideshow-container { padding: 0 1rem; }
//         }
        
//         @media (max-width: 768px) {
//           .nav-links { display: none; }
//           .mobile-menu { display: flex; }
//           .hero-name { font-size: 2.5rem; }
//           .section-title { font-size: 2rem; }
//           .whatido-grid { grid-template-columns: 1fr; }
//           .slide-content { padding: 1.5rem; }
//           .slide-title { font-size: 1.2rem; }
//           .slide-description { font-size: 1rem; }
//           .slide-arrow { width: 40px; height: 40px; }
//           .hero-image-container { width: 180px; }
//         }
//       `}</style>

//       {/* Background */}
//       <div className="bg-animation">
//         <div className="grid-overlay"></div>
//         <div className="particles">
//           {[10, 20, 30, 50, 70, 80, 90, 40].map((left, i) => (
//             <div key={i} className="particle" style={{ 
//               left: `${left}%`, 
//               top: `${[20, 80, 40, 60, 30, 70, 50, 10][i]}%`,
//               animationDelay: `${i * 2}s`
//             }}></div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="nav-container">
//           <a href="#hero" className="logo">Y<span>N</span></a>
//           <ul className="nav-links">
//             {navItems.map(item => {
//               const sectionId = item === 'What I Do' ? 'whatido' : item.toLowerCase();
//               return (
//                 <li key={item}>
//                   <a href={`#${sectionId}`} className={activeSection === sectionId ? 'active' : ''}>
//                     {item}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             <span></span><span></span><span></span>
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="hero" id="hero">
//         <div className="hero-content">
//           <div className="hero-text">
//             <div className="hero-greeting">Hello, I'm</div>
//             <h1 className="hero-name">{portfolioData.personal.name}</h1>
//             <h2 className="hero-title">{portfolioData.personal.tagline}</h2>
//             <p className="hero-description">
//               Building intelligent AI systems that combine machine learning, GraphRAG architectures, 
//               and scalable data pipelines to extract insights from complex datasets.
//             </p>
//             <div className="hero-social">
//               <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
//                 <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//               <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
//                 <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>
//               <a href={`mailto:${portfolioData.personal.email}`} className="social-link" aria-label="Email">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="hero-image-container">
//               <div className="hero-image-glow"></div>
//               <div className="hero-image-dots top-right"></div>
//               <div className="hero-image-dots bottom-left"></div>
//               <img src="yashasvi_photo.png" alt="Yashasvi Nagar" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about">
//         <div className="section-container">
//           <RevealSection>
//             <div className="section-header">
//               <div className="section-label">Introduction</div>
//               <h2 className="section-title">About Me</h2>
//             </div>
//           </RevealSection>
//           <RevealSection>
//             <div className="about-text">
//               {portfolioData.personal.bio.map((p, i) => (
//                 <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
//               ))}
//             </div>
//           </RevealSection>
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="projects">
//         <div className="section-container">
//           <RevealSection>
//             <div className="section-header">
//               <div className="section-label">My Work</div>
//               <h2 className="section-title">Featured Projects</h2>
//               <p className="section-subtitle">A collection of projects showcasing my expertise in AI, data engineering, and machine learning</p>
//             </div>
//           </RevealSection>
//           <div className="slideshow-container">
//             <button className="slide-arrow slide-prev" onClick={prevSlide}>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="15 18 9 12 15 6"></polyline>
//               </svg>
//             </button>
//             <div className="slideshow-wrapper">
//               {portfolioData.projects.map((project, index) => (
//                 <div 
//                   key={project.id} 
//                   className={`slide ${index === currentSlide ? 'active' : ''}`}
//                 >
//                   <div className="slide-content">
//                     <div className="slide-tags">
//                       {project.tags.map(tag => <span key={tag} className="slide-tag">{tag}</span>)}
//                     </div>
//                     <h3 className="slide-title">{project.title}</h3>
//                     <p className="slide-description">{project.description}</p>
//                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="slide-link">
//                       <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                       </svg>
//                       View on GitHub
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="slide-arrow slide-next" onClick={nextSlide}>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="9 18 15 12 9 6"></polyline>
//               </svg>
//             </button>
//           </div>
//           <div className="slide-dots">
//             {portfolioData.projects.map((_, index) => (
//               <button 
//                 key={index} 
//                 className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What I Do */}
//       <section id="whatido">
//         <div className="section-container">
//           <RevealSection>
//             <div className="section-header">
//               <div className="section-label">My Expertise</div>
//               <h2 className="section-title">What I Do</h2>
//               <p className="section-subtitle">Specialized areas where I deliver impactful solutions</p>
//             </div>
//           </RevealSection>
//           <div className="whatido-grid">
//             {portfolioData.whatIDo.map((item, i) => {
//               const icons = {
//                 ai: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
//                   </svg>
//                 ),
//                 nlp: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//                     <path d="M8 9h8M8 13h6"/>
//                   </svg>
//                 ),
//                 pipeline: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
//                   </svg>
//                 ),
//                 database: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <ellipse cx="12" cy="5" rx="9" ry="3"/>
//                     <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
//                     <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
//                   </svg>
//                 ),
//                 ml: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <circle cx="12" cy="12" r="3"/>
//                     <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
//                   </svg>
//                 ),
//                 chart: (
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M18 20V10M12 20V4M6 20v-6"/>
//                   </svg>
//                 )
//               };
//               return (
//                 <RevealSection key={i}>
//                   <a href={item.github} target="_blank" rel="noopener noreferrer" className="whatido-card">
//                     <div className="whatido-icon">
//                       {icons[item.icon]}
//                     </div>
//                     <h3 className="whatido-title">{item.title}</h3>
//                     <p className="whatido-description">{item.description}</p>
//                   </a>
//                 </RevealSection>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact">
//         <div className="section-container">
//           <RevealSection>
//             <div className="section-header">
//               <div className="section-label">Get In Touch</div>
//               <h2 className="section-title">Let's Connect</h2>
//             </div>
//           </RevealSection>
//           <RevealSection>
//             <div className="contact-cards">
//               <a href={`mailto:${portfolioData.personal.email}`} className="contact-card">
//                 <div className="contact-icon">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                     <polyline points="22,6 12,13 2,6"/>
//                   </svg>
//                 </div>
//                 <div className="contact-label">Email</div>
//                 <div className="contact-value">{portfolioData.personal.email}</div>
//               </a>
//               <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
//                 <div className="contact-icon">
//                   <svg viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </div>
//                 <div className="contact-label">LinkedIn</div>
//                 <div className="contact-value">Connect with me</div>
//               </a>
//               <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-card">
//                 <div className="contact-icon">
//                   <svg viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                   </svg>
//                 </div>
//                 <div className="contact-label">GitHub</div>
//                 <div className="contact-value">View my code</div>
//               </a>
//               <a href={`tel:+16172128032`} className="contact-card">
//                 <div className="contact-icon">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//                   </svg>
//                 </div>
//                 <div className="contact-label">Phone</div>
//                 <div className="contact-value">{portfolioData.personal.phone}</div>
//               </a>
//             </div>
//           </RevealSection>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <div className="footer-content">
//           <p className="footer-text">© 2026 <span>Yashasvi Nagar</span>. Designed with passion for AI & Data Engineering.</p>
//           <div className="footer-links">
//             <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//             <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
//             <a href={`mailto:${portfolioData.personal.email}`}>Email</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from 'react';

// Portfolio Data
const portfolioData = {
  personal: {
    name: "Yashasvi Nagar",
    tagline: "Graduate Student | AI & Data Engineering",
    email: "nagaryashasvi@gmail.com",
    phone: "(617) 212-8032",
    location: "Boston, Massachusetts, USA",
    linkedin: "https://www.linkedin.com/in/yashasvi-nagar-b627542b2",
    github: "https://github.com/yashasvi1102",
    bio: [
  "I am currently pursuing a Master's degree in Information Systems at Northeastern University, specializing in <strong>Artificial Intelligence</strong>, <strong>Data Engineering</strong>, and <strong>Knowledge Graph Systems</strong>. My academic and professional interests focus on developing AI-powered data solutions that leverage machine learning, GraphRAG architectures, and scalable data pipelines to transform complex data into actionable insights.",

  "Currently, I serve as an <strong>AI Full-Stack Engineer (Co-op) at CareerGPT</strong>, where I contribute to the development of graph-driven AI applications and intelligent knowledge retrieval systems using Neo4j and modern AI technologies.",

  "My technical experience includes building knowledge graph solutions, developing machine learning models, designing scalable data pipelines, and implementing AI-driven analytics platforms using technologies such as Python, Azure, Snowflake, Databricks, and Neo4j.",

  "I am passionate about applying AI, machine learning, and data engineering to solve real-world business challenges, and I am actively seeking opportunities in <strong>AI Engineering</strong>, <strong>Data Engineering</strong>, and <strong>Machine Learning Engineering</strong> roles."
]
  },

  whatIDo: [
    {
      title: "AI & GraphRAG Systems",
      description: "I build intelligent AI systems using Knowledge Graphs and GraphRAG architectures, combining Neo4j with LLMs for natural language querying and intelligent data retrieval.",
      github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant",
      icon: "ai"
    },
    {
      title: "Natural Language Processing",
      description: "I develop NLP solutions including emotion recognition, sentiment analysis, and context-aware models using PyTorch, BERT, and transformer architectures.",
      github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations",
      icon: "nlp"
    },
    {
      title: "Data Engineering & ETL",
      description: "I design and implement scalable data pipelines using Medallion Architecture, Azure Data Factory, Databricks, and Snowflake for end-to-end data solutions.",
      github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-",
      icon: "pipeline"
    },
    {
      title: "Database Design & Modeling",
      description: "I architect robust database solutions with dimensional modeling, OLTP to Data Warehouse migrations, and optimized schema designs using SQL Server and Oracle.",
      github: "https://github.com/yashasvi1102/IMDb-Team-Project",
      icon: "database"
    },
    {
      title: "Machine Learning",
      description: "I develop predictive models and ML solutions using Python and R, implementing algorithms for classification, regression, and data-driven insights.",
      github: "https://github.com/yashasvi1102/Wine-Quality-Project",
      icon: "ml"
    },
    {
      title: "Data Visualization & Analytics",
      description: "I create insightful dashboards and visualizations using Tableau and Power BI, transforming complex data into actionable business intelligence.",
      github: "https://github.com/yashasvi1102/Kansas-City-Service-Operations",
      icon: "chart"
    }
  ],
  projects: [
    { id: 1, title: "CrimeGraphRAG – AI Crime Investigation Assistant", description: "Built an AI-powered investigation system using Neo4j and GraphRAG. Designed a knowledge graph connecting crimes, suspects, organizations, and locations with natural language querying capabilities.", tags: ["Neo4j", "GraphRAG", "Streamlit", "Python"], github: "https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant" },
    { id: 2, title: "Emotion Recognition in Multi-Turn Conversations", description: "Built a context-aware emotion detection system using the MELD dataset (13k+ utterances). Implemented BERT, DialogueRNN, and attention-based models achieving 70.4% accuracy across 7 emotional categories.", tags: ["PyTorch", "BERT", "NLP", "Streamlit"], github: "https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations" },
    { id: 3, title: "End-to-End LA Crime Analytics – Medallion Architecture", description: "Designed and implemented a complete data lakehouse solution using Databricks with Bronze, Silver, and Gold layers for LA crime data analysis. Built scalable ETL pipelines for crime trend analytics.", tags: ["Databricks", "Medallion", "Spark", "Azure"], github: "https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-" },
    { id: 4, title: "IMDB Project", description: "A comprehensive IMDb data analysis project featuring database design, data modeling, and analytics on movie ratings, cast information, and box office performance trends.", tags: ["SQL", "Data Modeling", "Analytics"], github: "https://github.com/yashasvi1102/IMDb-Team-Project" },
    { id: 5, title: "Wine Quality Prediction", description: "A machine learning project analyzing wine quality factors using R. Implements various ML algorithms for quality prediction based on chemical properties and sensory data.", tags: ["R", "Data Analysis", "ML"], github: "https://github.com/yashasvi1102/Wine-Quality-Project" }
  ]
};

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
  };

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal animation hook
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

  const navItems = ['About', 'Projects', 'What I Do', 'Contact'];

  // Section Components
  const RevealSection = ({ children, className = '' }) => {
    const [ref, isVisible] = useReveal();
    return (
      <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className}`}>
        {children}
      </div>
    );
  };

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
        
        .portfolio {
          font-family: 'Rajdhani', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          min-height: 100vh;
          overflow-x: hidden;
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
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .particles { position: absolute; inset: 0; }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.3;
          animation: float 15s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-100px) scale(1.5); opacity: 0.6; }
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
        }
        
        .mobile-menu span {
          width: 25px;
          height: 2px;
          background: var(--primary);
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
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
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .resume-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 20px var(--primary-glow);
        }
        
        .resume-btn svg {
          width: 16px;
          height: 16px;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
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
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .resume-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          transform: translateY(-2px);
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
          font-size: 1.1rem;
          max-width: 500px;
          margin-bottom: 2rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .btn {
          padding: 1rem 2rem;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        }
        
        .btn-primary {
          background: var(--gradient-1);
          color: var(--bg-dark);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px var(--primary-glow);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
        }
        
        .hero-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        
        .social-link svg {
          width: 24px;
          height: 24px;
        }
        
        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }
        
        .hero-image-container {
          position: relative;
          width: 220px;
          margin: 0 auto;
        }
        
        .hero-image-container img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          position: relative;
          z-index: 1;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
        }
        
        .hero-image-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 100%;
          background: radial-gradient(ellipse at center top, rgba(0, 212, 255, 0.12) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        
        .hero-image-dots {
          display: none;
        }
        
        .hero-image-dots.top-right,
        .hero-image-dots.bottom-left {
          display: none;
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
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary), transparent);
        }
        
        .timeline-item {
          position: relative;
          padding: 0 0 3rem 2rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 0;
          width: 16px;
          height: 16px;
          background: var(--bg-dark);
          border: 3px solid var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--primary-glow);
        }
        
        .timeline-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all 0.3s;
        }
        
        .timeline-card:hover {
          border-color: var(--primary);
          transform: translateX(10px);
        }
        
        .timeline-date {
          font-family: 'Space Mono', monospace;
          color: var(--primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-company {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          list-style: none;
          color: var(--text-secondary);
        }
        
        .timeline-description li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }
        
        .timeline-description li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        
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
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .slide.active {
          display: block;
          opacity: 1;
          transform: translateX(0);
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
        
        .slide-link:hover {
          gap: 1rem;
        }
        
        .slide-link svg {
          width: 20px;
          height: 20px;
        }
        
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
        
        .slide-dot:hover {
          border-color: var(--primary);
        }
        
        .slide-dot.active {
          background: var(--primary);
          border-color: var(--primary);
        }
        
        /* What I Do */
        .whatido-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .whatido-card {
          background: var(--bg-card);
          padding: 2.5rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all 0.3s;
          text-decoration: none;
          display: block;
        }
        
        .whatido-card:hover {
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
        
        .whatido-card:hover .whatido-icon {
          transform: scale(1.1);
        }
        
        .whatido-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          transition: color 0.3s;
        }
        
        .whatido-card:hover .whatido-title {
          color: var(--primary);
        }
        
        .whatido-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }
        
        /* Contact */
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }
        
        .whatido-card:hover .whatido-link {
          gap: 0.75rem;
        }
        
        /* Education */
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .education-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          border-left: 4px solid var(--primary);
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px));
          transition: all 0.3s;
        }
        
        .education-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .education-degree {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .education-school {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .education-date {
          font-family: 'Space Mono', monospace;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        /* Certifications */
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .cert-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s;
        }
        
        .cert-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .cert-icon {
          font-size: 2.5rem;
        }
        
        .cert-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .cert-issuer {
          color: var(--primary);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        
        .cert-date {
          font-family: 'Space Mono', monospace;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        
        /* Contact */
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
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
        
        .contact-card:hover .contact-icon {
          transform: scale(1.1);
        }
        
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
        
        .footer-text {
          color: var(--text-muted);
        }
        
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
          .hero-name { font-size: 3rem; }
          .hero-buttons { justify-content: center; }
          .hero-social { justify-content: center; }
          .hero-image-container { width: 200px; }
          .slideshow-container { padding: 0 1rem; }
        }
        
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu { display: flex; }
          .resume-btn { padding: 0.5rem 0.8rem; font-size: 0.75rem; }
          .hero-name { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .whatido-grid { grid-template-columns: 1fr; }
          .slide-content { padding: 1.5rem; }
          .slide-title { font-size: 1.2rem; }
          .slide-description { font-size: 1rem; }
          .slide-arrow { width: 40px; height: 40px; }
          .hero-image-container { width: 180px; }
        }
      `}</style>

      {/* Background */}
      <div className="bg-animation">
        <div className="grid-overlay"></div>
        <div className="particles">
          {[10, 20, 30, 50, 70, 80, 90, 40].map((left, i) => (
            <div key={i} className="particle" style={{ 
              left: `${left}%`, 
              top: `${[20, 80, 40, 60, 30, 70, 50, 10][i]}%`,
              animationDelay: `${i * 2}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="logo">Y<span>N</span></a>
          <ul className="nav-links">
            {navItems.map(item => {
              const sectionId = item === 'What I Do' ? 'whatido' : item.toLowerCase();
              return (
                <li key={item}>
                  <a href={`#${sectionId}`} className={activeSection === sectionId ? 'active' : ''}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav-right">
            <a href="yashasvi_resume.pdf" download className="resume-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
            <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </div>
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
            <p className="hero-description">
              Building intelligent AI systems that combine machine learning, GraphRAG architectures, 
              and scalable data pipelines to extract insights from complex datasets.
            </p>
            <div className="hero-social">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <div className="hero-image-dots top-right"></div>
              <div className="hero-image-dots bottom-left"></div>
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
              <p className="section-subtitle">A collection of projects showcasing my expertise in AI, data engineering, and machine learning</p>
            </div>
          </RevealSection>
          <div className="slideshow-container">
            <button className="slide-arrow slide-prev" onClick={prevSlide}>
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
                      {project.tags.map(tag => <span key={tag} className="slide-tag">{tag}</span>)}
                    </div>
                    <h3 className="slide-title">{project.title}</h3>
                    <p className="slide-description">{project.description}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="slide-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className="slide-arrow slide-next" onClick={nextSlide}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="slide-dots">
            {portfolioData.projects.map((_, index) => (
              <button 
                key={index} 
                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
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
              <p className="section-subtitle">Specialized areas where I deliver impactful solutions</p>
            </div>
          </RevealSection>
          <div className="whatido-grid">
            {portfolioData.whatIDo.map((item, i) => {
              const icons = {
                ai: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                database: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                ),
                ml: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                ),
                chart: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                )
              };
              return (
                <RevealSection key={i}>
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="whatido-card">
                    <div className="whatido-icon">
                      {icons[item.icon]}
                    </div>
                    <h3 className="whatido-title">{item.title}</h3>
                    <p className="whatido-description">{item.description}</p>
                  </a>
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
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">Connect with me</div>
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">View my code</div>
              </a>
              <a href={`tel:+16172128032`} className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{portfolioData.personal.phone}</div>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2026 <span>Yashasvi Nagar</span>. Designed with passion for AI & Data Engineering.</p>
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