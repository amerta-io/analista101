import React, { useEffect } from "react"

interface GistEmbedProps {
  gistId: string
}

const GistEmbed: React.FC<GistEmbedProps> = ({ gistId }) => {
  useEffect(() => {
    const scriptId = `gist-script-${gistId}`
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement("script")
      script.id = scriptId
      script.src = `https://gist.github.com/${gistId}.js`
      document.body.appendChild(script)
    }

    return () => {
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [gistId])

  return <div id={`gist-${gistId}`}></div>
}

export default GistEmbed