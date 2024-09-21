import React from 'react'
import { useState } from 'react'
import AdminInput from '../../AdminInput/AdminInput'
import SubmitBtn from '../../SubmitBtn/SubmitBtn'

const AddProjects = () => {

    const [inputActive, setInputActive] = useState(false)

    const btn = (i) => {
        setInputActive(i)
    }

    const [inputTitleEn, setInputTitleEn] = useState('')
    const [inputDescriptionEn, setInputDescriptionEn] = useState('')
    const [inputAddressEn, setInputAddressEn] = useState('')
    const [inputEmailEn, setInputEmailEn] = useState('')
    const [inputPhoneEn, setInputPhoneEn] = useState('')

    const [inputTitleRu, setInputTitleRu] = useState('')
    const [inputDescriptionRu, setInputDescriptionRu] = useState('')
    const [inputAddressRu, setInputAddressRu] = useState('')
    const [inputEmailRu, setInputEmailRu] = useState('')
    const [inputPhoneRu, setInputPhoneRu] = useState('')


    return (
        <div>
            <form className='flex flex-col mt-[40px] w-[525px]'>
                <div className='flex gap-[10px] mb-[10px] border-[2px] pr-[50px] pl-[10px] border-[#9E9E9E]  '>
                    <div className='flex flex-col gap-[10px] py-[10px]'>
                        {!inputActive ? (
                            <AdminInput
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={inputTitleEn}
                                onChange={(e) => setInputTitleEn(e.target.value)}
                                required={true}
                            />
                        ) : (
                            <AdminInput
                                type="text"
                                placeholder="Описание"
                                name="title"
                                value={inputTitleRu}
                                onChange={(e) => setInputTitleRu(e.target.value)}
                                required={true}
                            />
                        )}

                        {!inputActive ? (
                            <AdminInput
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={inputDescriptionEn}
                                onChange={(e) => setInputDescriptionEn(e.target.value)}
                                required={true}
                            />
                        ) : (
                            <AdminInput
                                type="text"
                                placeholder="Описание"
                                name="description"
                                value={inputDescriptionRu}
                                onChange={(e) => setInputDescriptionRu(e.target.value)}
                                required={true}
                            />
                        )}

                        {!inputActive ? (
                            <AdminInput
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={inputAddressEn}
                                onChange={(e) => setInputAddressEn(e.target.value)}
                                required={true}
                            />
                        ) : (
                            <AdminInput
                                type="text"
                                placeholder="Адрес"
                                name="address"
                                value={inputAddressRu}
                                onChange={(e) => setInputAddressRu(e.target.value)}
                                required={true}
                            />
                        )}
                    </div>
                    <div className='flex flex-col '>
                        <button onClick={() => btn(false)} className='border-[2px] border-b-0 border-[#9E9E9E] h-[50px]' >EN</button>
                        <button onClick={() => btn(true)} className='border-[2px] border-[#9E9E9E] h-[50px] w-[60px]' >RU</button>
                    </div>
                </div>

                <div className='flex flex-col  gap-[10px] ml-[15px]'>
                    {!inputActive ? (
                        <input className='w-[400px] border-black border-[2px] pl-[10px] h-[50px]' type="email" placeholder='Email' name='email' value={inputEmailEn} onChange={(e) => setInputEmailRu(e.target.value)} required={true} />
                    ) : (
                        <input className='w-[400px] border-black border-[2px] pl-[10px] h-[50px]' type="email" placeholder="Электронная почта" name='email' value={inputEmailRu} onChange={(e) => setInputEmailRu(e.target.value)} required={true} />
                    )}

                    {!inputActive ? (
                        <input className='w-[400px] border-black border-[2px] pl-[10px] h-[50px]' type="number" placeholder='Phone' name='number' value={inputPhoneEn} onChange={(e) => setInputPhoneEn(e.target.value)} required={true} />
                    ) : (
                        <input className='w-[400px] border-black border-[2px] pl-[10px] h-[50px]' type="number" placeholder='Номер' name='number' value={inputPhoneRu} onChange={(e) => setInputPhoneRu(e.target.value)} required={true} />
                    )}
                </div>
                <SubmitBtn />
            </form>

        </div>
    )
}

export default AddProjects