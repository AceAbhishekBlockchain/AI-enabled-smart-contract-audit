import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { Shield, Eye, Zap, Link as LinkIcon } from 'lucide-react';

import OverviewTab from '@/components/auditor/OverviewTab';
import UploadCodeTab from '@/components/auditor/UploadCodeTab';
import AuditAddressTab from '@/components/auditor/AuditAddressTab';
import AuditResultsTab from '@/components/auditor/AuditResultsTab';
import PredictionTab from '@/components/auditor/PredictionTab';
import TechnologyTab from '@/components/auditor/TechnologyTab';

const AuditorPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [contractCode, setContractCode] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [fileName, setFileName] = useState('');
  const [auditSource, setAuditSource] = useState(''); // 'code' or 'address'
  const [auditResults, setAuditResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const commonAuditLogic = async (source, input) => {
    setIsLoading(true);
    setAuditResults(null);
    setAuditSource(source);
    
    await new Promise(resolve => setTimeout(resolve, 2500)); // Simulate API call

    const mockVulnerabilities = [
      { id: 'VULN001', severity: 'High', type: 'Reentrancy', line: source === 'code' ? 42 : 'N/A', confidence: 0.95, description: 'Potential reentrancy vulnerability in the withdraw function.' },
      { id: 'VULN002', severity: 'Medium', type: 'Integer Overflow', line: source === 'code' ? 101 : 'N/A', confidence: 0.78, description: 'Possible integer overflow when calculating rewards.' },
      { id: 'VULN003', severity: 'Low', type: 'Gas Limit Issue', line: source === 'code' ? 77 : 'N/A', confidence: 0.60, description: 'Function may exceed gas limit with large inputs.' },
    ];
    
    const overallScore = 100 - mockVulnerabilities.reduce((acc, v) => acc + (v.severity === 'High' ? 20 : (v.severity === 'Medium' ? 10 : 5)), 0);

    setAuditResults({
      fileName: source === 'code' ? (fileName || "PastedCode.sol") : `Contract at ${input}`,
      timestamp: new Date().toLocaleString(),
      vulnerabilities: mockVulnerabilities,
      summary: `Found ${mockVulnerabilities.length} potential vulnerabilities. Overall security score: ${Math.max(0, overallScore)}/100.`,
      recommendations: [
        "Implement checks-effects-interactions pattern to prevent reentrancy.",
        "Use SafeMath libraries for arithmetic operations.",
        "Optimize gas usage in loops and complex functions.",
      ],
      predictedVulnerabilities: [
        { type: 'Oracle Manipulation', likelihood: 'Medium', impact: 'High', notes: 'Based on external calls and data dependencies.'},
      ]
    });
    setIsLoading(false);
    setActiveTab('auditResults');
    toast({
      title: "Audit Complete!",
      description: `Security audit for ${source === 'code' ? (fileName || 'pasted code') : input} finished. Check the results tab.`,
    });
  };

  const handleAuditCode = useCallback(() => {
    if (!contractCode) {
      toast({
        title: "No Code Provided",
        description: "Please upload or paste smart contract code to audit.",
        variant: "destructive",
      });
      return;
    }
    commonAuditLogic('code', contractCode);
  }, [contractCode, fileName]);

  const handleAuditAddress = useCallback(() => {
    if (!contractAddress) {
      toast({
        title: "No Address Provided",
        description: "Please enter a smart contract address to audit.",
        variant: "destructive",
      });
      return;
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress)) {
       toast({
        title: "Invalid Address",
        description: "Please enter a valid Ethereum-style address.",
        variant: "destructive",
      });
      return;
    }
    commonAuditLogic('address', contractAddress);
  }, [contractAddress]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
            <Shield className="w-4 h-4" />
            Smart Contract Security Auditor
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            AI-Powered Vulnerability Prediction
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage advanced AI to audit your smart contracts, identify vulnerabilities, and predict potential security risks before deployment.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-white/10 backdrop-blur-sm border-white/20 shadow-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upload">Upload Code</TabsTrigger>
            <TabsTrigger value="auditAddress">Audit Address</TabsTrigger>
            <TabsTrigger value="auditResults">Audit Results</TabsTrigger>
            <TabsTrigger value="prediction">Prediction</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
          </TabsList>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="overview" className="mt-8">
              <OverviewTab setActiveTab={setActiveTab} />
            </TabsContent>

            <TabsContent value="upload" className="mt-8">
              <UploadCodeTab 
                contractCode={contractCode}
                setContractCode={setContractCode}
                fileName={fileName}
                setFileName={setFileName}
                handleAudit={handleAuditCode}
                isLoading={isLoading}
              />
            </TabsContent>
            
            <TabsContent value="auditAddress" className="mt-8">
              <AuditAddressTab
                contractAddress={contractAddress}
                setContractAddress={setContractAddress}
                handleAudit={handleAuditAddress}
                isLoading={isLoading}
              />
            </TabsContent>

            <TabsContent value="auditResults" className="mt-8">
              <AuditResultsTab
                auditResults={auditResults}
                isLoading={isLoading}
                auditSource={auditSource}
              />
            </TabsContent>

            <TabsContent value="prediction" className="mt-8">
              <PredictionTab
                auditResults={auditResults}
                isLoading={isLoading}
              />
            </TabsContent>

            <TabsContent value="technology" className="mt-8">
              <TechnologyTab />
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
};

export default AuditorPage;