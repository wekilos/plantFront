import React, { useState } from 'react';
import "../pages/home.css";
import "antd/dist/antd.css"; 
import Tab2 from "./Tabs/Tab2";
import Tab1 from "./Tabs/Tab1";
import Tab3 from "./Tabs/Tab3";
import Tab4 from "./Tabs/Tab4";
import Tab11 from "./Tabs/Tab11";
import Tab10 from "./Tabs/Tab10";
import Tab9 from "./Tabs/Tab9";
import Tab8 from "./Tabs/Tab8";
import Tab6 from "./Tabs/Tab6";
import Tab7 from "./Tabs/Tab7";
import Tab5 from "./Tabs/Tab5";

const Home = () => {
  const [index, setIndex] = useState(1);
   
  return (
    <div className="esasyDiv">
        <div style={{width:"90%", margin:"0 auto"}}>
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
              <Tab1/>
            </div>}

            {index==2 && <div className="tabChild"> 
              <Tab2/>
            </div>}

            {index==3 && <div className="tabChild">
              <Tab3/>    
            </div>}

            {index==4 && <div className="tabChild">
              <Tab4/>
            </div>}
            {index==5 && <div className="tabChild">
              <Tab5/>
            </div>}
            {index==6 && <div className="tabChild">
              <Tab6/>
            </div>}
            {index==7 && <div className="tabChild">
              <Tab7/>
            </div>}
            {index==8 && <div className="tabChild">
              <Tab8/>
            </div>}
            {index==9 && <div className="tabChild">
              <Tab9/>
            </div>}
            {index==10 && <div className="tabChild">
              <Tab10/>
            </div>}
            {index==11 && <div className="tabChild">
              <Tab11/>
            </div>}
            </div>
        </div>
    </div>
  );
};
export default Home;

