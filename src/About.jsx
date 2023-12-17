import React from 'react'
import { NavLink } from 'react-router-dom'

const About = ( {setActive}) => {
    return (
        <section className="container about active" id="about">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                    An innovative and driven computer science enthusiast with a keen focus on becoming a full-stack developer. Currently in my third year of a Bachelor of Technology degree in Computer Science. <br /> <br />
                    
                    My dedication to mastering front-end technologies is matched only by my eagerness to dive deep into back-end systems to ultimately deliver seamless, end-to-end user experiences.
                    </p>
                    <div className="btn-con">
                        <a href="#" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <NavLink to='/projects' className='about-item' onClick={() => setActive('projects')}>
                        <div className="abt-text">
                            <p className="large-text">10+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </NavLink>

                    <a href='https://leetcode.com/gautam_2401/' target='_blank' className='about-item'>
                        <div className="abt-text">
                            <p className="large-text">400+</p>
                            <p className="small-text">LeetCode<br /> Problems</p>
                        </div>
                    </a>
                    <a href='https://www.hackerrank.com/GautaM__24' target='_blank' className="about-item">
                        <div className="abt-text">
                            <p className="large-text">5+</p>
                            <p className="small-text">Star <br /> Problem Solving</p>
                        </div>
                    </a>
                    <a href='https://data.typeracer.com/pit/profile?user=gautam007' target='_blank' className="about-item">
                        <div className="abt-text">
                            <p className="large-text">100+</p>
                            <p className="small-text">WPM <br /> Typing Speed</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">java</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">nodejs</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2010 - present</p>
                    <h5>Secondary Education<span> - Super International School</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2008 - 2011</p>
                    <h5>Higher Secondary Education<span> - Super International School</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2016 - 2017</p>
                    <h5>Computer Science Degree<span> - PSIT</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2009 - 2013</p>
                    <h5>Business Degree<span> - Sussex University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default About
