import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const fruits = [
  "Cam",
  "Chanh",
  "Bưởi",
  "Xoài",
  "Ổi",
  "Mít"
];
const name = "Thật là bá đạo";
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
  margin: '10px',
  padding: '20px',
  textAlign: "center"
};
const students = [
  {
    company: 'Đào Đầu Mùa',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Chanh Trái Mùa',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Bưởi Da Xanh',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Cam Cuối Vụ',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Ổi Chính Cây',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Hồng Treo Gió',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
const tick= () =>{
root.render(
  // React.createElement("h1", {style:divStyle} , name),
  <div>
  <h1>
    <div style={divStyle}>
      {name}
    </div>
  </h1>,
<div>
    <h1>Hoa quả này là đồng giá:</h1>
    <ul>
      {
        fruits.map( (value,index)=>(
          <li>
            {
              value
            }
          </li>
        ))

      }
    </ul>
  </div>
  <div>
  <h1>Wow, tuyệt vời!</h1>
  <h2>Bây giờ là {new Date().toLocaleTimeString()}.</h2>
  </div>
  {/* <div>
    <h4>Browser's details: {navigator.userAgent}</h4>
  </div> */}
  <div>
    {
      students.map(students=>(
        <tr>
          <td>{students.company}</td>
          <td>{students.contact}</td>
          <td>{students.country}</td>
        </tr>
      ))
    }
  </div>
  <div>
  <div className="container">
  <div className="card">
    <div className="card--header" />
    <img
      className="avatar"
      src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/385417230_2583960915114563_181293129328181629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GvG6-E5MAS0AX8kSyDM&_nc_ht=scontent.fdad3-4.fna&oh=00_AfB9Jp4ePo8Tv2un0Mt1BDxMDeAbq3xkWds_BUCfPNFW1g&oe=6541491F"
      alt="avatar"
    />
    <div className="card--body">
      <div>
        <p className="text-header">Thích Hoa Quả</p>
        <p className="text-sub">
         Follow em để được giảm giá khi gọi hoa quả nhé mấy thầy!
         Chổ em toàn hoa quả nhập khẩu thôi :))
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>,

<React.StrictMode>
    <App />
  </React.StrictMode>
);
};
setInterval(tick,1000)




  



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

