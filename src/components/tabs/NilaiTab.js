import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import {
  Card,
  Title,
  SubTitle,
  StatItem,
  StatLabel,
  StatValue,
  ProgressBar,
  ProgressFill
} from '../styled/StyledComponents';

const NilaiTab = () => {
  const { user, activeTab } = useUser();
  
  if (!user || activeTab !== 'nilai') return null;
  
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };
  
  // Get emoji based on grade
  const getEmoji = (nilai) => {
    if (nilai >= 90) return "🔥";
    if (nilai >= 80) return "💯";
    if (nilai >= 70) return "👌";
    if (nilai >= 60) return "👍";
    return "🙏";
  };
  
  return (
    <Card>
      <Title>Statistik Nilai Kamu 📊</Title>
      <SubTitle>Pamer ke bestie nilai kamu 💯</SubTitle>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {user.mapel && user.mapel.map((subject, index) => {
          const nilai = parseInt(user.nilai[index]) || 0;
          return (
            <StatItem key={index} variants={item}>
              <StatLabel>
                <span>{subject}</span>
                <StatValue>
                  {nilai} {getEmoji(nilai)}
                </StatValue>
              </StatLabel>
              <ProgressBar>
                <ProgressFill 
                  percentage={nilai}
                  initial={{ width: 0 }}
                  animate={{ width: `${nilai}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </ProgressBar>
            </StatItem>
          );
        })}
      </motion.div>
    </Card>
  );
};

export default NilaiTab; 