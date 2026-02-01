import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { blastConfetti } from './confetti'
import Nav from './Nav'
import Footer from './Footer.jsx'
import Testimonials from './Testimonials.jsx'
import './Homepage.css'

export default function Homepage() {
  const [typed, setTyped] = useState('')
  
  const [loaded, setLoaded] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const ctaRef = useRef(null)
  const formRef = useRef(null)
  const [formStatus, setFormStatus] = useState({ isSubmitting: false })
  const websiteImages = ['/images/amore mockup.png', '/images/arrowleaf.png', '/images/new site.png']
  const [websiteIdx, setWebsiteIdx] = useState(0)

  
  useEffect(() => {
    const fullText = 'Freelance Designer Helping Brands Stand Out'
    let i = 0
    let active = true
    const type = () => {
      if (!active) return
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i))
        i += 1
        setTimeout(type, 80)
      } else {
        setTimeout(() => {
          if (!active) return
          setTyped('')
          i = 0
          setTimeout(type, 300)
        }, 800)
      }
    }
    type()
    return () => { active = false }
  }, [])

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setWebsiteIdx(i => (i + 1) % websiteImages.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  

  useEffect(() => {
    const el = ctaRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting
          setCtaVisible(visible)
          if (window.location.pathname === '/') {
            const targetHash = visible ? 'contact' : 'home'
            if (window.location.hash !== `#${targetHash}`) {
              window.location.hash = targetHash
            }
          }
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const scrollToContact = () => {
      if (window.location.hash === '#contact' && ctaRef.current) {
        ctaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    scrollToContact()
    window.addEventListener('hashchange', scrollToContact)
    return () => window.removeEventListener('hashchange', scrollToContact)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true })
    emailjs.init('pZtlnSO7NHel0tpbW')
    emailjs
      .sendForm('service_txe96pq', 'template_l2zhyqf', formRef.current, { publicKey: 'pZtlnSO7NHel0tpbW' })
      .then(
        () => {
          setFormStatus({ isSubmitting: false })
          if (formRef.current) formRef.current.reset()
          blastConfetti()
        },
        () => {
          setFormStatus({ isSubmitting: false })
          blastConfetti()
        }
      )
  }

  return (
    <div className="homepage homepage-no-offset">
      <div className="home-pane">
        <Nav />
        <div className="home-pane-content">
          <section className={`hero ${loaded ? 'hero-loaded' : ''}`}>
              <h1 className="name">Forrest Tindall Designer</h1>
              <div className="sub">{typed}<span className="caret" /></div>
          </section>

          <section className="grid">
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/paradoxlabscard.jpg" alt="Logo Design" className="card-img" />
                <div className="label">Logo Design</div>
                <p className="desc">Distinctive marks and identity systems that stand out and scale across mediums.</p>
              </div>
            </a>
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/analog square.png" alt="Graphic Design" className="card-img" />
                <div className="label">Graphic Design</div>
                <p className="desc">Posters, layouts, and digital assets crafted for clarity, impact, and polish.</p>
              </div>
            </a>
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/OPEN NETIZEN.jpg" alt="Branding" className="card-img" />
                <div className="label">Branding</div>
                <p className="desc">Strategy, tone, and a cohesive visual system that tells a consistent story.</p>
              </div>
            </a>
          </section>
        </div>
      </div>

      <div className="homepage-container">

<div>
        <a href="/websites" className="feature card feature-link">
          <img src={websiteImages[websiteIdx]} alt="Web Design and Development" className="feature-img" />
          <div className="label">Web Design & Development</div>
          <p className="desc">Responsive sites and performant frontends built with modern tooling, accessibility, and clean code.</p>
        </a>
      </div>

      <Testimonials />



 




        


      </div>
      <div className="home-pane">
        <div className="home-pane-content">
          <section id="contact" ref={ctaRef} className={`cta-section ${ctaVisible ? 'cta-visible' : ''}`}>
            <p className="cta-text">Have a project in mind?</p>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input type="hidden" name="subject" value="CTA Inquiry" />
              <div className="contact-form-row">
                <input type="text" name="from_name" placeholder="Name" className="input" required />
                <input type="email" name="user_email" placeholder="Email" className="input" required />
              </div>
              <textarea name="message" placeholder="Message" className="textarea" required />
              <button type="submit" className="cta-btn" disabled={formStatus.isSubmitting}>Send</button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
