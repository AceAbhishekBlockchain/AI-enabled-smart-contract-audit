import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GitBranch, 
  Cloud, 
  Zap, 
  Code, 
  Database, 
  Shield, 
  Rocket, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Download,
  Cpu,
  Network,
  Settings
} from 'lucide-react';
import { PDFGenerator } from '@/components/PDFGenerator';
import Navigation from '@/components/Navigation';
import { 
  gitlabFeatures, 
  gitlabTechStack, 
  gitlabRoadmap, 
  gitlabCicdComponents, 
  gitlabPdfData 
} from '@/components/gitlab/gitlabData';
import GitLabOverviewTab from '@/components/gitlab/GitLabOverviewTab';
import GitLabArchitectureTab from '@/components/gitlab/GitLabArchitectureTab';
import GitLabRoadmapTab from '@/components/gitlab/GitLabRoadmapTab';
import GitLabCiCdTab from '@/components/gitlab/GitLabCiCdTab';
import GitLabDemoTab from '@/components/gitlab/GitLabDemoTab';


const GitLabChallenge = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" />
            GitLab Challenge
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            AI-Enabled Blockchain Application
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Building Software. Faster. - A revolutionary decentralized AI model marketplace 
            showcasing GitLab's power in modern software development
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Rocket className="w-4 h-4 mr-2" />
              Start Building
            </Button>
            <PDFGenerator 
              title={gitlabPdfData.title}
              content={gitlabPdfData.sections.map(s => `${s.title}\n${s.content}`).join('\n\n')}
              filename="gitlab-challenge-report.pdf"
            />
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="cicd">CI/CD</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <GitLabOverviewTab features={gitlabFeatures} techStack={gitlabTechStack} />
          </TabsContent>

          <TabsContent value="architecture" className="mt-8">
            <GitLabArchitectureTab />
          </TabsContent>

          <TabsContent value="roadmap" className="mt-8">
            <GitLabRoadmapTab roadmap={gitlabRoadmap} />
          </TabsContent>

          <TabsContent value="cicd" className="mt-8">
            <GitLabCiCdTab cicdComponents={gitlabCicdComponents} />
          </TabsContent>

          <TabsContent value="demo" className="mt-8">
            <GitLabDemoTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default GitLabChallenge;