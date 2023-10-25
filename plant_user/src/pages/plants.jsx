import React, { useState, useEffect, useContext } from "react";
import "../pages/plants.css";
import "antd/dist/antd.css";
import Card from "../components/card/card";
// import { Checkbox } from 'antd';
import { Select } from "antd";
import { SebedimContext } from "../context/context";
import { axiosInstance } from "../utils/axiosinstance";
import { useNavigate } from "react-router-dom";

const Plants = () => {
    const navigate = useNavigate();
    const { searchInput } = useContext(SebedimContext);
    const [plants, setPlants] = useState([]);
    const [plant, setPlant] = useState({
        department_id: [],
        class_id: [],
        subclass_id: [],
        supersubclass_id: [],
        order_id: [],
        suborder_id: [],
        family_id: [],
        genus_id: [],
        text: searchInput,
    });

    useEffect(() => {
        const time = setTimeout(() => {
            getSearch();
        }, 800);
        return () => clearTimeout(time);
    }, [searchInput, plant]);

    const getSearch = () => {
        const department_id = plant.department_id
            ?.map((value) => `${value}`)
            .join(",");
        const class_id = plant.class_id?.map((value) => `${value}`).join(",");
        const subclass_id = plant.subclass_id
            ?.map((value) => `${value}`)
            .join(",");
        const supersubclass_id = plant.supersubclass_id
            ?.map((value) => `${value}`)
            .join(",");
        const order_id = plant.order_id?.map((value) => `${value}`).join(",");
        const suborder_id = plant.suborder_id
            ?.map((value) => `${value}`)
            .join(",");
        const family_id = plant.family_id?.map((value) => `${value}`).join(",");
        const genus_id = plant.genus_id?.map((value) => `${value}`).join(",");
        axiosInstance
            .get("/api/search-admin", {
                params: {
                    department_id: department_id,
                    class_id,
                    subclass_id,
                    supersubclass_id,
                    order_id,
                    suborder_id,
                    family_id,
                    genus_id,
                    text: searchInput,
                },
            })
            .then((res) => {
                console.log("plants", res.data);
                Array.isArray(res.data) ? setPlants(res.data) : setPlants([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [departments, setDepartments] = useState([]);
    const [classes, setClasses] = useState([]);
    const [subClasses, setSubClasses] = useState([]);
    const [SuperSubClasses, setSuperSubClasses] = useState([]);
    const [orders, setOrders] = useState([]);
    const [subOrders, setSubOrders] = useState([]);
    const [families, setFamilies] = useState([]);
    const [genuses, setGenuses] = useState([]);
    useEffect(() => {
        getDepartment();
        getClass();
        getSubClass();
        getSuperSubClass();
        getOrders();
        getSubOrders();
        getFamily();
        getGenus();
    }, []);
    const getDepartment = () => {
        axiosInstance
            .get("/api/get-admin-departments")
            .then((res) => {
                console.log("departments", res.data);
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setDepartments(array);
                } else {
                    setDepartments([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getClass = () => {
        axiosInstance
            .get("/api/get-admin-classes")
            .then((res) => {
                console.log(res.data);
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setClasses(array);
                } else {
                    setClasses([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSubClass = () => {
        axiosInstance
            .get("/api/get-admin-subclass")
            .then((res) => {
                console.log(res.data);
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setSubClasses(array);
                } else {
                    setSubClasses([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSuperSubClass = () => {
        axiosInstance
            .get("/api/get-admin-supersubclass")
            .then((res) => {
                console.log(res.data);
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setSuperSubClasses(array);
                } else {
                    setSuperSubClasses([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getOrders = () => {
        axiosInstance
            .get("/api/get-admin-order")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setOrders(array);
                } else {
                    setOrders([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSubOrders = () => {
        axiosInstance
            .get("/api/get-admin-suborder")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setSubOrders(array);
                } else {
                    setSubOrders([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getFamily = () => {
        axiosInstance
            .get("/api/get-admin-families")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setFamilies(array);
                } else {
                    setFamilies([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getGenus = () => {
        axiosInstance
            .get("/api/get-admin-genus")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    let array = [];
                    res.data.map((item) => {
                        array.push({
                            label:
                                item.name_lt +
                                ", " +
                                item.name_ru +
                                ", " +
                                item.name_tm,
                            value: item.id,
                        });
                    });
                    setGenuses(array);
                } else {
                    setGenuses([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, department_id: value });
        console.log(plant);
    };
    const handleChangeClasses = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, class_id: value });
    };
    const handleChangeSubClasses = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, subclass_id: value });
    };
    const handleChangeSuperSubClasses = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, supersubclass_id: value });
    };
    const handleChangeOrders = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, order_id: value });
    };
    const handleChangeSubOrders = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, suborder_id: value });
    };
    const handleChangeFamilies = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, family_id: value });
    };
    const handleChangeGenuses = (value) => {
        console.log(`selected ${value}`);
        setPlant({ ...plant, genus_id: value });
    };
    return (
        <div style={{ background: "#F7F7FA", minHeight: "110vh" }}>
            <div style={{ width: "90%", margin: "0 auto" }}>
                {/* <div style={{width:"100%",display:"inline-flex",justifyContent:"flex-end",padding:"10px 50px 0px"}}>
                    <button onClick={()=>navigate("/plantCreate")} className="btn-create">Create Plant</button>
                </div> */}
                <div
                    style={{
                        display: "inline-flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop: "0px",
                    }}
                >
                    <div className="menu">
                        <div id="marka">Расширенный поиск</div>
                        {/* <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,department:e.target.value})} value={checkbox.department} style={{marginRight:"5px"}}/>Отдел</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,class_rel:e.target.value})} value={checkbox.class_rel} style={{marginRight:"5px"}}/>Класс</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,subclass:e.target.value})} value={checkbox.subclass} style={{marginRight:"5px"}}/>Подкласс</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,supersubclass:e.target.value})} value={checkbox.supersubclass} style={{marginRight:"5px"}}/>Надпорядок</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,order:e.target.value})} value={checkbox.order} style={{marginRight:"5px"}}/>Порядок</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,suborder:e.target.value})} value={checkbox.suborder} style={{marginRight:"5px"}}/>Подпорядок</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,family:e.target.value})} value={checkbox.family} style={{marginRight:"5px"}}/>Семейство</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,kind:e.target.value})} value={checkbox.kind} style={{marginRight:"5px"}}/>Вид</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,subkind:e.target.value})} value={checkbox.subkind} style={{marginRight:"5px"}}/>Подвид</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,genus:e.target.value})} value={checkbox.genus} style={{marginRight:"5px"}}/>Род</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,variety:e.target.value})} value={checkbox.variety} style={{marginRight:"5px"}}/>Разновидность</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,form:e.target.value})} value={checkbox.form} style={{marginRight:"5px"}}/>Форма</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,hybrid:e.target.value})} value={checkbox.hybrid} style={{marginRight:"5px"}}/>Гибрид</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,cultivar:e.target.value})} value={checkbox.cultivar} style={{marginRight:"5px"}}/>Култьивар</div>
                        <div className="markalar"><Checkbox onChange={(e)=>setCheckbox({...checkbox,fullname:e.target.value})} value={checkbox.fullname} style={{marginRight:"5px"}}/>Полное название растения</div> */}
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать отдел"
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChange}
                                value={plant.department_id}
                                options={departments}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                optionFilterProp="label"
                                placeholder="Выбрать класс "
                                defaultValue={[]}
                                onChange={handleChangeClasses}
                                options={classes}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать подкласс"
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeSubClasses}
                                options={subClasses}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать надпорядок "
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeSuperSubClasses}
                                options={SuperSubClasses}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать порядок "
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeOrders}
                                options={orders}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать подпорядок"
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeSubOrders}
                                options={subOrders}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать семейство"
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeFamilies}
                                options={families}
                            />
                        </div>
                        <div className="markalar">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Выбрать род"
                                optionFilterProp="label"
                                defaultValue={[]}
                                onChange={handleChangeGenuses}
                                options={genuses}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            width: "78%",
                            display: "block",
                            marginTop: "0px",
                        }}
                    >
                        <div className="esasyDermanlar">
                            <div className="cards">
                                {plants?.map((item) => {
                                    return <Card data={item} width={"300px"} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Plants;
