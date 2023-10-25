import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Tab8.css"

const Tab8 = (props) =>{
    const {id} = useParams()
    const [addPlant,setAddPlant]= useState(props?.data?props.data:{
        red_book1: "",
        red_book2: "",
        red_book3: "",
        source1: "",
        source2: "",
        source3: "",
        source4: "",
        source5: "",
        note: "",
        botanical_institute: "",
        performer_position: "",
        performer_degree: "",
        performer_fullname: "",
        plant_id: id
      
      });

      useEffect(()=>{
        props.func(addPlant)
      },[addPlant])
    return(
        <div>

            <div style={{width:"100%",display:'inline-flex',justifyContent:"space-evenly"}}>

                <div style={{width:"20%"}}>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Включен Красные Книги(реестры,каталоги и др):</p>
                    {/* <p style={{height:"5vh", marginBottom:"10px"}}>Книги(реестры,каталоги и др):</p> */}

                    <p style={{height:"5vh", marginBottom:"20px",marginTop:"90px"}}>Литературные источники:</p>

                    <p style={{height:"4vh",marginTop:"175px"}}>Примечание:</p>
                    
                    <p style={{height:"4vh", marginBottom:"10px"}}>Ботаническо учреждение:</p>

                    <p style={{height:"5vh", marginBottom:"10px",marginTop:"50px"}}>Исполнитель:-должность</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>степень:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Ф.И.О:</p>
                </div>

                <div style={{width:"60%"}}>
                   1: <input onChange={(e)=>setAddPlant({...addPlant,red_book1:e.target.value})} value={addPlant.red_book1} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   2: <input onChange={(e)=>setAddPlant({...addPlant,red_book2:e.target.value})} value={addPlant.red_book2} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   3: <input onChange={(e)=>setAddPlant({...addPlant,red_book3:e.target.value})} value={addPlant.red_book3} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"25px",padding:"5px"}} type="text" /><br />
                   1: <input onChange={(e)=>setAddPlant({...addPlant,source1:e.target.value})} value={addPlant.source1} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   2: <input onChange={(e)=>setAddPlant({...addPlant,source2:e.target.value})} value={addPlant.source2} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   3: <input onChange={(e)=>setAddPlant({...addPlant,source3:e.target.value})} value={addPlant.source3} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   4: <input onChange={(e)=>setAddPlant({...addPlant,source4:e.target.value})} value={addPlant.source4} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   5: <input onChange={(e)=>setAddPlant({...addPlant,source5:e.target.value})} value={addPlant.source5} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                    <input onChange={(e)=>setAddPlant({...addPlant,note:e.target.value})} value={addPlant.note} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginTop:"35px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input onChange={(e)=>setAddPlant({...addPlant,botanical_institute:e.target.value})} value={addPlant.botanical_institute} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input onChange={(e)=>setAddPlant({...addPlant,performer_position:e.target.value})} value={addPlant.performer_position} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginTop:"35px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input onChange={(e)=>setAddPlant({...addPlant,performer_degree:e.target.value})} value={addPlant.performer_degree} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input onChange={(e)=>setAddPlant({...addPlant,performer_fullname:e.target.value})} value={addPlant.performer_fullname} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                </div>

            </div>

        </div>
    )
}
export default Tab8;