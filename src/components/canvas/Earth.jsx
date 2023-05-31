import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const eath = useGLTF('./planet/scene.gltf');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <primitive object={eath.scene} scale={isMobile ? 3.5 : 2.5} position-y={0} rotation-y={0} />
  );
}

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false}
          maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default EarthCanvas;