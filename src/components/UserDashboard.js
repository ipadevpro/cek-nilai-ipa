import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import useSparkle from '../hooks/useSparkle';
import {
  Card,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserDetails,
  XPContainer,
  XPBar,
  XPFill,
  XPDetails,
  StatusTag,
  Button
} from './styled/StyledComponents';

const UserDashboard = () => {
  const { user, refreshData, getUserInitials } = useUser();
  const { createSparkle } = useSparkle();
  
  if (!user) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <UserProfile>
          <UserAvatar>{getUserInitials()}</UserAvatar>
          <UserInfo>
            <UserName>{user.nama}</UserName>
            <UserDetails>
              {user.nis} • {user.kelas}
            </UserDetails>
          </UserInfo>
        </UserProfile>

        <XPContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary)' }}>
              Level <span>{user.level}</span>{' '}
              <StatusTag>{user.status}</StatusTag>
            </div>
            <div style={{ color: 'var(--light-para)' }}>
              {user.xp} XP
            </div>
          </div>
          <XPBar>
            <XPFill percentage={user.xpPercentage} />
          </XPBar>
          <XPDetails>
            <span>
              Ranking #{user.ranking} dari {user.total_siswa}
            </span>
            <span>
              Next: {user.remainingXP} XP
            </span>
          </XPDetails>
        </XPContainer>
        
        <Button 
          className="secondary"
          onClick={() => {
            refreshData();
            createSparkle();
          }}
          whileTap={{ scale: 0.95 }}
          style={{ marginTop: '15px' }}
        >
          🔄 Refresh
        </Button>
      </Card>
    </motion.div>
  );
};

export default UserDashboard; 