import React from 'react'

import Landing from './../components/Landing/Landing'
import dynamic from 'next/dynamic'
// const LandingNoSSR = dynamic(
//   import('./../components/Landing/Landing'),
//   { ssr: false }
// )
const landing = () => {
  return <Landing />
}

export default landing
