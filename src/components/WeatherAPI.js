import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi'
import {HiOutlineLocationMarker} from 'react-icons/hi';

// http://api.weatherstack.com/current?access_key=d7915244aa2bb7889c12a6777c0ecd5f&query=Delhi

const WeatherAPI = (props) => {
    const [temp, setTemp] = useState();
    const [humidity, setHumidity] = useState();
    const [wether, setWether] = useState();
    const [wetherIcone, setIcon] = useState('');
    const [weatherAvailable, setWetherAvailable] = useState('')
    const [city,setCity]=useState('')

     useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, option)

     }, []);


    var option = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        //console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        getCity(lat, lng);
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function getCity(lat, lng) {
        axios.get('https://us1.locationiq.com/v1/reverse.php?key=pk.be5ee6d10f601be67453be0ffbf92ecd&lat=' +
            lat + '&lon=' + lng + '&format=json')
            .then(res => {
                console.log(res);
                //console.log(city);
                var city = res.data.address.state_district;
                var country=res.data.address.country
                setCity(city+', '+country);
                getTemperature(city);
            })
            .catch(error => {
                console.log('error');
            })
    }
    function getTemperature(city) {
        setWetherAvailable('');
        axios.get('http://api.weatherstack.com/current?access_key=d7915244aa2bb7889c12a6777c0ecd5f&query=' + city)
            .then(success => {
                const currentData = success.data.current
                //console.log(success);
                if (currentData != null) {
                    setTemp(currentData.temperature + '°C');
                    setHumidity(currentData.humidity + '%')
                    setWether(currentData.weather_descriptions[0])
                    setIcon(currentData.weather_icons[0])
                }
                else {
                    setWetherAvailable('Weather data is not available !')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <HiOutlineLocationMarker/> &nbsp;{city}<br/>
            <FaTemperatureHigh /> {temp} <br/>
            <WiHumidity /> {humidity} <br/>
            <img style={{ height: "15px", width: "20px" }} src={wetherIcone} alt="" /> &nbsp;
            {wether}
            {weatherAvailable}



        </div>

    );
}

export default WeatherAPI;


//https://us1.locationiq.com/v1/reverse.php?key=pk.be5ee6d10f601be67453be0ffbf92ecd&lat=28.5927978&lon=77.3057597&format=json