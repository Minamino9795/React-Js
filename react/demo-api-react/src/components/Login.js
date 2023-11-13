import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../redux/action";
// function Login() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [user, setUser] = useState({ username: "", password: "" });

//     const userlogined = useSelector(state => state.userlogined);
//     const setValueForUser = (key, value) => {
//         const newVal = { ...user, [key]: value };
//         setUser(newVal);
//     };
//     const login = () => {
//         dispatch({ type: "LOGIN", payload: user });
//     };
//     useEffect(() => {
//         if (userlogined.username) {
//             navigate("/users");
//         }
//     }, [userlogined, navigate]);



///////////// REDUX-THUNK/////////////

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    };
        const login = () => {
            dispatch(fakeLogin(user));
        };
        useEffect(() => {
            if(userlogined.username){
                navigate("/users")
            }
        },[userlogined , navigate]);



return (

    <form>
        <div>
            <label>User name</label>
            <input
                id="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
            />
        </div>
        <div>

            <label>Password</label>
            <input
                id="password"
                onChange={e => setValueForUser("password", e.target.value)}
                type="password"
            />
        </div>
        <div>
            <button
                type="button"
                onClick={() => {
                    login();
                }}>Login</button>
        </div>

    </form>
);
    
}
export default Login;