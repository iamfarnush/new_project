import React, { useState } from 'react'
import SubmitBtn from '../../SubmitBtn/SubmitBtn';

const AddPartners = () => {

    const [photoPath, setPhotoPath] = useState("");
    const [photoFile, setPhotoFile] = useState(null)

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhotoPath(file.name);
            setPhotoFile(file);
        }
    }

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const partnersData = Object.fromEntries(formData.entries())

        if (!partnersData.photo.name) {
            console.log("Please fill all forms");
            return
        }
        
        try {
            const response = fetch("http://127.0.0.1:2020/Add/Partner", {
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

  return (
    <div>
         <form onSubmit={handleSubmit} className='mt-[30px]'>
                <div className='w-[500px] flex justify-between items-center border-black border-[2px] pl-[10px] h-[50px]' >
                    
                        <input type="text" name='photo'  placeholder='Photo' value={photoPath} readOnly />
                   
                   
                        <input type="file" name='photo' accept='image/*' onChange={handlePhotoChange} style={{ display: 'none' }} id='photo-upload' />
                   
                    
                        <label  htmlFor="photo-upload" className='w-[160px] font-semibold border-black border-[2px] px-[20px] h-[30px] rounded-[5px] mr-[10px]' >Choose photo</label>
                    
                </div>
            </form>
            <SubmitBtn />
    </div>
  )
}

export default AddPartners