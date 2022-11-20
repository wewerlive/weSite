import { Environment } from '@react-three/drei';
import { NextPage } from 'next';
import Avatar from './components/canvas/Avatar';
import WelcomeMessage from './components/dom/Welcome';
import CanvasLayout from './layouts/CanvasLayout';
import DomLayout from './layouts/DomLayout';

// dom components go here
const DOM = () => {
  return (
    <>
      <DomLayout>
        <WelcomeMessage />
      </DomLayout>
    </>
  );
};

// canvas components go here
const R3F = () => {
  return (
    <>
      {/* <VRButton /> */}
      <CanvasLayout>
        {/* <XR> */}
        {/* <Controllers rayMaterial={{ color: 'blue' }} hideRaysOnBlur={false} /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box color={'hotpink'} hoverColor={'orange'} /> */}
        <Avatar />
        <Environment preset="sunset" background="only" />
        {/* </XR> */}
      </CanvasLayout>
    </>
  );
};

const Room: NextPage = () => {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
};

export default Room;
