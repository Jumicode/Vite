import {useDispatch} from 'react-redux';
import axios from 'axios'
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import {setCountry} from '../features/country/countrySlice'
import CountryMain from './CountryMain';
import CountryDetail from './CountryDetail';




const GetCountry = () => {

const dispatch = useDispatch();

const res = 'https://restcountries.com/v3.1/all';

axios.get(res)
.then((res) =>{
    //console.log(res.data);
    dispatch(setCountry(res.data));
   
})
.catch((error)=>{
    alert(`Error: ${error}`);
});
}


function Country(){

    GetCountry();

    return(
       
<Router>

<Routes>

<Route exact path='/' element={<CountryMain></CountryMain>}></Route>
<Route path='/country/:cca2' element={<CountryDetail></CountryDetail>}></Route>

</Routes>

</Router>
    )
   
   
}


export default Country;