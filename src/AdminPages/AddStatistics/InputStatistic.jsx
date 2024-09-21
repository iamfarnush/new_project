import React, { useState } from 'react'
import SubmitBtn from '../../SubmitBtn/SubmitBtn'


export default function InputStatistic() {

    const [inputActive, setInputActive] = useState(false)

    const [validationErrors, setValidationErrors] = useState({})

    const [inputNumber, setInputNumber] = useState('')
    const [inputDecriptionEn, setInputDecriptionEn] = useState('')
    const [inputDecriptionRu, setInputDecriptionRu] = useState('')


    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const statistic = Object.fromEntries(formData.entries())

        if (!statistic.number || !statistic.description) {
            alert("Please fill all the fields")
            return
        }

        try {
            const response = await fetch("http://127.0.0.1:2020/add/statistic", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (response.ok) {
                console.log("Statistics added successfuly");

            }
            else if (response.status === 400) {
                setValidationErrors(data)
            }
            else {
                alert("Unable to create")
            }
        }
        catch (error) {
            alert("Unable to connect to the server")
        }


    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const formInfo = {
    //         text,
    //         text,
    //         text
    //     };
    //     console.log("Form info:", formInfo);
    // }

    const btn = (i) => {
        setInputActive(i)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center mt-[40px] pl-[40px] '>
                <div>
                    <input onChange={(e) => setInputNumber(e.target.value)} value={inputNumber} className='border-[2px] border-[#9E9E9E] w-[100px] h-[50px] pl-[10px]' type="text" name="number" id="" placeholder='121' />
                    <span>{validationErrors.number}</span>
                </div>
                <div className='border-[2px] w-[500px] h-[100px] pl-[20px] py-[20px] border-[#9E9E9E] border-r-0'>
                    {!inputActive ? (

                        <input onChange={(e) => setInputDecriptionEn(e.target.value)} value={inputDecriptionEn} className='border-[2px] pl-[10px] w-[430px] h-[55px] border-[#585858] ' type="text" name="description" id="" placeholder='Description' />
                       
                    ) : (

                        <input onChange={(e) => setInputDecriptionRu(e.target.value)} value={inputDecriptionRu} className='border-[2px] pl-[10px] w-[430px] h-[55px] border-[#585858] ' type="text" name="description" id="" placeholder='Описание' />
                        
                    )}
                </div>

                <div className='flex flex-col'>
                    <button onClick={() => btn(false)} className='border-[2px] border-b-0 border-[#9E9E9E] h-[50px]' >EN</button>
                    <button onClick={() => btn(true)} className='border-[2px] border-[#9E9E9E] h-[50px] w-[60px]' >RU</button>
                </div>
            </form>
            <SubmitBtn />
        </div>
    )
}
