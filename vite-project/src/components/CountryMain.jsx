import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';

function CountryMain() {
  const { country } = useSelector((state) => state.country);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = country
    .filter((Country) =>
      Country.region === selectedRegion || selectedRegion === ''
    )
    .filter((Country) =>
      Country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {filteredCountries.length > 0 ? (
        filteredCountries.map((Country, key) => (
          <div key={key}>
            <Link to={`/country/${Country.cca2}`}>
              <img src={`${Country.flags.png}`} alt={Country.name.common} />
            </Link>

            <h1>{Country.name.common}</h1>
            <h3>Population: {Country.population}</h3>
            <h3>Region: {Country.region}</h3>
            <h3>Capital: {Country.capital}</h3>
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
}


export default CountryMain;
