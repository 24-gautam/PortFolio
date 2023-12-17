import React from 'react'


const Home = () => {
  return (
    <header class="container header active" id="home">
      <div class="header-content">
        <div class="left-header">
          <div class="h-shape"></div>
          <div class="image">
            <img src="my-png.png" className='mypng' alt="" />
          </div>
        </div>
        <div class="right-header">
          <h1 class="name">
            Hi, I'm <span>Gautam Gupta.</span>
            Computer Science Undergraduate.
          </h1>
          <p>
            My name is Gautam Gupta, and I am a proactive and detail-oriented Frontend Developer with a passion for creating meaningful and sleek user interfaces. <br />
            I love to create beautiful and functional websites.
          </p>
          <div class="btn-con">
            <a href="" class="main-btn">
              <span class="btn-text">Download Resume</span>
              <span class="btn-icon"><i class="fas fa-download"></i></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home

