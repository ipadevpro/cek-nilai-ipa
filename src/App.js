import React from 'react';
import { Container } from './components/styled/StyledComponents';
import { UserProvider, useUser } from './context/UserContext';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import TabNavigation from './components/TabNavigation';
import NilaiTab from './components/tabs/NilaiTab';
import BadgeTab from './components/tabs/BadgeTab';
import PesanTab from './components/tabs/PesanTab';
import LogoutButton from './components/LogoutButton';
import AppFooter from './components/AppFooter';

const MainApp = () => {
  const { user } = useUser();
  
  return (
    <Container>
      {!user ? (
        <LoginForm />
      ) : (
        <>
          <UserDashboard />
          <TabNavigation />
          <NilaiTab />
          <BadgeTab />
          <PesanTab />
          <LogoutButton />
        </>
      )}
      <AppFooter />
    </Container>
  );
};

const App = () => {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
};

export default App; 