import { useCallback, createContext, useState, useEffect } from 'react';

interface Resizevalue {
  innerwidth: number;
}

export const SizeContext = createContext<Resizevalue>({
  innerwidth: 0,
});

interface SizeObserverProps {
  children: React.ReactNode;
}

const SizeObserver: React.FC<SizeObserverProps> = ({ children }) => {
  const handleResize = useCallback(() => {
    const innerwidth = window.innerWidth;
    setResizeValues({ innerwidth });
  }, []);

  const [ResizeValues, setResizeValues] = useState<Resizevalue>({
    innerwidth: 0,
  });

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={ResizeValues}>{children}</SizeContext.Provider>
  );
};

export default SizeObserver;
