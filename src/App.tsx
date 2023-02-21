import React, { useState } from "react";
import CountryList from "./CountryList/CountryList";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CountryList />
    </div>
  );
};

export default App;
