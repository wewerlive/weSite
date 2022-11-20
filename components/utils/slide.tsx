import { useCallback, useRef } from 'react';
import useAnimationFrame from './animation-frame';

interface Props {
  initialOffsetX: number;
  className?: string;
  contentWidth: number;
  children: React.ReactNode;
}

const SlideContainer: React.FC<Props> = ({ ...props }: Props) => {
  const refScrollX = useRef<number>(props.initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = 768 < props.contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${props.className}`}
    >
      <div ref={refContent} className="inline-block">
        {props.children}
      </div>
      <div className={enabled ? 'inline-block' : 'hidden'}>
        {props.children}
      </div>
    </div>
  );
};

interface SliderItemProps {
  children: React.ReactNode;
  width: number;
}

export const SliderItem: React.FC<SliderItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4 "
    style={{ width }}
  >
    {children}
  </div>
);

export default SlideContainer;
