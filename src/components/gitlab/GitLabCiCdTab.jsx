import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Users, ArrowRight } from 'lucide-react';

const GitLabCiCdTab = ({ cicdComponents }) => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-400" />
              GitLab CI/CD Pipeline
            </CardTitle>
            <CardDescription className="text-gray-400">
              Automated workflows for faster, more reliable software delivery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Build Stage</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="text-blue-400 text-sm font-medium">Frontend Build</div>
                    <div className="text-gray-400 text-xs">React compilation & optimization</div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                    <div className="text-green-400 text-sm font-medium">Backend Build</div>
                    <div className="text-gray-400 text-xs">Node.js containerization</div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                    <div className="text-purple-400 text-sm font-medium">Smart Contracts</div>
                    <div className="text-gray-400 text-xs">Solidity compilation</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-medium">Test Stage</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                    <div className="text-yellow-400 text-sm font-medium">Unit Tests</div>
                    <div className="text-gray-400 text-xs">Jest & React Testing Library</div>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30">
                    <div className="text-red-400 text-sm font-medium">Integration Tests</div>
                    <div className="text-gray-400 text-xs">API & blockchain testing</div>
                  </div>
                  <div className="p-3 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                    <div className="text-indigo-400 text-sm font-medium">Security Scans</div>
                    <div className="text-gray-400 text-xs">Vulnerability assessment</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-medium">Deploy Stage</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
                    <div className="text-orange-400 text-sm font-medium">Staging Deploy</div>
                    <div className="text-gray-400 text-xs">Google Cloud Run</div>
                  </div>
                  <div className="p-3 rounded-lg bg-pink-500/20 border border-pink-500/30">
                    <div className="text-pink-400 text-sm font-medium">Contract Deploy</div>
                    <div className="text-gray-400 text-xs">Testnet deployment</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                    <div className="text-cyan-400 text-sm font-medium">Production</div>
                    <div className="text-gray-400 text-xs">Automated rollout</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              CI/CD Catalog Contributions
            </CardTitle>
            <CardDescription className="text-gray-400">
              Reusable components for the GitLab community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cicdComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-white font-medium mb-2">{component.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{component.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-green-400 text-green-400 text-xs">
                      {component.usage}
                    </Badge>
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GitLabCiCdTab;