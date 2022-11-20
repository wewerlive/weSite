import { useRef, useContext, createContext } from 'react';
import { ScrollContext } from './scroll-observe';

interface wrapperProps {
  pages: number;
  children: React.ReactNode;
}

interface ContextValueProps {
  pages: number;
  currentPage: number;
}

interface Props {
  page: number;
  // eslint-disable-next-line no-unused-vars
  renderPage: (props: { progress: number }) => any;
}

export const TileContext = createContext<ContextValueProps>({
  pages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<wrapperProps> = ({ children, pages }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let currentPage = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const halfScreen = window.innerHeight / 1.6;
    const percentY =
      Math.min(
        clientHeight + halfScreen,
        Math.max(-window.innerHeight, scrollY - offsetTop) + halfScreen
      ) / clientHeight;
    currentPage = percentY * pages;
  }

  return (
    <TileContext.Provider value={{ pages, currentPage: currentPage }}>
      <div ref={refContainer} style={{ height: pages * 100 + 'vh' }}>
        {children}
      </div>
    </TileContext.Provider>
  );
};

interface TileProps {
  children: React.ReactNode;
}

export const TileBackground: React.FC<TileProps> = ({ children }) => (
  <div className="absolute h-full bg-black w-full"> {children}</div>
);

export const TileContent: React.FC<TileProps> = ({ children }) => (
  <div className="sticky top-0 overflow-hidden h-screen ">{children}</div>
);

export const TilePage: React.FC<Props> = ({ page, renderPage }) => {
  const { currentPage, pages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.95 && page < pages - 1) {
    opacity = Math.max(0, (1 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity,
      }}
      className="absolute top-0 w-full"
    >
      {renderPage({ progress })}
    </div>
  );
};
