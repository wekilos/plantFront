import React, { useEffect, useState } from "react";

const Tab7 = (props) =>{
    const [addPlant,setAddPlant]= useState(props?.data);
console.log(props.data)
       
    return(
        <div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between"}}>
                <p style={{width:"19%"}}>Можно использовать:</p>
                <input disabled value={addPlant.can_be_used1} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input disabled value={addPlant.can_be_used2} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input disabled value={addPlant.can_be_used3} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between",marginTop:"10px"}}>
                <p  style={{width:"18%"}}>-как декоративное:</p>
                <input disabled value={addPlant.as_decorative1} style={{width:"39%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input disabled value={addPlant.as_decorative2} style={{width:"39%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            
            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between",marginTop:"10px"}}>
                <p style={{width:"20%"}}>-при создании:</p>
                <input disabled value={addPlant.while_creating} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"100%",display:"inline-flex", justifyContent:"space-between", marginTop:"30px"}}>
                <p style={{width:"19%"}}>-для фитомелиорации:</p>
                <input disabled value={addPlant.for_phytomelioration1} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input disabled value={addPlant.for_phytomelioration2} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
                <input disabled value={addPlant.for_phytomelioration3} style={{width:"26%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}} type="text" />
            </div>

            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"30px"}}>
                <p style={{width:"25%"}}>-как пищевое:</p>
                <input disabled value={addPlant.as_food} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div> <br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как кормовое:</p>
                <input disabled value={addPlant.as_feed} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как лекарственное:</p>
                <input disabled value={addPlant.as_medicinal} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"50%",display:"inline-flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p style={{width:"25%"}}>-как техническое:</p>
                <input disabled value={addPlant.as_technical} style={{width:"60%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"20%"}}>-для других целей:</p>
                <input disabled value={addPlant.for_other_purposes} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"20%"}}>-Наличие сырьевых запасов:</p>
                <input disabled value={addPlant.availability_materials} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

            <div style={{width:"50%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"40%"}}>-Размножается: -сменами:</p>
                <input disabled value={addPlant.propagated_seeds} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div>
            <div style={{width:"50%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"17%"}}>-вегатативно:</p>
                <input disabled value={addPlant.propagated_vegetatively} style={{width:"50%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />
            <div style={{width:"100%",display:"inline-flex", marginTop:"30px"}}>
                <p style={{width:"40%"}}>-при использовани специальных способов и условий размножения:</p>
                <input disabled value={addPlant.propagated_condition} style={{width:"65%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

            <div style={{width:"100%",display:"inline-flex", marginTop:"10px"}}>
                <p style={{width:"40%"}}>-Основные способы размножения:</p>
                <input disabled value={addPlant.main_ways_prop} style={{width:"65%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer"}}  name="" id=""/>
            </div><br />

        </div>
    )
}
export default Tab7;