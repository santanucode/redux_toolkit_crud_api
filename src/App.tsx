import React, { useState, useEffect } from "react";
import { UsersComponent } from "./pages/Users/container/userContainer";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h3>Redux Toolkit (CRUD)</h3>
      <UsersComponent />
    </div>
  );
};

export default App;
