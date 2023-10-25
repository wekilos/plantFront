import React,{useEffect,useContext, useRef} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import "./header.css"
import {Link} from "react-router-dom"
import {SearchOutlined} from "@ant-design/icons"
import {SebedimContext}  from "../context/context"
import logo from "./img/plantLogo.png"


const Header = ()=>{
    const history = useLocation(); 
    const navigate = useNavigate()
    const {searchInput,onChange} = useContext(SebedimContext)
    const pathN = history.pathname ;
    const ref = useRef();
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
            if (document.activeElement === ref.current) {
                navigate("/home")
              } 
            
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);
    return(
        <div id="headerDiv">
            <div className="header">
                <div style={{display:"block"}}>
                    <div style={{position:"relative"}}>
                        <div style={{position:"absolute",left:"18%"}}><img src={logo} alt=""  style={{height:"70px"}}/></div>
                        <SearchOutlined style={{position:"absolute",left:"27%",top:"50%"}} />
                        <input ref={ref} onChange={(e)=>onChange(e.target.value)} value={searchInput} id="searching" placeholder='Поиск' type="search"  name="gsearch"/>
                    
                    </div>

                    <div>
                        <ul>
                            <li><Link className={`${pathN=="/home" ? "class":""}`}  to="/home">Главная страница</Link></li>
                            {/* <li><Link className={`${pathN.includes("/plants") ? "class":""}`} to="/plants">Ösümlikler</Link></li> */}
                            <li><Link className={`${pathN.includes("/contact") ? "class":""}`} to="/contact">Контакт</Link></li> 
                            <li><Link className={`${pathN.includes("/about") ? "class":""}`} to="/about">О нас</Link></li> 
                            {/* <li><Link className={`${pathN.includes("/users") || pathN.includes("/admins") ? "class":""}`} to="/users">Пользователи</Link></li>  */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;
