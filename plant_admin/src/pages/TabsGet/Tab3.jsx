import React, { useEffect, useState } from "react";
import ".//Tab3.css";
import {Checkbox} from "antd"
const Tab3=(props)=>{
    const [addPlant,setAddPlant]= useState(props?.data?props.data:"");
 
    return(
        <div>
            <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",fontSize:"15px"}}>
                
                <div style={{width:"95%"}}>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Флористические районы в РК:</div>
                        <div style={{width:"85%"}}> 
                        <input disabled value={addPlant.floristic_regions} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Сокращенные названия:</div>
                        <div style={{width:"85%"}}><input disabled value={addPlant.abbreviated_names} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"30px"}}>
                        <div style={{width:"40%"}}>Старые название:</div>
                        <div style={{width:"85%"}}><input disabled value={addPlant.old_names} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <div style={{width:"40%",}}>На исследуемой территори:</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input disabled value={addPlant.study_territory} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /> </div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <div style={{width:"40%",}}>Административные районы(образования):</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input disabled value={addPlant.administrative_regions} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Географические районы(местности):</div>
                        <div style={{width:"85%"}}><input disabled value={addPlant.geographic_regions} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Дополнительные по ареалам в РК:</div>
                        <div style={{width:"85%"}}><input disabled value={addPlant.additional_areals} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Общее распространение:</div>
                        <div style={{width:"85%"}}><input disabled value={addPlant.general_distribution} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginTop:"10px"}}>
                        <div style={{width:"40%"}}>Географические группа ареалов:</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input disabled value={addPlant.geo_groups_areals} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Tab3;