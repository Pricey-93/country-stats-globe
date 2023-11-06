import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { ICountry } from "../../api/ICountry";

function degToRad(deg: number) {
  return Math.PI * deg / 180;
}

function WGStoXYZ(latitude: number, longitude :number, R: number) {
  const xyz = new THREE.Vector3(0, 0, 0);

  xyz["y"] = Math.sin(degToRad(latitude)) * R;
  const r = Math.cos(degToRad(latitude)) * R;

  xyz["x"] = Math.sin(degToRad(longitude)) * r;
  xyz["z"] = Math.cos(degToRad(longitude)) * r;

  return xyz;
}

interface MarkerProps {
  country: ICountry,
}
export default function Marker(props: MarkerProps) {
  const { country } = props;
  const markerRef = useRef<THREE.Mesh>(new THREE.Mesh());
  const markerPos = WGStoXYZ(country.latlng[0], country.latlng[1], 1);
  const navigate = useNavigate();
  
  function clickHandler(): void {navigate(`${country?.name.common.toLowerCase()}`)};

  return (
    <mesh onClick={() => clickHandler()} ref={markerRef} position={markerPos}>
      <sphereGeometry args={[0.005, 32, 32]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}


