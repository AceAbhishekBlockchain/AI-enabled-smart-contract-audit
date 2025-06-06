import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Brain, BarChart3, Filter } from 'lucide-react';

const MongoDbDemoTab = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-3xl">Interactive Search Demo</CardTitle>
          <CardDescription className="text-white/70 text-lg">
            Experience the power of MongoDB Atlas Search and Vector Search
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search across all datasets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <Search size={16} className="mr-2" />
                Search
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Search className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Text Search</h4>
                <p className="text-white/70">Full-text search with fuzzy matching</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Brain className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Vector Search</h4>
                <p className="text-white/70">AI-powered semantic discovery</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Analytics</h4>
                <p className="text-white/70">Real-time data insights</p>
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                className="w-full h-96 object-cover rounded-lg neon-glow"
                alt="MongoDB Atlas search interface demo"
               src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MongoDbDemoTab;