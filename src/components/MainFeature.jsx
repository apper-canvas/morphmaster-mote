import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from './ApperIcon';

// Monster Part Data
const monsterParts = {
  heads: [
    { id: 'head1', name: 'Slime', color: '#9333EA', emoji: '🤢' },
    { id: 'head2', name: 'Robot', color: '#3B82F6', emoji: '🤖' },
    { id: 'head3', name: 'Dragon', color: '#F97316', emoji: '🐲' },
  ],
  bodies: [
    { id: 'body1', name: 'Furry', color: '#10B981', emoji: '🧸' },
    { id: 'body2', name: 'Metal', color: '#6B7280', emoji: '🛡️' },
    { id: 'body3', name: 'Transparent', color: '#3B82F6', emoji: '🫧' },
  ],
  arms: [
    { id: 'arms1', name: 'Tentacles', color: '#8B5CF6', emoji: '🐙' },
    { id: 'arms2', name: 'Robot Arms', color: '#6B7280', emoji: '🦾' },
    { id: 'arms3', name: 'Wiggly Arms', color: '#10B981', emoji: '〰️' },
  ],
  legs: [
    { id: 'legs1', name: 'Tentacles', color: '#F97316', emoji: '🦑' },
    { id: 'legs2', name: 'Wheels', color: '#1E3A8A', emoji: '🛞' },
    { id: 'legs3', name: 'Frog Legs', color: '#65A30D', emoji: '🐸' },
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      {/* Monster Preview Box */}
      <motion.div 
        className="card flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Monster Preview</h2>
        
        <div className="relative w-full max-w-xs aspect-square mx-auto bg-surface-100 dark:bg-surface-700 rounded-xl flex items-center justify-center overflow-hidden">
          <div style={{ transform: `scale(${scale})` }} className="transition-all duration-300">
            {/* Monster Visualization - using emojis as placeholders */}
            <div className="relative flex flex-col items-center text-8xl" style={{ lineHeight: 1 }}>
              {/* Head */}
              <div className="monster-part" style={{ color: customColors.heads }}>
                {selectedParts.heads.emoji}
              </div>
              
              {/* Body */}
              <div className="monster-part -mt-5" style={{ color: customColors.bodies }}>
                {selectedParts.bodies.emoji}
              </div>
              
              {/* Arms */}
              <div className="monster-part absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3" style={{ color: customColors.arms }}>
                {selectedParts.arms.emoji}
              </div>
              
              {/* Legs */}
              <div className="monster-part mt-2" style={{ color: customColors.legs }}>
                {selectedParts.legs.emoji}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scale Control */}
        <div className="mt-4 w-full max-w-xs">
          <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
            Monster Size
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
        <div className="mt-6 w-full max-w-xs">
          <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
            Name Your Monster
          </label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={monsterName}
              onChange={(e) => setMonsterName(e.target.value)}
              placeholder="Enter monster name"
              className="input-control flex-grow"
            />
            <button 
              onClick={handleSaveMonster}
              disabled={isSaving}
              className="btn-primary whitespace-nowrap"
            >
              {isSaving ? (
                <span className="flex items-center">
                  <ApperIcon name="Loader2" className="animate-spin mr-2 h-4 w-4" />
                  Saving
                </span>
              ) : 'Save Monster'}
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Controls Section */}
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Customize Your Monster</h2>
          <button 
            onClick={handleRandomize}
            className="btn-accent flex items-center gap-2 text-sm"
          >
            <ApperIcon name="Shuffle" className="h-4 w-4" />
            Randomize
          </button>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(monsterParts).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-600'
              }`}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {Object.keys(monsterParts).map((category) => (
              <div key={`dropdown-${category}`}>
                <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
                <select 
                  className="input-control"
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
          
          <h3 className="text-lg font-medium mb-3">
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
                  }`}
                >
                  <span className="text-4xl mb-2" style={{ color: part.color }}>
                    {part.emoji}
                  </span>
                  <span className="text-sm font-medium">{part.name}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Color Customization */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Customize Color
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
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
              Current Part: {selectedParts[activeCategory].name}
            </label>
            <div className="flex items-center space-x-2">
              <div 
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: customColors[activeCategory] }}
              />
              <span className="text-sm text-surface-500 dark:text-surface-400">
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