// @ts-nocheck
import { useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

const Avatar = () => {
  const male = useLoader(GLTFLoader, '/models/character.glb');
  const female = useLoader(GLTFLoader, '/models/FemaleCharacter.glb');
  male.scene.scale.set(2, 2, 2);
  male.scene.position.set(0, -1.5, 0);
  female.scene.scale.set(2, 2, 2);
  female.scene.position.set(0, -1.5, 0);

  const model = useRef(null!);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (model.current) {
      model.current.rotation.y = a;
    }
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <primitive ref={model} object={male.scene} />
    </Suspense>
  );
};

export default Avatar;
