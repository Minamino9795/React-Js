import React, {useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Product from "../models/Product";

const rules = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    price: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function Create(props) {
    let navigate = useNavigate();

    // Làm việc với dữ liệu
    const [items,setItems] = useState([]);
    const [formData,setFormData] = useState({
        'name' : '',
        'price' : ''
    })
    const handleSubmit = (values)=>{
        let data= values;
        Product.store(data).then((res)=>{
            alert ('thêm thành công')
            navigate("/")
        }).catch((res)=>{
            alert('thêm thất bại')
        })
    }
    

    
    return (
        <div>
            <h1>Create</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={ (values) => handleSubmit(values)  }
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}

                        <label htmlFor="price">Price</label>
                        <Field name="price"/>
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <label htmlFor="email">Price</label>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Create;