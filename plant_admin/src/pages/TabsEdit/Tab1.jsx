import React, { useState, useEffect } from "react";
import "../Tabs/Tab2.css";
import "antd/dist/antd.css";
// import { Col, Row } from 'antd';
// import React, { useState } from 'react';
import { Button, Drawer } from "antd";
import { message } from "antd";
// import {PlusOutlined,CloseOutlined } from '@ant-design/icons'
import { axiosInstance } from "../../utils/axiosinstance";
import { useParams } from "react-router-dom";
// import Item from "antd/lib/list/Item";

const style = {
    background: "white",
    padding: "8px 0",
    border: "1px solid lightgrey",
};
const Tab1 = (props) => {
    const { id } = useParams();
    console.log("re-render");
    const [open, setOpen] = useState(false);
    const [addDepartment, setAddDepartment] = useState({ lt: "", ru: "" });
    const [departments, setDepartments] = useState([]);
    const [addClass, setAddClass] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
    });
    const [classes, setClasses] = useState([]);
    const [addSubClass, setAddSubClass] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
    });
    const [subClasses, setSubClasses] = useState([]);
    const [addSuperSubClass, setAddSuperSubClass] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
    });
    const [SuperSubClasses, setSuperSubClasses] = useState([]);
    const [addOrder, setAddOrder] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
        supersubclass_id: 0,
    });
    const [orders, setOrders] = useState([]);
    const [addSubOrder, setAddSubOrder] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
        supersubclass_id: 0,
        order_id: 0,
    });
    const [subOrders, setSubOrders] = useState([]);
    const [addFamily, setAddFamily] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
        supersubclass_id: 0,
        order_id: 0,
        suborder_id: 0,
        family_author: "",
    });
    const [families, setFamilies] = useState([]);
    const [addGenus, setAddGenus] = useState({
        name_lt: "",
        name_ru: "",
        department_id: 0,
        class_id: 0,
        subclass_id: 0,
        supersubclass_id: 0,
        order_id: 0,
        suborder_id: 0,
        family_id: 0,
        genus_author: "",
    });
    const [familyAwtor, setFamilyAwtor] = useState();
    const [genuses, setGenuses] = useState([]);
    const [genusAwtor, setGenusAwtor] = useState();
    const [addPlant, setAddPlant] = useState(props?.data);

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
    useEffect(() => {
        props.func(addPlant);
    }, [addPlant]);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const createDepartment = () => {
        axiosInstance
            .post("/api/create-department", {
                name_lt: addDepartment.lt,
                name_ru: addDepartment.ru,
            })
            .then((res) => {
                console.log(res.data);
                setAddDepartment("");
                getDepartment();
                setAddDepartment({ lt: "", ru: "" });
                message.success(res.data.msg);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getDepartment = () => {
        axiosInstance
            .get("/api/get-admin-departments")
            .then((res) => {
                console.log("departments", res.data);
                Array.isArray(res.data)
                    ? setDepartments(res.data)
                    : setDepartments([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const createClass = () => {
        axiosInstance
            .post("/api/create-class", addClass)
            .then((res) => {
                console.log(res.data);
                getClass();
                getDepartment();
                setAddClass({ name_lt: "", name_ru: "", department_id: 0 });
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
                Array.isArray(res.data) ? setClasses(res.data) : setClasses([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const createSubClass = () => {
        console.log(addSubClass);
        axiosInstance
            .post("/api/create-subclass", addSubClass)
            .then((res) => {
                console.log(res.data);
                getSubClass();
                getDepartment();
                setAddSubClass({
                    name_lt: "",
                    name_ru: "",
                    department_id: 0,
                    class_id: 0,
                });
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
                Array.isArray(res.data)
                    ? setSubClasses(res.data)
                    : setSubClasses([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const createSuperSubClass = () => {
        console.log(addSuperSubClass);
        axiosInstance
            .post("/api/create-supersubclass", addSuperSubClass)
            .then((res) => {
                console.log(res.data);
                getSuperSubClass();
                setAddSuperSubClass({
                    name_lt: "",
                    name_ru: "",
                    department_id: 0,
                    class_id: 0,
                    subclass_id: 0,
                });
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
                Array.isArray(res.data)
                    ? setSuperSubClasses(res.data)
                    : setSuperSubClasses([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createOrder = () => {
        axiosInstance
            .post("/api/create-order", addOrder)
            .then((res) => {
                console.log(res.data);
                getDepartment();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getOrders = () => {
        axiosInstance
            .get("/api/get-admin-order")
            .then((res) => {
                Array.isArray(res.data) ? setOrders(res.data) : setOrders([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createSubOrder = () => {
        axiosInstance
            .post("/api/create-suborder", addSubOrder)
            .then((res) => {
                console.log(res.data);
                getDepartment();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getSubOrders = () => {
        axiosInstance
            .get("/api/get-admin-suborder")
            .then((res) => {
                Array.isArray(res.data)
                    ? setSubOrders(res.data)
                    : setSubOrders([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const createFamily = () => {
        axiosInstance
            .post("/api/create-family", addFamily)
            .then((res) => {
                console.log(res.data);
                getDepartment();
                setAddFamily({
                    name_lt: "",
                    name_ru: "",
                    department_id: 0,
                    class_id: 0,
                    subclass_id: 0,
                    supersubclass_id: 0,
                    order_id: 0,
                    suborder_id: 0,
                    family_author: "",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFamily = () => {
        axiosInstance
            .get("/api/get-admin-families")
            .then((res) => {
                Array.isArray(res.data)
                    ? setFamilies(res.data)
                    : setFamilies([]);
                Array.isArray(res.data) &&
                    res.data.map((item) => {
                        props?.data?.family_id == item.id &&
                            setFamilyAwtor(item);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createGenus = () => {
        axiosInstance
            .post("/api/create-genus", addGenus)
            .then((res) => {
                console.log(res.data);
                getDepartment();
                setAddGenus({
                    name_lt: "",
                    name_ru: "",
                    department_id: 0,
                    class_id: 0,
                    subclass_id: 0,
                    supersubclass_id: 0,
                    order_id: 0,
                    suborder_id: 0,
                    family_id: 0,
                    family_author: "",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getGenus = () => {
        axiosInstance
            .get("/api/get-admin-genus")
            .then((res) => {
                Array.isArray(res.data) ? setGenuses(res.data) : setGenuses([]);
                Array.isArray(res.data) &&
                    res.data.map((item) => {
                        addPlant?.genus_id == item.id && setGenusAwtor(item);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createPlant = () => {
        axiosInstance
            .post("/api/create-plant", addPlant)
            .then((res) => {
                console.log(res.data);
                getDepartment();
                setAddPlant({
                    name_lt: "",
                    name_ru: "",
                    department_id: 0,
                    class_id: 0,
                    subclass_id: 0,
                    supersubclass_id: 0,
                    order_id: 0,
                    suborder_id: 0,
                    family_id: 0,
                    family_author: "",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                            <select
                                defaultValue={"Select Department"}
                                value={addPlant?.department_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        department_id: e.target.value,
                                    });
                                    departments.map((item) => {
                                        item.id == e.target.value &&
                                            setClasses(item.class_rel);
                                    });
                                }}
                                placeholder="Select department"
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать отдел{" "}
                                </option>
                                {departments?.map((item) => {
                                    return (
                                        <option
                                            key={"plantd1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.class_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        class_id: e.target.value,
                                    });
                                    classes.map((item) => {
                                        item.id == e.target.value &&
                                            setSubClasses(item.subclass);
                                    });
                                }}
                                placeholder="Select department"
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать класс{" "}
                                </option>
                                {classes?.map((item) => {
                                    return (
                                        <option
                                            key={"plantc1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.subclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        subclass_id: e.target.value,
                                    });
                                    subClasses.map((item) => {
                                        item.id == e.target.value &&
                                            setSuperSubClasses(
                                                item.supersubclass
                                            );
                                    });
                                }}
                                placeholder="Select department"
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подкласс{" "}
                                </option>
                                {subClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsc1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.supersubclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        supersubclass_id: e.target.value,
                                    });
                                    SuperSubClasses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setOrders(item.order)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать надпорядок{" "}
                                </option>
                                {SuperSubClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantssc1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.order_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        order_id: e.target.value,
                                    });
                                    orders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setSubOrders(item.suborder)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать порядок{" "}
                                </option>
                                {orders?.map((item) => {
                                    return (
                                        <option
                                            key={"planto-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.suborder_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        suborder_id: e.target.value,
                                    });
                                    subOrders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setFamilies(item.family)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подпорядок{" "}
                                </option>
                                {subOrders?.map((item) => {
                                    return (
                                        <option
                                            key={"plantso-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.family_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        family_id: e.target.value,
                                    });
                                    families?.map((item) => {
                                        if (item.id == e.target.value) {
                                            setGenuses(item.genus);
                                            setFamilyAwtor(item);
                                        }
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать семейство{" "}
                                </option>
                                {families?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsso-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                        <div style={{ width: "55%", marginLeft: "4%" }}>
                            <input
                                value={familyAwtor?.family_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
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
                            Род:<span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "55%" }}>
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.genus_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        genus_id: e.target.value,
                                    });
                                    genuses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setGenusAwtor(item)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать род{" "}
                                </option>
                                {genuses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsso-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_lt}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                        <div style={{ width: "55%", marginLeft: "4%" }}>
                            <input
                                value={genusAwtor?.genus_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
                        </div>
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
                            <select
                                defaultValue={"Select Department"}
                                value={addPlant?.department_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        department_id: e.target.value,
                                    });
                                    departments.map((item) => {
                                        item.id == e.target.value &&
                                            setClasses(item.class_rel);
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать отдел{" "}
                                </option>
                                {departments?.map((item) => {
                                    return (
                                        <option
                                            key={"plantd2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.class_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        class_id: e.target.value,
                                    });
                                    classes.map((item) => {
                                        item.id == e.target.value &&
                                            setSubClasses(item.subclass);
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать класс{" "}
                                </option>
                                {classes?.map((item) => {
                                    return (
                                        <option
                                            key={"plantc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.subclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        subclass_id: e.target.value,
                                    });
                                    subClasses.map((item) => {
                                        item.id == e.target.value &&
                                            setSuperSubClasses(
                                                item.supersubclass
                                            );
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подкласс{" "}
                                </option>
                                {subClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.supersubclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        supersubclass_id: e.target.value,
                                    });
                                    SuperSubClasses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setOrders(item.order)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать надпорядок{" "}
                                </option>
                                {SuperSubClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantssc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.order_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        order_id: e.target.value,
                                    });
                                    orders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setSubOrders(item.suborder)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать порядок{" "}
                                </option>
                                {orders?.map((item) => {
                                    return (
                                        <option
                                            key={"planto-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.suborder_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        suborder_id: e.target.value,
                                    });
                                    subOrders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setFamilies(item.family)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подпорядок{" "}
                                </option>
                                {subOrders?.map((item) => {
                                    return (
                                        <option
                                            key={"plantso-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.family_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        family_id: e.target.value,
                                    });
                                    families?.map((item) => {
                                        if (item.id == e.target.value) {
                                            setGenuses(item.genus);
                                            setFamilyAwtor(item);
                                        }
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать семейство{" "}
                                </option>
                                {families?.map((item) => {
                                    return (
                                        <option
                                            key={"genusso-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <input
                                value={familyAwtor?.family_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.genus_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        genus_id: e.target.value,
                                    });
                                    genuses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setGenusAwtor(item)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать род{" "}
                                </option>
                                {genuses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsso-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_ru}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <input
                                value={genusAwtor?.genus_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
                        </div>
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
                            <select
                                defaultValue={"Select Department"}
                                value={addPlant?.department_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        department_id: e.target.value,
                                    });
                                    departments.map((item) => {
                                        item.id == e.target.value &&
                                            setClasses(item.class_rel);
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать отдел{" "}
                                </option>
                                {departments?.map((item) => {
                                    return (
                                        <option
                                            key={"plantd2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.class_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        class_id: e.target.value,
                                    });
                                    classes.map((item) => {
                                        item.id == e.target.value &&
                                            setSubClasses(item.subclass);
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать класс{" "}
                                </option>
                                {classes?.map((item) => {
                                    return (
                                        <option
                                            key={"plantc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.subclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        subclass_id: e.target.value,
                                    });
                                    subClasses.map((item) => {
                                        item.id == e.target.value &&
                                            setSuperSubClasses(
                                                item.supersubclass
                                            );
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подкласс{" "}
                                </option>
                                {subClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.supersubclass_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        supersubclass_id: e.target.value,
                                    });
                                    SuperSubClasses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setOrders(item.order)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать надпорядок{" "}
                                </option>
                                {SuperSubClasses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantssc2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.order_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        order_id: e.target.value,
                                    });
                                    orders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setSubOrders(item.suborder)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать порядок{" "}
                                </option>
                                {orders?.map((item) => {
                                    return (
                                        <option
                                            key={"planto-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.suborder_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        suborder_id: e.target.value,
                                    });
                                    subOrders?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setFamilies(item.family)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать подпорядок{" "}
                                </option>
                                {subOrders?.map((item) => {
                                    return (
                                        <option
                                            key={"plantso-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.family_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        family_id: e.target.value,
                                    });
                                    families?.map((item) => {
                                        if (item.id == e.target.value) {
                                            setGenuses(item.genus);
                                            setFamilyAwtor(item);
                                        }
                                    });
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать семейство{" "}
                                </option>
                                {families?.map((item) => {
                                    return (
                                        <option
                                            key={"genusso-2" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <input
                                value={familyAwtor?.family_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
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
                            <select
                                defaultValue={"Select Class"}
                                value={addPlant?.genus_id}
                                onChange={(e) => {
                                    setAddPlant({
                                        ...addPlant,
                                        genus_id: e.target.value,
                                    });
                                    genuses?.map(
                                        (item) =>
                                            item.id == e.target.value &&
                                            setGenusAwtor(item)
                                    );
                                }}
                                className="tabInput"
                                type="text"
                            >
                                <option disabled value={0}>
                                    {" "}
                                    Выбрать род{" "}
                                </option>
                                {genuses?.map((item) => {
                                    return (
                                        <option
                                            key={"plantsso-1" + item.id}
                                            value={item.id}
                                        >
                                            {" "}
                                            {item.name_tm}{" "}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <input
                                value={genusAwtor?.genus_author}
                                style={{ cursor: "alias" }}
                                className="tabInput"
                                type="text"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Tab1);
