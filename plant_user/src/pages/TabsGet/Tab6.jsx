import React, { useEffect, useState } from "react";

const Tab6 = (props) =>{
    const [addPlant,setAddPlant]= useState(props?.data);

    return(
        <div>
            <div style={{width:"100%",display:'inline-flex',justifyContent:"space-evenly"}}>

                <div style={{width:"20%"}}>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Природная зона:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Тип растительности:</p>
                    <p style={{height:"5vh", marginBottom:"30px"}}>Подтип растительности:</p>


                    <p style={{height:"5vh", marginBottom:"30px"}}>Места обитания:</p>

                    <p style={{height:"5vh", marginBottom:"10px"}}>Фитоохранный статус:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Эндемичность:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Реликтовость:</p>
                    <p style={{height:"5vh", marginBottom:"70px"}}>Аборигенность:</p>

                    <p style={{height:"5vh", marginBottom:"10px"}}>Воде:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Плодородию почвы:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Засоленности почвы:</p>
                    <p style={{height:"5vh", marginBottom:"40px"}}>Свету:</p>

                    <p style={{height:"5vh", marginBottom:"10px"}}>Другие особенности:</p>
                </div>

                <div style={{width:"60%"}}>
                    <input disabled value={addPlant.natural_area} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px", padding:"5px"}} name="" id="" /><br />
                    <input disabled value={addPlant.vegetation_type} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.vegetation_subtype} style={{width:"75%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"30px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.habitats} style={{width:"75%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"28px",padding:"5px"}} type="text" /><br />
                    
                    <input disabled value={addPlant.phytoprotective_status} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}name="" id=""/><br />
                    <input disabled value={addPlant.endemicity} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}name="" id=""/><br />
                    <input disabled value={addPlant.relic} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.aboriginality} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"30px",padding:"5px"}} name="" id=""/><br />
                    
                    <p>Классификация по отношению к:</p>
                    <input disabled value={addPlant.water} style={{width:"40%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.soil_fertility} style={{width:"40%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.soil_salinity} style={{width:"40%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.light} style={{width:"40%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"40px",padding:"5px"}} name="" id=""/><br />
                   
                    <input disabled value={addPlant.other_features} style={{width:"70%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} type="text" />
                </div>

            </div>
        </div>
    )
}
export default Tab6;