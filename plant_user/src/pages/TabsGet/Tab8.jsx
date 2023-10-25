import React, { useEffect, useState } from "react";
import "./Tab8.css"

const Tab8 = (props) =>{
    const [addPlant,setAddPlant]= useState(props?.data);

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
                   1: <input disabled value={addPlant.red_book1} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   2: <input disabled value={addPlant.red_book2} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   3: <input disabled value={addPlant.red_book3} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"25px",padding:"5px"}} type="text" /><br />
                   1: <input disabled value={addPlant.source1} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   2: <input disabled value={addPlant.source2} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   3: <input disabled value={addPlant.source3} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   4: <input disabled value={addPlant.source4} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                   5: <input disabled value={addPlant.source5} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"2px",padding:"5px"}} type="text" /><br />
                    <input disabled value={addPlant.note} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginTop:"35px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input disabled value={addPlant.botanical_institute} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input disabled value={addPlant.performer_position} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginTop:"35px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input disabled value={addPlant.performer_degree} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                    <input disabled value={addPlant.performer_fullname} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",marginLeft:"14px",padding:"5px"}} type="text" /><br />
                </div>

            </div>

        </div>
    )
}
export default Tab8;