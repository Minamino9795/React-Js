import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Books from "../../models/Books";


function ListBook(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        Books.getAll().then((res) => {
            setItems(res.data)
            console.log(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        Books.destroy(id).then((res) => {

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
            <Link to={'/book/create'}>Create</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Sách</th>
                        <th>Số lượng</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length ? items.map((item, key) => (
                            <tr key={key}>
                                <td> {item.id} </td>
                                <td> {item.Title} </td>
                                <td> {item.Quantity} </td>
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
export default ListBook;