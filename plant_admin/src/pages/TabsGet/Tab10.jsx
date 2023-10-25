import React, { useEffect, useState } from "react";
import "./Tab10.css";
import { axiosInstance, axiosInstanceFile, BASE_URL } from "../../utils/axiosinstance";
// import { message } from "antd";

const Tab10 = (props) =>{ 
    const [files,setFiles] = useState(props?.data);

    
    return(
        <div style={{width:"100%",height:"auto"}}>
           

            <div style={{display:"inline-flex",flexWrap:"wrap", width:"100%", justifyContent:"space-evenly",minHeight:"30vh", marginBottom:"20px"}}>
                {
                    files.map((item,i)=>{
                        return <><div style={{width:"26%",marginBottom:"10px", height:"30vh",boxShadow:"0 0 5px #efefef",borderRadius:"8px",display:"inline-flex"}}>
                        <img style={{objectFit:"contain",width:"100%", height:"30vh",borderRadius:"8px 0 0 8px"}} src={BASE_URL+item.img_name} alt="" />
                            {/* <button onClick={()=>deleteIMG(item.id)} style={{padding:"10px",width:"30px",border:"none",whiteSpace:"wrap",cursor:"pointer",borderRadius:"0 8px 8px 0"}}>У д а л и т ь </button> */}
                    </div></>
                    })
                }

                
               
   
            </div>

          
        </div>
    )
}
export default Tab10;