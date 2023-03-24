"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return <ThemeProvider enableSystem={true} attribute='class' >{children}</ThemeProvider>;
}

export default Providers;
