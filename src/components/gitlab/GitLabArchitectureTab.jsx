import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield } from 'lucide-react';

const GitLabArchitectureTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-blue-400" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                <h4 className="text-white font-medium mb-2">Frontend Layer</h4>
                <p className="text-sm">React 18 with TypeScript, TailwindCSS, and Web3 integration for blockchain interactions</p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
                <h4 className="text-white font-medium mb-2">API Gateway</h4>
                <p className="text-sm">Node.js with Express, handling authentication, rate limiting, and request routing</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <h4 className="text-white font-medium mb-2">Blockchain Layer</h4>
                <p className="text-sm">Ethereum smart contracts for model registry, payments, and governance</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-500/20 border border-orange-500/30">
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <p className="text-sm">Google Vertex AI for model hosting, vector search, and semantic analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Security & Scalability
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Security Measures</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Multi-signature wallet integration</li>
                  <li>• Smart contract auditing pipeline</li>
                  <li>• OAuth 2.0 + JWT authentication</li>
                  <li>• Rate limiting and DDoS protection</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Scalability Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Kubernetes orchestration</li>
                  <li>• Auto-scaling based on demand</li>
                  <li>• CDN for global content delivery</li>
                  <li>• Database sharding and replication</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Monitoring</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Real-time performance metrics</li>
                  <li>• Blockchain transaction monitoring</li>
                  <li>• AI model usage analytics</li>
                  <li>• Automated alerting system</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GitLabArchitectureTab;