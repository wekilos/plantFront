import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    axiosInstance,
    axiosInstanceFile,
    BASE_URL,
} from "../../utils/axiosinstance";
import ".//Tab3.css";
import mapImg from "./Tab-images/map.png";
const Tab4 = (props) => {
    console.log("props map", props.data);

    const { id } = useParams();
    const [file, setFile] = useState();
    const createMap = () => {
        const formData = new FormData();
        console.log(file);
        formData.append("file", file);
        axiosInstanceFile
            .post("/api/create-map/" + id, formData)
            .then((res) => {
                console.log(res.data);
                setFile();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    display: "inline-flex",
                    justifyContent: "space-between",
                    fontSize: "15px",
                }}
            >
                <div style={{ width: "100%" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "inline-flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "85%" }}>
                            {" "}
                            <img
                                style={{ objectFit: "contain", width: "100%" }}
                                src={BASE_URL + props.data}
                                alt=""
                            />
                        </div>
                        <div style={{ width: "10%" }}>
                            <input
                                onChange={(e) => setFile(e.target.files[0])}
                                type="file"
                                style={{ width: "62%" }}
                            />
                            <br />
                            <button
                                onClick={() => createMap()}
                                style={{ width: "62%", marginTop: "20px" }}
                            >
                                craete
                            </button>
                            {/* <button style={{width:"62%", marginBottom:"20px",marginTop:"20px"}}>Удалить</button><br /> */}
                        </div>
                        {/* <div style={{width:"10%",display:"block"}}> <button></button></div> */}
                        {/* <div style={{width:"10%"}}> <button>Редактирование</button></div> */}
                    </div>

                    {/* <div style={{width:"100%",display:"inline-flex",justifyContent:"space-between"}}>
                        <div style={{width:"65%"}}>Подвид:</div>
                        <div style={{width:"25%"}}><input className="tab3Input" type="text" /></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default Tab4;
