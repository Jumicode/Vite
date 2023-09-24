import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';
function CountryMain() {
  const { country } = useSelector((state) => state.country);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {country
        .filter((Country) =>
          Country.region === selectedRegion || selectedRegion === ''
        )
        .filter((Country) =>
          Country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((Country, key) => (
          <div key={key}>
            <Link to={`/country/${encodeURIComponent(Country.name.common)}`}>
              <img src={`${Country.flags.png}`} alt={Country.name.common} />
            </Link>
            <h1>{Country.name.common}</h1>
            <h3>Population: {Country.population}</h3>
            <h3>Region: {Country.region}</h3>
            <h3>Capital: {Country.capital}</h3>
          </div>
        ))}
    </div>
  );
}


export default CountryMain