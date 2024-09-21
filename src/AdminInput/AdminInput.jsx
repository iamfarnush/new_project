const AdminInput = ({ type, placeholder, name, value, className, onChange, required }) => {
    return (
        <div >
            <input
                className={`${className} w-[500px] border-black border-[2px] pl-[10px] h-[50px]`}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

export default AdminInput