import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage'
import Biography from './Biography'
import GraphicDesign from './GraphicDesign'
import Websites from './Websites'
import Photography from './Photography'
import Testimonials from './Testimonials'
import CaseStudies from './CaseStudies'

if (window.location.pathname === '/contact') {
  window.history.replaceState(null, '', '/#contact')
}
const path = window.location.pathname
let Root
if (path === '/biography') {
  Root = <Biography />
} else if (path === '/graphicdesign') {
  Root = <GraphicDesign />
} else if (path === '/websites') {
  Root = <Websites />
} else if (path === '/photography') {
  Root = <Photography />
} else if (path === '/testimonials') {
  Root = <Testimonials />
} else if (path === '/casestudies') {
  Root = <CaseStudies />
} else {
  Root = <Homepage />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Root}
  </React.StrictMode>
)
