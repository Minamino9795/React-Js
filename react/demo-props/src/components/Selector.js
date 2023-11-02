import React, { useEffect, useState } from 'react';

const Selector = () => {
    const [carList,setCarList]= useState("0");
    const [valueCarList,setValueCarList]= useState("0");

    const [colorList,setColorList]= useState("0");
    const [valueColorList,setValueColorList]= useState("0");

    const choice = e => {
        setCarList(e.target.value);
      };
      const color = (e)=>{
        setColorList(e.target.value)
      }
      useEffect(() => {
        switch (carList) {
          case "0":
            setValueCarList("Mercedes G63");
            break;
          case "1":
            setValueCarList("Mercedes C200");
            break;
          case "2":
            setValueCarList("Lambogini");
            break;
          case "3":
            setValueCarList("Toyota vios");
            break;
          default:
        }
      }, [carList]);
      useEffect(() => {
        switch (colorList) {
          case "0":
            setValueColorList("Xanh");
            break;
          case "1":
            setValueColorList("Đỏ");
            break;
          case "2":
            setValueColorList("Tím");
            break;
          case "3":
            setValueColorList("Vàng");
            break;
          default:
        }
      }, [colorList]);



    return (
        <div>
            Select a car: 
            <select onChange={e=>{choice(e)}}>
        <option value='0'>Mercedes G63</option>
        <option value='1'>Mercedes c200</option>
        <option value='2'>Lambogini</option>
        <option value='3'>Toyota vios</option>
            </select><br>
            </br>
            Select a color: 
            <select onChange={e=>{color(e)}}>
        <option value='0'>Xanh</option>
        <option value='1'>Đỏ</option>
        <option value='2'>Tím</option>
        <option value='3'>Vàng</option>
            </select>
            <h2>Your selected a: {valueCarList} - {valueColorList}</h2>
        </div>
    );
}

export default Selector;
