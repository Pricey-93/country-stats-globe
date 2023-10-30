import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";

export default function Globe() {
  const cloudsRef = useRef<THREE.Mesh>(new THREE.Mesh());
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    cloudsRef.current.rotation.z = elapsedTime * 0.02;
  });

  return (
    <>
    
     <mesh ref={cloudsRef}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial
        map={cloudsMap}
        opacity={0.4}
        depthWrite={true}
        transparent={true}
        side={THREE.DoubleSide} />
     </mesh>
     <mesh>
     <Sphere 
     args={[1, 32, 32]} 
     rotation={[0, -Math.PI / 2, 0]} >
      <meshPhongMaterial specularMap={specularMap} />
      <meshStandardMaterial 
        map={colorMap} 
        normalMap={normalMap}
        metalness={0.4}
      />
     </Sphere>
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4} />
      </mesh>
    </>
   
  )
}