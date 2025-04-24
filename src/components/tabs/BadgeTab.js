import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import {
  Card,
  Title,
  SubTitle,
  BadgeBox,
  BadgeEmoji,
  BadgeName,
  BadgeDesc
} from '../styled/StyledComponents';

const BadgeTab = () => {
  const { user, activeTab } = useUser();
  
  if (!user || activeTab !== 'badge') return null;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <Card>
      <Title>Badge Kece Kamu 🏆</Title>
      <SubTitle>Koleksi achievement buat story IG 📸</SubTitle>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {user.emoji && user.emoji.map((emoji, index) => (
          <BadgeBox key={index} variants={item}>
            <BadgeEmoji>{emoji}</BadgeEmoji>
            <BadgeName>{user.badge_name[index]}</BadgeName>
            <BadgeDesc>{user.badge_desc[index]}</BadgeDesc>
          </BadgeBox>
        ))}
        
        {(!user.emoji || user.emoji.length === 0) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              color: 'var(--light-para)',
              padding: '30px 0'
            }}
          >
            Belum ada badge nih, masih harus grind lagi bestie! 💪
          </motion.p>
        )}
      </motion.div>
    </Card>
  );
};

export default BadgeTab; 