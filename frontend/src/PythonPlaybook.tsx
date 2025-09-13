import { useState, useEffect } from 'react';
import { 
  Code, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  BookOpen, 
  Target, 
  Lock,
  GitBranch,
  Database,
  Gauge,
  Brain,
  ChevronRight,
  Play,
  Star,
  Award
} from 'lucide-react';

const topics = [
  {
    category: "Foundation",
    color: "#3B82F6",
    icon: Code,
    modules: [
      { title: "Data Types & Variables", desc: "Master Python's type system", icon: Database },
      { title: "Control Flow", desc: "Loops, conditions, and logic", icon: GitBranch },
      { title: "Functions & Scope", desc: "Building blocks of clean code", icon: Layers }
    ]
  },
  {
    category: "Modern Python",
    color: "#8B5CF6",
    icon: Zap,
    modules: [
      { title: "Decorators & Metaclasses", desc: "Advanced Python patterns", icon: Star },
      { title: "Type Hints & MyPy", desc: "Strongly typed Python", icon: Shield },
      { title: "Classes & Inheritance", desc: "Object-oriented mastery", icon: Layers }
    ]
  },
  {
    category: "Algorithms",
    color: "#10B981",
    icon: Brain,
    modules: [
      { title: "Sorting & Searching", desc: "Classic algorithms optimized", icon: Target },
      { title: "Data Structures", desc: "Lists, trees, graphs, and more", icon: GitBranch },
      { title: "Dynamic Programming", desc: "Solve complex problems efficiently", icon: Cpu }
    ]
  },
  {
    category: "Production Ready",
    color: "#F59E0B",
    icon: Gauge,
    modules: [
      { title: "Concurrency & Threading", desc: "Handle race conditions safely", icon: Cpu },
      { title: "Security Best Practices", desc: "Write secure Python code", icon: Lock },
      { title: "Testing & Debugging", desc: "Bulletproof your applications", icon: Shield }
    ]
  }
];

const stats = [
  { number: "12+", label: "Core Topics", icon: BookOpen },
  { number: "50+", label: "Code Examples", icon: Code },
  { number: "100+", label: "Best Practices", icon: Award },
  { number: "24/7", label: "Learning Path", icon: Target }
];

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
  }

  .hero-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .floating-element {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
  }

  .floating-1 {
    top: 20%;
    left: 20%;
    width: 200px;
    height: 200px;
    background: #3B82F6;
    animation-delay: 0s;
  }

  .floating-2 {
    top: 60%;
    right: 20%;
    width: 300px;
    height: 300px;
    background: #8B5CF6;
    animation-delay: 2s;
  }

  .floating-3 {
    bottom: 20%;
    left: 60%;
    width: 150px;
    height: 150px;
    background: #06B6D4;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  .hero-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    color: white;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background: #10B981;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hero-subtitle {
    background: linear-gradient(45deg, #F59E0B, #EF4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .hero-description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 640px) {
    .cta-buttons {
      flex-direction: row;
    }
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(45deg, #3B82F6, #8B5CF6);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
  }

  .btn-secondary {
    padding: 1rem 2rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    color: white;
    border-radius: 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-secondary:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  .topics-section {
    background: #F8FAFC;
    padding: 6rem 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 1.5rem;
  }

  .section-description {
    font-size: 1.25rem;
    color: #64748B;
    max-width: 600px;
    margin: 0 auto;
  }

  .topics-grid {
    display: grid;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    .topics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .topic-card {
    background: white;
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid #E2E8F0;
  }

  .topic-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .topic-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .topic-icon {
    width: 60px;
    height: 60px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .topic-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1E293B;
  }

  .modules-list {
    list-style: none;
  }

  .module-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #F8FAFC;
    border-radius: 0.75rem;
    transition: all 0.2s ease;
  }

  .module-item:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .module-icon {
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .module-content {
    flex: 1;
  }

  .module-title {
    font-weight: 600;
    color: #1E293B;
    margin-bottom: 0.25rem;
  }

  .module-desc {
    color: #64748B;
    font-size: 0.9rem;
  }

  .features-section {
    background: #1E293B;
    padding: 6rem 2rem;
    color: white;
  }

  .features-grid {
    display: grid;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .feature-item {
    text-align: center;
  }

  .feature-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #3B82F6, #8B5CF6);
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: transform 0.3s ease;
  }

  .feature-item:hover .feature-icon {
    transform: scale(1.1);
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .feature-desc {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }

  .cta-section {
    background: linear-gradient(45deg, #3B82F6, #8B5CF6);
    padding: 4rem 2rem;
    text-align: center;
    color: white;
  }

  .cta-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .cta-desc {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-cta {
    background: white;
    color: #1E293B;
    padding: 1rem 2rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .btn-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  .chevron-animate {
    transition: transform 0.2s ease;
  }

  .topic-card:hover .chevron-animate {
    transform: translateX(4px);
  }
`;

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * parseInt(end)));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{end.toString().replace(/\d+/, '')}</span>;
}

export default function PythonPlaybookLanding() {
  return (
    <>
      <style>{styles}</style>
      
      <div className="hero-container">
        <div className="hero-bg">
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="badge">
            <div className="pulse-dot"></div>
            <span>Now Available</span>
          </div>

          <h1 className="hero-title">Python</h1>
          <h1 className="hero-subtitle">Playbook</h1>

          <p className="hero-description">
            Master modern Python development with our comprehensive guide. From fundamentals to advanced concepts, 
            security practices, and production-ready code.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">
              <Play size={20} />
              Start Learning
              <ChevronRight size={20} />
            </button>
            
            <button className="btn-secondary">
              View Sample Code
            </button>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-item">
                  <Icon size={24} style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0 auto 0.75rem' }} />
                  <div className="stat-number">
                    <AnimatedCounter end={stat.number} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="topics-section">
        <div className="section-header">
          <h2 className="section-title">Master Python Step by Step</h2>
          <p className="section-description">
            Our structured learning path takes you from Python basics to production-ready, 
            secure applications with modern best practices.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, index) => {
            const CategoryIcon = topic.icon;
            return (
              <div key={index} className="topic-card">
                <div className="topic-header">
                  <div className="topic-icon" style={{ background: topic.color }}>
                    <CategoryIcon size={28} />
                  </div>
                  <h3 className="topic-title">{topic.category}</h3>
                </div>

                <ul className="modules-list">
                  {topic.modules.map((module, moduleIndex) => {
                    const ModuleIcon = module.icon;
                    return (
                      <li key={moduleIndex} className="module-item">
                        <div className="module-icon">
                          <ModuleIcon size={18} style={{ color: '#64748B' }} />
                        </div>
                        <div className="module-content">
                          <div className="module-title">{module.title}</div>
                          <div className="module-desc">{module.desc}</div>
                        </div>
                        <ChevronRight size={16} style={{ color: '#94A3B8' }} className="chevron-animate" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2 className="section-title" style={{ color: 'white' }}>
            Why Choose Python Playbook?
          </h2>
          <p className="section-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Built by Python experts for developers who want to write better, more secure code.
          </p>
        </div>

        <div className="features-grid">
          {[
            {
              icon: Code,
              title: "Real-World Examples",
              description: "Every concept comes with practical, tested code examples you can use immediately."
            },
            {
              icon: Shield,
              title: "Security First",
              description: "Learn to write secure Python code and avoid common vulnerabilities from day one."
            },
            {
              icon: Gauge,
              title: "Production Ready",
              description: "Focus on patterns and practices that scale in real enterprise applications."
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <Icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Master Python?</h2>
        <p className="cta-desc">
          Join thousands of developers who have transformed their Python skills with our comprehensive playbook.
        </p>
        <button className="btn-cta">Get Started Today</button>
      </div>
    </>
  );
}