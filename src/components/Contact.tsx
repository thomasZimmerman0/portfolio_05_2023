import './css/Contact.css';

import { useRef, useEffect, MutableRefObject, useState } from 'react';

import { motion, useInView } from "framer-motion";

import  emailjs  from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function Contacts(props : { headerRef: MutableRefObject<any> } | {}) {

   const form: MutableRefObject<any> = useRef();

   const [error, setError] = useState<{errorOccured: boolean, errorMessage: string}>({errorOccured: false, errorMessage: ""});

    function runSendForm(e: any){
        e.preventDefault();
        console.log(process.env.REACT_APP_EMAIL_JS_KEY)
        setError({errorOccured: false, errorMessage: ""});
        const inputs: HTMLCollection = e.target.children;
        for(let i = 0; i < inputs.length; i++){
            let input: Element = inputs[i]
            if(input.tagName === "INPUT" || input.tagName === "TEXTAREA"){
                let inputElement: HTMLInputElement = input as HTMLInputElement
                if(!inputElement.value) setError({errorOccured: true, errorMessage: "Please fill out every field!"})
                if(inputElement.type !== "submit") inputElement.value = ""
            }
        }
        emailjs.sendForm('service_ieljm36', 'portfolio_contact_form', form.current, process.env.REACT_APP_EMAIL_JS_KEY!)
        .then((result) => {
            console.log(result)
        }, (error) => {
            setError({errorOccured: true, errorMessage: error.text})
        });
    }
    function onChange(value :any) {
        console.log("Captcha value:", value);
    }

  return (
    <>
    <div className="main-container-contact">
        <form ref={form} onSubmit={runSendForm} id="contact-form">
            <div className="contact-input-element">
                <label>Name <strong>*</strong></label>
                <input id="name" type="text" name="user_name"></input>
            </div>
            <div className="contact-input-element">
                <label>Email / Phone <strong>*</strong></label>
                <input id="email" type="email" name="user_email"></input>
            </div>
            <div className="contact-input-element">
                <label>Message <strong>*</strong></label>
                <textarea id="message" name="message"></textarea>
            </div>
            {error.errorOccured ? <div className="error-box">{error.errorMessage}</div> : "" }
            <input id="submit" type="submit" value="Send"></input>
        </form>

            { /* <ReCAPTCHA
            id="captcha"
            sitekey=""
            onChange={onChange}
            /> */ }
    </div>
    </>
  );
}
export default Contacts;
