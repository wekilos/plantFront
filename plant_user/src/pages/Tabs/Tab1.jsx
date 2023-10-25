import React,{useState,useEffect} from "react"
import "../Tabs/Tab2.css"
import "antd/dist/antd.css"; 
// import { Col, Row } from 'antd';
// import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { message } from "antd"
// import {PlusOutlined,CloseOutlined } from '@ant-design/icons'
import { axiosInstance } from "../../utils/axiosinstance";
// import Item from "antd/lib/list/Item";
 

const style = {
    background: 'white',
    padding: '8px 0',
    border:'1px solid lightgrey'
  };
const Tab1 = (props)=>{
    console.log("re-render")
    const [open, setOpen] = useState(false);
    const [addDepartment, setAddDepartment] = useState({lt:"",ru:""});
    const [departments,setDepartments] = useState([]);
    const [addClass,setAddClass] = useState({name_lt:"",name_ru:"",department_id:0});
    const [classes,setClasses] = useState([])
    const [addSubClass,setAddSubClass] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0});
    const [subClasses,setSubClasses] = useState([])
    const [addSuperSubClass,setAddSuperSubClass] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0});
    const [SuperSubClasses,setSuperSubClasses] = useState([]);
    const [addOrder,setAddOrder] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0});
    const [orders,setOrders] = useState([]);
    const [addSubOrder,setAddSubOrder] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0});
    const [subOrders,setSubOrders] = useState([]);
    const [addFamily,setAddFamily] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0,suborder_id:0,family_author:""});
    const [families,setFamilies] = useState([]);
    const [addGenus,setAddGenus] = useState({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0,suborder_id:0,family_id:0,genus_author:""});
    const [familyAwtor,setFamilyAwtor] = useState();
    const [genuses,setGenuses] = useState([]); 
    const [genusAwtor,setGenusAwtor] = useState(); 
    const [addPlant,setAddPlant] = useState(props.data?props.data:{
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
        supersubclass_id: 0,
        order_id: 0,
        suborder_id: 0,
        family_id: 0,
        genus_id: 0
      })

    useEffect(()=>{
        getDepartment();
        getClass();
        getSubClass();
        getSuperSubClass();
        getOrders();
        getSubOrders();
        getFamily();
        getGenus();
    },[])
    useEffect(()=>{
        props.func(addPlant)
    },[addPlant])
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
 

      const createDepartment =()=>{
        axiosInstance.post("/api/create-department",{
            name_lt: addDepartment.lt,
            name_ru: addDepartment.ru
        }).then((res)=>{
            console.log(res.data); 
            setAddDepartment(""); 
            getDepartment();
            setAddDepartment({lt:"",ru:""})
            message.success(res.data.msg)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getDepartment = ()=>{
        axiosInstance.get("/api/get-admin-departments").then((res)=>{
            console.log("departments",res.data)
           Array.isArray(res.data)?setDepartments(res.data):setDepartments([]);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const createClass = ()=>{
        axiosInstance.post("/api/create-class",addClass).then((res)=>{
            console.log(res.data);
            getClass();
            getDepartment();
            setAddClass({name_lt:"",name_ru:"",department_id:0})
        }).catch((err)=>{
            console.log(err);
        })
    }
    const getClass = ()=>{
        axiosInstance.get("/api/get-admin-classes").then((res)=>{
            console.log(res.data);
            Array.isArray(res.data)?setClasses(res.data.filter((item)=>item.department_id==addPlant.department_id)):setClasses([])
        }).catch((err)=>{
            console.log(err);
        })
    }
    const createSubClass = ()=>{
        console.log(addSubClass)
        axiosInstance.post("/api/create-subclass",addSubClass).then((res)=>{
            console.log(res.data);
            getSubClass();
            getDepartment();
            setAddSubClass({name_lt:"",name_ru:"",department_id:0,class_id:0})
        }).catch((err)=>{
            console.log(err);
        })
    }
    const getSubClass = ()=>{
        axiosInstance.get("/api/get-admin-subclass").then((res)=>{
            console.log(res.data);
            Array.isArray(res.data)?setSubClasses(res.data.filter((item)=>item.class_id==addPlant.class_id)):setSubClasses([])
        }).catch((err)=>{
            console.log(err);
        })
    }
    const createSuperSubClass = ()=>{
        console.log(addSuperSubClass)
        axiosInstance.post("/api/create-supersubclass",addSuperSubClass).then((res)=>{
            console.log(res.data);
            getSuperSubClass();
            setAddSuperSubClass({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0})
        }).catch((err)=>{
            console.log(err);
        })
    }
    const getSuperSubClass = ()=>{
        axiosInstance.get("/api/get-admin-supersubclass").then((res)=>{
            console.log(res.data);
            Array.isArray(res.data)?setSuperSubClasses(res.data.filter((item)=>item.subclass_id==addPlant.subclass_id)):setSuperSubClasses([])
        }).catch((err)=>{
            console.log(err);
        })
    }

    const createOrder = ()=>{
        axiosInstance.post("/api/create-order",addOrder).then((res)=>{
            console.log(res.data);
            getDepartment();
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getOrders = ()=>{
        axiosInstance.get("/api/get-admin-order").then((res)=>{    
            Array.isArray(res.data)?setOrders(res.data.filter((item)=>item.supersubclass_id==addPlant.supersubclass_id)):setOrders([])
        }).catch((err)=>{
            console.log(err);
        })
    }

    const createSubOrder = ()=>{
        axiosInstance.post("/api/create-suborder",addSubOrder).then((res)=>{
            console.log(res.data);
            getDepartment();
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getSubOrders = ()=>{
        axiosInstance.get("/api/get-admin-suborder").then((res)=>{    
            Array.isArray(res.data)?setSubOrders(res.data.filter((item)=>item.order_id==addPlant.order_id)):setSubOrders([])
        }).catch((err)=>{
            console.log(err);
        })
    }
    const createFamily = ()=>{
        axiosInstance.post("/api/create-family",addFamily).then((res)=>{
            console.log(res.data);
            getDepartment();
            setAddFamily({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0,suborder_id:0,family_author:""})
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getFamily = ()=>{
        axiosInstance.get("/api/get-admin-families").then((res)=>{    
            Array.isArray(res.data)?setFamilies(res.data.filter((item)=>item.suborder_id==addPlant.suborder_id)):setFamilies([])
            Array.isArray(res.data)&&res.data.map((item)=>{addPlant?.family_id==item.id&&setFamilyAwtor(item)});
        }).catch((err)=>{
            console.log(err);
        })
    }

    const createGenus = ()=>{
        axiosInstance.post("/api/create-genus",addGenus).then((res)=>{
            console.log(res.data);
            getDepartment();
            setAddGenus({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0,suborder_id:0,family_id:0,family_author:""})
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getGenus = ()=>{
        axiosInstance.get("/api/get-admin-genus").then((res)=>{    
            Array.isArray(res.data)?setGenuses(res.data.filter((item)=>item.family_id==addPlant.family_id)):setGenuses([])
            Array.isArray(res.data)&&res.data.map((item)=>{addPlant?.genus_id==item.id&&setGenusAwtor(item)});
        }).catch((err)=>{
            console.log(err);
        })
    }

    const createPlant = ()=>{
        axiosInstance.post("/api/create-plant",addPlant).then((res)=>{
            console.log(res.data);
            getDepartment();
            setAddPlant({name_lt:"",name_ru:"",department_id:0,class_id:0,subclass_id:0,supersubclass_id:0,order_id:0,suborder_id:0,family_id:0,family_author:""})
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div style={{position:"relative"}}>
            <div style={{width:"100%",display:"inline-flex"}}>
                <div style={{width:"47%"}}>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",userSelect:"none"}}>
                        <div style={{width:"90%"}}></div>
                        <div style={{width:"60%"}}>Латинское название (без рода)</div>
                    </div>
                </div>
                
                <div style={{width:"46%"}}>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",userSelect:"none"}}>
                        <div style={{width:"70%"}}></div>
                        <div style={{width:"100%"}}>Русское название (без рода):</div>
                    </div>
                </div>
                
                {/* <div style={{width:"7%"}}>
                    <Button style={{marginBottom:"5px",width:"100%",height:"35px",padding:"3px",background:"white",border:"1px solid lightgrey",color:"black", borderRadius:"5px"}} type="primary" onClick={showDrawer}>
                        Создать
                    </Button>
                    <Drawer title="Добавить информацию" placement="right"  width={500} onClose={onClose} open={open}>
                        <p style={{fontSize:"16px",fontWeight:"600"}}>Отдел</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}><input onChange={(e)=>setAddDepartment({...addDepartment,lt:e.target.value})} value={addDepartment.lt} placeholder="Отдел-лт" className="tabInput" type="text" /></div> 
                            <div style={{width:"49%"}}><input onChange={(e)=>setAddDepartment({...addDepartment,ru:e.target.value})} value={addDepartment.ru} placeholder="Отдел-ру" className="tabInput" type="text" /></div>    
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}} onClick={createDepartment}>Создать</button>                        
                        </div>
                        
                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Класс</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addClass.department_id} onChange={(e)=>setAddClass({...addClass,department_id:e.target.value})} placeholder="Select department" className="tabInput" type="text">
                                    <option  disabled  value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"depart1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addClass.department_id} onChange={(e)=>setAddClass({...addClass,department_id:e.target.value})}  className="tabInput" type="text">
                                    <option  disabled value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"depart2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}><input value={addClass.name_lt} onChange={(e)=>setAddClass({...addClass,name_lt:e.target.value})} placeholder="Класс-лт" className="tabInput" type="text" /></div>
                            <div style={{width:"49%"}}><input value={addClass.name_ru} onChange={(e)=>setAddClass({...addClass,name_ru:e.target.value})} placeholder="Класс-ру" className="tabInput" type="text" /></div>                                
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createClass} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div>

                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Подкласс</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addSubClass.department_id} onChange={(e)=>{setAddSubClass({...addSubClass,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"sclasd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addSubClass.department_id} onChange={(e)=>{setAddSubClass({...addSubClass,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"sclasd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>

                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubClass.class_id} onChange={(e)=>setAddSubClass({...addSubClass,class_id:e.target.value})} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"sclasc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addSubClass.class_id} onChange={(e)=>setAddSubClass({...addSubClass,class_id:e.target.value})}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"sclasc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}><input value={addSubClass.name_lt} onChange={(e)=>setAddSubClass({...addSubClass,name_lt:e.target.value})} placeholder="Подкласс-лт" className="tabInput" type="text" /></div>
                            <div style={{width:"49%"}}><input value={addSubClass.name_ru} onChange={(e)=>setAddSubClass({...addSubClass,name_ru:e.target.value})} placeholder="Подкласс-ру" className="tabInput" type="text" /></div>                                
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createSubClass} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div>

                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Надпорядок</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addSuperSubClass.department_id} onChange={(e)=>{setAddSuperSubClass({...addSuperSubClass,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}>  Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"ssclasd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addSuperSubClass.department_id} onChange={(e)=>{setAddSuperSubClass({...addSuperSubClass,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}>  Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"ssclasd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>

                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSuperSubClass.class_id} onChange={(e)=>{setAddSuperSubClass({...addSuperSubClass,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"ssclasc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addSuperSubClass.class_id} onChange={(e)=>{setAddSuperSubClass({...addSuperSubClass,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"ssclasc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>

                        
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSuperSubClass.subclass_id} onChange={(e)=>setAddSuperSubClass({...addSuperSubClass,subclass_id:e.target.value})} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"ssclassc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addSuperSubClass.subclass_id} onChange={(e)=>setAddSuperSubClass({...addSuperSubClass,subclass_id:e.target.value})}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"ssclassc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}><input value={addSuperSubClass.name_lt} onChange={(e)=>setAddSuperSubClass({...addSuperSubClass,name_lt:e.target.value})} placeholder="Надпорядок-лт" className="tabInput" type="text" /></div>
                            <div style={{width:"49%"}}><input value={addSuperSubClass.name_ru} onChange={(e)=>setAddSuperSubClass({...addSuperSubClass,name_ru:e.target.value})} placeholder="Надпорядок-ру" className="tabInput" type="text" /></div>                                
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createSuperSubClass} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div>

                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Порядок</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addOrder.department_id} onChange={(e)=>{setAddOrder({...addOrder,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}>  Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"orderd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addOrder.department_id} onChange={(e)=>{setAddOrder({...addOrder,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}>  Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"orderd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addOrder.class_id} onChange={(e)=>{setAddOrder({...addOrder,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"orderc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addOrder.class_id} onChange={(e)=>{setAddOrder({...addOrder,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"orderc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addOrder.subclass_id} onChange={(e)=>{setAddOrder({...addOrder,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"ordersc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addOrder.subclass_id} onChange={(e)=>{setAddOrder({...addOrder,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"ordersc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addOrder.supersubclass_id} onChange={(e)=>{setAddOrder({...addOrder,supersubclass_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"ordersc2"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addOrder.supersubclass_id} onChange={(e)=>{setAddOrder({...addOrder,supersubclass_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"ordersc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <input value={addOrder.name_lt} onChange={(e)=>setAddOrder({...addOrder,name_lt:e.target.value})} placeholder="Порядок-лт" className="tabInput" type="text" />
                            </div>
                            <div style={{width:"49%"}}>
                                <input value={addOrder.name_ru} onChange={(e)=>setAddOrder({...addOrder,name_ru:e.target.value})} placeholder="Порядок-ру" className="tabInput" type="text" />
                            </div>                                
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createOrder} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div>

                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Подпорядок</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addSubOrder.department_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"orderd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addSubOrder.department_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"orderd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.class_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"sorderc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addSubOrder.class_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"sorderc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.subclass_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"sordersc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addSubOrder.subclass_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"sordersc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.supersubclass_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"sordersc2"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.supersubclass_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"sordersc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.order_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,order_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}>Выбрать порядок</option>
                                    {orders?.map((item)=>{
                                        return <option key={"sordersc-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addSubOrder.order_id} onChange={(e)=>{setAddSubOrder({...addSubOrder,order_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать порядок </option>
                                    {orders?.map((item)=>{
                                        return <option key={"sordersc-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <input value={addSubOrder.name_lt} onChange={(e)=>setAddSubOrder({...addSubOrder,name_lt:e.target.value})} placeholder="Подпорядок-лт" className="tabInput" type="text" />
                            </div>
                            <div style={{width:"49%"}}>
                                <input value={addSubOrder.name_ru} onChange={(e)=>setAddSubOrder({...addSubOrder,name_ru:e.target.value})} placeholder="Подпорядок-ру" className="tabInput" type="text" />
                            </div>                                
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createSubOrder} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div> 

                        
                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Семейство</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addFamily.department_id} onChange={(e)=>{setAddFamily({...addFamily,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"familyd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addFamily.department_id} onChange={(e)=>{setAddFamily({...addFamily,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"familyd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.class_id} onChange={(e)=>{setAddFamily({...addFamily,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"familyc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addFamily.class_id} onChange={(e)=>{setAddFamily({...addFamily,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"familyc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.subclass_id} onChange={(e)=>{setAddFamily({...addFamily,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"familysc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addFamily.subclass_id} onChange={(e)=>{setAddFamily({...addFamily,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"familysc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.supersubclass_id} onChange={(e)=>{setAddFamily({...addFamily,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"familyssc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.supersubclass_id} onChange={(e)=>{setAddFamily({...addFamily,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"familyssc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.order_id} onChange={(e)=>{setAddFamily({...addFamily,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать порядок </option>
                                    {orders?.map((item)=>{
                                        return <option key={"familyso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.order_id} onChange={(e)=>{setAddFamily({...addFamily,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать порядок </option>
                                    {orders?.map((item)=>{
                                        return <option key={"familyso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.suborder_id} onChange={(e)=>{setAddFamily({...addFamily,suborder_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подпорядок </option>
                                    {subOrders?.map((item)=>{
                                        return <option key={"familyso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addFamily.suborder_id} onChange={(e)=>{setAddFamily({...addFamily,suborder_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подпорядок </option>
                                    {subOrders?.map((item)=>{
                                        return <option key={"familyso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <input value={addFamily.name_lt} onChange={(e)=>setAddFamily({...addFamily,name_lt:e.target.value})} placeholder="Семейство-лт" className="tabInput" type="text" />
                            </div>
                            <div style={{width:"49%"}}>
                                <input value={addFamily.name_ru} onChange={(e)=>setAddFamily({...addFamily,name_ru:e.target.value})} placeholder="Семейство-ру" className="tabInput" type="text" />
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"100%"}}>
                                <input value={addFamily.family_author} onChange={(e)=>setAddFamily({...addFamily,family_author:e.target.value})} placeholder="Автор семейства" className="tabInput" type="text" />
                            </div>                               
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createFamily} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div> 

                        <p style={{fontSize:"16px",fontWeight:"600",marginTop:"5px"}}>Род</p>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Department"} value={addGenus.department_id} onChange={(e)=>{setAddGenus({...addGenus,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"genusd1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Department"} value={addGenus.department_id} onChange={(e)=>{setAddGenus({...addGenus,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать отдел </option>
                                    {departments?.map((item)=>{
                                        return <option key={"genusd2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.class_id} onChange={(e)=>{setAddGenus({...addGenus,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"genusc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addGenus.class_id} onChange={(e)=>{setAddGenus({...addGenus,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать класс </option>
                                    {classes?.map((item)=>{
                                        return <option key={"genusc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.subclass_id} onChange={(e)=>{setAddGenus({...addGenus,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                    <option disabled  value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"genussc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select>
                            </div>
                            <div style={{width:"49%"}}> 
                                <select defaultValue={"Select Class"} value={addGenus.subclass_id} onChange={(e)=>{setAddGenus({...addGenus,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подкласс </option>
                                    {subClasses?.map((item)=>{
                                        return <option key={"genussc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select> 
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.supersubclass_id} onChange={(e)=>{setAddGenus({...addGenus,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"genusssc1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.supersubclass_id} onChange={(e)=>{setAddGenus({...addGenus,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать надпорядок </option>
                                    {SuperSubClasses?.map((item)=>{
                                        return <option key={"genusssc2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.order_id} onChange={(e)=>{setAddGenus({...addGenus,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать порядок </option>
                                    {orders?.map((item)=>{
                                        return <option key={"genusso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.order_id} onChange={(e)=>{setAddGenus({...addGenus,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать порядок </option>
                                    {orders?.map((item)=>{
                                        return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.suborder_id} onChange={(e)=>{setAddGenus({...addGenus,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подпорядок </option>
                                    {subOrders?.map((item)=>{
                                        return <option key={"genusso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.suborder_id} onChange={(e)=>{setAddGenus({...addGenus,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать подпорядок </option>
                                    {subOrders?.map((item)=>{
                                        return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.family_id} onChange={(e)=>{setAddGenus({...addGenus,family_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать семейство  </option>
                                    {families?.map((item)=>{
                                        return <option key={"genusso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                    })}
                                </select> 
                            </div>
                            <div style={{width:"49%"}}>
                                <select defaultValue={"Select Class"} value={addGenus.family_id} onChange={(e)=>{setAddGenus({...addGenus,family_id:e.target.value})}}  className="tabInput" type="text">
                                    <option disabled value={0}> Выбрать семейство </option>
                                    {families?.map((item)=>{
                                        return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                    })}
                                </select>
                            </div>                                 
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <input value={addGenus.name_lt} onChange={(e)=>setAddGenus({...addGenus,name_lt:e.target.value})} placeholder="Род-лт" className="tabInput" type="text" />
                            </div>
                            <div style={{width:"49%"}}>
                                <input value={addGenus.name_ru} onChange={(e)=>setAddGenus({...addGenus,name_ru:e.target.value})} placeholder="Род-ру" className="tabInput" type="text" />
                            </div>                                
                        </div>
                        <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                            <div style={{width:"100%"}}>
                                <input value={addGenus.genus_author} onChange={(e)=>setAddGenus({...addGenus,genus_author:e.target.value})} placeholder="Автор рода" className="tabInput" type="text" />
                            </div>                               
                        </div>
                        <div style={{width:"100%",height:"30px",borderRadius:"5px"}}>
                            <button onClick={createGenus} style={{width:"20%",height:"30px", border:"1px solid lightgrey",borderRadius:"5px",cursor:"pointer",fontSize:"15px",fontWeight:"500", marginLeft:"80%"}}>Создать</button>                        
                        </div> 
                    </Drawer>
                </div> */}
            </div>
            
            <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between",fontSize:"15px"}}>
                <div style={{width:"60%"}}>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Отдел:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Department"} value={addPlant.department_id} onChange={(e)=>{setAddPlant({...addPlant,department_id:e.target.value}); departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}} placeholder="Select department" className="tabInput" type="text">
                                <option disabled  value={0}> Выбрать отдел </option>
                                {departments?.map((item)=>{
                                    return <option key={"plantd1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Класс:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.class_id} onChange={(e)=>{setAddPlant({...addPlant,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                <option disabled  value={0}> Выбрать класс </option>
                                {classes?.map((item)=>{
                                    return <option key={"plantc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Подкласс:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.subclass_id} onChange={(e)=>{setAddPlant({...addPlant,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                <option disabled  value={0}> Выбрать подкласс </option>
                                {subClasses?.map((item)=>{
                                    return <option key={"plantsc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Надпорядок:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.supersubclass_id} onChange={(e)=>{setAddPlant({...addPlant,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать надпорядок </option>
                                {SuperSubClasses?.map((item)=>{
                                    return <option key={"plantssc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Порядок:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.order_id} onChange={(e)=>{setAddPlant({...addPlant,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать порядок </option>
                                {orders?.map((item)=>{
                                    return <option key={"planto-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Подпорядок:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.suborder_id} onChange={(e)=>{setAddPlant({...addPlant,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подпорядок </option>
                                {subOrders?.map((item)=>{
                                    return <option key={"plantso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Семейство (без рода):<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.family_id} onChange={(e)=>{setAddPlant({...addPlant,family_id:e.target.value});families?.map((item)=>{if(item.id==e.target.value){ setGenuses(item.genus); setFamilyAwtor(item);} })}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать семейство </option>
                                {families?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Автор семейтсва:</div>
                        <div style={{width:"55%",marginLeft:"4%"}}><input value={familyAwtor?.family_author}  style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div> 
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Род:<span style={{color:"red"}}>*</span></div>
                        <div style={{width:"55%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.genus_id} onChange={(e)=>{setAddPlant({...addPlant,genus_id:e.target.value});genuses?.map((item)=>item.id==e.target.value && setGenusAwtor(item))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать род </option>
                                {genuses?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                     
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"40%"}}>Автор рода:</div>
                        <div style={{width:"55%",marginLeft:"4%"}}><input value={genusAwtor?.genus_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div> 
                    </div>
                    
 
                </div>


                <div style={{width:"35%"}}>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Department"} value={addPlant.department_id} onChange={(e)=>{setAddPlant({...addPlant,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать отдел </option>
                                {departments?.map((item)=>{
                                    return <option key={"plantd2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.class_id} onChange={(e)=>{setAddPlant({...addPlant,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать класс </option>
                                {classes?.map((item)=>{
                                    return <option key={"plantc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.subclass_id} onChange={(e)=>{setAddPlant({...addPlant,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подкласс </option>
                                {subClasses?.map((item)=>{
                                    return <option key={"plantsc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.supersubclass_id} onChange={(e)=>{setAddPlant({...addPlant,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать надпорядок </option>
                                {SuperSubClasses?.map((item)=>{
                                    return <option key={"plantssc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.order_id} onChange={(e)=>{setAddPlant({...addPlant,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать порядок </option>
                                {orders?.map((item)=>{
                                    return <option key={"planto-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.suborder_id} onChange={(e)=>{setAddPlant({...addPlant,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подпорядок </option>
                                {subOrders?.map((item)=>{
                                    return <option key={"plantso-2"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.family_id} onChange={(e)=>{setAddPlant({...addPlant,family_id:e.target.value});families?.map((item)=>{if(item.id==e.target.value){ setGenuses(item.genus); setFamilyAwtor(item);} })}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать семейство </option>
                                {families?.map((item)=>{
                                    return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}> 
                        <div style={{width:"100%"}}><input value={familyAwtor?.family_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div> 
                    </div>
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}> 
                        <div style={{width:"100%"}}>
                            <select defaultValue={"Select Class"} value={addPlant.genus_id} onChange={(e)=>{setAddPlant({...addPlant,genus_id:e.target.value});genuses?.map((item)=>item.id==e.target.value && setGenusAwtor(item))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать род  </option>
                                {genuses?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> 
                        </div>
                    </div>
                     

                    
                    <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}><input value={genusAwtor?.genus_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div> 
                    </div>
                  
                   
                </div>
            </div>
      </div>
    )
}

export default React.memo(Tab1);