import React,{useEffect} from "react";
import "./Form.scss";
import "./Form.css";
import vid from "../assets/formvid.mp4";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Form = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
    },[])
  return (
    <section className="formpage ">
      <div className="overlay"></div>
      <video src={vid} muted loop autoPlay type="video.mp4"></video>
      <div data-aos="fade-up" className="form flex">
        <div className="title">
          <h1>Login Form</h1>
        </div>
        <div className="content flex">
          <div class="inputgroup">
            <label data-aos="fade-right" class="label">User Name</label>
            <input
              autocomplete="off"
              name="username"
              className="input"
              type="email"
            />
            <AiOutlineMail className="filedicon" />
          </div>
          <div class="inputgroup">
            <label data-aos="fade-right" class="label">Password </label>
            <input
              autocomplete="off"
              name="password"
              className="input"
              type="password"
            />
            <AiTwotoneLock className="filedicon" />
          </div>
          
          <button className="btn">
            <BsFillRocketTakeoffFill data-aos="fade-up" className="icon" />
            <span data-aos="fade-up">Sign in</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
