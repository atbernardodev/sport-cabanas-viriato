import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const visited = localStorage.getItem('hasVisitedSCVB');
    setHasVisited(!!visited);
    
    if (!visited) {
      // If first visit, set the flag
      localStorage.setItem('hasVisitedSCVB', 'true');
    }
  }, []);

  useEffect(() => {
    if (show && !hasVisited) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [hasVisited]);

  return (
    <AnimatePresence>
      {show && !hasVisited && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#111111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="SCVB Logo"
              sx={{
                width: 'auto',
                height: '180px',
                filter: 'drop-shadow(0 0 20px rgba(227, 27, 35, 0.3))',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
