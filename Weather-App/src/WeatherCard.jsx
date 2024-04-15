import React from 'react'

const WeatherCard = ({tempInfo}) => {
  const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
  } = tempInfo;

  let sec = sunset;
  let date = new Date(sunset * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5NV_zuQu0W1VH_ACreTorxPpDwCQ43Jz8DCSBo8XyA&s'></img>
        </div>

      <div className='weather-info'>
        <div className="weatherInfo">
          <div className='temprature'>
            <span>{temp}°C</span>
          </div>

          <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'>
              {name}, {country}
            </div>
          </div>
        </div>

        <div className='date'>
          <div className='date-item-1'>{new Date().toLocaleDateString()}</div>
          <div className='date-item-2'>{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <div className='icon'>
                <img className='sub-icon-1' src='https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-vector-sunset-icon-png-image_883993.jpg'></img>
              </div>
              <p className='extre-info-leftside'>
                {timeStr}<br/>
                Sunset
              </p>
            </div>

            <div className='two-sided-section'>
              <div className='icon'>
              <img className='sub-icon-2' src='https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=humidity'></img>
              </div>
              <p className='extre-info-leftside'>
                {humidity}<br/>
                Humidity
              </p>
            </div>

            <div className='two-sided-section'>
              <div className='icon'>
                <img className='sub-icon-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwtlXKjlVgCNCPaftp-ntvU6SC2rmpfVUNV1Ax0dr9g&s'></img>
              </div>
              <p className='extre-info-leftside'>
                {pressure}<br/>
                Pressure
                
              </p>
            </div>

            <div className='two-sided-section'>
              <div className='icon'>
                <img className='sub-icon-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yGjrmonQ0546av5sfgCo_A7eI7Tbn20aB9_KQsfYuyeGWemoKOHXdTWR68sJamh6g70&usqp=CAU'></img>
              </div>
              <p className='extre-info-leftside'>
                {speed}<br/>
                Speed
              </p>
            </div>


          </div>
        </div>
      </article> 
    </>
  )
}

export default WeatherCard
