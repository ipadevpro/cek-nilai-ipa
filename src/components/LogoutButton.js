import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import useSparkle from '../hooks/useSparkle';
import { Card, Button } from './styled/StyledComponents';

const LogoutButton = () => {
  const { logout, user } = useUser();
  const { createSparkle } = useSparkle();
  
  if (!user) return null;
  
  const handleLogout = () => {
    createSparkle();
    logout();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card style={{ textAlign: 'center' }}>
        <Button 
          className="danger"
          onClick={handleLogout}
          whileTap={{ scale: 0.95 }}
        >
          👋 Logout
        </Button>
      </Card>
    </motion.div>
  );
};

export default LogoutButton; 