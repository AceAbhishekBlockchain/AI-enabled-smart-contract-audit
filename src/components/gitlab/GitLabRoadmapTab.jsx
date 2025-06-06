import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, CheckCircle } from 'lucide-react';

const GitLabRoadmapTab = ({ roadmap }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Rocket className="w-5 h-5 text-purple-400" />
            Development Roadmap
          </CardTitle>
          <CardDescription className="text-gray-400">
            12-week development timeline with key milestones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{phase.phase}: {phase.title}</h3>
                      <Badge variant="outline" className="border-purple-400 text-purple-400">
                        {phase.duration}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < roadmap.length - 1 && (
                  <div className="absolute left-4 top-8 w-px h-full -bottom-6 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GitLabRoadmapTab;