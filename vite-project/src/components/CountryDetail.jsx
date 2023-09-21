import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const { countryName } = useParams();
  const { country } = useSelector((state) => state.country);

  // Encuentra el país correspondiente en la lista de países
  const selectedCountry = country.find(
    (Country) => encodeURIComponent(Country.name.common) === countryName
  );

  if (!selectedCountry) {
    return <div>País no encontrado</div>;
  }

  return (
    <div>
       <img src={`${selectedCountry.flags.png}`} alt={selectedCountry.name.common} />

      <h1>{selectedCountry.name.common}</h1>
      <h3>Population: {selectedCountry.population}</h3>
      <h3>Region: {selectedCountry.region}</h3>
      <h3>Subregion: {selectedCountry.subregion}</h3>
      <h3>Currencies : {selectedCountry.currencies[0]}</h3>
      <h3>Capital: {selectedCountry.capital}</h3>
      <h3>languages: {selectedCountry.languages[0]}</h3>
      <h3>Top level Domain : {selectedCountry.tld}</h3>
      <h3>Border Country: {selectedCountry.borders}</h3>
    </div>
  );
}

export default CountryDetail;