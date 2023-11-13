Bước 0
Cài đặt thư viện: npm i v
Bước 1
Tạo thư mục redux gồm 3 file: action.js, reducer.js, store.js
Bước 2: action.js
Khai báo action là những hành động được sử dụng
Bước 3: redcuer.js
khai báo giá trị state mặc định
viết hàm xử lý state
Bước 4: store.js
nhúng reducer và gọi createStore
Bước 5: tích hợp redux vào ứng dụng ở index.js
import Provider
import store
gọi Provider bọc App Component
Bước 6: Lấy giá trị state từ store
import { useSelector } from 'react-redux';
useSelector: lấy giá trị state từ store
const amount = useSelector(state => state.amount);
Bước 7: Gửi hành động
import { useDispatch } from 'react-redux';
useDispatch: gửi hành động
const dispatch = useDispatch();
Xử lý sự kiện dispatch 1 action let action = { type: DEPOSIT, payload: 10 }; dispatch(action)
Bước 8: applyMiddleware: trong file store.js
import { applyMiddleware } from "redux";
Khai báo myMiddleware
Gọi myMiddleware khi gọi createStore