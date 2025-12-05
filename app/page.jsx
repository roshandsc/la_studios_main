"use client";
import React from "react";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header className="lc-header">
        <div className={`lc-header-effects ${isMobile ? "hidden" : ""}`}>
          <div className="lc-golden-glow"></div>
          <div className="lc-smoke"></div>
          <div className="lc-film-grain"></div>
        </div>

        <div className="lc-header-left">
          <img src="/logo.png" alt="La Capella Logo" className="lc-logo" />
          <nav className="lc-nav">
            <a href="/" className="lc-nav-link">
              Home
            </a>
            <a href="/about" className="lc-nav-link">
              About
            </a>
            <a href="/portfolio" className="lc-nav-link">
              Portfolio
            </a>
            <a href="/services" className="lc-nav-link">
              Services
            </a>
            <a href="/contact" className="lc-nav-link">
              Contact
            </a>
          </nav>
        </div>

        <div className="lc-header-right">
          <a href="#" className="lc-social-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.89h-2.1v6.99C18.34 21.13 22 17 22 12z" />
            </svg>
          </a>
          <a href="#" className="lc-social-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zM17.8 6a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 17.8 6z" />
            </svg>
          </a>

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-white text-3xl relative z-50"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex justify-center items-center px-6">
            <div className="flex flex-col w-full max-w-sm py-8 px-8 space-y-6 text-white bg-white/10 rounded-2xl backdrop-blur-2xl shadow-2xl text-center">
              {["Home", "About", "Portfolio", "Services", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-red-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* ----------- Page Dynamic Content ----------- */}
      {children}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="lc-footer">
        <div className="lc-footer-left">
          <img
            src="/logo.png"
            alt="La Capella Studios"
            className="lc-footer-logo"
          />
          <p>
            © {new Date().getFullYear()} La Capella Studios • All Rights
            Reserved
          </p>
        </div>

        <div className="lc-footer-links">
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="lc-footer-contact">
          <p>contact@lacapellastudios.com</p>
          <p>+91 98765 43210</p>
        </div>
      </footer>
    </>
  );
}
