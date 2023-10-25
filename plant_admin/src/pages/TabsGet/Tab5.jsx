import React, { useEffect, useState } from "react";

const Tab5 = (props) =>{
    const [addPlant,setAddPlant]= useState(props?.data);
    console.log(props.data)

    return(
        <div>
            <div style={{width:"100%",display:'inline-flex'}}>

                <div style={{width:"20%"}}>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Форма роста:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>листопадность:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>Жизненная форма по Раункиеру:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>По плодоношению:</p>
                    <p style={{height:"5vh", marginBottom:"10px"}}>По типу опыления:</p>

                    <p style={{height:"5vh", marginTop:"75px"}}>Начало цветения:</p>
                    <p style={{height:"5vh", marginTop:"10px"}}>Конец цветения:</p>
                    <p style={{height:"5vh"}}>Созревание плодов:</p>

                    <p style={{height:"5vh",marginTop:"40px"}}>Окраска цветка:</p>
                    <p style={{height:"5vh"}}>Окраска плодов:</p>
                    <p style={{height:"5vh"}}>Окраска листьев летом:</p>
                    <p style={{height:"5vh"}}>Окраска листьев осенью:</p>
                </div>

                <div style={{width:"30%"}}>
                    <input disabled value={addPlant.growth_form} style={{width:"90%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id="" /><br />
                    <input disabled value={addPlant.deciduousness} style={{width:"90%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.life_form_raunkier} style={{width:"90%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/><br />
                    <input disabled value={addPlant.fruit_bearing} style={{width:"90%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}name="" id=""/><br />
                    <input disabled value={addPlant.type_pollination} style={{width:"90%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}name="" id=""/><br />
                    <div style={{width:"100%", marginTop:"30px",display:"inline-flex"}}>
                        <div style={{width:"100%", display:"block"}}>
                            <p>Декада</p>
                            <input disabled value={addPlant.begin_flowering_decade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.end_flowering_decade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/>
                            <input disabled value={addPlant.fruit_ripening_decade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                        </div>
                        <div style={{width:"100%", display:"block"}}>
                            <p>Месяц</p>
                            <input disabled value={addPlant.begin_flowering_month} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} name="" id=""/>
                            <input disabled value={addPlant.end_flowering_month} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.fruit_ripening_month} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                        </div>
                    </div>

                    <div style={{width:"100%",display:"inline-flex"}}>
                        <div style={{width:"100%", display:"block"}}>
                            <p>Оттенок:</p>
                            <input disabled value={addPlant.flower_color_shade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.fruit_color_shade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.leaf_color_summer_shade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.leaf_color_autumn_shade} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                        </div>
                        <div style={{width:"100%", display:"block"}}>
                            <p>Фон</p>
                            <input disabled value={addPlant.flower_color_background} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.fruit_color_background} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.leaf_color_summer_background} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                            <input disabled value={addPlant.leaf_color_autumn_background} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}}  name="" id=""/>
                        </div>
                    </div>
                    
               
                </div>

                <div style={{width:"50%", display:"inline-flex"}}>
                    <p style={{width:"20%"}}>Дополнительно:</p>
                    <input disabled value={addPlant.additional} style={{width:"65%", marginLeft:"10px",border:"1px solid lightgrey", borderRadius:"5px", height:"5vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"5px"}} type="text" /> <br />
                </div>

            </div>

            <div style={{width:"100%", height:"15vh",marginTop:"20px",display:"inline-flex"}}>
                <p style={{height:"5vh",width:"20%"}}>Описание морфологического строения:</p>
                <textarea disabled value={addPlant.description_structure} style={{width:"80%",border:"1px solid lightgrey", borderRadius:"5px", height:"18vh",outline:'none', cursor:"pointer",marginBottom:"10px",padding:"10px"}} type="text" />
            </div>
        </div>
    )
}
export default Tab5;