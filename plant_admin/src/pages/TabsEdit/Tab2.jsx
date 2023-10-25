import React,{useEffect, useState} from "react"
import ".//Tab2.css"
import { message } from "antd"
import {PlusOutlined,CloseOutlined } from '@ant-design/icons'
import { useParams } from "react-router-dom"

const Tab2 = (props)=>{ 
    const {id} = useParams()
    const [addPlant,setAddPlant] = useState(props.data?props.data:{
        kind: "",
        subkind: "",
        variety: "",
        form: "",
        hybrid: "",
        cultivar: "",
        name_ru: "",
        name_kz: "",
        name_folk: "",
        fullname: "",
        fullname_ru: "", 
        fullname_synonym: [
          {
            name: ""
          }
        ],
        plant_author: [
          {
            name: ""
          }
        ],
        link_synonym: [
          {
            link: ""
          }
        ]
      })
    
    useEffect(()=>{
        props.func(addPlant)
    },[addPlant])
    
    const AddAwtor = ()=>{
        if(addPlant?.plant_author.length<5){
            let array = addPlant?.plant_author
            array.push({name:""})
            setAddPlant({...addPlant,plant_author:array});
        }else{
            message.warn("5 sanydan kop doredip bilmeyarsiniz!")
        }
    };
    const ChangeAwtor = (value,index) => { 
        let array = addPlant?.plant_author;
        array[index].name=value;
        setAddPlant({...addPlant,plant_author:array});
    };
    const RemoveAwtor = (index)=>{
        let array = addPlant?.plant_author;
        array.splice(index,1);
        setAddPlant({...addPlant,plant_author:array});
    };

    const AddFullName = ()=>{
        if(addPlant?.fullname_synonym.length<5){
            let array = addPlant?.fullname_synonym;
            array.push({name:""})
            setAddPlant({...addPlant,fullname_synonym:array});
        }else{
            message.warn("5 sanydan kop doredip bilmeyarsiniz!")
        }
    };
    const ChangeFullName = (value,index) => { 
        let array = addPlant?.fullname_synonym;
        array[index].name=value;
        setAddPlant({...addPlant,fullname_synonym:array});
    };
    const RemoveFullName = (index)=>{
        let array = addPlant?.fullname_synonym;
        array.splice(index,1);
        setAddPlant({...addPlant,fullname_synonym:array});
    };

    const AddLinkSynonym = ()=>{
        if(addPlant?.link_synonym.length<5){
            let array = addPlant?.link_synonym
            array.push({link:""})
            setAddPlant({...addPlant,link_synonym:array});
        }else{
            message.warn("5 sanydan kop doredip bilmeyarsiniz!")
        }
    };
    const ChangeLinkSynonym = (value,index) => { 
        let array = addPlant?.link_synonym;
        array[index].link = value;
        setAddPlant({...addPlant,link_synonym:array});
    };
    const RemoveLinkSynonym = (index)=>{
        let array = addPlant?.link_synonym;
        array.splice(index,1);
        setAddPlant({...addPlant,link_synonym:array});
    };
   
   
  
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
                        <div style={{width:"55%"}}> <input onChange={(e)=>setAddPlant({...addPlant,kind:e.target.value})} value={addPlant.kind} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Подвид:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,subkind:e.target.value})} value={addPlant.subkind} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Разновидность:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,variety:e.target.value})} value={addPlant.variety} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Форма:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,form:e.target.value})} value={addPlant.form} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Гибрид:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,hybrid:e.target.value})} value={addPlant.hybrid} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Култьивар:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,cultivar:e.target.value})} value={addPlant.cultivar} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Русское название (без рода):</div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,name_ru:e.target.value})} value={addPlant.name_ru} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Казахское название:</div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,name_kz:e.target.value})} value={addPlant.name_kz} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Народные название:</div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,name_folk:e.target.value})} value={addPlant.name_folk} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Полное название растения:</div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,fullname:e.target.value})} value={addPlant.fullname} className="tabInput" type="text" /></div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Полное название растения ru:</div>
                        <div style={{width:"55%"}}><input onChange={(e)=>setAddPlant({...addPlant,fullname_ru:e.target.value})} value={addPlant.fullname_ru} className="tabInput" type="text" /></div>
                    </div>
                    {
                    addPlant?.fullname_synonym?.map((item,i)=>{
                        return  <div key={"fullNameSynonym"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px",width:"86%"}}>Синонимы полного названия:</p>
                                    <input className="tabInput" value={item?.name} onChange={(e)=>ChangeFullName(e.target.value,i)}/>
                                    {i==0&&<p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={AddFullName}><PlusOutlined /></p>}
                                    {addPlant?.fullname_synonym.length>1&&i>0&& <p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={()=>RemoveFullName(i)}><CloseOutlined /></p>}
                                </div>
                             
                    })
                    }
                    {
                    addPlant?.link_synonym?.map((item,i)=>{
                        return  <div key={"linkSynonym"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px",width:"86%"}}>Ссылки на синонимы:</p>
                                    <input className="tabInput" value={item?.link} onChange={(e)=>ChangeLinkSynonym(e.target.value,i)}/>
                                    {i==0&&<p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={AddLinkSynonym}><PlusOutlined /></p>}
                                    {addPlant?.link_synonym.length>1&&i>0&& <p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={()=>RemoveLinkSynonym(i)}><CloseOutlined /></p>}
                                </div>
                             
                    })
                    }
                </div>
                <div style={{width:"32%",userSelect:"none"}}>
                    {
                    addPlant?.plant_author?.map((item,i)=>{
                        return  <div key={"awtor"+i} style={{width:"100%",display:"inline-flex"}}>
                                    <p style={{fontSize:"15px",marginRight:"2px"}}>Автор:</p>
                                    <input className="tabInput" value={item.name} onChange={(e)=>ChangeAwtor(e.target.value,i)}/>
                                    {i==0&&<p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={AddAwtor}><PlusOutlined /></p>}
                                    {addPlant?.plant_author.length>1&&i>0&& <p style={{width:"20px",marginLeft:"5px",cursor:"pointer"}} onClick={()=>RemoveAwtor(i)}><CloseOutlined /></p>}
                                </div>
                             
                    })
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Tab2;