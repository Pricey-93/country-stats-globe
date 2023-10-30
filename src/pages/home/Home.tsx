import { useState } from "react";
import { useContext } from "../../layouts/RootLayout";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
import Card from "../../components/card/Card";

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
      <div className="cards-wrapper">
      {
        filteredCountries?.map((country, i) => <Card country={ country } key={ i } />)
      }
      </div>
    </main>
  )
}