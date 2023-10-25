import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import "./login.css";
import {message} from "antd";
import "antd/dist/antd.css"; 
import loginImg from "../components/img/login-img.png"
import {EyeOutlined,EyeInvisibleOutlined} from "@ant-design/icons";
import { axiosInstance } from "../utils/axiosinstance";
const Login =()=>{
    const [passType,setPassType] = useState("password");
    const [userName,setUserName] = useState("");
    const [userPassword, setUserPassword] = useState ("");
    const history = useNavigate();
    
    const login =(e)=>{
        e.preventDefault();
        axiosInstance.post("/api/login-admin",{
            username:userName,
            password:userPassword
        }).then((data)=>{
            console.log(data);
            if(data.data.error){
                message.warning("User name or Password wrong!")
            }else{
                message.success("Successfully!");
                localStorage.setItem("UserData",JSON.stringify(data.data));
                history("/home")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div style={{background:"white"}}>
            <div className="logincontainer">
                <form onSubmit={(e)=>login(e)} action="">
                    {/* <div> */}
                        <img src={loginImg} alt="" style={{height:"180px", borderRadius:"50%", marginLeft:"20%"}} />
                    {/* </div> */}
                    <div className="inputDiv">
                        <label htmlFor="" className="input" style={{border:"none", fontWeight:"500"}}>User Name</label> <br />
                        <input onChange={(e)=>setUserName(e.target.value)} value={userName}  type="text"  placeholder="User Name" className="input"/> <br />
                        <label htmlFor="" className="input" style={{border:"none", fontWeight:"500"}}>Password</label> <br />
                        <div className="paswordDiv ">
                        <input onChange={(e)=>setUserPassword(e.target.value)} value={userPassword} type={passType} placeholder="Enter your password" className="passinput"/> <br />
                        {passType ==="password" && <EyeOutlined onClick={()=>setPassType("text")} className="eyeIcon" />}
                        {passType ==="text" && <EyeInvisibleOutlined onClick={()=>setPassType("password")} className="eyeIcon" />}
                        </div>
                        <button type="submit" className="login-button">Login</button> <br />
                        <label htmlFor="" className="input" style={{border:"none"}}>
                            <input type="checkbox" checked=""/> Remember me
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default React.memo(Login);