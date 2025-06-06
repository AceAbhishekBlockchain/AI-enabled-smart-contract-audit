import { Cpu, Shield, Network, Settings } from 'lucide-react';

export const gitlabFeatures = [
  {
    iconName: "Cpu",
    title: "AI Model Registry",
    description: "Decentralized marketplace for AI models with blockchain verification"
  },
  {
    iconName: "Shield",
    title: "Smart Contracts",
    description: "Secure transactions and model licensing through blockchain"
  },
  {
    iconName: "Network",
    title: "Semantic Search",
    description: "AI-powered model discovery with vector embeddings"
  },
  {
    iconName: "Settings",
    title: "Automated Testing",
    description: "CI/CD pipelines for model validation and deployment"
  }
];

export const gitlabTechStack = [
  { name: "Frontend", tech: "React + TypeScript", color: "bg-blue-500" },
  { name: "Backend", tech: "Node.js + Express", color: "bg-green-500" },
  { name: "Blockchain", tech: "Ethereum + Solidity", color: "bg-purple-500" },
  { name: "AI/ML", tech: "Google Vertex AI", color: "bg-orange-500" },
  { name: "Cloud", tech: "Google Cloud Platform", color: "bg-red-500" },
  { name: "DevOps", tech: "GitLab CI/CD", color: "bg-indigo-500" }
];

export const gitlabRoadmap = [
  {
    phase: "Phase 1",
    title: "Foundation Setup",
    duration: "Weeks 1-2",
    tasks: [
      "GitLab repository structure",
      "Google Cloud project setup",
      "Basic React frontend",
      "Smart contract templates"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Core Development",
    duration: "Weeks 3-6",
    tasks: [
      "AI model registry implementation",
      "Blockchain integration",
      "User authentication system",
      "Basic marketplace UI"
    ]
  },
  {
    phase: "Phase 3",
    title: "Advanced Features",
    duration: "Weeks 7-10",
    tasks: [
      "Vector search implementation",
      "Payment processing",
      "Model validation system",
      "Advanced analytics"
    ]
  },
  {
    phase: "Phase 4",
    title: "Production Ready",
    duration: "Weeks 11-12",
    tasks: [
      "Security audits",
      "Performance optimization",
      "Documentation completion",
      "Deployment automation"
    ]
  }
];

export const gitlabCicdComponents = [
  {
    name: "Smart Contract Deployer",
    description: "Automated deployment of Solidity contracts to multiple networks",
    usage: "Reusable across blockchain projects"
  },
  {
    name: "AI Model Validator",
    description: "Automated testing and validation of ML models",
    usage: "Standard component for AI/ML pipelines"
  },
  {
    name: "Security Scanner",
    description: "Comprehensive security analysis for web3 applications",
    usage: "Essential for blockchain security"
  },
  {
    name: "Performance Monitor",
    description: "Real-time monitoring and alerting for distributed systems",
    usage: "Critical for production deployments"
  }
];

export const gitlabPdfData = {
  title: "GitLab Challenge: AI-Enabled Blockchain Application",
  subtitle: "Building Software. Faster. - Decentralized AI Model Marketplace",
  sections: [
    {
      title: "Executive Summary",
      content: "This project demonstrates GitLab's capability to accelerate software development through a cutting-edge AI-enabled blockchain application. The Decentralized AI Model Marketplace showcases modern development practices, cloud integration, and innovative CI/CD workflows."
    },
    {
      title: "Technical Architecture",
      content: "The application leverages a microservices architecture with React frontend, Node.js backend, Ethereum blockchain integration, and Google Cloud AI services. GitLab CI/CD orchestrates the entire development lifecycle."
    },
    {
      title: "Key Features",
      content: gitlabFeatures.map(f => `• ${f.title}: ${f.description}`).join('\n')
    },
    {
      title: "Technology Stack",
      content: gitlabTechStack.map(t => `• ${t.name}: ${t.tech}`).join('\n')
    },
    {
      title: "Development Roadmap",
      content: gitlabRoadmap.map(r => `${r.phase} - ${r.title} (${r.duration})\n${r.tasks.map(task => `  • ${task}`).join('\n')}`).join('\n\n')
    },
    {
      title: "GitLab CI/CD Catalog Contributions",
      content: gitlabCicdComponents.map(c => `• ${c.name}: ${c.description}\n  Usage: ${c.usage}`).join('\n\n')
    },
    {
      title: "Expected Outcomes",
      content: "• 50% faster development cycles through automated CI/CD\n• Reusable components for blockchain development\n• Scalable architecture supporting 10,000+ concurrent users\n• Production-ready deployment on Google Cloud\n• Comprehensive security and testing frameworks"
    }
  ]
};