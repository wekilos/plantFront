import React, { useEffect, useState } from 'react';
import "../../pages/home.css";
import "antd/dist/antd.css";
import Tab1 from '../../pages/TabsGet/Tab1';
import Tab2 from '../../pages/TabsGet/Tab2';
import Tab3 from '../../pages/TabsGet/Tab3';
import Tab4 from '../../pages/TabsGet/Tab4';
import Tab5 from '../../pages/TabsGet/Tab5';
import Tab6 from '../../pages/TabsGet/Tab6';
import Tab7 from '../../pages/TabsGet/Tab7';
import Tab8 from '../../pages/TabsGet/Tab8';
import Tab9 from '../../pages/TabsGet/Tab9';
import Tab10 from '../../pages/TabsGet/Tab10';
import Tab11 from '../../pages/TabsGet/Tab11';
import { axiosInstance } from '../../utils/axiosinstance';
import { message } from 'antd';
import { useParams } from 'react-router-dom';
// import Tab2 from "./Tabs/Tab2";
// import Tab1 from "./Tabs/Tab1";
// import Tab3 from "./Tabs/Tab3";
// import Tab4 from "./Tabs/Tab4";
// import Tab11 from "./Tabs/Tab11";
// import Tab10 from "./Tabs/Tab10";
// import Tab9 from "./Tabs/Tab9";
// import Tab8 from "./Tabs/Tab8";
// import Tab6 from "./Tabs/Tab6";
// import Tab7 from "./Tabs/Tab7";
// import Tab5 from "./Tabs/Tab5";


const CardInfo = () => {
  const {id} = useParams();
  const [index, setIndex] = useState(1);
  const [plant,setPlant] = useState(); 

  useEffect(()=>{
    getPlant(id)
  },[])
  const getPlant = (id)=>{
    console.log(id)
    axiosInstance.get("/api/get-admin-plant-by-id/"+id).then((res)=>{
      console.log(res.data);
      
      setPlant(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

     
  return (
    <div className="esasyDiv" style={{width:"100%"}}>
        <div style={{width:"90%", margin:"0 auto"}}>
            {/* <div style={{width:"100%", position:"relative", height:"30px"}}>
            <button className="createBtn" style={{top:"10px"}}>Create+</button>
            </div> */}
            <div className="tabHeader">
                <h1 onClick={()=>setIndex(1)} className={index==1&&"activeTabHeader"}>Таксономия</h1>
                <h1 onClick={()=>setIndex(2)} className={index==2&&"activeTabHeader"}>Названия</h1>
                <h1 onClick={()=>setIndex(3)} className={index==3&&"activeTabHeader"}>Ареалы</h1>
                <h1 onClick={()=>setIndex(4)} className={index==4&&"activeTabHeader"}>Карта</h1>
                <h1 onClick={()=>setIndex(5)} className={index==5&&"activeTabHeader"}>Морфология</h1>
                <h1 onClick={()=>setIndex(6)} className={index==6&&"activeTabHeader"}>Экология</h1>
                <h1 onClick={()=>setIndex(7)} className={index==7&&"activeTabHeader"}>Применение</h1>
                <h1 onClick={()=>setIndex(8)} className={index==8&&"activeTabHeader"}>Дополнительно</h1>
                <h1 onClick={()=>setIndex(9)} className={index==9&&"activeTabHeader"}>Гербарий</h1>
                <h1 onClick={()=>setIndex(10)} className={index==10&&"activeTabHeader"}>Рисунки</h1>
                <h1 onClick={()=>setIndex(11)} className={index==11&&"activeTabHeader"}>Текст</h1>
            </div>

            <div className="tabBody">
            {index==1 && <div className="tabChild">
              <Tab1 data={plant}/>
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(2)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div>
            </div>}

            {index==2 && <div className="tabChild"> 
              <Tab2 data={plant}/>
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(1)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(3)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}

            {index==3 && <div className="tabChild">
              <Tab3 data={plant?.areal?plant.areal:null} /> 
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(2)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(4)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div>  
            </div>}

            {index==4 && <div className="tabChild">
              <Tab4 data={plant?.maps?plant.maps:""}/>
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(3)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(5)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==5 && <div className="tabChild">
              <Tab5 data={plant?.morphology?plant.morphology:""} />
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(4)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(6)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==6 && <div className="tabChild">
              <Tab6 data={plant?.ecology?plant.ecology:""}/>
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(5)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(7)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div>  
            </div>}
            {index==7 && <div className="tabChild">
              <Tab7 data={plant?.apply?plant.apply:""} />
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(6)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(8)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==8 && <div className="tabChild">
              <Tab8 data={plant?.addition?plant.addition:""}/>
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(7)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(9)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==9 && <div className="tabChild">
              <Tab9 />
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(8)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(10)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==10 && <div className="tabChild">
              <div>
              <Tab10 data={plant?.image?plant.image:[]}/>
              </div>
              {/* <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> */}
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(9)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(11)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==11 && <div className="tabChild">
              <Tab11 data={plant?.note?plant.note:""} />
              <div style={{marginLeft:"84%",display:"inline-flex"}}>
                    <button onClick={()=>setIndex(10)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    {/* <button onClick={()=>setIndex(5)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button> */}
                  </div> 
            </div>}
            </div>
        </div>
    </div>
  );
};
export default CardInfo;