import React, { useEffect, useState } from "react";
import "./Tab10.css";
import { axiosInstance, axiosInstanceFile, BASE_URL } from "../../utils/axiosinstance";
import { useParams } from "react-router-dom";
// import { message } from "antd";

const Tab10 = () =>{
    const {id} = useParams()
    const [file,setFile] = useState(); 
    const [files,setFiles] = useState([]);

    useEffect(()=>{
        getPictures();
    },[])

    const createImg = ()=>{
        const formData = new FormData();
        console.log(file)
        formData.append("file",file); 
            axiosInstanceFile.post("/api/create-image/"+id,formData).then((res)=>{
            getPictures()
            console.log(res.data);
            setFile()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getPictures = ()=>{
        axiosInstance.get("/api/get-image/"+id).then((res)=>{
            Array.isArray(res.data)?setFiles(res.data):setFiles([]);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }

    const deleteIMG = (id)=>{
        axiosInstance.delete("/api/delete-image/"+id).then((res)=>{
            console.log(res.data);
            getPictures();
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div style={{display:"block"}}>
            <div style={{width:"100%", background:"red",position:"relative",marginBottom:"30px"}}>
                 <input name="file" id="file" onChange={(e)=>setFile(e.target.files[0])} style={{width:"85x",marginTop:"25px",padding:"0 5px",cursor:"pointer",position:"absolute",bottom:"9px",height:"30px",display:"none"}} type="file"/>
                 <label htmlFor="file">
                    <span style={{backgroundColor:"#efefef",border:"1px solid",width:"85x",marginTop:"25px",padding:"0 10px",lineHeight:"30px",cursor:"pointer",position:"absolute",bottom:"9px",height:"30px"}}>Click me</span>
                 </label>
                 <button onClick={()=>createImg()} style={{width:"90px",marginTop:"25px",padding:"2px",cursor:"pointer",position:"absolute",left:"90px",bottom:"10px",height:"29px"}}>Создать</button>
            </div>

            <div style={{display:"inline-flex",flexWrap:"wrap", width:"100%", justifyContent:"space-evenly",height:"30vh", marginBottom:"20px"}}>
                {
                    files.map((item,i)=>{
                        return <><div style={{width:"26%",marginBottom:"10px", height:"30vh",boxShadow:"0 0 5px #efefef",borderRadius:"8px",display:"inline-flex"}}>
                        <img style={{objectFit:"contain",width:"100%", height:"30vh",borderRadius:"8px 0 0 8px"}} src={BASE_URL+item.img_name} alt="" />
                            <button onClick={()=>deleteIMG(item.id)} style={{padding:"10px",width:"30px",border:"none",whiteSpace:"wrap",cursor:"pointer",borderRadius:"0 8px 8px 0"}}>У д а л и т ь </button>
                    </div></>
                    })
                }

                
               
   
            </div>

          
        </div>
    )
}
export default Tab10;