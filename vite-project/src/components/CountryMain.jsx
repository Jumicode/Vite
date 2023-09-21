import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CountryMain() {
  const { country } = useSelector((state) => state.country);

  return (
    <div>
      {country.map((Country, key) => (
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

export default CountryMain;
