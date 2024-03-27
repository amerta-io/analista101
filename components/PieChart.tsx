import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"
import FormattedPieChartWrapper from "./FormattedPieChart"

export default function PieActiveArc({ data }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }
  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <IconButton
        onClick={toggleTheme}
        sx={{ fontSize: 32, color: "grey" }}
        aria-label={isDarkMode ? "Light mode" : "Dark mode"}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <FormattedPieChartWrapper data={data} height={200} />
    </ThemeProvider>
  )
}
