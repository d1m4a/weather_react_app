import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "68b5c33a00b1e9eb350b0eb1f7313eb5";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`;
    const api_call = await fetch(url);
    const data = api_call.json();
    console.log( data );
  }
  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    )
  }
}

export default App;