import React from 'react';
import './Email.css'
import emailjs from 'emailjs-com'

const Email = () => {

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_tj4jume', 'template_wxzz8bw', e.target, 'user_JegwN2JYR03exvXsYURDN').then(res => {
            console.log(res)
        }).catch(error => console.log(error))
    }
    return (
        <div>
            <div id="contact">
                <form action="#" onSubmit={sendEmail}>
                    <ul>
                        <h1>Contact</h1>
                        <li>
                            <input type="text" name="name" id="name" placeholder="Full name" />
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </li>
                        <li>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your message"
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Send message" class="btn" id="submit" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Email;