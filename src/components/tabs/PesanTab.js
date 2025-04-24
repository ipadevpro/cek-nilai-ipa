import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import {
  Card,
  Title,
  SubTitle,
  MessageContainer
} from '../styled/StyledComponents';

const PesanTab = () => {
  const { user, activeTab } = useUser();
  
  if (!user || activeTab !== 'pesan') return null;
  
  return (
    <Card>
      <Title>Spill Tea dari Guru 🍵</Title>
      <SubTitle>Dengar nasihat, jiwa sehat 🧘‍♂️</SubTitle>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MessageContainer>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {user.pesan_guru || 'Belum ada pesan dari guru saat ini.'}
          </motion.p>
        </MessageContainer>
      </motion.div>
    </Card>
  );
};

export default PesanTab; 