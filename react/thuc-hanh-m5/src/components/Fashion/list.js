import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FashionModel from "../../models/FashionModel";


function ListFashion(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        FashionModel.getAll().then((res) => {
            setItems(res.data)
            console.log(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        FashionModel.destroy(id).then((res) => {

            alert('Thành công');
            // Chuyển hướng
            window.location.reload();
        }).catch((res) => {
            alert('Thất bại');
        })
    }


    return (
        <div>

            <h1>Library</h1>
            <Link to={'/create'}>Create</Link>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tồn kho</th>
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
                                <td> {item.stock} </td>
                                <td> <Link to={'edit/' + item.id}>Edit</Link> </td>
                                <td><Link onClick={() => handleDelete(item.id)}>Xóa</Link></td>

                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>

        </div>
    )

}
export default ListFashion;