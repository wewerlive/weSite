import { useContext, useRef } from 'react';
import style from '../styles/Home.module.css';
import { ScrollContext } from './utils/scroll-observe';

const blockOpacity = (progress: number, block: number) => {
  const progressOpacity = progress - block;
  if (progressOpacity >= 0 && progressOpacity < 1) {
    return 1;
  }
  return 0.2;
};
const Skill: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const pages = 4;
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const halfScreen = window.innerHeight / 2;

    const percentY =
      Math.min(
        clientHeight + halfScreen,
        Math.max(-window.innerHeight, scrollY - offsetTop) + halfScreen
      ) / clientHeight;
    progress = Math.min(pages - 0.5, Math.max(0.5, percentY * pages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white ">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={style.skill}
            style={{ opacity: blockOpacity(progress, 0) }}
          >
            We know our stack inside out in a better way.
          </div>
          <span
            className={`${style.skill} text-blue-300 inline-block after:content-['_']`}
            style={{ opacity: blockOpacity(progress, 1) }}
          >
            Our Team made all that possible in mere few weeks time span
          </span>
          <span
            className={`${style.skill} inline-block`}
            style={{ opacity: blockOpacity(progress, 2) }}
          >
            We&apos;ll be maintaining this project structure to next level
            scalability.
          </span>

          <span
            className={`${style.skill} mt-28 text-red-400 inline-block`}
            style={{ opacity: blockOpacity(progress, 3) }}
          >
            &ldquo;Advertise your brand with Us.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
