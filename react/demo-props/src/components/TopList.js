import React, { useState } from 'react';

const TopList = () => {
    const [form, setForm] = useState({ name: '' });
    const [congViec, setCongViec] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addCongViec = () => {
        const isValid = form.name;
        if (isValid) {
            setCongViec([...congViec, form.name]);
        } else {
            alert('Vui lòng nhập vào công việc!');
        }
        setForm({ name: '' });
    };

    return (
        <div className="App">
            <h1>Quản Lý Công Việc</h1>
            <div className="task-input">
                <label>Công việc:</label>
                <input name='name' value={form.name} onChange={handleChange} placeholder='Nhập vào công việc' />
                <button type='button' onClick={addCongViec}>Thêm</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Danh sách công việc:</th>
                    </tr>
                </thead>
                <tbody>
                    {congViec.map((congViec, index) => (
                        <ul key={index}>
                            <li>{congViec}</li>
                        </ul>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopList;
