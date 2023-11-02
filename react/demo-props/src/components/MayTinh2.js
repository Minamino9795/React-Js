import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const MayTinh2 = () => {
    const [soA, setSoA] = useState(0);
    const [soB, setSoB] = useState(0);
    const [ketQua, setKetQua] = useState('');
    const [toantu, setToanTu] = useState('');

    useEffect(() => {
        console.log('co gia tri thay doi');
    });

    useEffect(() => {
        console.log('chay lan dau tien');
    }, []);

    useEffect(() => {
        console.log('khi ket qua thay doi');
    }, [ketQua]);



    const setSoAValue = (e) => {
        setSoA(e.target.value)
    }
    const setSoBValue = (e) => {
        setSoB(e.target.value)
    }
    const xuLyCong = () => {
        let soAValue = parseInt(soA);
        let soBValue = parseInt(soB);
        let kq = soAValue + soBValue;
        setKetQua(kq)
    }
    const xuLyTru = () => {
        alert('-')
    }
    const xuLyNhan = () => {
        alert('x')
    }
    const xuLyChia = () => {
        alert('/')
    }

    return (
        <div>
            SoA: {soA} -
            SoB: {soB}
            <br />
            So thu nhat: <input type='number' onChange={setSoAValue} /> <br />
            So thu hai: <input type='number' onChange={setSoBValue} /> <br />
            {/* So thu nhat: <input type='number' name='soA' onChange={this.setFormData} /> <br/>
                So thu hai: <input type='number' name='soB' onChange={this.setFormData}/> <br/> */}
            <button onClick={xuLyCong}> + </button>
            <button onClick={xuLyTru}> - </button>
            <button onClick={xuLyNhan}> x </button>
            <button onClick={xuLyChia}> / </button>
            <br />
            Ket qua la: {ketQua}
        </div>
    );
}

export default MayTinh2;
