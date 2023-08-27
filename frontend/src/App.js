import React from "react";
import Header from "./component/header/header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
