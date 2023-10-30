interface IProps {
  filterCountries: (region: string) => void
}
export default function RegionFilter(props: IProps) {
  const { filterCountries } = props; 

  return (
    <select defaultValue="Filter by Region" name="region-filter" className="region-filter" onChange={(event) => filterCountries(event.target.value)}>
      <option value="Filter by Region" className="filter-option">Filter by Region</option>
      <option value= "Africa" className="filter-option">Africa</option>
      <option value= "Americas" className="filter-option">Americas</option>
      <option value= "Antarctic" className="filter-option">Antarctic</option>
      <option value= "Asia" className="filter-option">Asia</option>
      <option value= "Europe" className="filter-option">Europe</option>
      <option value= "Oceania" className="filter-option">Oceania</option>
    </select>
  )
}