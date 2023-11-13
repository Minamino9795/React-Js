import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Product from '../models/Product';
import { useDispatch, useSelector } from 'react-redux';
import { DEPOSIT, DRAW } from '../redux/action';


function List(props) {
    const amount = useSelector(state => state.amount);
    const dispatch = useDispatch();


    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    // Chạy 1 lần duy nhất
    useEffect(() => {
        // Gọi API, có dữ liệu trả về
        Product.getAll().then((res) => {
            setItems(res.data)
            // console.log(res.data);
        });
    }, []);



    const handleDelete = (id) => {
        Product.destroy(id).then((res) => {
            alert('Thành công');
            // Chuyển hướng
            window.location.reload();
        }).catch((res) => {
            alert('Thất bại');
        })
    }

    const handleDeposit = () => {
        let action = {
            type: DEPOSIT,
            payLoad: 10
        };
        dispatch(action);
    }
    const handleDraw = () => {
        let action = {
            type: DRAW,
            payLoad: 10
        };
        dispatch(action);
    }



    return (
        <div>
            <div>
                <h1>Số tiền hiện tại: {amount}</h1>
                <button onClick={handleDeposit}> Nạp vào 10$</button>
                <button onClick={handleDraw}> Rút ra 10$</button>
            </div>


            <Link to={'/create'}>Create</Link>

            <h1>List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length ? items.map((item, key) => (
                            <tr key={key}>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> <Link to={'edit/' + item.id}>Edit</Link> </td>
                                <td><Link onClick={() => handleDelete(item.id)}>Xóa</Link></td>

                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;