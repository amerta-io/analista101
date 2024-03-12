import React, { useState, useEffect } from "react"
import { DocsThemeConfig, useTheme } from "nextra-theme-docs"
import logoLight from "./public/assets/logo-light.png"
import logoDark from "./public/assets/logo-dark.png"
import BlurImage from "./components/BlurImage"

const Logo = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light" ? logoLight : logoDark
    }
    return logoDark
  })

  useEffect(() => {
    setLogo(theme === "light" ? logoLight : logoDark)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  return <BlurImage src={logo} alt="Logo" width={135} height={50} />
}

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/amerta-io/analista101",
  },
  chat: {
    link: "https://discordapp.com/users/589304761921306638",
  },
  docsRepositoryBase: "https://github.com/amerta-io/analista101",
}

export default config