import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MayTinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soA: 0,
            soB: 0,
            toantu: '',
            ketqua: '',
        };
    }

    tinhTong = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let result = soA + soB;
        this.setState({ ketqua: result });
    };

    tinhHieu = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let result = soA - soB;
        this.setState({ ketqua: result });
    };

    tinhTich = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let result = soA * soB;
        this.setState({ ketqua: result });
    };

    tinhThuong = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let result = soA / soB;
        this.setState({ ketqua: result });
    };

    setFormData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            
            <div className="container my-5">
            <div className="calculator">
                <div className="display mb-3">
                    Số thứ nhất: {this.state.soA} <br></br>
                     Số thứ hai: {this.state.soB}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="soA">Số thứ nhất:</label>
                    <input
                        type="number"
                        
                        id="soA"
                        name="soA"
                        onChange={this.setFormData}
                        placeholder='Nhập số thứ nhất'
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="soB">Số thứ hai:</label>
                    <input
                        type="number"
                       
                        id="soB"
                        name="soB"
                        onChange={this.setFormData}
                        placeholder='Nhập số thứ hai'
                    />
                </div>
                <div className="operation-buttons mb-3">
                    <div >
                    <label className='pheptinh'>Chọn Phép tính:</label>
                    </div>
                    <button className="btn btn-primary" onClick={this.tinhTong}>+</button>
                    <button className="btn btn-primary" onClick={this.tinhHieu}>-</button>
                    <button className="btn btn-primary" onClick={this.tinhTich}>x</button>
                    <button className="btn btn-primary" onClick={this.tinhThuong}>/</button>
                </div>
                <div className="result">
                    Kết quả: {this.state.ketqua}
                </div>
            </div>
        </div>
            
            
        );
    }
}

export default MayTinh;
