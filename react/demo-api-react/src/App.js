// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Users from "./pages/Users";
// import UserDetails from "./pages/UserDetails";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Users />} />
//         <Route path={"/user/add"} element={<UserDetails />} />
//         <Route path={`/user/:userId`} element={<UserDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;