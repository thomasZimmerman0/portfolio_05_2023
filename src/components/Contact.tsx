import './css/Contact.css';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import  emailjs  from '@emailjs/browser';

function Contacts(props : { headerRef: MutableRefObject<any> } | {}) {

   const form: MutableRefObject<any> = useRef()

    function runSendForm(e: any){
        e.preventDefault();
        emailjs.sendForm('service_ieljm36', 'portfolio_contact_form', form.current, '3iArTg0hqkyEZ1G1R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <>
        <form ref={form} onSubmit={runSendForm} id="contact-form">
            <input type="hidden" name="from_name"></input>
            <label>Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send"></input>
        </form>
    </>
  );
}
export default Contacts;
