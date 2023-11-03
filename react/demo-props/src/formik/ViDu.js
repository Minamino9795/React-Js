import React, { useState } from 'react';

const ViDu = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleValidate = () => {
        const errors = {};
        if (!form.email) {
            errors.email= "không được để rỗng";
        }else if(!REGEX.email.test(form.email)){
            errors.email="email không hợp lệ";
        }
        if(!form.password){
            errors.password="không được để trống";
        }
        return  errors;
    }
    const handleSubmit=()=>{
        alert("đăng nhập thành công");
    }
    return (
        <div>

        </div>
    );
}

export default ViDu;
