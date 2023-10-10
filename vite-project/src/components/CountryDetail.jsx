import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function CountryDetail() {
 const { cca2 } = useParams();

  const { country } = useSelector((state) => state.country);
 
  const selectedCountry = country.find((Country) => Country.cca2 === cca2);


  if (!selectedCountry) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <Link to="/">
        <button> Back </button>
      </Link>

      <img src={`${selectedCountry.flags.png}`} alt={selectedCountry.name.common} />

      <h1>{selectedCountry.name.common}</h1>

      <h3> Official name: {selectedCountry.name.official} </h3>

      <>
        {selectedCountry.currencies &&
          Object.keys(selectedCountry.currencies).map((currencyCode) => {
            const currency = selectedCountry.currencies[currencyCode];
            return (
              <h3 key={currencyCode}>
                Currencies: {currency.name} 
              </h3>
            );
          })}
      </>

      <h3>
      Language:
        {selectedCountry.languages &&
          Object.keys(selectedCountry.languages).map((languageCode) => {
            const language = selectedCountry.languages[languageCode];
            return (
             <h3 key={languageCode}>{language}</h3>
            );
          })}
      </h3>

      <h3>Population: {selectedCountry.population}</h3>
      <h3>Region: {selectedCountry.region}</h3>
      <h3>Subregion: {selectedCountry.subregion}</h3>
      <h3>Capital: {selectedCountry.capital}</h3>
      <h3>Top level Domain : {selectedCountry.tld}</h3>
      <h3>Border Country: {selectedCountry.borders ? selectedCountry.borders : <p>This country does not have any border countries.</p>}</h3>
    </div>
  );
}

export default CountryDetail;

