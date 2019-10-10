import React from 'react'
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = '27bc15daf41eb85b531d0baade0f4a4c'

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }


  //Создаём функцию, которая забирает данные с сайта, после чего мы из data забираем что нам нужно

  gettingWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    

    if(city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json()
      //Преобразовываю значение в секундах из sunrise и sunset в читабельную дату
      var sunset = data.sys.sunset
      var date = new Date()
      date.setTime(sunset)
      var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      })

    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите название города'
      })
    }

  }

  //Рендерим компоненты приложения и передаём в них возможность для пропсов

  render() {
    return(
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
            <Info />
            </div>
            <div className="col-sm-7 form">
            <Form weatherMethod = {this.gettingWeather} />
            <Weather 
            temp = {this.state.temp}
            city = {this.state.city}
            country = {this.state.country}
            pressure = {this.state.pressure}
            sunset = {this.state.sunset}
            error = {this.state.error}
            />
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App