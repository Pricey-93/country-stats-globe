import { useState } from "react";
import { useContext } from "../../layouts/RootLayout";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
// import Card from "../../components/card/Card";

import Globe from "../../components/globe/Globe";
import Marker from "../../components/globe/Marker";
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

export default function Home() {
  const { countryManager } = useContext();
  const countries = countryManager.getCountries();

  const [filteredCountries, setFilteredCountries] = useState(countryManager.getCountries());

  function filterCountries(region: string): void {
    if (region === "Filter by Region") {
      setFilteredCountries(countries);
    }
    else {
      const filtered = countries.filter(country => country.region === region);
    setFilteredCountries(filtered);
    }
  }

  function searchCountries(userInput: string): void {
    const searchResult = countries?.filter(country => country.name.common.toUpperCase().includes(userInput.toUpperCase()));
    if (searchResult?.length > 0) {
      setFilteredCountries(searchResult);
    }
  }

  return (
    <main className="home-container">
      <div className="controls-wrapper">
        <SearchInput searchCountries={ searchCountries }/>
        <RegionFilter filterCountries={ filterCountries }/>
      </div>
      {/* <div className="cards-wrapper"> */}
      {/* {
        filteredCountries?.map((country, i) => <Card country={ country } key={ i } />)
      } */}
      <>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            {/* <pointLight intensity={10} color={"#f6f3ea"} position={[2, 0, 2]} /> */}
            <Stars 
              radius={300} 
              depth={100} 
              count={15000} 
              factor={3} />
            <Globe />
            <Marker color={"red"} latitude={51.5072} longitude={0.1276} /> //London N E positve
            <Marker color={"green"} latitude={36.2048} longitude={138.2529} /> //Japan N E positive
            <Marker color={"yellow"} latitude={-25.2744} longitude={133.7751} /> //Australia S E south negative
            <Marker color={"orange"} latitude={-18.7669} longitude={46.8691} />//Madagascar S E south negative
            <Marker color={"blue"} latitude={-51.7963} longitude={-59.5236} />//Falkland Islands S W both negative
            <Marker color={"purple"} latitude={38.00} longitude={-97.00} /> //USA N W west negative 
          </Suspense>
        </Canvas>
     </>
      {/* </div> */}
    </main>
  )
}