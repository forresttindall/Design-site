import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import './GraphicDesign.css'
import './Homepage.css'

export default function GraphicDesign() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage graphic-design-page">
      <div className="home-pane">
        <Nav />
        <div className="home-pane-content">
          <div className="homepage-container">
            <h1 className="name">Graphic Design</h1>
            <p className="gd-desc">Logo design, graphic design, and branding. Identity systems, typography, layouts, and production-ready assets.</p>

            <div className="gd-grid">



    <section className='project card'>
                <div className="featured-image">
                  <img src="/images/Hourly Sales.PNG" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Ricochet</p>
                <p className="mono-text"><span className="bold">Work:</span> Asset Design</p>
                <p className="mono-text"><span className="bold">Team:</span> Superbase</p>
                <p className="mono-text"><span className="bold">Team Members:</span> Mickey Martin, Madi Cleave, Tyler Crab</p>
              </section>


         


              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/analogflyer.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Boise Analog Club</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity redesign and digital marketing assets</p>
              </section>

              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/LRK.jpg" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Lost River Knives</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
              </section>

 
      <section className='project card'>
                <div className="featured-image">
                  <img src="/images/Exportable tables.PNG" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Ricochet</p>
                <p className="mono-text"><span className="bold">Work:</span> Asset Design</p>
                <p className="mono-text"><span className="bold">Team:</span> Superbase</p>
                <p className="mono-text"><span className="bold">Team Members:</span> Mickey Martin, Madi Cleave, Tyler Crab</p>
              </section>


   


              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/propagranda 3.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Boise Analog Club</p>
                <p className="mono-text"><span className="bold">Work:</span> Poster design asset</p>
              </section>

                  <section className='project card'>
                <div className="featured-image">
                  <img src="/images/BAC FEBUARY.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Boise Analog Club</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity redesign and digital marketing assets</p>
              </section>



 

   <section className='project card'>
                <div className="featured-image">
                  <img src="/images/westsidegun mockup 1.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Westside Gunn</p>
                <p className="mono-text"><span className="bold">Work:</span> Album Art Design</p>
              </section>

  <section className='project card'>
                <div className="featured-image">
                  <img src="/images/launch art.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Creationbase</p>
                <p className="mono-text"><span className="bold">Work:</span> Asset Design</p>
              </section>

              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/parallax shirt 3.jpg" alt="Parallax Zine" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Parallax Zine (Film Photography Zine)</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
              </section>

              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/OPEN NETIZEN.jpg" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Open Netizen (non-profit organization)</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
              </section>

              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/paradoxlabscard.jpg" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Paradox Labs (Tech)</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
              </section>

                <section className='project card'>
                <div className="featured-image">
                  <img src="/images/beer-3.jpg" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Moab Brewery</p>
                <p className="mono-text"><span className="bold">Work:</span> illustration and Design</p>
              </section>

                 <section className='project card'>
                <div className="featured-image">
                  <img src="/images/conway the machine 1 mockup.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Conway The Machine</p>
                <p className="mono-text"><span className="bold">Work:</span> Album Art Design</p>
              </section>



              <section className='project card'>
                <div className="featured-image">
                  <img src="/images/bac.png" alt="Featured artwork" />
                </div>
                <p className="mono-text"><span className="bold">Brand:</span> Boise Analog Club</p>
                <p className="mono-text"><span className="bold">Work:</span> Brand Identity redesign and digital marketing assets</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
