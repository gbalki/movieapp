import Header from "@/componenets/Header";
import Tabs from "@/componenets/Tabs";
import React from "react";
import "./globals.css";
import Providers from "./Providers";

function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
          <footer>footer</footer>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
