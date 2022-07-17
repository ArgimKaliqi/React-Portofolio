import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p8gmx46', 'template_p6o79go', formRef.current, 'PMCPMVV4BpyxrMdPI')
      .then((result) => {
          console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
          setDone(true)
      });
  };



  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">
                Feel free to contact me!
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +383 45 613 226
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        akaliqi@outlook.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Lagjia Dardani, Prishtine
                    </div>
                </div>
        </div>
        <div className="c-right">
            <div className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            connecting with people and different changes!
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button >Submit</button>
            {done &&  "Thank you..."}
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
