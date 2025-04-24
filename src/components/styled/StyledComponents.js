import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/GlobalStyles';

export const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 15px;
  }
`;

export const Card = styled(motion.div)`
  background: var(--surface);
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform: translateY(0);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 1.8em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  background: linear-gradient(to right, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(127, 90, 240, 0.3);
`;

export const InputGroup = styled.div`
  margin-bottom: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--light-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(127, 90, 240, 0.3);
  }
`;

export const Button = styled(motion.button)`
  background: var(--primary);
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(127, 90, 240, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.danger {
    background: var(--danger);
  }
  
  &.secondary {
    background: var(--secondary);
  }
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px;
  backdrop-filter: blur(5px);
`;

export const TabButton = styled.div`
  flex: 1;
  padding: 12px;
  text-align: center;
  border-radius: 10px;
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--light-para)'};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'};
  
  span {
    font-size: 1.2rem;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  margin-top: -10px;
  color: var(--light-para);
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 12px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 12px;
  width: ${props => props.percentage || '0'}%;
  background: linear-gradient(to right, var(--primary), var(--accent));
  transition: width 1s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const BadgeBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 18px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    width: 80px;
    height: 80px;
    background: var(--primary);
    opacity: 0.1;
    border-radius: 50%;
  }
`;

export const BadgeEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  display: inline-block;
  animation: pulse 2s infinite;
`;

export const BadgeName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-family: ${theme.fonts.heading};
  font-size: 1.2rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BadgeDesc = styled.div`
  color: var(--light-para);
  font-size: 0.9rem;
`;

export const StatItem = styled(motion.div)`
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const StatLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95em;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StatValue = styled.span`
  font-weight: bold;
  color: var(--primary);
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 0.85em;
  color: var(--light-para);
  margin-top: 40px;
  padding-bottom: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 5px 15px rgba(127, 90, 240, 0.3);
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 5px 0;
  font-family: ${theme.fonts.heading};
`;

export const UserDetails = styled.p`
  color: var(--light-para);
  font-size: 0.9rem;
  margin: 0;
`;

export const XPContainer = styled.div`
  background: rgba(127, 90, 240, 0.1);
  border-radius: 12px;
  padding: 15px;
  margin: 15px 0;
`;

export const XPBar = styled.div`
  height: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
`;

export const XPFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--accent));
  border-radius: 4px;
  width: ${props => props.percentage || '0'}%;
  transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const XPDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--light-para);
`;

export const StatusTag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 10px;
  text-transform: uppercase;
  background: var(--primary);
  color: white;
  vertical-align: middle;
`;

export const MessageContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 15px;
  
  p {
    font-size: 1.1em;
    color: var(--light-text);
    line-height: 1.6;
  }
`; 