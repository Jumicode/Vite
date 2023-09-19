import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {setCountry} from '../features/country/countrySlice'




const GetCountry = () => {

const dispatch = useDispatch();

const res = 'https://restcountries.com/v3.1/all';

axios.get(res)
.then((res) =>{
    console.log(res.data);
    dispatch(setCountry(res.data));
})
.catch((error)=>{
    alert(`Error: ${error}`);
});
}


function Country(){

    GetCountry();
   
   
}


export default Country;