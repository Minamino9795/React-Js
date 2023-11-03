import React, { useState } from "react";
import { Field, Formik } from 'formik';

function ToDoList() {
    const [form, setForm] = useState({});
    const [name, setName] = useState([]);
    const [status, setStatus] = useState(-1);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    }
    const handleValidate = (values) => {
        let errors = {};

        if (!values.title) {
            errors.title = "Không được để trống";
        }
        if (!values.name) {
            errors.name = "Vui lòng chọn cấp độ";
        }
        return errors;
    }
    const handleSelect = (name, index) => {
        setForm(name);
        setStatus(index);
    };
    const handleDelete = (index) => {
        const newName = [...name];
        newName.splice(index, 1);
        setName(newName);
    };
    const handleSubmit = (values) => {
        const newName = [...name];
        if (status > -1) {
            newName.splice(status, 1, values);
        } else {
            newName.push(values);
        }
        setName(newName);
        setForm({});
        setStatus(-1);
    };
    return (
        <div>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>QUẢN LÝ CÔNG VIỆC</h1>
                        <div>
                            <label>Công việc:</label>
                            <Field name="title" />
                            {errors.title && <span>{errors.title}</span>}
                        </div>
                        <div>
                            <label>Cấp độ ưu tiên:</label>
                            <select value={values.name || ''} onChange={handleChange} name="name">
                                <option value="">--Vui lòng chọn --</option>
                                <option value="Bình thường">Bình thường</option>
                                <option value="Vừa">Vừa</option>
                                <option value="Ưu tiên">Ưu tiên</option>
                            </select><br />
                            {errors.name && <span>{errors.name}</span>}
                        </div>
                        <div>
                            <button type="submit">Thêm</button>
                        </div>
                    </form>
                )}
            </Formik><br />
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>Công việc</th>
                        <th>Cấp độ</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {name.map((name, index) => (
                        <tr key={index}>
                            <td>{name.title}</td>
                            <td>{name.name}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ToDoList;