import React from "react";
import "../pages/contact.css";
import salgyImg from "../components/img/contact.png"

const Contact = ()=>{
    return(
        <div className="esasyContainer">
            <div style={{width:"90%", height:"150px", margin:"0 auto"}}>
                <div className="container">
                    <div className="inputContainer">
                        <h1 style={{padding:"5px"}}>Связь с нами</h1>
                        <form style={{display:"block"}}> 
                            <input placeholder="Полное имя и фамилия"/><br />
                            <input type="text" placeholder="Номер телефона"/><br />
                            <input type="text" placeholder="Электронный адресс"/><br />
                            <textarea placeholder="Сообщения"></textarea><br />
                            <button id="sendButton">Отправить</button>
                        </form>
                    </div>

                    <div className="addressContainer">
                        <p>Наш адресс</p>
                        <h2>Г.Баллыев 30, Ашхабад, Туркменистан</h2>
                        <p>Наш электронный адресс</p>
                        <h2>gardenplants01@gmail.com</h2>
                        <p>Наш телефонный номер</p>
                        <h2>79 18 16</h2>
                        <h2>45 15 35</h2>
                        <img id="salgyImg" src={salgyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;