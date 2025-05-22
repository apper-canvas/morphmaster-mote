import { useState } from 'react';
import { motion } from 'framer-motion';
import MainFeature from '../components/MainFeature';

const Home = () => {
  const [activeTab, setActiveTab] = useState('build');

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-monster-pink to-monster-orange bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Monster Lab Creator
        </motion.h1>
        <motion.p 
          className="text-surface-600 dark:text-surface-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create your own unique monster by mixing and matching different parts!
        </motion.p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white dark:bg-surface-800 p-1 rounded-xl shadow-soft">
          <div className="flex space-x-1">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'build' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
              }`}
              onClick={() => setActiveTab('build')}
            >
              Build Your Monster
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'gallery' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
              }`}
              onClick={() => setActiveTab('gallery')}
            >
              Monster Gallery
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="mt-6">
        {activeTab === 'build' ? (
          <MainFeature />
        ) : (
          <div className="card text-center py-12">
            <h3 className="text-xl text-surface-600 dark:text-surface-300">
              Monster Gallery Coming Soon!
            </h3>
            <p className="mt-2 text-surface-500 dark:text-surface-400">
              Your created monsters will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;