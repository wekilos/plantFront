import React, { useState, useEffect } from "react";
import "../Tabs/Tab2.css";
import "antd/dist/antd.css";
// import { Col, Row } from 'antd';
// import React, { useState } from 'react';
import { Button, Drawer } from "antd";
import { message } from "antd";
// import {PlusOutlined,CloseOutlined } from '@ant-design/icons'
import { axiosInstance } from "../../utils/axiosinstance";
// import Item from "antd/lib/list/Item";

const Tab1 = (props) => {
    console.log("re-render");
    console.log("props", props.data);
    const plant = props?.data;

    return (
        <div style={{ position: "relative" }}>
            <div style={{ width: "100%", display: "inline-flex" }}>
                <div style={{ width: "46%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                            userSelect: "none",
                        }}
                    >
                        <div style={{ width: "60%" }}></div>
                        <div style={{ width: "50%" }}>
                            Латинское название (без рода)
                        </div>
                    </div>
                </div>

                <div style={{ width: "33%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                            userSelect: "none",
                        }}
                    >
                        <div style={{ width: "25%" }}></div>
                        <div style={{ width: "100%" }}>
                            Русское название (без рода):
                        </div>
                    </div>
                </div>
                <div style={{ width: "33%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                            userSelect: "none",
                        }}
                    >
                        <div style={{ width: "25%" }}></div>
                        <div style={{ width: "100%" }}>
                            Туркмениское название (без рода):
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    width: "100%",
                    display: "inline-flex",
                    justifyContent: "space-between",
                    fontSize: "15px",
                }}
            >
                <div style={{ width: "45%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Отдел:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            <p className="tabInput">
                                {props.data?.department?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Класс:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.class_id} onChange={(e)=>{setAddPlant({...addPlant,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}} placeholder="Select department" className="tabInput" type="text">
                                <option disabled  value={0}> Выбрать класс </option>
                                {classes?.map((item)=>{
                                    return <option key={"plantc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> */}

                            <p className="tabInput">
                                {props.data?.class_rel?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Подкласс:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.subclass_id} onChange={(e)=>{setAddPlant({...addPlant,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}} placeholder="Select department" className="tabInput" type="text">
                                <option disabled  value={0}> Выбрать подкласс </option>
                                {subClasses?.map((item)=>{
                                    return <option key={"plantsc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> */}

                            <p className="tabInput">
                                {props.data?.subclass?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Надпорядок:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.supersubclass_id} onChange={(e)=>{setAddPlant({...addPlant,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать надпорядок </option>
                                {SuperSubClasses?.map((item)=>{
                                    return <option key={"plantssc1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>  */}

                            <p className="tabInput">
                                {props.data?.supersubclass?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Порядок:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.order_id} onChange={(e)=>{setAddPlant({...addPlant,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать порядок </option>
                                {orders?.map((item)=>{
                                    return <option key={"planto-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>  */}

                            <p className="tabInput">
                                {props.data?.order?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Подпорядок:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.suborder_id} onChange={(e)=>{setAddPlant({...addPlant,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подпорядок </option>
                                {subOrders?.map((item)=>{
                                    return <option key={"plantso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.suborder?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Семейство (без рода):
                            <span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.family_id} onChange={(e)=>{setAddPlant({...addPlant,family_id:e.target.value});families?.map((item)=>{if(item.id==e.target.value){ setGenuses(item.genus); setFamilyAwtor(item);} })}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать семейство </option>
                                {families?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.family?.name_lt}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>Автор семейтсва:</div>
                        {/* <div style={{width:"55%",marginLeft:"4%"}}><input value={familyAwtor?.family_author}  style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p
                            style={{ width: "55%", marginLeft: "4%" }}
                            className="tabInput"
                        >
                            {props.data?.family?.family_author}
                        </p>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>
                            Род:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.genus_id} onChange={(e)=>{setAddPlant({...addPlant,genus_id:e.target.value});genuses?.map((item)=>item.id==e.target.value && setGenusAwtor(item))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать род </option>
                                {genuses?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.genus?.name_lt}
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "40%" }}>Автор рода:</div>
                        {/* <div style={{width:"55%",marginLeft:"4%"}}><input value={genusAwtor?.genus_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p
                            style={{ width: "55%", marginLeft: "4%" }}
                            className="tabInput"
                        >
                            {props.data?.genus?.genus_author}
                        </p>
                    </div>
                </div>

                <div style={{ width: "27%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Department"} value={addPlant.department_id} onChange={(e)=>{setAddPlant({...addPlant,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать отдел </option>
                                {departments?.map((item)=>{
                                    return <option key={"plantd2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.department?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.class_id} onChange={(e)=>{setAddPlant({...addPlant,class_id:e.target.value});classes.map((item)=>{item.id==e.target.value && setSubClasses(item.subclass)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать класс </option>
                                {classes?.map((item)=>{
                                    return <option key={"plantc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.class_rel?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.subclass_id} onChange={(e)=>{setAddPlant({...addPlant,subclass_id:e.target.value});subClasses.map((item)=>{item.id==e.target.value && setSuperSubClasses(item.supersubclass)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подкласс </option>
                                {subClasses?.map((item)=>{
                                    return <option key={"plantsc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.subclass?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.supersubclass_id} onChange={(e)=>{setAddPlant({...addPlant,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать надпорядок </option>
                                {SuperSubClasses?.map((item)=>{
                                    return <option key={"plantssc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.supersubclass?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.order_id} onChange={(e)=>{setAddPlant({...addPlant,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать порядок </option>
                                {orders?.map((item)=>{
                                    return <option key={"planto-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.order?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.suborder_id} onChange={(e)=>{setAddPlant({...addPlant,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подпорядок </option>
                                {subOrders?.map((item)=>{
                                    return <option key={"plantso-2"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.suborder?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.family_id} onChange={(e)=>{setAddPlant({...addPlant,family_id:e.target.value});families?.map((item)=>{if(item.id==e.target.value){ setGenuses(item.genus); setFamilyAwtor(item);} })}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать семейство </option>
                                {families?.map((item)=>{
                                    return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.family?.name_ru}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div style={{width:"100%"}}><input value={familyAwtor?.family_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p className="tabInput">
                            {props.data?.family?.family_author}
                        </p>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.genus_id} onChange={(e)=>{setAddPlant({...addPlant,genus_id:e.target.value});genuses?.map((item)=>item.id==e.target.value && setGenusAwtor(item))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать род  </option>
                                {genuses?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.genus?.name_ru}
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div style={{width:"100%"}}><input value={genusAwtor?.genus_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p className="tabInput">
                            {props.data?.genus?.genus_author}
                        </p>
                    </div>
                </div>
                <div style={{ width: "27%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Department"} value={addPlant.department_id} onChange={(e)=>{setAddPlant({...addPlant,department_id:e.target.value});departments.map((item)=>{item.id==e.target.value && setClasses(item.class_rel)})}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать отдел </option>
                                {departments?.map((item)=>{
                                    return <option key={"plantd2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.department?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                marginBottom: "0",
                                marginTop: "0",
                            }}
                        >
                            <p
                                style={{ marginBottom: "0" }}
                                className="tabInput"
                            >
                                {props.data?.class_rel?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%", marginTop: "0" }}>
                            <p className="tabInput">
                                {props.data?.subclass?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.supersubclass_id} onChange={(e)=>{setAddPlant({...addPlant,supersubclass_id:e.target.value});SuperSubClasses?.map((item)=>item.id==e.target.value && setOrders(item.order))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать надпорядок </option>
                                {SuperSubClasses?.map((item)=>{
                                    return <option key={"plantssc2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.supersubclass?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.order_id} onChange={(e)=>{setAddPlant({...addPlant,order_id:e.target.value});orders?.map((item)=>item.id==e.target.value && setSubOrders(item.suborder))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать порядок </option>
                                {orders?.map((item)=>{
                                    return <option key={"planto-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.order?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.suborder_id} onChange={(e)=>{setAddPlant({...addPlant,suborder_id:e.target.value});subOrders?.map((item)=>item.id==e.target.value && setFamilies(item.family))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать подпорядок </option>
                                {subOrders?.map((item)=>{
                                    return <option key={"plantso-2"+item.id} value={item.id}> {item.name_lt} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.suborder?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.family_id} onChange={(e)=>{setAddPlant({...addPlant,family_id:e.target.value});families?.map((item)=>{if(item.id==e.target.value){ setGenuses(item.genus); setFamilyAwtor(item);} })}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать семейство </option>
                                {families?.map((item)=>{
                                    return <option key={"genusso-2"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select> */}
                            <p className="tabInput">
                                {props.data?.family?.name_tm}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div style={{width:"100%"}}><input value={familyAwtor?.family_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p className="tabInput">
                            {props.data?.family?.family_author}
                        </p>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            {/* <select defaultValue={"Select Class"} value={addPlant.genus_id} onChange={(e)=>{setAddPlant({...addPlant,genus_id:e.target.value});genuses?.map((item)=>item.id==e.target.value && setGenusAwtor(item))}}  className="tabInput" type="text">
                                <option disabled value={0}> Выбрать род  </option>
                                {genuses?.map((item)=>{
                                    return <option key={"plantsso-1"+item.id} value={item.id}> {item.name_ru} </option>
                                })}
                            </select>  */}
                            <p className="tabInput">
                                {props.data?.genus?.name_tm}
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div style={{width:"100%"}}><input value={genusAwtor?.genus_author} style={{cursor:"alias"}} className="tabInput" type="text" disabled /></div>  */}
                        <p className="tabInput">
                            {props.data?.genus?.genus_author}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Tab1);
