import React from "react";
import Title from "../Title/Title";
import AdminInput from "../AdminInput/AdminInput";
import styles from './Login.module.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

export default function Login(){

  
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();

        const formInfo = {
            phone,
            password
        };
        console.log("Form info:", formInfo);
    };


    return(
        <div>
          <Title title="Login"/>
          <form className={styles.formDiv}  onSubmit={handleSubmit}>

            <AdminInput 
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
          />
              <AdminInput 
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
          />
          <NavLink to="/updatepassword"><button className="border-[2px] border-black rounded-[5px] px-[20px] py-[3px] text-[14px] font-semibold">Forgot password</button></NavLink>
          </form>
          

        <div>
          <SubmitBtn />
        </div>
        </div>
    )
}