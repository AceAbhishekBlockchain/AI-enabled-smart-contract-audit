import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, GitBranch, Cloud, Rocket } from 'lucide-react';

const GitLabDemoTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Live Demo Preview
          </CardTitle>
          <CardDescription className="text-gray-400">
            Interactive prototype of the AI model marketplace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-medium">Marketplace Features</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">AI Model Discovery Engine</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Blockchain Payment Processing</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Real-time Model Testing</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Automated Quality Scoring</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium">Development Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">50%</div>
                  <div className="text-gray-400 text-sm">Faster Deployment</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Target</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">10K+</div>
                  <div className="text-gray-400 text-sm">Concurrent Users</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">24/7</div>
                  <div className="text-gray-400 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
            <h4 className="text-white font-medium mb-4">Next Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <GitBranch className="w-4 h-4 mr-2" />
                Fork Repository
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Cloud className="w-4 h-4 mr-2" />
                Setup Google Cloud
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Rocket className="w-4 h-4 mr-2" />
                Deploy Pipeline
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GitLabDemoTab;