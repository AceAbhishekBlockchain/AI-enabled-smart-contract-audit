import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Zap } from 'lucide-react';

const OverviewTab = ({ setActiveTab }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 flex items-center gap-2">
          <Eye size={28} /> Welcome to the Future of Smart Contract Security
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Our AI-driven platform provides comprehensive security analysis for your smart contracts.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-200">
        <p>
          In the rapidly evolving world of blockchain, security is paramount. Smart contract vulnerabilities can lead to catastrophic losses. This tool empowers developers and auditors by:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><span className="font-semibold text-purple-300">Automated Auditing:</span> Quickly scan your Solidity code or contract address for known vulnerabilities.</li>
          <li><span className="font-semibold text-pink-300">AI-Powered Prediction:</span> Identify potential zero-day exploits and complex attack vectors.</li>
          <li><span className="font-semibold text-indigo-300">Actionable Insights:</span> Receive clear explanations and recommendations for mitigation.</li>
          <li><span className="font-semibold text-red-300">Continuous Security:</span> Integrate with your GitLab CI/CD pipeline for ongoing protection.</li>
        </ul>
        <p>
          Secure your decentralized applications with cutting-edge AI technology and build with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center pt-4 gap-4">
          <Button onClick={() => setActiveTab('upload')} className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-lg px-8 py-6 shadow-lg">
            <Zap size={20} className="mr-2" /> Audit Code
          </Button>
          <Button onClick={() => setActiveTab('auditAddress')} className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-lg px-8 py-6 shadow-lg">
            <Zap size={20} className="mr-2" /> Audit Address
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewTab;