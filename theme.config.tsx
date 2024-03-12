import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from './public/assets/logo.png'

const config: DocsThemeConfig = {
  logo: () => (
    <Image
      src={logo}
      alt="Logo"
      width={135}
      height={50}
    />
  ),
  project: {
    link: 'https://github.com/amerta-io/analista101',
  },
  chat: {
    link: 'https://discordapp.com/users/589304761921306638',
  },
  docsRepositoryBase: 'https://github.com/amerta-io/analista101',
}

export default config
