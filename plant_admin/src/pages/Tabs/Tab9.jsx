import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Tab9.css";
import { Button, Drawer, message } from "antd";
import {
    BASE_URL,
    axiosInstance,
    axiosInstanceFile,
} from "../../utils/axiosinstance";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Tab9 = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [herbaries, setHerbaries] = useState([]);
    const [file, setFile] = useState();
    const [addHerbarium, setAddHerbarium] = useState({
        date_of_selection: "",
        region: "",
        area: "",
        place_of_selection: "",
        geo_latitude: "",
        geo_longitude: "",
        sea_level: "",
        plant_id: id,
    });
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (key) => {
        console.log(key);
    };
    useEffect(() => {
        getHerbaries();
    }, []);
    const getHerbaries = () => {
        axiosInstance
            .get("/api/get-herbarium/" + id)
            .then((res) => {
                Array.isArray(res.data)
                    ? setHerbaries(res.data)
                    : setHerbaries([]);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const createHerbarium = () => {
        axiosInstance
            .post("/api/create-herbarium", addHerbarium)
            .then((res) => {
                console.log(res.data);
                // getDepartment();
                getHerbaries();
                message.success(res.data.msg);
                setAddHerbarium({
                    date_of_selection: "",
                    region: "",
                    area: "",
                    place_of_selection: "",
                    geo_latitude: "",
                    geo_longitude: "",
                    sea_level: "",
                    plant_id: id,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createImg = (id) => {
        const formData = new FormData();
        formData.append("file", file);
        axiosInstanceFile
            .put("/api/update-herbarium-image/" + id, formData)
            .then((res) => {
                console.log(res.data);
                message.success(res.data.msg);
                getHerbaries();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const DeleteHerbarium = (id) => {
        axiosInstance
            .delete("/api/delete-herbarium/" + id)
            .then((res) => {
                console.log(res.data);
                getHerbaries();
                message.success(res.data.msg);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div>
                <Button
                    style={{
                        marginBottom: "5px",
                        width: "10%",
                        height: "35px",
                        padding: "3px",
                        background: "white",
                        border: "1px solid lightgrey",
                        color: "black",
                        borderRadius: "5px",
                    }}
                    type="primary"
                    onClick={showDrawer}
                >
                    Создать
                </Button>
                <Drawer
                    title="Добавить информацию"
                    placement="right"
                    width={500}
                    onClose={onClose}
                    open={open}
                >
                    <div style={{ width: "100%", display: "block" }}>
                        {/* <p style={{textAlign:"center"}}>Образец-1</p> */}
                        <p style={{ textAlign: "center" }}>Дата отбора:</p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    date_of_selection: e.target.value,
                                })
                            }
                            value={addHerbarium.date_of_selection}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            type="text"
                        />
                        <p style={{ textAlign: "center" }}>Область:</p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    region: e.target.value,
                                })
                            }
                            value={addHerbarium.region}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            name=""
                            id=""
                        />
                        <p style={{ textAlign: "center" }}>Район:</p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    area: e.target.value,
                                })
                            }
                            value={addHerbarium.area}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            name=""
                            id=""
                        />
                        <p style={{ textAlign: "center" }}>Место отбора</p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    place_of_selection: e.target.value,
                                })
                            }
                            value={addHerbarium.place_of_selection}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            type="text"
                        />
                        <p style={{ textAlign: "center" }}>
                            Географическая широта: сш
                        </p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    geo_latitude: e.target.value,
                                })
                            }
                            value={addHerbarium.geo_latitude}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            type="text"
                        />
                        <p style={{ textAlign: "center" }}>
                            Географическая долгота: вд
                        </p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    geo_longitude: e.target.value,
                                })
                            }
                            value={addHerbarium.geo_longitude}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            type="text"
                        />
                        <p style={{ textAlign: "center" }}>
                            Высота над уровнем моря: м
                        </p>
                        <input
                            onChange={(e) =>
                                setAddHerbarium({
                                    ...addHerbarium,
                                    sea_level: e.target.value,
                                })
                            }
                            value={addHerbarium.sea_level}
                            style={{
                                width: "100%",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                height: "5vh",
                                outline: "none",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            type="text"
                        />
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "30px",
                            borderRadius: "5px",
                            display: "inline-flex",
                        }}
                    >
                        <button
                            onClick={createHerbarium}
                            style={{
                                width: "20%",
                                height: "30px",
                                border: "1px solid lightgrey",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "15px",
                                fontWeight: "500",
                                marginLeft: "80%",
                            }}
                        >
                            Создать
                        </button>
                    </div>
                </Drawer>
            </div>
            <div
                style={{
                    width: "100%",
                    justifyContent: "space-between",
                    display: "inline-flex",
                    flexWrap: "wrap",
                }}
            >
                {herbaries?.map((item, i) => {
                    return (
                        <>
                            {" "}
                            <div className="cardHerbarium">
                                <img
                                    style={{
                                        objectFit: "contain",
                                        width: "100%",
                                    }}
                                    src={BASE_URL + item?.img_name}
                                    alt="Gerbari"
                                />
                                <div
                                    style={{
                                        width: "100%",
                                        marginBottom: "30px",
                                    }}
                                >
                                    <input
                                        name="file"
                                        id="file"
                                        onChange={(e) =>
                                            setFile(e.target.files[0])
                                        }
                                        style={{
                                            width: "85x",
                                            marginTop: "25px",
                                            padding: "0 5px",
                                            cursor: "pointer",
                                            height: "30px",
                                            display: "none",
                                        }}
                                        type="file"
                                    />
                                    <label htmlFor="file">
                                        <span
                                            style={{
                                                width: "90px",
                                                marginTop: "25px",
                                                padding: "2px",
                                                cursor: "pointer",
                                                height: "29px",
                                                background: "#efefef",
                                                border: "1px solid black",
                                                padding: "5px",
                                                marginRight: "10px",
                                                borderRadius: "2px",
                                            }}
                                        >
                                            Click me
                                        </span>
                                    </label>
                                    <button
                                        onClick={() => createImg(item.id)}
                                        style={{
                                            width: "90px",
                                            marginTop: "25px",
                                            padding: "2px",
                                            cursor: "pointer",
                                            height: "29px",
                                        }}
                                    >
                                        Создать
                                    </button>
                                    <button
                                        onClick={() => DeleteHerbarium(item.id)}
                                        style={{
                                            width: "90px",
                                            marginTop: "25px",
                                            padding: "2px",
                                            cursor: "pointer",
                                            height: "29px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Удалить
                                    </button>
                                </div>
                                <p style={{ textAlign: "center" }}>
                                    Образец {i + 1}
                                </p>

                                <Collapse
                                    style={{ borderRadius: "4px" }}
                                    defaultActiveKey={[""]}
                                    onChange={onChange}
                                >
                                    <Panel header="Дата отбора" key="1">
                                        <input
                                            className="herbariumInput"
                                            value={item?.date_of_selection}
                                            type="text"
                                        />
                                    </Panel>
                                    <Panel header="Область" key="2">
                                        <input
                                            className="herbariumInput"
                                            value={item?.region}
                                            name=""
                                            id=""
                                        />
                                    </Panel>
                                    <Panel header="Район" key="3">
                                        <input
                                            className="herbariumInput"
                                            value={item?.area}
                                            name=""
                                            id=""
                                        />
                                    </Panel>
                                    <Panel header="Место отбора" key="4">
                                        <input
                                            className="herbariumInput"
                                            value={item?.place_of_selection}
                                            type="text"
                                        />
                                    </Panel>
                                    <Panel
                                        header="Географическая широта: сш"
                                        key="5"
                                    >
                                        <input
                                            className="herbariumInput"
                                            value={item?.geo_latitude}
                                            type="text"
                                        />
                                    </Panel>
                                    <Panel
                                        header="Географическая долгота: вд: сш"
                                        key="6"
                                    >
                                        <input
                                            className="herbariumInput"
                                            value={item?.geo_longitude}
                                            type="text"
                                        />
                                    </Panel>
                                    <Panel
                                        header="Высота над уровнем моря: м"
                                        key="7"
                                    >
                                        <input
                                            className="herbariumInput"
                                            value={item?.sea_level}
                                            type="text"
                                        />
                                    </Panel>
                                </Collapse>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};
export default Tab9;
