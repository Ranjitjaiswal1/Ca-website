import React from "react";

// Header Component
const Header = () => (
  <header className="header">
    <img src="logo.jpg" alt="Logo" className="logo" />
    <h1>Tax First Private Limited</h1>
    <div className="header-buttons">
      <button id="consultBtn">📞 Ask Us</button>
    </div>
  </header>
);

// Navigation Component
const Navigation = () => (
  <nav className="nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/vision">Our Vision</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "40px 20px" }}>
    <div style={{ maxWidth: "1100px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div style={{ minWidth: "200px" }}>
        <h3>Our Service</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>Audit & Assurance</li>
          <li>Internal Audit & Risk Advisory</li>
          <li>Tax Audit & Tax Advisory</li>
          <li>Consulting & Advisory</li>
          <li>Legal Services</li>
        </ul>
      </div>
      <div style={{ minWidth: "200px" }}>
        <h3>Industry</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>Banking, Insurance & Financial Services</li>
          <li>Manufacturing & Industrial Unit</li>
          <li>Education & Healthcare</li>
          <li>Hotels & Hospitality</li>
          <li>Energy, Utilities & Mining</li>
          <li>Government & Development Sector</li>
        </ul>
      </div>
      <div style={{ minWidth: "200px" }}>
        <h3>Contact Us</h3>
        <p>Lagankhel, Bus Park, Nepal</p>
        <p>📞 +977-9862721917</p>
        <p>📧 <a href="mailto:tax1stpvtltd@gmail.com" style={{ color: "#60a5fa" }}>tax1stpvtltd@gmail.com</a></p>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: "30px", fontSize: "0.9rem" }}>
      © 2025 Tax First Private Limited | Powered by Tax First Pvt. Ltd.
    </div>
  </footer>
);

// Vision Page Component
const VisionPage = () => (
  <main style={{ maxWidth: "1000px", margin: "auto", padding: "30px" }}>
    <h2>OUR VISION, MISSION & CORE VALUES</h2>
    <section>
      <h3>Mission</h3>
      <p>
        At Guru & Associates, our mission is to empower our clients with strategic insights, tailored advisory,
        and professional support to enhance competitiveness, manage risk effectively, and build sustainable wealth.
        We are dedicated to transforming business operations in alignment with international standards, helping our
        clients grow with confidence in a dynamic economic environment.
      </p>
    </section>
    <section>
      <h3>Vision</h3>
      <p>
        To redefine the benchmark for professional services in Nepal by fostering trust, driving value and expanding
        our impact across borders—becoming a catalyst for growth wherever we operate.
      </p>
    </section>
    <section>
      <h3>Core Values</h3>
      <ul>
        <li><strong>Integrity:</strong> We uphold the highest standards of honesty, ethics, and transparency in all our dealings.</li>
        <li><strong>Excellence:</strong> We are committed to delivering exceptional quality through accuracy, attention to detail, and continuous improvement.</li>
        <li><strong>Client-Centricity:</strong> Our clients are at the core of everything we do. We aim to understand, anticipate, and exceed their expectations.</li>
        <li><strong>Innovation:</strong> We embrace change and technology to provide forward-thinking solutions in a rapidly evolving landscape.</li>
        <li><strong>Professionalism:</strong> We maintain a culture of accountability, respect, and responsibility in all professional interactions.</li>
        <li><strong>Collaboration:</strong> We believe in the power of teamwork—within our firm, with our clients, and with our broader professional network.</li>
      </ul>
    </section>
  </main>
);

// App Component - Wrap Everything
const App = () => (
  <div>
    <Header />
    <Navigation />
    <VisionPage />
    <Footer />
  </div>
);

export default App;
