import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Database, Search, Brain, BarChart3, Globe, TrendingUp } from 'lucide-react';

const MongoDbOverviewTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass-effect border-white/20 h-full">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center space-x-2">
              <Database className="text-green-400" />
              <span>MongoDB Atlas Platform</span>
            </CardTitle>
            <CardDescription className="text-white/70 text-lg">
              Powerful data analytics with modern search capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white/80">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Search className="text-blue-400" size={16} />
                <span>Full-text search with advanced query capabilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <Brain className="text-purple-400" size={16} />
                <span>AI-powered vector search for semantic discovery</span>
              </li>
              <li className="flex items-center space-x-2">
                <BarChart3 className="text-yellow-400" size={16} />
                <span>Google Cloud integration for advanced analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="text-cyan-400" size={16} />
                <span>Real-time data visualization and insights</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="glass-effect border-white/20 h-full">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center space-x-2">
              <TrendingUp className="text-emerald-400" />
              <span>Key Benefits</span>
            </CardTitle>
            <CardDescription className="text-white/70 text-lg">
              Transform data into actionable insights
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white/80">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Analytics Capabilities:</h4>
                <ul className="space-y-2">
                  <li>• Real-time data processing and analysis</li>
                  <li>• Machine learning-powered insights</li>
                  <li>• Interactive dashboards and visualizations</li>
                  <li>• Scalable cloud infrastructure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MongoDbOverviewTab;