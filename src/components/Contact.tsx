import './css/Contact.css';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import  emailjs  from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function Contacts(props : { headerRef: MutableRefObject<any> } | {}) {

   const form: MutableRefObject<any> = useRef()

    function runSendForm(e: any){
        e.preventDefault();
        emailjs.sendForm('service_ieljm36', 'portfolio_contact_form', form.current, '3iArTg0hqkyEZ1G1R')
        .then((result) => {
            const inputs: HTMLCollection = e.target.children
            for(let i = 0; i < inputs.length; i++){
                let input: Element = inputs[i]
                if(input.tagName === "INPUT" || input.tagName === "TEXTAREA"){
                    let inputElement: HTMLInputElement = input as HTMLInputElement
                    if(inputElement.type !== "submit") inputElement.value = ""
                }
            }
        }, (error) => {
            console.log(error.text);
        });
    }
    function onChange(value :any) {
        console.log("Captcha value:", value);
      }

  return (
    <>
    <div className="main-container">
        <form ref={form} onSubmit={runSendForm} id="contact-form">
            <label>Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send"></input>
            <ReCAPTCHA
            sitekey="6LfEFNwmAAAAABp_YAt_ZH9KLNY0jmJ4VUQeMfzm"
            onChange={onChange}
            />
        </form>
    </div>
    </>
  );
}
export default Contacts;
