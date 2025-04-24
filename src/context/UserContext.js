import React, { createContext, useContext, useState } from 'react';

// API URL from Google Apps Script 
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykzhQiGRm4wdZMDs-oJKGMzuSUbXATS9JzDODup_esQlCvVzZ6oo8NP9OXNBwGR2rpTw/exec";

// Create context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('nilai');

  // Login function
  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.status === "ok") {
        // Process user data
        processUserData(data);
        return true;
      } else {
        setError("Login failed! Password salah kali? 🙈");
        return false;
      }
    } catch (err) {
      setError("Waduh server-nya down bestie, coba lagi nanti ya 😵");
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  // Refresh data
  const refreshData = async () => {
    if (!user) return;
    await login(user.username, user.password);
  };
  
  // Process user data from API
  const processUserData = (data) => {
    // Calculate XP percentage
    const xp = parseInt(data.xp);
    const level = parseInt(data.level);
    const xpPerLevel = 1000;
    const currentLevelXp = xp % xpPerLevel;
    const xpPercentage = (currentLevelXp / xpPerLevel) * 100;
    
    // Determine status tag
    let status = "Newbie";
    if (level >= 10) status = "Legend";
    else if (level >= 7) status = "Pro";
    else if (level >= 5) status = "Expert";
    else if (level >= 3) status = "Rising";
    
    // Create user object with all data
    setUser({
      ...data,
      xpPercentage,
      status,
      remainingXP: xpPerLevel - currentLevelXp
    });
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    setActiveTab('nilai');
  };
  
  // Get user avatar initials
  const getUserInitials = () => {
    if (!user || !user.nama) return '';
    
    const namaParts = user.nama.split(' ');
    return namaParts.length > 1 
      ? `${namaParts[0][0]}${namaParts[1][0]}`
      : namaParts[0][0];
  };
  
  // Switch tab
  const switchTab = (tab) => {
    setActiveTab(tab);
  };
  
  const value = {
    user,
    loading,
    error,
    activeTab,
    login,
    logout,
    refreshData,
    getUserInitials,
    switchTab,
  };
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext; 