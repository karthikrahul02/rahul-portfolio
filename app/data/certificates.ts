export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
  note?: string;
};

export const certificates: Certificate[] = [
  { id: "network-fundamentals", title: "Network Fundamentals", issuer: "Infosys / Springboard", date: "November 2025", file: "/certificates/network-fundamentals.pdf" },
  { id: "hands-on-ai", title: "Hands-On Workshop on Python, Feature Engineering, EDA, and Machine Learning Algorithms", issuer: "AI_WORKS@DSU + Humans Care Foundation", date: "October 2025", file: "/certificates/hands-on-ai-workshop.pdf" },
  { id: "ui-ux-workshop", title: "One-Day Online Workshop on UI/UX", issuer: "Department of CSE, Dayananda Sagar University", date: "July 2025", file: "/certificates/ui-ux-workshop-participation.pdf" },
  { id: "recurzive-v2", title: "Recurzive V2 International Hackathon — Certificate of Appreciation", issuer: "Dayananda Sagar College of Engineering", date: "September 2025", file: "/certificates/recurzive-v2-hackathon-participation.pdf" },
  { id: "matlab-onramp", title: "MATLAB Onramp", issuer: "MathWorks Training Services", date: "November 2025", file: "/certificates/matlab-onramp.pdf", },
  { id: "image-processing-onramp", title: "Image Processing Onramp", issuer: "MathWorks Training Services", date: "November 2025", file: "/certificates/image-processing-onramp.pdf", },
  { id: "image-processing-with-matlab", title: "Image Processing with MATLAB", issuer: "MathWorks Training Services", date: "November 2025", file: "/certificates/image-processing-with-matlab.pdf", },
  { id: "skill-up-java", title: "Skill UP in JAVA Programming", issuer: "Infosys / Springboard", date: "December 2024", file: "/certificates/skill-up-java-programming.pdf" },
  { id: "start-core-java", title: "Start Programming in Core JAVA", issuer: "Infosys / Springboard", date: "December 2024", file: "/certificates/start-programming-core-java.pdf" },
  { id: "java-9-functional", title: "Java 9 Functional Data Processing", issuer: "Infosys / Springboard", date: "December 2024", file: "/certificates/java-9-functional-data-processing.pdf" },
  { id: "java-web-services", title: "Java Web Services Program Execution", issuer: "Infosys / Springboard", date: "December 2024", file: "/certificates/java-web-services-program-execution.pdf" },
];
