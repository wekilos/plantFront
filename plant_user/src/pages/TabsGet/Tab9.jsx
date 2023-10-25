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
            <div></div>
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
