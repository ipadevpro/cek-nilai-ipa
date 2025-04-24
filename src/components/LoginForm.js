import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import useMatrixEffect from '../hooks/useMatrixEffect';
import useSparkle from '../hooks/useSparkle';
import {
  Card,
  Title,
  InputGroup,
  Input,
  Button,
  SubTitle
} from './styled/StyledComponents';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useUser();
  const loginAnimationRef = useRef(null);
  const { createSparkle } = useSparkle();
  
  // Initialize matrix effect
  useMatrixEffect(loginAnimationRef);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return;
    }
    await login(username, password);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <Title>Dashboard Pencapaian Kamu💅✨</Title>
        <div 
          ref={loginAnimationRef} 
          style={{
            height: '150px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '20px',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '15px'
          }}
        />
        <SubTitle>Login dulu bestie, biar bisa flexing nilai-nilai! 🚀</SubTitle>
        
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username kamu"
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password rahasia..."
              required
            />
          </InputGroup>
          <Button 
            type="submit" 
            disabled={loading}
            onClick={createSparkle}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Loading...' : 'Gaskeun!'}
          </Button>
        </form>
        
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              color: 'var(--danger)', 
              marginTop: '10px', 
              textAlign: 'center' 
            }}
          >
            {error}
          </motion.p>
        )}
      </Card>
    </motion.div>
  );
};

export default LoginForm; 