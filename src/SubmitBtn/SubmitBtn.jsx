import React from "react";
import { useState } from "react";


export default function SubmitBtn({ submitData, url }){

    const [modalMessage, setModalMessage] = useState('');
    const [modalClass, setModalClass] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
                credentials: "include",
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
            } else {
                throw new Error("Error!");
            }
        } catch (error) {
            setModalMessage(error.message);
            setModalClass(styles.error);
            console.error("Error:", error);
        } finally {
            setShowModal(true);
        }
    };

    return(
        <div className="absolute right-[100px] bottom-[50px] ">
            <button className="relative py-[5px] px-[40px] border-[2px] border-black rounded-[5px] " onClick={handleSubmit}>Submit</button>
        </div>
    )
}