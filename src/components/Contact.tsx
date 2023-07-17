import "./css/Contact.css";

import { useRef, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contacts(props: { headerRef: MutableRefObject<any> } | {}) {
  const form: MutableRefObject<any> = useRef();

  const [error, setError] = useState<{
    errorOccured: boolean;
    errorMessage: string;
  }>({ errorOccured: false, errorMessage: "" });
  const [success, setSuccess] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<boolean>(false);

  function runSendForm(e: any) {
    e.preventDefault();
    let errorOccured = false;
    setError({ errorOccured: false, errorMessage: "" });
    const inputs: HTMLCollection = e.target.children;
    let parsedInputs: HTMLInputElement[] = [];
    for (let i = 0; i < inputs.length; i++) {
      let input: Element = inputs[i];
      if (input.className.includes("contact-input-element")) {
        let parsedInput: HTMLInputElement = input
          .children[1] as HTMLInputElement;
        if (!parsedInput.value) {
          errorOccured = true;
          setError({
            errorOccured: true,
            errorMessage: "Please fill out every field!",
          });
        }
        if (localStorage.getItem("userSentMessage") === "true") {
          errorOccured = true;
          setError({
            errorOccured: true,
            errorMessage: "Please do not spam me with messages!",
          });
        }
        if (!captcha) {
          errorOccured = true;
          setError({
            errorOccured: true,
            errorMessage: "Please do the captcha below!",
          });
        }
        if (errorOccured) {
          return null;
        } else {
          parsedInputs.push(parsedInput);
        }
      }
    }
    emailjs
      .sendForm(
        "service_ieljm36",
        "portfolio_contact_form",
        form.current,
        process.env.REACT_APP_EMAIL_JS_KEY
      )
      .then(
        (result) => {
          localStorage.setItem("userSentMessage", "true");
          setSuccess(true);
        },
        (error) => {
          setError({ errorOccured: true, errorMessage: error.text });
        }
      );
    for (let element of parsedInputs) {
      element.value = "";
    }
  }
  return (
    <>
      <h1>CONTACT</h1>
      <div className="main-container-contact">
        <form ref={form} onSubmit={runSendForm} id="contact-form">
          <div className="contact-input-element">
            <label>
              Name <strong>*</strong>
            </label>
            <input id="name" type="text" name="from_name"></input>
          </div>
          <div className="contact-input-element">
            <label>
              Email / Phone <strong>*</strong>
            </label>
            <input id="email" type="text" name="user_email"></input>
          </div>
          <div className="contact-input-element">
            <label>
              Message <strong>*</strong>
            </label>
            <textarea id="message" name="message"></textarea>
          </div>
          {error.errorOccured ? (
            <div className="error-box">{error.errorMessage}</div>
          ) : (
            ""
          )}
          {success ? (
            <div className="success-box">
              Your message has been successfully delivered!
            </div>
          ) : (
            ""
          )}

          <div className="submit-box">
            <ReCAPTCHA
              id="captcha"
              sitekey={process.env.REACT_APP_CAPTCHA_KEY as string}
              onChange={() => setCaptcha(true)}
            />
            <motion.input
              id="submit"
              type="submit"
              value="Send"
              whileTap={{
                scale: 0.7,
                backgroundColor: "rgb(69, 0, 0)",
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgb(139, 0, 0)",
              }}
              transition={{
                delay: 0,
                duration: 0.01,
              }}
            ></motion.input>
          </div>
        </form>
        <div className="contact-info">
          <p>
            <span>Phone:</span> +1 848-986-0341
          </p>
          <p>
            <span>Email:</span> tomzimmerman7@protonmail.com
          </p>
        </div>
      </div>
    </>
  );
}
export default Contacts;
