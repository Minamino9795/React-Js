import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Books from "../../models/Books";

const rules = Yup.object().shape({
    Title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    Quantity: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function BookCreate(props) {
    let navigate = useNavigate();

    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'Title': '',
        'Quantity': ''
    })
    const handleSubmit = (values) => {
        let data = values;
        // console.log(data);
        Books.store(data).then((res) => {
            alert('thêm thành công')
            navigate("/book")
        }).catch((res) => {
            alert('thêm thất bại')
        })
    }



    return (
        <div>
            <h1>Create</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="Title">Name</label>
                        <Field name="Title" />
                        {errors.Title && touched.Title ? (
                            <div>{errors.Title}</div>
                        ) : null}<br></br>

                        <label htmlFor="Quantity">Quantity</label>
                        <Field name="Quantity" />
                        {errors.Quantity && touched.Quantity ? (
                            <div>{errors.Quantity}</div>
                        ) : null}<br></br>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookCreate;