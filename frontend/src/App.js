import React from "react";
import Header from "./component/header/header";
import "./App.css";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
