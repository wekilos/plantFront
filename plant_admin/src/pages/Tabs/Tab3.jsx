import React, { useEffect, useState } from "react";
import ".//Tab3.css";
import {Checkbox} from "antd"
import { useParams } from "react-router-dom";
const Tab3=(props)=>{
    const {id} = useParams()
    const [addPlant,setAddPlant]= useState(props?.data?props.data:{
        floristic_regions: "",
        abbreviated_names: "",
        old_names: "",
        study_territory: "",
        administrative_regions: "",
        geographic_regions: "",
        additional_areals: "",
        general_distribution: "",
        geo_groups_areals: "",
        plant_id: id
      });

      useEffect(()=>{
        props.func(addPlant)
      },[addPlant])
    return(
        <div>
            <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",fontSize:"15px"}}>
                
                <div style={{width:"95%"}}>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Флористические районы в РК:</div>
                        <div style={{width:"85%"}}> <input onChange={(e)=>setAddPlant({...addPlant,floristic_regions:e.target.value})} value={addPlant.floristic_regions} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Сокращенные названия:</div>
                        <div style={{width:"85%"}}><input onChange={(e)=>setAddPlant({...addPlant,abbreviated_names:e.target.value})} value={addPlant.abbreviated_names} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"30px"}}>
                        <div style={{width:"40%"}}>Старые название:</div>
                        <div style={{width:"85%"}}><input onChange={(e)=>setAddPlant({...addPlant,old_names:e.target.value})} value={addPlant.old_names} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <div style={{width:"40%",}}>На исследуемой территори:</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input onChange={(e)=>setAddPlant({...addPlant,study_territory:e.target.value})} value={addPlant.study_territory} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /><p style={{marginLeft:"15px"}}>встречается:</p> <p style={{ marginLeft:"10%"}}><Checkbox/> Выбрать все области </p> </div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <div style={{width:"40%",}}>Административные районы(образования):</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input onChange={(e)=>setAddPlant({...addPlant,administrative_regions:e.target.value})} value={addPlant.administrative_regions} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /><p style={{marginLeft:"15px"}}>встречается:</p> <p style={{ marginLeft:"10%"}}><Checkbox/> Выбрать все области </p> </div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Географические районы(местности):</div>
                        <div style={{width:"85%"}}><input onChange={(e)=>setAddPlant({...addPlant,geographic_regions:e.target.value})} value={addPlant.geographic_regions} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Дополнительные по ареалам в РК:</div>
                        <div style={{width:"85%"}}><input onChange={(e)=>setAddPlant({...addPlant,additional_areals:e.target.value})} value={addPlant.additional_areals} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Общее распространение:</div>
                        <div style={{width:"85%"}}><input onChange={(e)=>setAddPlant({...addPlant,general_distribution:e.target.value})} value={addPlant.general_distribution} className="tab3Input" type="text" /></div>
                    </div>
                    <div style={{width:"95%",display:"inline-flex",justifyContent:"space-between",marginTop:"10px"}}>
                        <div style={{width:"40%"}}>Географические группа ареалов:</div>
                        <div style={{width:"85%",display:"inline-flex"}}><input onChange={(e)=>setAddPlant({...addPlant,geo_groups_areals:e.target.value})} value={addPlant.geo_groups_areals} style={{height:"30px",width:"50%"}} className="tab3Input" type="text" /></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Tab3;