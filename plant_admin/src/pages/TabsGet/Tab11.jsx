import React, { useEffect, useState } from "react";
import ".//Tab3.css";

const Tab11=(props)=>{
    const [addPlant,setAddPlant]= useState(props?.data);

    return(
        <div>
            <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",fontSize:"15px"}}>
                <div style={{width:"100%"}}>
                    <div style={{width:"90%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"20%"}}>Текстовые сообщения:</div>
                        <div style={{width:"70%",height:"70vh", border:"1px solid lightgrey"}}><textarea disabled value={addPlant.text} style={{width:"100%", height:"70vh",outline:"none", padding:"15px"}} placeholder="Текст"></textarea></div>
                        <div style={{marginLeft:"40px", marginTop:"410px"}}>
                            {/* <button>Сохранить</button> */}
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Tab11;