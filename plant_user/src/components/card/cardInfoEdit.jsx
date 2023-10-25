import React, { useEffect, useState } from 'react';
import "../../pages/home.css";
import "antd/dist/antd.css";
import Tab1 from '../../pages/TabsEdit/Tab1';
import Tab2 from '../../pages/TabsEdit/Tab2';
import Tab3 from '../../pages/TabsEdit/Tab3';
import Tab4 from '../../pages/TabsEdit/Tab4';
import Tab5 from '../../pages/TabsEdit/Tab5';
import Tab6 from '../../pages/TabsEdit/Tab6';
import Tab7 from '../../pages/TabsEdit/Tab7';
import Tab8 from '../../pages/TabsEdit/Tab8';
import Tab9 from '../../pages/TabsEdit/Tab9';
import Tab10 from '../../pages/TabsEdit/Tab10';
import Tab11 from '../../pages/TabsEdit/Tab11';
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
  const [tab1,setTab1] = useState();
  const [tab1d,setTab1d] = useState();
  const [tab2,setTab2] = useState();
  const [tab2d,setTab2d] = useState();
  const [tab3,setTab3] = useState();
  const [tab5,setTab5] = useState();
  const [tab6,setTab6] = useState();
  const [tab7,setTab7] = useState();
  const [tab8,setTab8] = useState();
  const [tab11,setTab11] = useState();
  const [plant,setPlant] = useState();

  useEffect(()=>{
    getPlant()
  },[])
  const getPlant=( )=>{
    axiosInstance.get("/api/get-admin-plant-by-id/"+id).then((res)=>{
        console.log("plant:",res.data);
        setPlant(res.data);
       const {department_id,
          class_id,
          subclass_id,
          supersubclass_id,
          order_id,
          suborder_id,
          family_id,
          genus_id} = res.data;
          setTab1({department_id,
            class_id,
            subclass_id,
            supersubclass_id,
            order_id,
            suborder_id,
            family_id,
            genus_id})
          setTab1d({department_id,
            class_id,
            subclass_id,
            supersubclass_id,
            order_id,
            suborder_id,
            family_id,
            genus_id})

          const {
            kind,
            subkind,
            variety,
            form,
            hybrid,
            cultivar,
            name_ru,
            name_kz,
            name_folk,
            fullname,
            fullname_ru, 
            fullname_synonym,
            plant_author,
            link_synonym
          } = res.data;
          setTab2({
            kind,
            subkind,
            variety,
            form,
            hybrid,
            cultivar,
            name_ru,
            name_kz,
            name_folk,
            fullname,
            fullname_ru, 
            fullname_synonym,
            plant_author,
            link_synonym
          })
          setTab2d({
            kind,
            subkind,
            variety,
            form,
            hybrid,
            cultivar,
            name_ru,
            name_kz,
            name_folk,
            fullname,
            fullname_ru, 
            fullname_synonym,
            plant_author,
            link_synonym
          })
      setTab3(res.data.areal);
      setTab5(res.data.morphology)
      setTab6(res.data.ecology)
      setTab7(res.data.apply)
      setTab8(res.data.addition)
      setTab11(res.data.note)
    }).catch((err)=>{
      console.log(err);
    })
  }
  const getDataFromTab1 = (data) =>{
    console.log("data from Tab1",data)
    setTab1(data)
  }

  const getDataFromTab2 = (data) =>{
    console.log("data from Tab2",data)
    setTab2(data)
  }

  const createPlant = ()=>{
    
      tab1?.department_id?console.log(""):setTab1({...tab1,department_id:tab1d.department_id})
      tab1?.class_id?console.log(""):setTab1({...tab1,class_id:tab1d.class_id})
      tab1?.subclass_id?console.log(""):setTab1({...tab1,subclass_id:tab1d.subclass_id})
      tab1?.supersubclass_id?console.log(""):setTab1({...tab1,supersubclass_id:tab1d.supersubclass_id})
      tab1?.order_id?console.log(""):setTab1({...tab1,order_id:tab1d.order_id})
      tab1?.suborder_id?console.log(""):setTab1({...tab1,suborder_id:tab1d.suborder_id})
      tab1?.family_id?console.log(""):setTab1({...tab1,family_id:tab1d.family_id})
      tab1?.genus_id?console.log(""):setTab1({...tab1,genus_id:tab1d.genus_id})
    
      // tab2?.kind!=""&&
      // tab2?.subkind!=""&&
      // tab2?.variety!=""&&
      // tab2?.form!=""&&
      // tab2?.hybrid!=""&&
      // tab2?.cultivar!=""
      console.log(tab1,tab2)
      axiosInstance.put("/api/update-plant/"+id,{...tab1,...tab2}).then((res)=>{
      console.log(res.data);
      message.success(res.data.msg)
    }).catch((err)=>{
      console.log(err);
    })
    
     
  }

  useEffect(()=>{getPlants()},[])
  const getPlants = ()=>{
    axiosInstance.get("/api/get-admin-plant").then((res)=>console.log(res.data))
  }
  

  const getDataFromTab3 = (data) =>{
    console.log("data from Tab3",data)
    setTab3(data)
  }
  const createAreal =()=>{
    axiosInstance.post("/api/create-areal",tab3).then((res)=>{
      console.log(res.data);
  }).catch((err)=>{
      console.log(err);
  })
}

const getDataFromTab5 = (data) =>{
  console.log("data from Tab5",data)
  setTab5(data)
}
const createMorfology =()=>{
  axiosInstance.post("/api/create-morphology",tab5).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})
}

const getDataFromTab6 = (data) =>{
  console.log("data from Tab6",data)
  setTab6(data)
}
const createEcology =()=>{
  axiosInstance.post("/api/create-ecology",tab6).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})
}

const getDataFromTab7 = (data) =>{
  console.log("data from Tab7",data)
  setTab7(data)
}
const createApply =()=>{
  axiosInstance.post("/api/create-apply",tab7).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})
}

const getDataFromTab8 = (data) =>{
  console.log("data from Tab8",data)
  setTab8(data)
}
const createAddition =()=>{
  axiosInstance.post("/api/create-addition",tab8).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})
}

const getDataFromTab11 = (data) =>{
  console.log("data from Tab11",data)
  setTab11(data)
}
const createText =()=>{
  axiosInstance.post("/api/create-note",tab11).then((res)=>{
    console.log(res.data);
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
              <Tab1 func={getDataFromTab1} data={tab1}/>
                  <div style={{marginLeft:"91%",width:"100%"}}>
                    <button onClick={()=>setIndex(2)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div>
            </div>}

            {index==2 && <div className="tabChild"> 
              <Tab2 func={getDataFromTab2} data={tab2}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    <button onClick={()=>setIndex(1)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={createPlant} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Сохранить</button>
                  </div>
            </div>}

            {index==3 && <div className="tabChild">
              <Tab3 func={getDataFromTab3} data={tab3}/>  
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(2)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button> */}
                    <button onClick={createAreal} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer",marginLeft:"85px"}}>Сохранить</button>
                  </div>  
            </div>}

            {index==4 && <div className="tabChild">
              <Tab4 data={plant.maps.img_name}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    <button onClick={()=>setIndex(3)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(5)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button>
                  </div> 
            </div>}
            {index==5 && <div className="tabChild">
              <Tab5 func={getDataFromTab5} data={tab5}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(4)} style={{width:"80px",marginTop:"30px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button> */}
                    <button onClick={createMorfology} style={{width:"100px",marginTop:"30px",padding:"2px",cursor:"pointer", marginLeft:"85px"}}>Сохранить</button>
                  </div> 
            </div>}
            {index==6 && <div className="tabChild">
              <Tab6 func={getDataFromTab6} data={tab6}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(5)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button> */}
                    <button onClick={createEcology} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer", marginLeft:"85px"}}>Следующий</button>
                  </div> 
            </div>}
            {index==7 && <div className="tabChild">
              <Tab7 func={getDataFromTab7} data={tab7}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(6)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button> */}
                    <button onClick={createApply} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Сохранить</button>
                  </div> 
            </div>}
            {index==8 && <div className="tabChild">
              <Tab8 func={getDataFromTab8} data={tab8}/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(7)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button> */}
                    <button onClick={createAddition} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Сохранить</button>
                  </div> 
            </div>}
            {index==9 && <div className="tabChild">
              <Tab9/>
                  <div style={{marginLeft:"84%",width:"100%"}}>
                    {/* <button onClick={()=>setIndex(8)} style={{width:"80px",marginTop:"25px",padding:"2px",marginRight:"5px",cursor:"pointer"}}>Назад</button>
                    <button onClick={()=>setIndex(10)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Следующий</button> */}
                  </div> 
            </div>}
            {index==10 && <div className="tabChild">
              <Tab10/>
                  {/* <div style={{marginLeft:"84%",width:"15%", display:"inline-flex"}}>
                    <input onChange={(e)=>setFile(e.target.files[0])} style={{width:"80x",marginTop:"25px"}} type="file"/>
                    <button onClick={()=>createImg()} style={{width:"80px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Создать</button>
                    <button onClick={()=>setIndex(11)} style={{width:"100px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Сохранить</button>
                  </div>  */}
            </div>}
            {index==11 && <div className="tabChild">
              <Tab11 func={getDataFromTab11} data={tab11}/>
                  <div style={{marginLeft:"93%",width:"100%"}}>
                    <button onClick={createText} style={{width:"80px",marginTop:"25px",padding:"2px",cursor:"pointer"}}>Сохранить</button>
                  </div> 
            </div>}
            </div>
        </div>
    </div>
  );
};
export default CardInfo;