import React, { useCallback, useState, useEffect } from 'react';

interface ScrollObserveProps {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollObserveProps>({
  scrollY: 0,
});

interface ScrollObserveProviderProps {
  children: React.ReactNode;
}

const ScrollObserve: React.FC<ScrollObserveProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserve;
