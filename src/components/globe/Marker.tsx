import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import * as THREE from "three";

function degToRad(deg: number) {
  return Math.PI * deg / 180;
}

function WGStoXYZ(latitude: number, longitude :number, R: number) {
  const xyz = new Vector3(0, 0, 0);

  xyz["y"] = Math.sin(degToRad(latitude)) * R;
  const r = Math.cos(degToRad(latitude)) * R;

  xyz["x"] = Math.sin(degToRad(longitude)) * r;
  xyz["z"] = Math.cos(degToRad(longitude)) * r;

  return xyz;
}

interface IMarker {
  color: string,
  latitude: number,
  longitude: number
}

export default function Marker(props: IMarker) {
  const { color, latitude, longitude } = props;
  const markerRef = useRef<THREE.Mesh>(new THREE.Mesh());
  const markerPos = WGStoXYZ(latitude, longitude, 1);

  // useFrame(({ camera }) => {
  //   // Make the marker face the camera (billboarding)
  //   markerRef.current.lookAt(camera.position);
  // });

  return (
    <mesh onClick={() => console.log("YOU CLICKED A COUNTRY")} ref={markerRef} position={markerPos}>
      <sphereGeometry args={[0.005, 32, 32]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}


