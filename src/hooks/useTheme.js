import { useState } from 'react';

// Custom Hook for Theme
const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  return { isDark, toggleTheme };
};
export default useTheme;