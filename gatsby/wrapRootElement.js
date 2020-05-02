import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../src/styles/themes/theme"

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
