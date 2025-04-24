import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import useSparkle from '../hooks/useSparkle';
import { TabMenu, TabButton } from './styled/StyledComponents';

const TabNavigation = () => {
  const { activeTab, switchTab } = useUser();
  const { createSparkle } = useSparkle();
  
  const handleTabClick = (tab) => {
    switchTab(tab);
    createSparkle();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <TabMenu>
        <TabButton 
          active={activeTab === 'nilai'} 
          onClick={() => handleTabClick('nilai')}
        >
          <span>📊</span> Nilai
        </TabButton>
        <TabButton 
          active={activeTab === 'badge'} 
          onClick={() => handleTabClick('badge')}
        >
          <span>🏆</span> Badge
        </TabButton>
        <TabButton 
          active={activeTab === 'pesan'} 
          onClick={() => handleTabClick('pesan')}
        >
          <span>💌</span> Tea
        </TabButton>
      </TabMenu>
    </motion.div>
  );
};

export default TabNavigation; 