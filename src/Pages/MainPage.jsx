import { FaArrowRightLong } from 'react-icons/fa6'
import './MainPage.css'
import { useEffect } from 'react'
import { Footer } from './Footer'
import { Background } from '../Components/Background'
import { Logo } from '../Components/Logo'
export const MainPage = () => {
    useEffect(()=>{
        const canvas = document.getElementById("canvas");
canvas.width = 320;
canvas.height = 320;
const ctx = canvas.getContext("2d");

// inspired by gl-matrix beta 4
class Vec2 extends Array {
  
  constructor (...values) {
    switch(values.length) {
      case 2:{
        const v = values[0];
        super(v, values[1]);
        break;
      }
      case 1: {
        const v = values[0];
        super(v, v);
        break;
      }
      default: {
        super(2);
        break;
      }
        
  }
  }
  
  get x(){ return this[0]; }
  set x(value) { this[0] = value; }

  get y() { return this[1]; }
  set y(value) { this[1] = value; }
  
  add (b) {
    this[0] += b[0];
    this[1] += b[1];
  }
  
  distance (b) {
    return Vec2.distance(this, b);
  }
  
  static distance(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
}

class Particle {
  
  constructor() {
    this.speed = new Vec2(Math.random(), Math.random());
    this.position = new Vec2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.radius = Math.random() * 4 + 1;
  }
  
  update() {
    if (this.position.x > window.innerWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }
    if (this.position.y > window.innerHeight || this.position.y < 0) {
      this.speed.y *= -1;
    }
    this.position.add(this.speed);
  }
}

const particles = [];

for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

const update = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const MAX_DISTANCE = (window.innerWidth + window.innerHeight) / 20;
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    
    for (let j = i; j < particles.length; j++) {
      const distance = particles[i].position.distance(particles[j].position);
      if (distance < MAX_DISTANCE) {
          
         ctx.strokeStyle = `rgba(46, 53, 218, ${1 - distance/MAX_DISTANCE})`;
         ctx.beginPath();
         ctx.moveTo(...particles[i].position);
         ctx.lineTo(...particles[j].position);
         ctx.stroke();
      }
    }
    // rgba(46, 53, 218, 0.57) 74.9%)
    
    ctx.fillStyle = "rgba(255, 95, 158, 0.5)";
    ctx.beginPath();

    ctx.arc(
      ...particles[i].position,
      particles[i].radius,
      0, 2 * Math.PI);
    ctx.fill();
  }
  requestAnimationFrame(update);
}

update();
    },[])
  return (
        <div className="mainpageprofile-needs-work-resubmit">
            <main className="mainpagerectangle-parent">
            <div className="mainpageframe-child">

            </div>
            <header className="mainpageframe-wrapper">
                <div className="mainpagelogo-parent">
                  <div className="mainpagelogo">
                    <Logo/>
                  </div>                
                <div className="mainpageframe-container">
                    <div className="mainpageframe-parent">
                    <div className="mainpagesign-up-wrapper">
                        <b className="mainpagesign-up">Sign up</b>
                    </div>
                    <button className="mainpagerectangle-group"
                    onClick={()=>{
                      window.location.href='/ChatApp/register'
                    }}
                    >
                        <div className="mainpageframe-item"></div>
                        <b className="mainpagesign-up1">Sign up</b>
                    </button>
                    </div>
                </div>
                </div>
            </header>
            <section className="mainpageframe-section">
                <div className="mainpageframe-group">
                <div className="mainpageframe-div">
                    <div className="mainpageellipse-wrapper">
                    <div className="mainpageframe-inner">

                    </div>
                    </div>
                    <div className="mainpageellipse-div">
                        <Background/>
                    </div>
                </div>
                <div className="mainpageframe-wrapper1">
                    <div className="mainpageframe-parent1">
                    <div className="mainpagevector-parent">
                        <img className="mainpageline-icon" loading="lazy" alt="" />
                        <img
                        className="mainpagevector-icon"
                        loading="lazy"
                        alt=""
                        src="./public/vector-1.svg"
                        />
                    </div>
                    <div className="mainpageframe-wrapper2">
                        <div className="mainpageframe-parent2">
                        <div className="mainpagelets-create-a-new-connection-parent">
                            <h1 className="mainpagelets-create-a">
                            Let's create a new connection today
                            </h1>
                            <div className="mainpageseamless-tech-collaboration">
                            Seamless Tech Collaboration and Empowering the Future of
                            Innovation.
                            </div>
                        </div>
                        <div className="mainpageframe-parent3">
                            <button className="mainpagerectangle-container">
                            <div className="mainpagerectangle-div">
                            </div>
                            <div className="mainpageget-started">Get Started</div>
                            </button>
                            <div className="mainpageframe-wrapper3">
                            <div className="mainpagehow-its-work-parent">
                                <div className="mainpagehow-its-work">How Its work
                                    <span className='mainpageframe-child1'>
                                        <FaArrowRightLong />
                                    </span>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>
            {/* <footer className="mainpageframe-footer">
                <div className="mainpageframe-child2"></div>
                <div className="mainpagetech-inc">© 2024 Tech, Inc. </div>
                <div className="mainpageterms">Terms</div>
                <div className="mainpageprivacy-updated-042024">Privacy (Updated 04/2024)</div>
            </footer> */}
            </main>
        </div>
  )
}
