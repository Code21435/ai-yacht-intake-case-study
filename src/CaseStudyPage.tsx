import { useEffect } from "react";
import { Check, AlertTriangle, Layers, Cpu, Database, Award } from "lucide-react";

export default function CaseStudyPage() {
  // Fallback metadata update
  useEffect(() => {
    document.title = "AI Yacht Intake & Operational Briefing System | Usman Saleem";
  }, []);

  return (
    <div className="cs-wrapper">
      {/* Navigation Header */}
      <header className="cs-nav-header">
        <div className="cs-nav-container">
          <a href="#" className="cs-nav-logo">
            <span>Usman Saleem</span>
            <span style={{ fontSize: "0.85rem", color: "var(--cs-teal)", fontWeight: 500, fontFamily: "var(--font-sans)" }}>
              / AI Yacht Intake Case Study
            </span>
          </a>
          <nav className="cs-nav-links">
            <a href="#problem" className="cs-nav-item">Problem</a>
            <a href="#workflow" className="cs-nav-item">Workflow</a>
            <a href="#architecture" className="cs-nav-item">Architecture</a>
            <a href="#skills" className="cs-nav-item">Skills</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero-grid">
          <div className="cs-hero-content">
            <span className="cs-hero-badge">
              Maritime AI · Operational Automation · LLM Workflow Design
            </span>
            <h1 className="cs-hero-title">
              AI intake system for yacht charter operations
            </h1>
            <p className="cs-hero-subtitle">
              Turning unclear client enquiries into structured operational briefs before pressure reaches management, captains, and crew.
            </p>
            <p className="cs-hero-description">
              Yacht charter enquiries often arrive with missing details, soft assumptions, and expectations that are not yet operationally realistic. This system is designed to catch that context early, structure it clearly, and help teams decide the next sensible action before unclear promises move downstream.
            </p>
            <div className="cs-hero-actions">
              <a href="#workflow" className="cs-btn cs-btn-primary">
                View Workflow
              </a>
              <a href="#architecture" className="cs-btn cs-btn-secondary">
                Read Technical Breakdown
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }} className="hidden lg:flex">
            {/* Visual representation instead of stock image */}
            <div
              style={{
                width: "100%",
                maxWidth: "380px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: "0.65rem", color: "var(--cs-teal)", fontWeight: 700, letterSpacing: "0.1em" }}>UPSTREAM LAYER</span>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cs-teal)" }}></span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "rgba(255, 255, 255, 0.05)", height: "2px", width: "40%" }}></div>
                <div style={{ background: "rgba(255, 255, 255, 0.05)", height: "2px", width: "80%" }}></div>
                <div style={{ background: "rgba(255, 255, 255, 0.05)", height: "2px", width: "60%" }}></div>
              </div>
              <div style={{ marginTop: 24, padding: "16px", background: "rgba(201, 168, 76, 0.05)", borderRadius: "6px", border: "1px solid rgba(201, 168, 76, 0.15)" }}>
                <div style={{ color: "var(--cs-gold)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>Concept Positioning</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                  This is not just a chatbot. It is an upstream intake system that converts messy enquiries into structured operational briefs before unclear expectations become fixed promises.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="cs-section cs-bg-light">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">The Problem</span>
          <h2 className="cs-section-title">
            The real problem is not the enquiry. It is what the enquiry becomes.
          </h2>
          <div className="cs-grid-2">
            <div>
              <p className="cs-text-body">
                In yacht charter operations, early conversations often include incomplete or vague details around dates, destination, guests, budget, service expectations, weather assumptions, routing, and onboard requirements.
              </p>
              <p className="cs-text-body" style={{ marginBottom: 0 }}>
                The issue is that these details can become fixed in the client’s mind before the operational team has reviewed whether the request is realistic. By the time management or the captain sees the brief, the pressure may already be attached to the trip.
              </p>
            </div>
            <div className="cs-card cs-card-accent">
              <h3 className="cs-card-title">
                <AlertTriangle size={18} style={{ color: "var(--cs-teal)" }} />
                Operational consequences of unclear intake
              </h3>
              <ul className="cs-bullets">
                <li>Expectation drift between the client, broker, and operations team</li>
                <li>Last-minute changes caused by missing context</li>
                <li>Unrealistic routing or timing assumptions</li>
                <li>Weather expectations not aligned with the season or location</li>
                <li>Guest requirements not matched against crew capability or vessel setup</li>
                <li>Captains and crew inheriting pressure instead of context</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="cs-section cs-bg-white">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">The Solution</span>
          <h2 className="cs-section-title">
            The solution: structure the context before commitments harden
          </h2>
          <p className="cs-text-body">
            The system acts as an upstream intake layer. It reviews enquiry text, call notes, broker input, or client messages and converts them into a short structured brief.
          </p>
          <p className="cs-text-body">
            The goal is not to replace brokers or operations teams. The goal is to improve the quality of information reaching them. The system helps identify:
          </p>
          <div className="cs-grid-2" style={{ marginTop: 24 }}>
            <div className="cs-card">
              <h3 className="cs-card-title" style={{ fontSize: "1.05rem" }}>
                <Check size={18} style={{ color: "var(--cs-teal)" }} />
                Information Discovery
              </h3>
              <ul className="cs-bullets" style={{ fontSize: "0.9rem" }}>
                <li><strong>What is already known:</strong> Verifiable inputs like guest numbers, preferred region, and clear budget envelopes.</li>
                <li><strong>What is missing:</strong> Unspoken constraints such as cabin splits, date flexibility, or specific crew capability demands.</li>
                <li><strong>What assumptions need clarification:</strong> Ambiguities around routing speed, itinerary pacing, or peak-season pricing constraints.</li>
              </ul>
            </div>
            <div className="cs-card">
              <h3 className="cs-card-title" style={{ fontSize: "1.05rem" }}>
                <Check size={18} style={{ color: "var(--cs-teal)" }} />
                Risk & Recommendation
              </h3>
              <ul className="cs-bullets" style={{ fontSize: "0.9rem" }}>
                <li><strong>What looks operationally risky:</strong> Unrealistic transit expectations (e.g. Monaco to Saint-Tropez in severe August conditions) or seasonal weather mismatches.</li>
                <li><strong>What the next sensible action should be:</strong> Standardized clarification actions to ask the client before draft proposals are generated.</li>
              </ul>
            </div>
          </div>

          <div className="cs-quote-highlight">
            <blockquote className="cs-quote-text">
              "Not more process. Better context before the wrong expectations become operational pressure."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="cs-section cs-bg-light">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">Operational Workflow</span>
          <h2 className="cs-section-title">How the intake flow works</h2>
          <p className="cs-text-body">
            A pipeline structured to run sequentially, ensuring that unstructured information is isolated, normalized, qualified, checked for risk, and presented cleanly.
          </p>

          <div className="cs-workflow-flow">
            {/* Step 1 */}
            <div className="cs-workflow-step-card">
              <div className="cs-workflow-number">1</div>
              <div className="cs-workflow-step-content">
                <h3 className="cs-workflow-step-title">Raw enquiry input</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--cs-text-muted)", lineHeight: 1.5 }}>
                  The entry point accepts multi-channel communication inputs. Messy texts are converted into unified text stream payloads.
                </p>
                <div className="cs-workflow-examples">
                  <span className="cs-workflow-example-tag">Client Email</span>
                  <span className="cs-workflow-example-tag">WhatsApp Message</span>
                  <span className="cs-workflow-example-tag">Broker Call Transcript</span>
                  <span className="cs-workflow-example-tag">Vague Fleet Enquiry</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="cs-workflow-step-card">
              <div className="cs-workflow-number">2</div>
              <div className="cs-workflow-step-content">
                <h3 className="cs-workflow-step-title">AI context extraction</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--cs-text-muted)", lineHeight: 1.5 }}>
                  Large Language Models apply strict extraction schemas to compile essential parameters into an structured JSON format.
                </p>
                <div className="cs-workflow-examples">
                  <span className="cs-workflow-example-tag">Dates & Window</span>
                  <span className="cs-workflow-example-tag">Guest Count</span>
                  <span className="cs-workflow-example-tag">Destination</span>
                  <span className="cs-workflow-example-tag">Budget Direction</span>
                  <span className="cs-workflow-example-tag">Yacht Type Preference</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="cs-workflow-step-card">
              <div className="cs-workflow-number">3</div>
              <div className="cs-workflow-step-content">
                <h3 className="cs-workflow-step-title">Missing context detection</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--cs-text-muted)", lineHeight: 1.5 }}>
                  The engine identifies gaps by checking parameters against required operational profiles (e.g. cabin setup, dates flexibility, and accessibility requirements).
                </p>
                <div className="cs-workflow-examples">
                  <span className="cs-workflow-example-tag">Fixed vs Flexible Window</span>
                  <span className="cs-workflow-example-tag">Adult/Child Split</span>
                  <span className="cs-workflow-example-tag">Medical / Accessibility</span>
                  <span className="cs-workflow-example-tag">Toy & Tender Demands</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="cs-workflow-step-card">
              <div className="cs-workflow-number">4</div>
              <div className="cs-workflow-step-content">
                <h3 className="cs-workflow-step-title">Operational risk check</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--cs-text-muted)", lineHeight: 1.5 }}>
                  Extracted details are cross-referenced with location knowledge and vessel capacity metadata to flag downstream pressures.
                </p>
                <div className="cs-workflow-examples">
                  <span className="cs-workflow-example-tag">August Mediterranean Congestion</span>
                  <span className="cs-workflow-example-tag">Unrealistic Pacing</span>
                  <span className="cs-workflow-example-tag">Vessel Draught Limits</span>
                  <span className="cs-workflow-example-tag">Crew Rest SOP Collisions</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="cs-workflow-step-card">
              <div className="cs-workflow-number">5</div>
              <div className="cs-workflow-step-content">
                <h3 className="cs-workflow-step-title">Structured brief output</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--cs-text-muted)", lineHeight: 1.5 }}>
                  A highly scannable, standardized brief is generated for the team, detailing verified facts, identified risks, and the next sensible action.
                </p>
                <div className="cs-workflow-examples">
                  <span className="cs-workflow-example-tag">Fact Sheet</span>
                  <span className="cs-workflow-example-tag">Risk Flags</span>
                  <span className="cs-workflow-example-tag">Suggested Follow-Up Action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Output Section */}
      <section className="cs-section cs-bg-white">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">Output Demonstration</span>
          <h2 className="cs-section-title">Example structured brief</h2>
          <p className="cs-text-body">
            Below is a realistic simulation of a messy, conversational enquiry transformed into a high-utility operational brief.
          </p>

          <div className="cs-mock-container">
            {/* Input Card */}
            <div className="cs-mock-input">
              <span className="cs-mock-label">Raw Client Request</span>
              <div className="cs-mock-request-text">
                "Family of 8 looking for a 5-day yacht charter around the Amalfi Coast in August. Wants quiet anchorages, beach clubs, water toys, chef onboard, and flexible itinerary. Budget around €45,000."
              </div>
              <div style={{ marginTop: 24 }}>
                <span className="cs-mock-label" style={{ display: "block", marginBottom: 8 }}>Payload Metadata</span>
                <div style={{ display: "flex", gap: 12, fontSize: "0.8rem", color: "var(--cs-text-muted)" }}>
                  <div>Source: <strong>WhatsApp WebHook</strong></div>
                  <div>•</div>
                  <div>Confidence: <strong>High</strong></div>
                </div>
              </div>
            </div>

            {/* Output Brief Card */}
            <div className="cs-mock-brief">
              <div className="cs-mock-brief-header">
                <span className="cs-brief-title">INTAKE SYSTEM BRIEF // OPERATIONAL REVIEW</span>
                <span className="cs-brief-badge">READY FOR REVIEW</span>
              </div>

              <div className="cs-brief-section-title">Known Parameters</div>
              <ul className="cs-brief-list">
                <li>Guests: 8</li>
                <li>Duration: 5-Day Charter</li>
                <li>Location: Amalfi Coast</li>
                <li>Timing: August travel window</li>
                <li>Preferences: Quiet anchorages, beach clubs, water toys, onboard chef</li>
                <li>Budget envelope: ~€45,000</li>
              </ul>

              <div className="cs-brief-section-title">Missing Parameters</div>
              <ul className="cs-brief-list">
                <li>Exact dates (August calendar availability)</li>
                <li>Guest split (Adult / child cabin configurations)</li>
                <li>Cabin requirements</li>
                <li>Embarkation & Disembarkation port preference</li>
                <li>Flexibility on budget limit</li>
                <li>Dietary / medical constraints</li>
                <li>Water toy specifics (e.g. Waverunner licensing rules)</li>
                <li>Confirmed Decision Maker</li>
              </ul>

              <div className="cs-brief-section-title" style={{ color: "#E2C374" }}>Risk Flags</div>
              <ul className="cs-brief-list risks">
                <li>August demand may limit yacht availability dramatically</li>
                <li>Amalfi Coast routing may be affected by high harbor congestion and unpredictable weather</li>
                <li>"Quiet anchorages" may conflict with peak-season Amalfi harbor realities</li>
                <li>Budget may not match desired experience quality depending on vessel category</li>
                <li>Flexible itinerary requires early expectation alignment to protect crew schedules</li>
              </ul>

              <div className="cs-brief-section-title">Next Sensible Action</div>
              <div className="cs-brief-next-action">
                Clarify dates, cabin split, realistic budget range, and whether the client prioritizes yacht quality, route, beach clubs, privacy, or onboard service.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI / Technical Architecture Section */}
      <section id="architecture" className="cs-section cs-bg-light">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">Technical Design</span>
          <h2 className="cs-section-title">Technical architecture</h2>
          <p className="cs-text-body">
            To ensure the prototype is production-viable, the concept utilizes decoupled service layers, structured schema enforcement, and transaction queues.
          </p>

          <div className="cs-grid-3" style={{ marginTop: 40 }}>
            {/* FrontEnd Card */}
            <div className="cs-arch-card">
              <span className="cs-arch-card-title">Frontend</span>
              <div className="cs-arch-tag-container">
                <span className="cs-arch-tag">React</span>
                <span className="cs-arch-tag">Next.js</span>
              </div>
              <ul className="cs-arch-bullets">
                <li>Responsive operator dashboard built to support quick triage</li>
                <li>Clean, guided client-side forms for assisted intake flows</li>
                <li>Brief comparison panels showing side-by-side versions</li>
              </ul>
            </div>

            {/* BackEnd Card */}
            <div className="cs-arch-card">
              <span className="cs-arch-card-title">Backend</span>
              <div className="cs-arch-tag-container">
                <span className="cs-arch-tag">Node.js</span>
                <span className="cs-arch-tag">Express / Fastify</span>
              </div>
              <ul className="cs-arch-bullets">
                <li>Fast REST API endpoints built with structured JSON schema input validation</li>
                <li>Redis & BullMQ worker threads processing LLM pipelines asynchronously</li>
                <li>Role-based access controls isolating operations from client data</li>
              </ul>
            </div>

            {/* AI Layer Card */}
            <div className="cs-arch-card">
              <span className="cs-arch-card-title">AI Layer</span>
              <div className="cs-arch-tag-container">
                <span className="cs-arch-tag">LLM Pipeline</span>
                <span className="cs-arch-tag">RAG</span>
              </div>
              <ul className="cs-arch-bullets">
                <li>Structured extraction mapping messy messages to schemas</li>
                <li>Retrieval-Augmented Generation (RAG) over harbor & rules knowledge base</li>
                <li>Risk classification and dynamic clarification question generation</li>
              </ul>
            </div>

            {/* Data Layer Card */}
            <div className="cs-arch-card">
              <span className="cs-arch-card-title">Data Layer</span>
              <div className="cs-arch-tag-container">
                <span className="cs-arch-tag">PostgreSQL</span>
                <span className="cs-arch-tag">Redis Cache</span>
              </div>
              <ul className="cs-arch-bullets">
                <li>Relational integrity schemas storing details and audit tables</li>
                <li>Fast session caching in Redis to prevent state drift in chats</li>
                <li>Operational logs record database tables mapping system changes</li>
              </ul>
            </div>

            {/* Reliability Card */}
            <div className="cs-arch-card" style={{ gridColumn: "span 1" }}>
              <span className="cs-arch-card-title">Reliability</span>
              <div className="cs-arch-tag-container">
                <span className="cs-arch-tag">Validation</span>
                <span className="cs-arch-tag">Audit Trail</span>
              </div>
              <ul className="cs-arch-bullets">
                <li>Enforces fallback algorithms when JSON extraction fails schemas</li>
                <li>Automatic retry mechanisms for third-party LLM timeouts</li>
                <li>Detailed history trails mapping edit actions to brokers</li>
              </ul>
            </div>

            {/* Human in Loop Note Card */}
            <div
              className="cs-arch-card"
              style={{
                gridColumn: "span 1",
                background: "rgba(29, 158, 117, 0.03)",
                border: "1px solid rgba(29, 158, 117, 0.15)",
              }}
            >
              <span className="cs-arch-card-title" style={{ color: "var(--cs-teal)" }}>
                Human-in-the-Loop Design
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--cs-text-muted)", lineHeight: 1.5, margin: 0 }}>
                Crucially, the system is designed to support, not replace, operational staff. AI prepares the context, suggests queries, and surfaces risks, but the human broker or charter manager retains the final approval step before sending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="cs-section cs-bg-white">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">Industry Impact & Portability</span>
          <h2 className="cs-section-title">Why this matters for maritime and port operations</h2>
          <div className="cs-grid-2">
            <div>
              <p className="cs-text-body">
                The core logic of this system solves a universal operational reality: teams lose valuable time when critical requests arrive incomplete, fragmented, or late. In fast-paced, high-risk environments, starting a task with a clear context sheet prevents operational pressure from accumulating downstream.
              </p>
              <p className="cs-text-body">
                By applying structured schema extraction and proactive risk checks, this intake pattern directly translates to wider maritime logistics, shipping scheduling, and port operations.
              </p>
            </div>
            <div className="cs-card">
              <h3 className="cs-card-title" style={{ fontSize: "1.05rem" }}>
                <Layers size={18} style={{ color: "var(--cs-teal)" }} />
                Transferable Maritime Use Cases
              </h3>
              <ul className="cs-bullets" style={{ fontSize: "0.9rem" }}>
                <li><strong>Port Call Task Automation:</strong> Structuring agent requests and pre-clearing cargo manifests.</li>
                <li><strong>Cost Prediction Support:</strong> Pre-calculating fuel, port fees, and seasonal pricing impacts.</li>
                <li><strong>Historical Knowledge Search:</strong> RAG pipelines query legacy logistics manuals instantly.</li>
                <li><strong>Repetitive Request Classification:</strong> Routing email traffic directly to specific desk queues.</li>
                <li><strong>Operational Risk Flagging:</strong> Flagging harbor draught restrictions or tidal constraints.</li>
                <li><strong>Document-to-Workflow Automation:</strong> Auto-generating schedules and action items directly from PDF bills of lading.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated Section */}
      <section id="skills" className="cs-section cs-bg-light">
        <div className="cs-section-inner">
          <span className="cs-section-title-label">Technical Competence</span>
          <h2 className="cs-section-title">Skills demonstrated</h2>
          <p className="cs-text-body">
            This project demonstrates structural thinking, operational risk management, and reliable software design.
          </p>

          <div className="cs-grid-3" style={{ marginTop: 40 }}>
            {/* Skill 1 */}
            <div className="cs-skill-card">
              <Cpu className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">LLM workflow design</h3>
              <p className="cs-skill-card-desc">
                Engineering multi-step chains, handling structured payloads, and controlling outputs reliably.
              </p>
            </div>

            {/* Skill 2 */}
            <div className="cs-skill-card">
              <Layers className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">RAG-ready architecture</h3>
              <p className="cs-skill-card-desc">
                Structuring internal document stores, handling vector indexing, and injecting context safely into prompts.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="cs-skill-card">
              <Database className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">Structured data extraction</h3>
              <p className="cs-skill-card-desc">
                Normalizing messy inputs into validated formats using schema definitions.
              </p>
            </div>

            {/* Skill 4 */}
            <div className="cs-skill-card">
              <AlertTriangle className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">Operational risk mapping</h3>
              <p className="cs-skill-card-desc">
                Defining risk criteria and matching inputs against limits like seasonal constraints or draught restrictions.
              </p>
            </div>

            {/* Skill 5 */}
            <div className="cs-skill-card">
              <Check className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">Human-in-the-loop AI</h3>
              <p className="cs-skill-card-desc">
                Designing interfaces that center human oversight, ensuring AI acts as a decision support aid.
              </p>
            </div>

            {/* Skill 6 */}
            <div className="cs-skill-card">
              <Award className="cs-skill-card-icon" size={24} />
              <h3 className="cs-skill-card-title">Product thinking for ops</h3>
              <p className="cs-skill-card-desc">
                Understanding constraints of teams under pressure and building workflow-first tools instead of dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="cs-section cs-bg-white">
        <div className="cs-section-inner" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="cs-section-title-label">Conclusion</span>
          <h2 className="cs-section-title" style={{ fontSize: "2rem" }}>What this case study shows</h2>
          <p className="cs-text-body" style={{ margin: "0 auto 32px" }}>
            This system demonstrates my ability to think beyond basic full-stack features and design systems that support real operational decisions. The strongest value is not the AI model itself. The value is how the system fits into the workflow: what it extracts, what it flags, what it refuses to assume, and how it gives humans better context before pressure moves downstream.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 28px", background: "var(--cs-teal-soft)", border: "1px solid rgba(29, 158, 117, 0.2)", borderRadius: "6px" }}>
            <span style={{ color: "var(--cs-teal)", fontWeight: 700, fontSize: "0.95rem" }}>
              AI should not create more work for operations teams. It should reduce ambiguity before the work reaches them.
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cs-footer">
        <div className="cs-footer-content">
          <div className="cs-footer-logo">Usman Saleem</div>
          <p className="cs-footer-text">
            Designing and building AI-assisted operational systems, LLM extraction pipelines, and workflow automation solutions for maritime, charter, and logistics operations.
          </p>
          <div className="cs-footer-copyright">
            © {new Date().getFullYear()} Usman Saleem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
