import React, { useState } from 'react';

const Books = () => {
    const [form, setForm] = useState({});
    const [books, setBooks] = useState([]);
    const [number, setNumber] = useState([]);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            

        });
    }
    const addBooks = () => {
        const isval = form.bookname && form.number;
        if (isval) {
            setBooks([...books, form.bookname])
            setNumber([...number, form.number])
        } else {
            alert('vui lòng không bỏ trống trường!')
        }
    }
    return (
        <div>
            <h1>Quản Lý Sách:</h1>
            <div>
                <label>Tên Sách:</label>
                <input name='bookname' value={form.bookname} onChange={handleChange} placeholder='Nhập vào công việc' />
            </div>
            <div>
                <label>Mã Sách:</label>
                <input type='number' name='number' value={form.number} onChange={handleChange} placeholder='Nhập mã sách' />
            </div>
            <div>
                <button type='button' onClick={addBooks}>Thêm sách</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tên sách</th>
                        <th>Mã sách</th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>  
                    {books.map((books, index) => (
                        <tr key={index}>
                            <td>{books}</td>
                            <td>{number[index]}</td>
                            <td>Sửa | Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Books;
