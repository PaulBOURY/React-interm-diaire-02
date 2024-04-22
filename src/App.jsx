import './App.css';
import UserProfile from './components/UserProfile';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <UserContext.Provider value={{isOnline: isOnline, setIsOnline: setIsOnline}} >
    <UserProfile />;
    </UserContext.Provider>
  )
}

export default App;