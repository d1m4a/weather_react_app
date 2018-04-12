import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "206ef162d87b300b23d3218954898e08";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=Krasnoyarsk,ru&appid=${API_KEY}`);
    const data = api_call.json();
    console.log(data);
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