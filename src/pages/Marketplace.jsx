
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Star, Download, Zap, Shield, Users, Search, Filter } from 'lucide-react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiModels = [
    {
      id: 1,
      name: 'GPT-4 Text Generator',
      description: 'Advanced language model for text generation and completion',
      category: 'NLP',
      price: '0.05 ETH',
      rating: 4.9,
      downloads: 15420,
      creator: 'OpenAI Labs',
      tags: ['Text Generation', 'Language Model', 'GPT'],
      verified: true,
    },
    {
      id: 2,
      name: 'Vision Transformer',
      description: 'State-of-the-art image classification and object detection',
      category: 'Computer Vision',
      price: '0.03 ETH',
      rating: 4.7,
      downloads: 8930,
      creator: 'Google Research',
      tags: ['Image Classification', 'Object Detection', 'Transformer'],
      verified: true,
    },
    {
      id: 3,
      name: 'Sentiment Analyzer Pro',
      description: 'Real-time sentiment analysis for social media and reviews',
      category: 'NLP',
      price: '0.02 ETH',
      rating: 4.6,
      downloads: 12340,
      creator: 'SentimentAI',
      tags: ['Sentiment Analysis', 'Social Media', 'Reviews'],
      verified: false,
    },
    {
      id: 4,
      name: 'Speech Recognition Engine',
      description: 'High-accuracy speech-to-text conversion in multiple languages',
      category: 'Audio',
      price: '0.04 ETH',
      rating: 4.8,
      downloads: 6780,
      creator: 'AudioTech Inc',
      tags: ['Speech Recognition', 'Multilingual', 'Real-time'],
      verified: true,
    },
    {
      id: 5,
      name: 'Recommendation System',
      description: 'Personalized recommendation engine for e-commerce platforms',
      category: 'Recommendation',
      price: '0.06 ETH',
      rating: 4.5,
      downloads: 9870,
      creator: 'RecSys Labs',
      tags: ['Recommendations', 'E-commerce', 'Personalization'],
      verified: true,
    },
    {
      id: 6,
      name: 'Fraud Detection AI',
      description: 'Advanced fraud detection for financial transactions',
      category: 'Security',
      price: '0.08 ETH',
      rating: 4.9,
      downloads: 4560,
      creator: 'SecureAI',
      tags: ['Fraud Detection', 'Finance', 'Security'],
      verified: true,
    },
  ];

  const categories = ['all', 'NLP', 'Computer Vision', 'Audio', 'Recommendation', 'Security'];

  const filteredModels = aiModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: 'AI Models', value: '2,500+', icon: Brain },
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Total Downloads', value: '1M+', icon: Download },
    { label: 'Verified Creators', value: '500+', icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              AI Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Discover, test, and deploy AI models on the world's first decentralized AI marketplace
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-effect border-white/20 text-center hover:neon-glow transition-all duration-300">
                    <CardContent className="pt-6">
                      <Icon className="mx-auto mb-2 text-purple-400" size={32} />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/70">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Search and Filters */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-white/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                      <Input
                        placeholder="Search AI models, creators, or tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category 
                          ? "bg-gradient-to-r from-purple-500 to-pink-600" 
                          : "border-white/20 text-white hover:bg-white/10"
                        }
                      >
                        {category === 'all' ? 'All Categories' : category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Models Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-effect border-white/20 h-full hover:neon-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-white text-xl">{model.name}</CardTitle>
                          {model.verified && (
                            <Shield className="text-green-400" size={16} />
                          )}
                        </div>
                        <CardDescription className="text-white/70">
                          {model.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="secondary" className="bg-white/10 text-white">
                        {model.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-white/80 text-sm">{model.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {model.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <span>by {model.creator}</span>
                        <span>{model.downloads.toLocaleString()} downloads</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">{model.price}</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Zap size={14} className="mr-1" />
                            Test
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                            <Download size={14} className="mr-1" />
                            Buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredModels.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Brain className="mx-auto mb-4 text-white/50" size={64} />
              <h3 className="text-2xl font-bold text-white mb-2">No models found</h3>
              <p className="text-white/70">Try adjusting your search or filters</p>
            </motion.div>
          )}

          {/* Featured Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-3xl text-center">Why Choose Our Marketplace?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">Secure & Transparent</h4>
                    <p className="text-white/70">Blockchain-powered transactions ensure security and transparency</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">Instant Deployment</h4>
                    <p className="text-white/70">Deploy AI models instantly with our cloud infrastructure</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={32} />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">Global Community</h4>
                    <p className="text-white/70">Connect with AI creators and developers worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
