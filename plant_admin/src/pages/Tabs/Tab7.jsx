import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tab7 = (props) =>{
    const {id} = useParams()
    const [addPlant,setAddPlant]= useState(props?.data?props.data:{
        can_be_used1: "",
        can_be_used2: "",
        can_be_used3: "",
        as_decorative1: "",
        as_decorative2: "",
        while_creating: "",
        for_phytomelioration1: "",
        for_phytomelioration2: "",
        for_phytomelioration3: "",
        as_food: "",
        as_feed: "",
        as_medicinal: "",
        as_technical: "",
        for_other_purposes: "",
        availability_materials: "",
        propagated_seeds: "",
        propagated_vegetatively: "",
        propagated_condition: "",
        main_ways_prop: "",
        plant_id: id
      });

      useEffect(()=>{
        props.func(addPlant)
      },[addPlant])
    return(
        <div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between"}}>
                <p style={{width:"19%"}}>Можно использовать:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,can_be_used1:e.target.value})} value={addPlant.can_be_used1} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input onChange={(e)=>setAddPlant({...addPlant,can_be_used2:e.target.value})} value={addPlant.can_be_used2} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input onChange={(e)=>setAddPlant({...addPlant,can_be_used3:e.target.value})} value={addPlant.can_be_used3} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between",marginTop:"10px"}}>
                <p  style={{width:"18%"}}>-как декоративное:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,as_decorative1:e.target.value})} value={addPlant.as_decorative1} style={{width:"39%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input onChange={(e)=>setAddPlant({...addPlant,as_decorative2:e.target.value})} value={addPlant.as_decorative2} style={{width:"39%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            
            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between",marginTop:"10px"}}>
                <p style={{width:"20%"}}>-при создании:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,while_creating:e.target.value})} value={addPlant.while_creating} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between", marginTop:"30px"}}>
                <p style={{width:"19%"}}>-для фитомелиорации:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,for_phytomelioration1:e.target.value})} value={addPlant.for_phytomelioration1} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input onChange={(e)=>setAddPlant({...addPlant,for_phytomelioration2:e.target.value})} value={addPlant.for_phytomelioration2} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input onChange={(e)=>setAddPlant({...addPlant,for_phytomelioration3:e.target.value})} value={addPlant.for_phytomelioration3} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"30px"}}>
                <p style={{width:"25%"}}>-как пищевое:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,as_food:e.target.value})} value={addPlant.as_food} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div> <br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как кормовое:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,as_feed:e.target.value})} value={addPlant.as_feed} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как лекарственное:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,as_medicinal:e.target.value})} value={addPlant.as_medicinal} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как техническое:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,as_technical:e.target.value})} value={addPlant.as_technical} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"20%"}}>-для других целей:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,for_other_purposes:e.target.value})} value={addPlant.for_other_purposes} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"20%"}}>-Наличие сырьевых запасов:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,availability_materials:e.target.value})} value={addPlant.availability_materials} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

            <div style={{width:"50%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"40%"}}>-Размножается: -сменами:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,propagated_seeds:e.target.value})} value={addPlant.propagated_seeds} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div>
            <div style={{width:"50%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"17%"}}>-вегатативно:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,propagated_vegetatively:e.target.value})} value={addPlant.propagated_vegetatively} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"40%"}}>-при использовани специальных способов и условий размножения:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,propagated_condition:e.target.value})} value={addPlant.propagated_condition} style={{width:"65%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

            <div style={{width:"100%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"40%"}}>-Основные способы размножения:</p>
                <input onChange={(e)=>setAddPlant({...addPlant,main_ways_prop:e.target.value})} value={addPlant.main_ways_prop} style={{width:"65%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

        </div>
    )
}
export default Tab7;