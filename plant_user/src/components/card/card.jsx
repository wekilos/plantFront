import React from "react"
import image1 from "../img/img6.png"
import "./card.css"
import {Link, useNavigate} from "react-router-dom"
import { BASE_URL } from "../../utils/axiosinstance"
import { Carousel } from "antd"

const Card = (props)=>{
    const data = props.data;
    const navigate = useNavigate()
    return(
      
        <div id="card" style={{width:props.width?props.width:"30%",marginBottom:"20px",marginTop:"0px", height:'400px', background:"white",borderRadius:"5px", padding:"5px", marginRight:"10px", border:"1.5px solid #09AB5B"}}>
             <div onClick={()=>navigate("/cardInfo/"+data?.id)} style={{width:"100%",height:"180px"}}>
                <Carousel autoplay style={{lineHeight:"auto"}}>
                    {data?.image?.map((item)=>{
                        return <div>
                             <img src={BASE_URL+item?.img_name} alt=""  style={{objectFit:"cover",width:"100%",height:"180px"}}/>
                             </div>
                    })}
                </Carousel>
            </div>
            <p style={{padding:"10px 10px 0px",marginBottom:"5px", fontSize:'17px'}}>{data?.fullname.slice(0,100)}... </p> 
            <p style={{padding:"0px 10px 10px", fontSize:'12px'}}> {data?.fullname_ru.slice(0,100)}...</p> 
             <div style={{textAlign:"center"}}>
                <Link to={"/cardInfo/"+data?.id}>
                    <button className="card-button">Подробнее</button>
                </Link>
                {/* <Link to={"/plantEdit/"+data?.id}>
                    <button className="card-button">edit</button>
                </Link> */}
            </div>
        </div>

        // <div>Card</div>

    )
}

export default Card;