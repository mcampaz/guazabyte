import * as React from "react";
import "./App.css";
import MainLayout from "./views/layouts/MainLayout";
import Home from "./views/pages/Home";

export default function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}
