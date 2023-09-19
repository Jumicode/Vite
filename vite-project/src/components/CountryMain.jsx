import {useSelector} from 'react-redux'


import Country from '../components/Country'



function CountryMain(){
   
const {country} = useSelector((state) => state.country)


return (
    <div>
        
        {country.map((Country,key) =>(

            <div key={key}>
              
                <img src={`${Country.flags.png}`}></img>
                <h1>{Country.name.common}</h1>
                  <h3>{Country.population}</h3>
                 <h3>{Country.region}</h3> 
                 <h3>{Country.capital}</h3>
               
                 </div>
          
        ))}
        <h1>hello</h1>
    </div>
)
}

export default CountryMain;