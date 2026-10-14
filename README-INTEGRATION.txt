RAHUL'S CERTIFICATION VAULT — INTEGRATION PACK

Copy into your existing Next.js project:
1. Copy public/certificates/* into your project's public/certificates/ folder.
2. Copy app/data/certificates.ts into app/data/ (create folder if needed).
3. Copy app/components/certificate-vault.tsx into app/components/ (create folder if needed).
4. Append certificate-vault.css to the END of app/globals.css.
5. In app/page.tsx add: import CertificateVault from "./components/certificate-vault";
6. Render <CertificateVault /> where you want the section, preferably before Contact.
7. Add a nav link: <a href="#certifications">CERTIFICATION</a>
8. Run npm run dev and test each OPEN PDF link.

NOTES:
- 11 PDF files were uploaded. Your screenshot showed 12 cards, but there was no separate "Introduction to Artificial Intelligence" PDF in this upload batch. Add it when you have that document.
- The MathWorks MATLAB Onramp file states 85% completed; Image Processing Onramp states 93%; Image Processing with MATLAB states 6%. The data notes these progress figures accurately. Consider leaving the 6% item off the public portfolio.
- Files in public/ are publicly accessible.
