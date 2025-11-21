import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage'
import Biography from './Biography'
import GraphicDesign from './GraphicDesign'
import Websites from './Websites'
import Contact from './Contact'
import Photography from './Photography'

const path = window.location.pathname
let Root
if (path === '/biography') {
  Root = <Biography />
} else if (path === '/graphicdesign') {
  Root = <GraphicDesign />
} else if (path === '/websites') {
  Root = <Websites />
} else if (path === '/contact') {
  Root = <Contact />
} else if (path === '/photography') {
  Root = <Photography />
} else {
  Root = <Homepage />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Root}
  </React.StrictMode>
)