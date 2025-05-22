import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from './ApperIcon';

// Monster Part Data
const monsterParts = {
  heads: [
    { id: 'head1', name: 'Slime', color: '#39FF14', emoji: '🤢' },
    { id: 'head2', name: 'Robot', color: '#00FFFF', emoji: '🤖' },
    { id: 'head3', name: 'Dragon', color: '#FF3000', emoji: '🐲' },
  ],
  bodies: [
    { id: 'body1', name: 'Furry', color: '#BFFF00', emoji: '🧸' },
    { id: 'body2', name: 'Metal', color: '#71797E', emoji: '🛡️' },
    { id: 'body3', name: 'Transparent', color: '#05FFD2', emoji: '🫧' },
  ],
  arms: [
    { id: 'arms1', name: 'Tentacles', color: '#00FF66', emoji: '🐙' },
    { id: 'arms2', name: 'Robot Arms', color: '#71797E', emoji: '🦾' },
    { id: 'arms3', name: 'Wiggly Arms', color: '#39FF14', emoji: '〰️' },
  ],
  legs: [
    { id: 'legs1', name: 'Tentacles', color: '#FF3000', emoji: '🦑' },
    { id: 'legs2', name: 'Wheels', color: '#8B4513', emoji: '🛞' },
    { id: 'legs3', name: 'Frog Legs', color: '#00FF66', emoji: '🐸' },
  ],
};

// Color palette options
const colorPalette = [
  '#9333EA', // Purple
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F97316', // Orange
  '#EC4899', // Pink
  '#F59E0B', // Yellow
  '#6B7280', // Gray
  '#EF4444', // Red
];

const MainFeature = () => {
  const [activeCategory, setActiveCategory] = useState('heads');
  const [selectedParts, setSelectedParts] = useState({
    heads: monsterParts.heads[0],
    bodies: monsterParts.bodies[0],
    arms: monsterParts.arms[0],
    legs: monsterParts.legs[0],
  });
  const [customColors, setCustomColors] = useState({
    heads: monsterParts.heads[0].color,
    bodies: monsterParts.bodies[0].color,
    arms: monsterParts.arms[0].color,
    legs: monsterParts.legs[0].color,
  });
  const [monsterName, setMonsterName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [scale, setScale] = useState(1);

  // When a part is selected, update its color as well
  useEffect(() => {
    setCustomColors(prev => ({
      ...prev,
      [activeCategory]: selectedParts[activeCategory].color
    }));
  }, [selectedParts, activeCategory]);

  const handleDropdownSelect = (e, category) => {
    const selectedId = e.target.value;
    const selectedPart = monsterParts[category].find(part => part.id === selectedId);
    if (selectedPart) {
      handlePartSelect(selectedPart);
    }
  };
  const handlePartSelect = (part) => {
    setSelectedParts(prev => ({
      ...prev,
      [activeCategory]: part
    }));
  };

  const handleColorChange = (color) => {
    setCustomColors(prev => ({
      ...prev,
      [activeCategory]: color
    }));
  };

  const handleSaveMonster = () => {
    if (!monsterName.trim()) {
      toast.error('Please give your monster a name!');
      return;
    }

    setIsSaving(true);
    
    // Simulate saving process
    setTimeout(() => {
      toast.success(`${monsterName} has been created!`);
      setIsSaving(false);
      // Would typically save to a database here
    }, 1200);
  };

  const handleRandomize = () => {
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    setSelectedParts({
      heads: getRandomItem(monsterParts.heads),
      bodies: getRandomItem(monsterParts.bodies),
      arms: getRandomItem(monsterParts.arms),
      legs: getRandomItem(monsterParts.legs),
    });
    
    setCustomColors({
      heads: getRandomItem(colorPalette),
      bodies: getRandomItem(colorPalette),
      arms: getRandomItem(colorPalette),
      legs: getRandomItem(colorPalette),
    });
    
    toast.info('Monster randomized!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 transform">
      {/* Monster Preview Box */}
      <motion.div 
        className="card flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 text-center mad-scientist-title flex items-center">
          <span className="relative mr-2">⚡</span>
          Experimental Chamber
          <span className="relative ml-2">⚡</span>
        </h2>
        
        <div className="monster-preview-chamber w-full max-w-xs aspect-square mx-auto">
          {/* Laboratory Equipment */}
          <div className="absolute top-2 left-2 w-8 h-20">
            <div className="tube"></div>
            <div className="bubbling-liquid">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`bubble-1-${i}`} 
                  className="bubble" 
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-2 right-2 w-8 h-20">
            <div className="tube"></div>
            <div className="bubbling-liquid">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`bubble-2-${i}`} 
                  className="bubble" 
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Electrodes */}
          <div className="electrode top-3 left-3 animate-pulse-glow"></div>
          <div className="electrode top-3 right-3 animate-pulse-glow"></div>
          <div className="electrode bottom-3 left-3 animate-pulse-glow"></div>
          <div className="electrode bottom-3 right-3 animate-pulse-glow"></div>
          
          {/* Sparks */}
          <div className="spark-container top-3 left-3 w-4 h-4">
            <div className="spark"></div>
          </div>
          <div className="spark-container top-3 right-3 w-4 h-4">
            <div className="spark"></div>
          </div>
          
          {/* Smoke Effect */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30">
            {[...Array(3)].map((_, i) => (
              <div 
                key={`smoke-${i}`}
                className="absolute w-16 h-16 bg-white/20 rounded-full animate-smoke"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          <div style={{ transform: `scale(${scale})` }} className="relative z-10 transition-all duration-300">
            {/* Monster Visualization - using emojis as placeholders */}
            <div className="relative flex flex-col items-center text-8xl filter drop-shadow-lg" style={{ lineHeight: 1 }}>
              {/* Head */}
              <div className="monster-lab-part stitched animate-jitter" style={{ color: customColors.heads, transform: `rotate(${Math.random() * 6 - 3}deg)` }}>
                {selectedParts.heads.emoji}
              </div>
              
              {/* Body */}
              <div className="monster-lab-part stitched -mt-5" style={{ color: customColors.bodies, transform: `rotate(${Math.random() * 6 - 3}deg)` }}>
                {selectedParts.bodies.emoji}
                
                {/* Slime drips */}
                {customColors.bodies === '#05FFD2' && (
                  <>
                    <div className="slime-drip" style={{ left: '20%', bottom: '-20px' }}></div>
                    <div className="slime-drip" style={{ left: '60%', bottom: '-15px', height: '8px' }}></div>
                  </>
                )}
                
                {/* Bolts for metal body */}
                {selectedParts.bodies.name === 'Metal' && (
                  <>
                    <div className="bolt" style={{ top: '20%', left: '10%' }}></div>
                    <div className="bolt" style={{ top: '30%', right: '10%' }}></div>
                  </>
                )}
              </div>
              
              {/* Arms with random positioning */}
              <div className="monster-lab-part stitched absolute" 
                style={{ 
                  color: customColors.arms, 
                  top: '45%', 
                  left: '45%', 
                  transform: `rotate(${Math.random() * 20 - 10}deg) translateX(${Math.random() * 10 - 5}px)` 
                }}>
                {selectedParts.arms.emoji}
              </div>
              
              {/* Legs with random positioning */}
              <div className="monster-lab-part stitched mt-2" 
                style={{ 
                  color: customColors.legs,
                  transform: `rotate(${Math.random() * 10 - 5}deg) translateX(${Math.random() * 8 - 4}px)`
                }}>
                {selectedParts.legs.emoji}
              </div>
            </div>
          </div>
        </div>
          <span className="relative mr-2">⚡</span>
          <div className="absolute top-2 right-2 w-8 h-20">
            <div className="tube"></div>
            <div className="bubbling-liquid">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`bubble-2-${i}`} 
                  className="bubble" 
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Electrodes */}
          <div className="electrode top-3 left-3 animate-pulse-glow"></div>
          <div className="electrode top-3 right-3 animate-pulse-glow"></div>
          <div className="electrode bottom-3 left-3 animate-pulse-glow"></div>
          <div className="electrode bottom-3 right-3 animate-pulse-glow"></div>
          
          {/* Sparks */}
          <div className="spark-container top-3 left-3 w-4 h-4">
            <div className="spark"></div>
          </div>
          <div className="spark-container top-3 right-3 w-4 h-4">
            <div className="spark"></div>
          </div>
          
              style={{ backgroundColor: '#39FF14', color: '#000' }}
            >
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30">
            {[...Array(3)].map((_, i) => (
              <div 
                key={`smoke-${i}`}
                className="absolute w-16 h-16 bg-white/20 rounded-full animate-smoke"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
      <motion.div 
        className="card lab-card"
            {/* Monster Visualization - using emojis as placeholders */}
            <div className="relative flex flex-col items-center text-8xl filter drop-shadow-lg" style={{ lineHeight: 1 }}>
              {/* Head */}
              <div className="monster-lab-part stitched animate-jitter" style={{ color: customColors.heads, transform: `rotate(${Math.random() * 6 - 3}deg)` }}>
                {selectedParts.heads.emoji}
          <h2 className="text-xl font-bold mad-scientist-title">
            EXPERIMENT CONTROLS
          </h2>
              
              {/* Body */}
            className="laboratory-button flex items-center gap-2 text-sm"
                {selectedParts.bodies.emoji}
                
            MUTATE
                {customColors.bodies === '#05FFD2' && (
                  <>
                    <div className="slime-drip" style={{ left: '20%', bottom: '-20px' }}></div>
                    <div className="slime-drip" style={{ left: '60%', bottom: '-15px', height: '8px' }}></div>
        <div className="flex flex-wrap gap-2 mb-6 -rotate-1">
                )}
                
                {/* Bolts for metal body */}
                {selectedParts.bodies.name === 'Metal' && (
                  <>
                    <div className="bolt" style={{ top: '20%', left: '10%' }}></div>
                  ? 'bg-monster-toxic text-black shadow-glow' 
                  : 'bg-surface-800 border border-monster-metal/30 text-surface-400 hover:bg-surface-700'
                )}
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
            >
              
              {/* Arms with random positioning */}
              <div className="monster-lab-part stitched absolute" 
                style={{ 
                  color: customColors.arms, 
                  top: '45%', 
                  left: '45%', 
            Select Monster Parts
                }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 control-panel p-4">
            {Object.keys(monsterParts).map((category) => (
              
              {/* Legs with random positioning */}
              <div className="monster-lab-part stitched mt-2" 
                style={{ 
                  color: customColors.legs,
                  transform: `rotate(${Math.random() * 10 - 5}deg) translateX(${Math.random() * 8 - 4}px)`
                }}>
                {selectedParts.legs.emoji}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scale Control */}
        <div className="mt-4 w-full max-w-xs">
          <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
            <h3 className="text-lg font-medium mb-3 mad-scientist-title">
              Select {activeCategory.slice(0, -1)}
            </h3>
          </h3>
          </label>
          <input 
            type="range" 
            min="0.5"
            max="1.5" 
            step="0.1" 
            value={scale} 
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Name and Save */}
                  }`} style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
          <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
            Name Your Creation
          </label>
          <div className="flex gap-2">
                  <span className="text-sm font-medium text-monster-electric">{part.name}</span>
              type="text" 
              value={monsterName}
              onChange={(e) => setMonsterName(e.target.value)}
              placeholder="Enter monster name"
              className="input-control flex-grow"
            />
        <div>
          <h3 className="text-lg font-medium mb-3 mt-6 mad-scientist-title">
            CHEMICAL TREATMENTS
          </h3> 
              disabled={isSaving}
              className="btn-primary whitespace-nowrap"
              style={{ backgroundColor: '#39FF14', color: '#000' }}
            >
              {isSaving ? (
                <span className="flex items-center">
                  <ApperIcon name="Loader2" className="animate-spin mr-2 h-4 w-4" />
                  ANIMATING
                </span>
              ) : 'BRING TO LIFE'}
            </button>
          </div>
        </div>
          <div className="mt-4 control-panel p-3">
          <div className="mt-4">
            <div>
              <div>ACTIVE SPECIMEN: {selectedParts[activeCategory].name}</div>
              <div>Current Part: {selectedParts[activeCategory].name}</div>
            </div>
            <div className="flex items-center space-x-2">
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
                className="w-6 h-6 rounded-full animate-pulse-glow"
                style={{ backgroundColor: customColors[activeCategory], boxShadow: `0 0 10px ${customColors[activeCategory]}` }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold mad-scientist-title">
            EXPERIMENT CONTROLS
          </h2>
          <button 
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainFeature;

            className="laboratory-button flex items-center gap-2 text-sm"
          >
            <ApperIcon name="Zap" className="h-4 w-4" />
            MUTATE
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-6 -rotate-1">
          {Object.keys(monsterParts).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-monster-toxic text-black shadow-glow' 
                  : 'bg-surface-800 border border-monster-metal/30 text-surface-400 hover:bg-surface-700'
              }`}
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Parts Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">
            Select Monster Parts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 control-panel p-4">
            {Object.keys(monsterParts).map((category) => (
              <div key={`dropdown-${category}`} className="transform" style={{ transform: `rotate(${Math.random() * 3 - 1.5}deg)` }}>
                <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
                <select 
                  className="input-control bg-black border-monster-metal text-monster-electric"
                  value={selectedParts[category].id}
                  onChange={(e) => handleDropdownSelect(e, category)}
                >
                  {monsterParts[category].map(part => (
                    <option key={part.id} value={part.id}>{part.name}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-medium mb-3 mad-scientist-title">
            Select {activeCategory.slice(0, -1)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <AnimatePresence mode="wait">
              {monsterParts[activeCategory].map((part) => (
                <motion.button
                  key={part.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePartSelect(part)}
                  className={`monster-part-btn flex flex-col items-center ${
                    selectedParts[activeCategory].id === part.id ? 'monster-part-btn-active' : 'bg-white dark:bg-surface-700'
                  }`} style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                >
                  <span className="text-4xl mb-2 filter drop-shadow-lg" style={{ color: part.color }}>
                    {part.emoji}
                  </span>
                  <span className="text-sm font-medium text-monster-electric">{part.name}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Color Customization */}
        <div>
          <h3 className="text-lg font-medium mb-3 mt-6 mad-scientist-title">
            CHEMICAL TREATMENTS
          </h3> 
          <div className="flex flex-wrap gap-3">
            {colorPalette.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={`w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  customColors[activeCategory] === color ? 'ring-2 ring-offset-2 ring-primary' : ''
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          <div className="mt-4 control-panel p-3">
          <div className="mt-4">
            <div>
              <div>ACTIVE SPECIMEN: {selectedParts[activeCategory].name}</div>
              <div>Current Part: {selectedParts[activeCategory].name}</div>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-6 h-6 rounded-full animate-pulse-glow"
                style={{ backgroundColor: customColors[activeCategory], boxShadow: `0 0 10px ${customColors[activeCategory]}` }}
              />
              <span 
                className="text-sm text-surface-500 dark:text-surface-400"
              >
                {customColors[activeCategory]}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainFeature;