import React,{useEffect, useState} from "react"
import ".//Tab2.css"
import { message } from "antd"
import {PlusOutlined,CloseOutlined } from '@ant-design/icons'

const Tab2 = (props)=>{ 
    const [addPlant,setAddPlant] = useState(props?.data)
    
    
  
    return (
        <div>

            <div style={{width:"65%"}}>
                <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",userSelect:"none"}}>
                    <div style={{width:"40%"}}></div>
                    <div style={{width:"55%"}}>Латинское название (без рода):</div>
                </div>
            </div>

            <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",fontSize:"15px"}}> 
                <div style={{width:"65%"}}>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Вид:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}> <input disabled value={addPlant.kind} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Подвид:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.subkind} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Разновидность:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.variety} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Форма:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.form} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Гибрид:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.hybrid} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Култьивар:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.cultivar} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Русское название (без рода):</div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.name_ru} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Казахское название:</div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.name_kz} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Народные название:</div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.name_folk} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Полное название растения:</div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.fullname} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Полное название растения ru:</div>
                        <div style={{width:"55%"}}><input disabled value={addPlant.fullname_ru} className="tabInput" type="text" /></div>
                    </div>
                    {
                    addPlant?.fullname_synonym?.map((item,i)=>{
                        return  <div key={"fullNameSynonym"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px",width:"83%"}}>Синонимы полного названия:</p>
                                    <input style={{width:"100%"}} className="tabInput" value={item?.name} disabled/> 
                                </div>
                             
                    })
                    }
                    {
                    addPlant?.link_synonym?.map((item,i)=>{
                        return  <div key={"linkSynonym"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px",width:"83%"}}>{i+1}. Ссылки на синонимы:</p>
                                    <input className="tabInput" value={item?.link} disabled/>
                                </div>
                             
                    })
                    }
                </div>
                <div style={{width:"32%",userSelect:"none"}}>
                    {
                    addPlant?.plant_author?.map((item,i)=>{
                        return  <div key={"awtor"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px"}}>Автор:</p>
                                    <input className="tabInput" value={item.name} disabled/>
                                </div>
                             
                    })
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Tab2;