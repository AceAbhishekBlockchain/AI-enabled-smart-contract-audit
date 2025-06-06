import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Database, Cpu, BarChart3 } from 'lucide-react';

const TechnologyTab = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center gap-2">
          <Cpu size={28} /> Technology Stack
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          The core technologies powering our AI Security Auditor.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6 text-gray-200">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <GitBranch size={24} className="text-orange-400 mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-orange-300">GitLab CI/CD</h4>
              <p className="text-sm">For continuous integration, automated testing, and secure deployment pipelines. Ensures security checks are part of every code commit.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <Database size={24} className="text-green-400 mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-green-300">MongoDB Atlas</h4>
              <p className="text-sm">Utilized for storing vulnerability patterns, audit histories, and training data for AI models. Atlas Search and Vector Search enhance data retrieval and analysis.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <Cpu size={24} className="text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-purple-300">AI/ML Engine</h4>
              <p className="text-sm">Custom-trained models (e.g., using TensorFlow/PyTorch on Google Vertex AI) for static analysis, pattern recognition, and vulnerability prediction.</p>
            </div>
          </div>
           <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <BarChart3 size={24} className="text-cyan-400 mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-cyan-300">React & TailwindCSS</h4>
              <p className="text-sm">For a responsive, modern, and intuitive user interface, allowing seamless interaction with the audit and prediction services.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyTab;