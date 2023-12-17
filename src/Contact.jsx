import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xknlklee");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <section className="container contact active" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                        Let's connect and discuss how my skills, ambition, and enthusiasm for technology can align with the pioneering work being done within your organization.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Kanpur, India
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: gautam2412003@gmail.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: PSIT, Kanpur</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 8957559476</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span> : Hindi,English</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="https://facebook.com">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form action="https://formspree.io/f/xknlklee" onSubmit={handleSubmit} method='POST' className="contact-form">
                            <div className="input-control i-c-2">
                                <input idtype="text" name='text' required placeholder="YOUR NAME" />
                                <input id='email' name='email' type="email" required placeholder="YOUR EMAIL" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea name="message" id="message" cols="15" rows="8" placeholder="Message Here..."></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="submit-btn">
                                <button className="btn" type='submit' disabled={state.submitting} >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

