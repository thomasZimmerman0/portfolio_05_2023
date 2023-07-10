import './css/Contact.css';

import { useRef, useEffect, MutableRefObject, useState } from 'react';

import { motion, useInView } from "framer-motion";

import  emailjs  from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function Contacts(props : { headerRef: MutableRefObject<any> } | {}) {

   const captchaKey : string = process.env.REACT_APP_CAPTCHA_KEY as string
   const form: MutableRefObject<any> = useRef();

   const [error, setError] = useState<{errorOccured: boolean, errorMessage: string}>({errorOccured: false, errorMessage: ""});
   const [success, setSuccess] = useState<boolean>(false);

    function runSendForm(e: any){
        let errorOccured = false
        e.preventDefault();
        setError({errorOccured: false, errorMessage: ""});
        const inputs: HTMLCollection = e.target.children;
        for(let i = 0; i < inputs.length; i++){
            let input: Element = inputs[i]
            if(input.className.includes("contact-input-element")){
                let parsedInputs: HTMLInputElement = input.children[1] as HTMLInputElement;
                if(!parsedInputs.value){
                    errorOccured = true;
                    setError({errorOccured: true, errorMessage: "Please fill out every field!"})
                }
                if(localStorage.getItem("userSentMessage") === "true"){
                    errorOccured = true;
                    setError({errorOccured: true, errorMessage: "Please do not spam me with messages!"})
                }
                if(parsedInputs.type !== "submit") parsedInputs.value = ""
            }
            if(errorOccured){
                return null;
            } 
        }
        emailjs.sendForm('service_ieljm36', 'portfolio_contact_form', form.current, process.env.REACT_APP_EMAIL_JS_KEY)
        .then((result) => {
            localStorage.setItem("userSentMessage", "true");
            setSuccess(true)
        }, (error) => {
            setError({errorOccured: true, errorMessage: error.text})
        });
    }
    function onChange(value :any) {
        console.log("Captcha value:", value);
    }

  return (
    <>
     <h1>CONTACT</h1>
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
            {success ? <div className="success-box">Your message has been successfully delivered!</div> : "" }

            <motion.input id="submit" type="submit" value="Send"  
            whileTap={{
                scale: 0.7,
                backgroundColor: 'rgb(69, 0, 0)'
            }}
            whileHover={{
                scale: 1.2,
                backgroundColor: 'rgb(139, 0, 0)'
            }}
            transition={{
                delay: 0,
                duration: 0.01
            }}
            ></motion.input>
        </form>
             <ReCAPTCHA
            id="captcha"
            sitekey={captchaKey}
            onChange={onChange}
            /> 
    </div>
    </>
  );
}
export default Contacts;
