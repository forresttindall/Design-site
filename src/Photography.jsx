import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Photography.css'

export default function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="photos-container">
        <div className="photos-grid">
          <img src="/images/gasstation.jpg" alt="IMG_2272-2" loading="lazy" />
          <img src="/images/IMG_2272-2.jpg" alt="IMG_2272-2" loading="lazy" />
       
          <img src="/images/_DSC1226-2.jpg" alt="_DSC1226-2" loading="lazy" />
          <img src="/images/_DSC1375-2.jpg" alt="_DSC1375-2" loading="lazy" />
          <img src="/images/_DSC1574.jpg" alt="_DSC1574" loading="lazy" />
          <img src="/images/_DSC1636.jpg" alt="_DSC1636" loading="lazy" />
          <img src="/images/_DSC1672-2.jpg" alt="_DSC1672-2" loading="lazy" />
          <img src="/images/_DSC1706-3.jpg" alt="_DSC1706-3" loading="lazy" />
          <img src="/images/_DSC2193-2.jpg" alt="_DSC2193-2" loading="lazy" />
          <img src="/images/_DSC2807-2.jpg" alt="_DSC2807-2" loading="lazy" />
          <img src="/images/_DSC2842.jpg" alt="_DSC2842" loading="lazy" />
          <img src="/images/_DSC2866-2.jpg" alt="_DSC2866-2" loading="lazy" />
          <img src="/images/_DSC3525.jpg" alt="_DSC3525" loading="lazy" />
          <img src="/images/_DSC4390.jpg" alt="_DSC4390" loading="lazy" />
          <img src="/images/_DSC4685-2.jpg" alt="_DSC4685-2" loading="lazy" />
          <img src="/images/_DSC6969.jpg" alt="_DSC6969" loading="lazy" />
          <img src="/images/_DSC7142.jpg" alt="_DSC7142" loading="lazy" />
          <img src="/images/_DSC7392.jpg" alt="_DSC7392" loading="lazy" />
          <img src="/images/_DSC7951-2.jpg" alt="_DSC7951-2" loading="lazy" />
          <img src="/images/_DSC8090.jpg" alt="_DSC8090" loading="lazy" />
          <img src="/images/_DSC8589.jpg" alt="_DSC8589" loading="lazy" />
          <img src="/images/_DSC9069-2.jpg" alt="_DSC9069-2" loading="lazy" />
          <img src="/images/_DSC9182.jpg" alt="_DSC9182" loading="lazy" />
        </div>
      </div>
      <Footer />
    </div>
  )
}