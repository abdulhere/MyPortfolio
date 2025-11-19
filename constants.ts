import { Project, SkillCategory, Certification, Education } from './types';
import { Monitor, Cpu, Terminal, Database, Layout, Cloud, Award, BookOpen, Bot, ClipboardCheck } from 'lucide-react';

// BEST PRACTICE: Use an asset in `public/` so Vite includes it in builds.
// The file `public/profile.jpg` is served at `/profile.jpg` at runtime.
export const PROFILE_IMAGE_URL = "/profile.jpg";

export const CONTACT_INFO = {
  name: "Abdul Rahuman S",
  role: "Quality Engineer",
  email: "sar.abdulrahuman@gmail.com",
  phone: "7708181026",
  location: "Bengaluru, Karnataka",
  visa: "H1B Visa Holder (Valid until Sep 2027)",
  summary: "With more than four and a half years of expertise in both automation and manual testing on mobile, web, and API platforms, I am a meticulous quality assurance engineer, adept at using Pytest-BDD, Appium, and Selenium to create reliable frameworks. Proven track record of reducing redundancy by 35% and enhancing API stability by 25% for Fortune 500 clients in Banking, Insurance, and Hospitality."
};

export const WORK_HISTORY_SUMMARY = [
  {
    title: "Automation Strategy & Architecture",
    description: "Designed and maintained scalable hybrid frameworks (Selenium, Appium, Pytest-BDD) enabling 95% regression pass rates."
  },
  {
    title: "Full Stack QA Leadership",
    description: "Managed SDLC/STLC lifecycles including test estimation, test data staging, and delivery of comprehensive test reports to stakeholders."
  },
  {
    title: "CI/CD & DevOps Integration",
    description: "Seamlessly integrated automated suites with Jenkins and Bamboo, enabling continuous feedback loops."
  },
  {
    title: "Mentorship & Collaboration",
    description: "Mentored junior QE teams, conducted code reviews, and led agile ceremonies to align QA with business goals."
  }
];

export const IBM_TIMELINE = [
  {
    role: "Full Stack Tester",
    period: "2022 - Present",
    description: "Promoted after completing rigorous 6-month Full Stack Testing training. Currently deployed on high-impact projects across Banking & Hospitality."
  },
  {
    role: "Test Automation Specialist",
    period: "2021 - 2022",
    description: "Advanced from graduate hire within one year due to performance excellence. Specialized in building automation solutions for key accounts."
  },
  {
    role: "Graduate Hire",
    period: "Jan 2021",
    description: "Joined IBM, quickly adapting to corporate agile environments and mastering core testing methodologies."
  }
];

export const PROJECTS: Project[] = [
  {
    client: "PNC Bank",
    name: "PNC Mobile Banking App",
    role: "Test Automation Lead",
    period: "07/2023 - Present",
    startYear: 2023,
    endYear: 'Present',
    description: [
      "Led test automation for the 'Paze' digital wallet, integrating Pytest-BDD with Sauce Labs.",
      "Developed custom reporting features and optimized the framework with YAML-based locators.",
      "Implemented data-driven testing using Excel, increasing reusability and reducing redundancy by 35%.",
      "Owned API testing using Postman and conducted Accessibility Testing (WCAG compliance).",
      "Drafted test strategy documents and presented weekly status reports to stakeholders."
    ],
    technologies: ["Pytest-BDD", "Sauce Labs", "Python", "Postman", "Accessibility Testing"]
  },
  {
    client: "AMADEUS",
    name: "SECO UI",
    role: "Test Automation Engineer",
    period: "08/2022 - 06/2023",
    startYear: 2022,
    endYear: 2023,
    description: [
      "Automated End-to-End UI test cases using Robot Framework for a hospitality platform.",
      "Performed comprehensive regression testing for APIs using SoapUI",
      "Optimized test execution time by 20% through test suite modularization."
    ],
    technologies: ["Robot Framework", "SoapUI", "UI Automation", "Regression Testing"]
  },
  {
    client: "METLIFE",
    name: "Pet Mobile App",
    role: "Lead QE",
    period: "05/2021 - 07/2022",
    startYear: 2021,
    endYear: 2022,
    description: [
      "Automated test cases using an in-house Appium-based framework integrated with Perfecto Mobile Lab.",
      "Mentored and led a 3-member QE team, ensuring delivery timelines were met.",
      "Utilized Azure DevOps for defect management and requirement analysis."
    ],
    technologies: ["Appium", "Perfecto Mobile", "Azure DevOps", "Mobile Testing"]
  },
  {
    client: "METLIFE",
    name: "Chile Digital Agency",
    role: "QA Engineer",
    period: "02/2021 - 05/2021",
    startYear: 2021,
    endYear: 2021,
    description: [
      "Maintained and optimized a Java-based Selenium WebDriver framework integrated with TestNG.",
      "Executed daily sanity and regression tests, ensuring a 95% test pass rate.",
      "Improved test reporting efficiency by integrating results with QTest."
    ],
    technologies: ["Selenium WebDriver", "Java", "TestNG", "QTest"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "GenAI",
    icon: "Bot",
    skills: ["Vibe Coding (AI-Assisted Dev)", "Prompt Engineering", "Google Gemini AI Studio", "AI-Driven Test Generation", "LLM Integration"]
  },
  {
    name: "Automation Tools",
    icon: "Cpu",
    skills: ["Selenium WebDriver", "Appium", "Robot Framework", "Pytest-BDD", "Rest Assured"]
  },
  {
    name: "Languages",
    icon: "Terminal",
    skills: ["Java", "Python", "SQL"]
  },
  {
    name: "API & Performance",
    icon: "Monitor",
    skills: ["Postman", "SoapUI", "JMeter"]
  },
  {
    name: "Frameworks",
    icon: "Layout",
    skills: ["TestNG", "POM (Page Object Model)", "Pytest", "ROBOT"]
  },
  {
    name: "CI/CD & Cloud",
    icon: "Cloud",
    skills: ["Maven", "Git", "Bitbucket", "Bamboo", "Azure DevOps"]
  },
  {
    name: "Mobile & Management",
    icon: "Database",
    skills: ["Perfecto Lab", "SeeTest", "Sauce Labs", "Jira", "QTest"]
  },
  {
    name: "QA Methodologies & Process",
    icon: "ClipboardCheck",
    skills: [
      "Agile (Scrum/Kanban)",
      "SAFe 5 Practitioner",
      "Test Strategy & Planning",
      "Test Estimation Techniques",
      "Manual Testing (BVA/EP)",
      "Accessibility testing",
      "Test Data Management",
      "Defect Lifecycle & Triage",
      "Root Cause Analysis",
      "Risk-Based Testing",
      "Test Deliverables & Reporting"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "ISTQB Foundation Level Certified" },
  { name: "Microsoft Azure Fundamentals (AZ-900)" },
  { name: "AWS Certified Cloud Practitioner" },
  { name: "SAFe 5 Practitioner – Scaled Agile" },
  { name: "Full Stack Testing – IIHT Ltd." },
  { name: "Business English Certificate (BEC) Preliminary – Cambridge University" }
];

export const EDUCATION: Education = {
  degree: "B.E – Instrumentation Engineering",
  institution: "Sri Krishna College, Coimbatore",
  year: "2016 – 2020"
};