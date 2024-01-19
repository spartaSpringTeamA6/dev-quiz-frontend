import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components/common";

export default function MainLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
