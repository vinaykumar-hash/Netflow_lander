import { useEffect, useRef, useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";
import heroWhiteImg from "./assets/hero_white.png";
import { inject } from '@vercel/analytics';
import Counter from "./components/Counter";
import FloatBadge from "./components/FloatBadge";
import NetCanvas from "./components/NetCanvas";
import Card from "./components/Card";
inject();
/* ── Main ── */
export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="app">
      {/* ── NAV ── */}
      <header className={`nav ${scrolled ? "nav--up" : ""} ${open ? "open" : ""}`}>
        <div className="nav-in">
          <a href="#" className="logo">
            <img
              src={darkMode ? "/Dark_logo.svg" : "/White_logo.svg"}
              alt="NetFlow"
              className="logo-img"
            />
            <span className="logo-text">NetFlow</span>
          </a>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#ai" onClick={() => setOpen(false)}>Flow AI</a>
            <a href="https://github.com/vinaykumar-hash/Netflow" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Docs</a>
          </nav>
          <div className="nav-right">
            <button
              className="p-2 mr-2 bg-transparent border-none cursor-pointer text-lg"
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Dark Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <a href="https://github.com/vinaykumar-hash/Netflow" target="_blank" rel="noopener noreferrer" className="btn-nav-cta">
              Get Started
            </a>
            <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
              <div />
              <div />
              <div />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="bg-grid" />
        <div className="hero-wrap">
          <div className="hero-pill">
            <span>✨</span> Built for high-speed network analysis
          </div>
          <h1 className="hero-h1-aesthetic">
            Monitor network traffic <br />
            <span style={{ color: "var(--gray-400)" }}>with zero overhead</span>
          </h1>

          <p className="hero-sub-aesthetic font-fustat tracking-tight text-lg font-bold">
            Efficiently manage your network's security with NetFlow.<br />
            Real-time streaming, anomaly detection, and an Flow AI that never forgets.
          </p>

          <div className="hero-btns">
            <a href="https://github.com/vinaykumar-hash/Netflow" target="_blank" rel="noopener noreferrer" className="btn-solid accent lg flex items-center gap-3">
              <img src="https://img.icons8.com/color/48/linux--v1.png" alt="Linux" style={{ width: "24px", height: "24px" }} />
              Download for Linux
            </a>
            <a href="#features" className="btn-outline lg" style={{ border: "none" }}>See Features →</a>
          </div>

          {/* App preview frame */}
          <div className="hero-preview-wrap">
            <div className="hero-preview-frame">
              <img src={darkMode ? heroImg : heroWhiteImg} alt="Netflow Dashboard" className="hero-preview-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION (DARK) ── */}
      <section id="benefits" className="benefits-sec">
        <div className="bg-grid" />
        <div className="sec-wrap">
          <div className="benefits-grid">
            <div className="ben-left">
              <div className="ben-head-pill">Core</div>
              <h2 className="ben-h2">Build for <span style={{ color: "var(--accent)" }}>performance & Security</span></h2>
              <p className="ben-p">
                NetFlow's stealth pipeline analyzes traffic without touching your workload.
                Experience high-precision detection with a featherweight footprint.
              </p>

              <div className="ben-list">
                {[
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M7 20h10" />
                        <path d="M9 10l2 2-2 2" />
                        <path d="M13 14h2" />
                      </svg>
                    ),
                    t: "Run natively on browser",
                    d: "Zero setup monitoring."
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" y1="8" x2="2" y2="22" />
                      </svg>
                    ),
                    t: "Light weight", d: "Minimal overhead."
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                        <path d="M19.4 4.6L20 4" />
                        <path d="M4.6 19.4L4 20" />
                      </svg>
                    ),
                    t: "80% less resource consumption", d: "Optimized for speed."
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    ),
                    t: "Simple and clean UI", d: "Focused dashboard."
                  },
                ].map(b => (
                  <div key={b.t} className="ben-item">
                    <div className="ben-icon">{b.icon}</div>
                    <div className="ben-t">{b.t}</div>
                    <div className="ben-d">{b.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ben-right">
              <div className="ben-integrated-visual">
                <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid meet">
                  {/* Concentric Arc Paths */}
                  {[200, 300, 400, 500].map((radius, i) => (
                    <path
                      key={`orbit-${i}`}
                      d={`M ${600 - radius} 225 A ${radius} ${radius} 0 1 1 ${600 - radius} 224.9`}
                      fill="none"
                      stroke="rgba(187, 247, 71, 0.15)"
                      strokeWidth="1.5"
                      strokeDasharray="5,10"
                    />
                  ))}

                  {/* Orbital Particles following paths */}
                  {[200, 300, 400, 500].map((radius, i) => (
                    <g key={`particle-group-${i}`}>
                      <circle r="6" fill="var(--accent)" filter="drop-shadow(0 0 8px var(--accent))">
                        <animateMotion
                          dur={`${2 + i * 1.5}s`}
                          repeatCount="indefinite"
                          path={`M ${600 - radius} 225 A ${radius} ${radius} 0 1 1 ${600 - radius} 224.9`}
                          rotate="auto"
                        />
                      </circle>
                      {/* Trail effect */}
                      <path
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        opacity="0.4"
                      >
                        <animate
                          attributeName="d"
                          dur={`${2 + i * 1.5}s`}
                          repeatCount="indefinite"
                          values={`M ${600 - radius} 225 A ${radius} ${radius} 0 0 1 ${600 - radius} 225; M ${600 - radius} 225 A ${radius} ${radius} 0 1 1 ${600 - radius} 225`}
                        />
                      </path>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="features-sec ">
        <div className="sec-wrap flex justify-start items-start">
          <div className="feat-rows w-full">
            <div className="feat-row w-full">
              <div className="feat-visual w-full">
                <div className="ip-embedding-card">
                  <div className="embedding-visual">
                    <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                      <line x1="400" y1="20" x2="400" y2="280" stroke="var(--accent2)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                      <rect x="398" y="50" width="4" height="200" fill="var(--accent2)" opacity="0.15" rx="2" />
                      {["192.168.1.1", "10.0.0.54", "172.16.2.10", "192.168.1.12", "8.8.8.8"].map((ip, i) => (
                        <text key={`ip-${i}`} x="-80" y={80 + i * 35} fill="var(--gray-900)" fontSize="14" fontFamily="monospace" fontWeight="600">
                          {ip}
                          <animate attributeName="x" from="-80" to="350" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                          <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.95;1" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                        </text>
                      ))}
                      {["[0.12, 0.88, 0.45...]", "[0.91, 0.23, 0.11...]", "[0.55, 0.04, 0.77...]", "[0.32, 0.66, 0.29...]", "[0.08, 0.99, 0.51...]"].map((vector, i) => (
                        <text key={`vec-${i}`} x="450" y={80 + i * 35} fill="var(--accent2)" fontSize="14" fontFamily="monospace" opacity="0">
                          {vector}
                          <animate attributeName="x" from="450" to="800" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                        </text>
                      ))}
                      <circle cx="400" cy="150" r="30" fill="var(--accent2)" opacity="0.05">
                        <animate attributeName="r" values="20;40;20" dur="1s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-head-row">
            <h2 className="sec-h2">
              Stateful Packet <br />
              <span className="h2-muted">Processing via </span>
              <span className="hover-pathway">Pathway</span>
            </h2>
            <p className="sec-aside">
              NetFlow leverages the Pathway framework to build a native, high-performance packet pipeline.
              Every packet is processed statefully, ensuring unified references and zero-delay intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ── DATA VISUALIZATION ── */}
      <section id="data-vis" className="data-vis-sec">
        <div className="sec-wrap flex-row">
          <div className="sec-head-row layout-left">
            <h2 className="sec-h2">
              Real-time Traffic <br />
              <span className="h2-muted">Visualization</span>
            </h2>
            <p className="sec-aside layout-left">
              Provides live network topology. Map device behaviors and connection patterns
              with sub-millisecond precision.
            </p>
          </div>
          <div className="topology-container-right">
            <svg width="100%" height="450" viewBox="0 0 1000 500" className="vis-chart-svg">

              {/* Connecting Lines (Edges) */}
              {/* Sources to Core */}
              <line x1="200" y1="120" x2="500" y2="250" stroke="var(--accent2)" strokeWidth="2" opacity="0.2" />
              <line x1="200" y1="250" x2="500" y2="250" stroke="var(--accent2)" strokeWidth="2" opacity="0.2" />
              <line x1="200" y1="380" x2="500" y2="250" stroke="var(--accent2)" strokeWidth="2" opacity="0.2" />
              {/* Core to Destination */}
              <line x1="500" y1="250" x2="800" y2="250" stroke="var(--accent2)" strokeWidth="2" opacity="0.2" />

              {/* Animated Packets */}
              {[120, 250, 380].map((y, i) => (
                <circle key={`packet-in-${i}`} r="4" fill="var(--accent2)">
                  <animateMotion
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M 200 ${y} L 500 250`}
                    begin={`${i * 0.4}s`}
                  />
                </circle>
              ))}
              <circle r="5" fill="var(--accent2)">
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  path="M 500 250 L 800 250"
                />
              </circle>

              {/* Nodes */}
              {/* Source Nodes */}
              {[120, 250, 380].map((y, i) => (
                <g key={`src-${i}`}>
                  <circle cx="200" cy={y} r="30" fill="none" stroke="var(--accent2)" strokeWidth="2" />
                  <circle cx="200" cy={y} r="8" fill="var(--accent2)" />
                </g>
              ))}

              {/* Central Processor Node */}
              <g>
                <circle cx="500" cy="250" r="40" fill="none" stroke="var(--accent2)" strokeWidth="2">
                  <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="250" r="15" fill="var(--accent2)" />
              </g>

              {/* Destination Node */}
              <g>
                <circle cx="800" cy="250" r="30" fill="none" stroke="var(--accent2)" strokeWidth="2" />
                <circle cx="800" cy="250" r="8" fill="var(--accent2)" />
              </g>

            </svg>
          </div>
        </div>
      </section>

      {/* ── AI ANALYST ── */}
      <section id="ai" className="ai-sec">
        <div className="bg-grid" />
        <div className="sec-wrap ai-layout">
          <div className="ai-left">
            <h2 className="ben-h2" style={{ color: "var(--accent2)" }}>Flow AI, <br /> <span className="sec-h2">Full Window Context</span></h2>
            <p className="ben-p">
              Conversation with an analyst that has read every packet since startup.
            </p>
            <ul className="ai-list">
              {[
                "Context-aware threat hunting (RAG)",
                "Semantic search over network history",
                "One-click attack surface summarization",
                "Single Flow Context",
              ].map(l => <li key={l} className="ai-li"><span className="ai-li-check">✓</span> {l}</li>)}
            </ul>
          </div>
          <div className="ai-right">
            <div className="ai-chat-window">
              <div className="chat-header">
                <div className="chat-user-info">
                  <span>Flow AI</span>
                </div>
                <div className="model-selector">
                  Trinity Large (Free) <span className="chevron">▼</span>
                </div>
              </div>

              <div className="chat-body">
                <div className="chat-msg ai-msg-card">
                  <div className="card-tag">FLOW AI</div>
                  <p className="card-intro">Potential security concerns detected:</p>
                  <div className="card-point">
                    <strong>SYN Flood / Scan:</strong> IP <span className="ip-tag">192.168.1.10</span> is flagged with 0.90 confidence.
                  </div>
                  <div className="card-point">
                    <strong>High Volume:</strong> Encrypted transfer from <span className="ip-tag">20a1:4860...</span> flagged for exfiltration risk.
                  </div>
                </div>

                <div className="chat-msg user-typing-preview">
                  <span className="typing-text">Summarize the risk of this transfer...</span>
                  <span className="blinking-cursor">|</span>
                </div>
              </div>

              <div className="chat-input-area">
                <div className="chat-input-placeholder">Ask about 1 selected flows...</div>
                <div className="chat-send-icon">➤</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section id="download" className="dl-sec">
        <div className="sec-wrap">
          <div className="dl-head">
            <h2 className="sec-h2">Ready to see your <span className="h2-muted">Network</span> think?</h2>
            <p className="dl-sub">
              NetFlow is available exclusively for Linux. Deep packet inspection without the root overhead.
            </p>
          </div>
          <div className="dl-cards">
            {[
              { icon: <img src="https://img.icons8.com/color/48/linux--v1.png" alt="Linux" style={{ width: "48px", height: "48px" }} />, name: "Ubuntu / Debian", req: "kernel ≥ 5.10 · libpcap · Python 3.10+", btn: "Download", solid: true, url: "https://github.com/vinaykumar-hash/Netflow" },
              { icon: "📦", name: "From Source", req: "Any Linux · Git · Rust · Python 3.10+", btn: "GitHub Repo", solid: false, url: "https://github.com/vinaykumar-hash/Netflow" },
              { icon: "📋", name: "Setup Docs", req: "Requirements · Interface config · BPF", btn: "View Docs", solid: false, url: "https://github.com/vinaykumar-hash/Netflow" },
            ].map(({ icon, name, req, btn, solid, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="dl-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="dlc-icon">{icon}</div>
                <div className="dlc-name">{name}</div>
                <div className="dlc-req">{req}</div>
                <div className={solid ? "btn-solid lg accent" : "btn-outline lg"}>{btn}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-in">
          <a href="#" className="logo">
            <img src={darkMode ? "/Dark_logo.svg" : "/White_logo.svg"} alt="NetFlow" className="logo-img" />
            <span className="logo-text">NetFlow</span>
          </a>
          <nav className="footer-links">
            <a href="#features">Features</a>
            <a href="#ai">Flow AI</a>
            <a href="https://github.com/vinaykumar-hash/Netflow" target="_blank" rel="noopener noreferrer">Technology</a>
            <a href="https://github.com/vinaykumar-hash/Netflow" target="_blank" rel="noopener noreferrer">Download</a>
          </nav>
          <p className="footer-copy">© 2026 NetFlow · Built for Linux, powered by Pathway</p>
        </div>
      </footer>
    </div>
  );
}
