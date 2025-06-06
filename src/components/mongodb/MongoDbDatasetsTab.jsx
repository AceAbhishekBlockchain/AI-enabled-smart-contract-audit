import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MongoDbDatasetsTab = ({ datasets }) => {
  return (
    <div className="space-y-6">
      {datasets.map((dataset, index) => (
        <motion.div
          key={dataset.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Card className="glass-effect border-white/20 hover:neon-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-2xl">{dataset.title}</CardTitle>
                  <CardDescription className="text-white/70 text-lg mt-2">
                    {dataset.description}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-white/10 text-white mb-2">
                    {dataset.category}
                  </Badge>
                  <p className="text-white/60 text-sm">{dataset.size}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dataset.features.map((feature) => (
                  <Badge key={feature} variant="outline" className="border-white/20 text-white/80">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default MongoDbDatasetsTab;