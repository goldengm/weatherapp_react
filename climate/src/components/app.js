import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {
  render() {
    return (
      <div>
          <h3 className="clima">Reactive Clima ™</h3>
          <SearchBar />
          <WeatherList />
        </div>
    );
  }
}