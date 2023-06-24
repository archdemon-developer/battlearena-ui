import { Route } from "wouter";
import "./App.css";
import { NavBar } from "./components";
import { LoginPage, SignUpPage } from "./Pages";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/login" component={LoginPage} />
      <Route path="/sign-up" component={SignUpPage} />
    </>
  );
}

export default App;
