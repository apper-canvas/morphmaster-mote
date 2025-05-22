import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';

const NotFound = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 mx-auto bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
          <ApperIcon name="AlertCircle" className="w-16 h-16 text-primary" />
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 text-surface-800 dark:text-surface-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        404 - Page Not Found
      </motion.h1>
      
      <motion.p 
        className="text-lg text-surface-600 dark:text-surface-300 mb-8 max-w-md mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Uh-oh! Even our monsters couldn't find the page you're looking for.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link 
          to="/" 
          className="btn-primary flex items-center space-x-2"
        >
          <ApperIcon name="Home" className="w-5 h-5" />
          <span>Back to Monster Lab</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;