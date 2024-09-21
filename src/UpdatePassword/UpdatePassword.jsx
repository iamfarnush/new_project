import React from "react";
import Title from '../Title/Title'
import { useState } from "react";
import AdminInput from "../AdminInput/AdminInput";
import SubmitBtn from "../SubmitBtn/SubmitBtn";


export default function(){

    const [email, setEmail] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault();

        const formInfo = {
            email
        };
        console.log("Form info:", formInfo);
    };

    return(
        <div>
          <div>
            <Title title="Email to Update password"/>
          </div>
          <div className="flex justify-center">
         <form onSubmit={handleSubmit}>
         <AdminInput 
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
          />
         </form>
          </div>
          <div>
          <SubmitBtn />
          </div>
        </div>
    )
}