import Image from 'next/image';
import SlideContainer, { SliderItem } from './utils/slide';

const Logo: React.FC = () => (
  <>
    <SlideContainer initialOffsetX={0} contentWidth={1290}>
      <SliderItem width={200}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          height={120}
          width={170}
          alt="some"
          objectFit="contain"
        ></Image>
      </SliderItem>

      <SliderItem width={200}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          height={120}
          width={170}
          alt="some"
          objectFit="contain"
        ></Image>
      </SliderItem>

      <SliderItem width={200}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          height={120}
          width={170}
          alt="some"
          objectFit="contain"
        ></Image>
      </SliderItem>

      <SliderItem width={200}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          height={120}
          width={70}
          alt="some"
          objectFit="contain"
        ></Image>
      </SliderItem>

      <SliderItem width={200}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg"
          height={120}
          width={200}
          alt="some"
          objectFit="contain"
        ></Image>
      </SliderItem>
    </SlideContainer>
  </>
);

export default Logo;
