import React, { useState } from "react";
import "./form.css";
// import "./form.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can implement your own submit logic here
    //     console.log(formData);
    // };

    return (
        <div className="container-form">
            {/* <form className="contact-form"> */}
                <h2>We're Here To Help!</h2>
                <div className='contactbox'>
                    <div className='contactbox-left'>
                        {/* <h3>Send your request</h3> */}
                        <form>
                            <div className="input-row">
                                <div className="input-group">
                                    {/* <label>Name</label> */}
                                    <input type='text' placeholder='Name'></input>
                                </div>
                                <div className="input-group">
                                    {/* <label>Professional Email Address</label> */}
                                    <input type='email' placeholder='Professional Email Address'></input>
                                </div>
                            </div>

                            <div className="input-row">
                                {/* <label>Email</label> */}
                                <input type='tel' placeholder='Phone'></input>
                            </div>
                            <div className="input-row">
                                    {/* <label></label> */}
                                    <input type='text' placeholder='Job Title'></input>
                            </div>
                            <div className="input-row">
                                    {/* <label></label> */}
                                    <input type='text' placeholder='Company Name'></input>
                            </div>
                            <div className="input-row">
                                    {/* <label></label> */}
                                    <select id='work' name='Type Of Work'>
                                        <option>Type Of Work</option>
                                        <option>AI Services</option>
                                        <option>Computer Vision Labeling Services</option>
                                        <option>Data Collection</option>
                                        <option>NLP Labelling Services</option>
                                        <option>Web Development Services</option>
                                        <option>SEO</option>
                                        <option>Others</option>
                                    </select>
                            </div>
                            {/* <label>Message</label> */}
                            <textarea rows="5" placeholder="Message"></textarea>
                            <button className="form-btn" type="submit">Send Message</button>
                        </form>
                    </div>
                
                    <div className='contactbox-right'>
                        {/* <h3></h3> */}
                        <table>
                            <tr>
                                <td>Office</td>
                                {/* <td></td> */}
                                <td>  Bari colony, New Jaswantpura,</td>
                                <td>  Aurangabad, India 431001.</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>  contact@colossal-ai.com</td>
                            </tr>
                            <tr>
                                <td>Hours</td>
                                <td>M-F: 8am – 10pm</td>
                                <td>S-S: Closed</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Submit</button> */}
            {/* </form> */}
        </div>
    );
};

export default ContactForm;