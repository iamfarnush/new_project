import React, { useState } from 'react'
import AdminInput from '../../AdminInput/AdminInput'

const AddStory = () => {

    const [inputActive, setInputActive] = useState(false)

    const [validationErrors, setValidationErrors] = useState({})

    const [inputTitleEn, setInputTitleEn] = useState('')
    const [inputNameEn, setInputNameEn] = useState('')
    const [inputSurnameEn, setInputSurnameEn] = useState('')
    const [inputDescriptionEn, setInputDescriptionEn] = useState('')
    const [inputQuoteEn, setInputQuoteEn] = useState('')

    const [inputTitleRu, setInputTitleRu] = useState('')
    const [inputNameRu, setInputNameRu] = useState('')
    const [inputSurnameRu, setInputSurnameRu] = useState('')
    const [inputDescriptionRu, setInputDescriptionRu] = useState('')
    const [inputQuotRu, setInputQuoteRu] = useState('')

    const btn = (i) => {
        setInputActive(i)
    }

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const patientData = Object.fromEntries(formData.entries())

        if (!patientData.title || !patientData.name || !patientData.surname || !patientData.description || !patientData.quote || !patientData.photo.name) {
            console.log("Please fill all forms");
            return
        }
        
        try {
            const response = fetch("http://127.0.0.1:2020/add/pationt/story", {
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
    //         text,
    //         text,
    //         text,
    //         file
    //     };
    //     console.log("Form info:", formInfo);
    // };

    const [photoPath, setPhotoPath] = useState("");
    const [photoFile, setPhotoFile] = useState(null)

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhotoPath(file.name);
            setPhotoFile(file);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex mt-[30px] w-[500px]'>
                <div className='flex flex-col gap-[10px] mb-[10px] border-[2px] pr-[50px] pl-[10px] border-[#9E9E9E]  py-[10px]'>
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
                            placeholder="Заголовок"
                            name="title"
                            value={inputTitleRu}
                            onChange={(e) => setInputTitleRu(e.target.value)}
                            required={true}
                        />
                    )}

                    {!inputActive ? (
                        <AdminInput
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={inputNameEn}
                            onChange={(e) => setInputNameEn(e.target.value)}
                            required={true}
                        />
                    ) : (
                        <AdminInput
                            type="text"
                            placeholder="Имя"
                            name="name"
                            value={inputNameRu}
                            onChange={(e) => setInputNameRu(e.target.value)}
                            required={true}
                        />
                    )}

                    {!inputActive ? (
                        <AdminInput
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={inputSurnameEn}
                            onChange={(e) => setInputSurnameEn(e.target.value)}
                            required={true}
                        />
                    ) : (
                        <AdminInput
                            type="text"
                            placeholder="Фамилия"
                            name="surname"
                            value={inputSurnameRu}
                            onChange={(e) => setInputSurnameRu(e.target.value)}
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
                            placeholder="Quote"
                            name="quote"
                            value={inputQuoteEn}
                            onChange={(e) => setInputQuoteEn(e.target.value)}
                            required={true}
                        />
                    ) : (
                        <AdminInput
                            type="text"
                            placeholder="Цитата"
                            name="quote"
                            value={inputQuotRu}
                            onChange={(e) => setInputQuoteRu(e.target.value)}
                            required={true}
                        />
                    )}
                </div>

                <div className='flex flex-col '>
                    <button onClick={() => btn(false)} className='border-[2px] border-b-0 border-[#9E9E9E] h-[50px]' >EN</button>
                    <button onClick={() => btn(true)} className='border-[2px] border-[#9E9E9E] h-[50px] w-[60px]' >RU</button>
                </div>
            </form>
            <form onSubmit={handleSubmit} className='ml-[15px]'>
                <div className='w-[400px] flex justify-between items-center border-black border-[2px] pl-[10px] h-[50px]' >
                    {!inputActive ? (
                        <input type="text" name='photo'  placeholder='Photo' value={photoPath} readOnly />
                    ) : (
                        <input type="text" name='photo' placeholder='Фото' value={photoPath} readOnly />
                    )}
                    {!inputActive ? (
                        <input type="file" name='photo' accept='image/*' onChange={handlePhotoChange} style={{ display: 'none' }} id='photo-upload' />
                    ) : (
                        <input type="file" name='photo' accept='image/*' onChange={handlePhotoChange} style={{ display: 'none' }} id='photo-upload' />
                    )}
                    {!inputActive ? (
                        <label  htmlFor="photo-upload" className='w-[160px] font-semibold border-black border-[2px] px-[20px] h-[30px] rounded-[5px] mr-[10px]' >Choose photo</label>
                    ) : (
                        <label htmlFor="photo-upload" className='w-[160px] font-semibold border-black border-[2px] px-[20px] h-[30px] rounded-[5px] mr-[10px]'>Выберите фото</label>
                    )}
                </div>
            </form>
        </div>
    )
}

export default AddStory