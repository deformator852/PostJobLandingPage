import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/styles.css";
import "./styles/adaptive.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
root.render(<App />);
