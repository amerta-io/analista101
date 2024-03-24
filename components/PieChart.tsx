import * as React from "react"
import { PieChart } from "@mui/x-charts/PieChart"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"

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
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    </ThemeProvider>
  )
}
