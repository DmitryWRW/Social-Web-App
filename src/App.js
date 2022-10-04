import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Route path="/profile" component={Profile} />
      <Route />
    </div>
  );
};

export default App;
