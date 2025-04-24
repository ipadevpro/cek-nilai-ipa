import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#7F5AF0',
    primaryDark: '#6B46E5',
    secondary: '#2CB67D',
    bgColor: '#16161A',
    surface: '#242629',
    lightText: '#FFFFFE',
    lightPara: '#94A1B2',
    accent: '#FF8906',
    danger: '#FF5470'
  },
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Poppins", sans-serif'
  },
  breakpoints: {
    mobile: '600px',
  }
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${theme.colors.primary};
    --primary-dark: ${theme.colors.primaryDark};
    --secondary: ${theme.colors.secondary};
    --bg-color: ${theme.colors.bgColor};
    --surface: ${theme.colors.surface};
    --light-text: ${theme.colors.lightText};
    --light-para: ${theme.colors.lightPara};
    --accent: ${theme.colors.accent};
    --danger: ${theme.colors.danger};
  }
  
  * { 
    box-sizing: border-box; 
    font-family: ${theme.fonts.body}; 
    transition: all 0.3s ease; 
  }
  
  body { 
    margin: 0; 
    padding: 0; 
    background: var(--bg-color); 
    color: var(--light-text);
    background-image: 
      radial-gradient(circle at 25% 10%, rgba(127, 90, 240, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 75% 75%, rgba(44, 182, 125, 0.1) 0%, transparent 20%),
      radial-gradient(circle at 50% 50%, rgba(255, 137, 6, 0.05) 0%, transparent 50%);
    min-height: 100vh;
    background-attachment: fixed;
  }

  /* Keyframe animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes sparkleAnimation {
    0% { transform: scale(0); opacity: 0; }
    20% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
  }

  /* Utility classes */
  .hidden { 
    display: none; 
  }
  
  .centered { 
    text-align: center; 
  }
`; 