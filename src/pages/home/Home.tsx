import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useContext } from "../../layouts/RootLayout";

import Globe from "../../components/globe/Globe";
import Marker from "../../components/globe/Marker";

export default function Home() {
  const { countryManager } = useContext();
  const countries = countryManager.getCountries();

  // const [filteredCountries, setFilteredCountries] = useState(countryManager.getCountries());

  // function filterCountries(region: string): void {
  //   if (region === "Filter by Region") {
  //     setFilteredCountries(countries);
  //   }
  //   else {
  //     const filtered = countries.filter(country => country.region === region);
  //   setFilteredCountries(filtered);
  //   }
  // }

  // function searchCountries(userInput: string): void {
  //   const searchResult = countries?.filter(country => country.name.common.toUpperCase().includes(userInput.toUpperCase()));
  //   if (searchResult?.length > 0) {
  //     setFilteredCountries(searchResult);
  //   }
  // }

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
          countries.map((country, index) => <Marker country={country} key={index} />)
        }
      </Suspense>
    </Canvas>
  )
}