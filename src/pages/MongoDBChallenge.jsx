import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PDFGenerator } from '@/components/PDFGenerator';
import { 
  mongoDbDatasets, 
  mongoDbFeatures, 
  mongoDbReportContent 
} from '@/components/mongodb/mongoDbData';
import MongoDbOverviewTab from '@/components/mongodb/MongoDbOverviewTab';
import MongoDbFeaturesTab from '@/components/mongodb/MongoDbFeaturesTab';
import MongoDbDatasetsTab from '@/components/mongodb/MongoDbDatasetsTab';
import MongoDbDemoTab from '@/components/mongodb/MongoDbDemoTab';

const MongoDBChallenge = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              MongoDB Challenge
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Advanced data analytics with MongoDB Atlas Search and Vector Search
            </p>
            <div className="flex justify-center">
              <PDFGenerator 
                title="MongoDB Atlas Challenge - Advanced Data Analytics Report"
                content={mongoDbReportContent}
                filename="mongodb-challenge-report.pdf"
              />
            </div>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 glass-effect border-white/20">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="demo">Live Demo</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <MongoDbOverviewTab />
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <MongoDbFeaturesTab features={mongoDbFeatures} />
            </TabsContent>

            <TabsContent value="datasets" className="mt-8">
              <MongoDbDatasetsTab datasets={mongoDbDatasets} />
            </TabsContent>

            <TabsContent value="demo" className="mt-8">
              <MongoDbDemoTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MongoDBChallenge;