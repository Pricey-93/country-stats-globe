import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useContext } from "../../layouts/RootLayout";

import Globe from "../../components/globe/Globe";
import Marker from "../../components/globe/Marker";

export default function Home() {
  const { countryManager } = useContext();
  const countries = countryManager.getCountries();

  return (
    <Canvas className="globe-canvas">
      <ambientLight intensity={1.5} />
      {/* <pointLight intensity={10} color={"#f6f3ea"} position={[2, 0, 2]} /> */}
      <Stars 
        radius={300} 
        depth={100} 
        count={15000} 
        factor={3} />
      <Suspense fallback={null}>
        <Globe />
        {
          countries.map((country) => <Marker country={country} key={country.name.common} />)
        }
      </Suspense>
    </Canvas>
  )
}