import './contactme.css';
import phone from '../images/contact/phone.png';
import gmail from '../images/contact/gmail.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
    const formData = new FormData(form.current);
    for(let [key, value] of formData.entries()){
        if(!value.trim()){
            window.alert(`Please fill in the ${key} field.`);
            return;
        }
    }
    emailjs
      .sendForm('service_7ynnpse', 'template_1au529h', form.current, {
        publicKey: 'tmhUubUmo2vsvtyy4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Success!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          form.current.reset();
        },
      );
  };

    return (
        <div id="contact" className='contactme-outer'>
            <h1>Contact Me!</h1>
            <p>I'd love if you reached out to me. Even if it's just tp say Hi. Don't hesitate! Drop me a message and i will get back to you ASAP!</p>
            <p>Write a message 👇</p>
            <div className='inp-data'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone No:</label>
                <input type='text' name="user_pno" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" className="sub" value="Send" />
                </form>
                <label>
                    <img src={phone} alt='phone'></img>5622542792
                </label>
                <label>
                    <img src={gmail} alt='gmail'></img>gokarakondahemanthsai@gmail.com
                </label>
            </div>
        </div>
        
    );
}

export default Contactme;
