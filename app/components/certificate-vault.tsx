"use client";

import { useState } from "react";
import { certificates } from "../data/certificates";

function DocumentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="certificate-document-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14 3.5V9h5M9 13h6M9 16.5h6" />
    </svg>
  );
}

export default function CertificateVault() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="certifications" className="certificate-section">
      <div className="certificate-section-heading">
        <p className="certificate-eyebrow">CERTIFICATION</p>
        <h2>AN ANIMATED VAULT FOR CERTIFICATES.</h2>
      </div>

      <div className="certificate-vault-control">
        <div>
          <p>Open the vault to browse certificates and view the original PDF documents.</p>
          <p className="certificate-count">{String(certificates.length).padStart(2, "0")} CERTIFICATE FILES LOADED</p>
        </div>
        <button type="button" className="certificate-vault-toggle" aria-expanded={isOpen} aria-controls="certificate-grid" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? "COLLAPSE VAULT" : "OPEN VAULT"} <span aria-hidden="true">{isOpen ? "⌘" : "↗"}</span>
        </button>
      </div>

      <div id="certificate-grid" className={`certificate-grid ${isOpen ? "is-open" : "is-closed"}`} aria-hidden={!isOpen}>
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.id} style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
            <div className="certificate-card-top">
              <DocumentIcon />
              <span className="certificate-open-label">PDF</span>
            </div>
            <h3>{certificate.title}</h3>
            <p className="certificate-issuer">{certificate.issuer}</p>
            <p className="certificate-date"><span aria-hidden="true">▦</span>{certificate.date}</p>
            {certificate.note && <p className="certificate-note">{certificate.note}</p>}
            <a className="certificate-open-link" href={certificate.file} target="_blank" rel="noopener noreferrer" aria-label={`Open ${certificate.title} PDF in a new tab`} tabIndex={isOpen ? 0 : -1}>
              OPEN PDF <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
