import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Brain, GitMerge, Database, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Rapid AI Analysis',
      description: 'Leverage cutting-edge AI to swiftly audit smart contracts for vulnerabilities.',
      color: 'text-yellow-400',
    },
    {
      icon: Brain,
      title: 'Predictive Insights',
      description: 'Go beyond current bugs; predict potential future vulnerabilities based on patterns.',
      color: 'text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: 'Comprehensive Security',
      description: 'Get detailed reports and actionable recommendations to fortify your contracts.',
      color: 'text-green-400',
    },
     {
      icon: GitMerge,
      title: 'GitLab Integration',
      description: 'Seamlessly integrate with GitLab CI/CD pipelines for automated security checks.',
      color: 'text-orange-400',
    },
    {
      icon: Database,
      title: 'MongoDB Powered',
      description: 'Utilizes MongoDB for efficient storage and analysis of audit data and vulnerability patterns.',
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 opacity-75"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 p-3 bg-white/10 rounded-full shadow-xl">
              <ShieldCheck className="w-16 h-16 text-emerald-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-white">Smart Contract Security</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Automatically audit your smart contracts, predict vulnerabilities, and secure your decentralized applications with our intelligent platform.
            </p>
            <Link to="/auditor">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Start Auditing Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <img 
              className="mx-auto w-full max-w-4xl h-auto object-contain rounded-xl shadow-2xl border-2 border-cyan-500/30" 
              alt="Abstract representation of AI analyzing secure code blocks" src="https://images.unsplash.com/photo-1592505633903-e77dc19978ac" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/50 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Auditor?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <Card className="glass-effect border-white/10 h-full hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20">
                    <CardHeader className="items-center">
                      <div className={`p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-4 shadow-md`}>
                        <Icon className={`w-10 h-10 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-white text-2xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-300 text-md leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 border-t border-white/10 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Security Auditor. All rights reserved.</p>
          <p className="text-sm mt-2">Securing the future of decentralized applications.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;