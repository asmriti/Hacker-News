import React from "react";
import Header from "./Header";
import Stories from "./Stories";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="mx-auto container">
      <Header />
      <Stories />
      <Footer />
    </div>
  );
}

export default Layout;
