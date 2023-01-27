import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dumy@gmail.com</h5>
            <a href='mailto:dumy@gmail.com' target='_sourabh'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Messagessssss</h5>
            <a href='https://m.me/sourabh' target='_sourabh'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+917976522803</h5>
            <a href='https://api.whatsapp.com/send?phone+917976522803' target='_sourabh'>Send a message</a>
          </article>
        </div>
        {/* End of Contact Option */}

        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact