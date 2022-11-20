import Image from 'next/image';
import { useCallback, useContext, useRef, useState } from 'react';
import { ScrollContext } from './utils/scroll-observe';

const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full flex flex-col items-center justify-center sticky -z-10 top-0"
      style={{ transform: `translateY(${progress * 20}vh)` }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute object-cover w-full h-full"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-10'
        }`}
      >
        <Image
          height={40}
          width={80}
          src="/logo.png"
          alt="logo"
          onLoad={handleImageLoaded}
        ></Image>
      </div>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
        <h1 className="mb-6 text-5xl lg:text-8xl ">Wewer</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Virtual Reality is Here</span>{' '}
          <span>For You To Experience It.</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
