import React, { useEffect,useState } from "react";
import "./user.css";
import { message, Switch,Popconfirm} from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import { axiosInstance } from "../../utils/axiosinstance";
import { Button, Drawer } from 'antd';
import {useNavigate,useLocation} from "react-router-dom"
import "antd/dist/antd.css"; 

const AddUser = ()=>{
    const navigate = useNavigate();
    const history = useLocation();
    const pathN = history.pathname ; 
    const [open, setOpen] = useState(false);
    const [users,setUsers] = useState([])
    const [addUser, setAddUser] = useState("");
    const [addPassword, setAddPassword]=useState(""); 
    const [edit,setEdit]= useState(false)
    const [userData,setUserData]= useState({})
    useEffect(()=>{
        getUsers()
       },[]);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

  
    const getUsers = ()=>{
        axiosInstance.get("/api/get-users").then((res)=>{
            console.log(res.data);
            Array.isArray(res.data)?setUsers(res.data):setUsers([])
        }).catch((err)=>{
            console.log(err)
        })
    };

    const createUser =()=>{
        axiosInstance.post("/api/create-user",{
            username:addUser,
            password:addPassword,
            is_active:true
        }).then((res)=>{
            console.log(res.data);
            if(res.data.msg==="Создано!"){
            setAddUser("");
            setAddPassword("");
            getUsers();
            onClose()
            message.success(res.data.msg)
            }else if(res.data.msg=='Этот пользователь уже существует!'){
                message.warn("Этот пользователь уже существует!")
            }else{
                message.warn("You must enter valit username and password!")
            }

        }).catch((err)=>{
            console.log(err);
        })
    }
    const changeActive = (data)=>{
        axiosInstance.put("/api/update-user-is-active/"+data.id,{
            is_active:!data.is_active
        }).then(data=>{
            message.success(data.data.status)
            console.log(data.data);
            getUsers()
        }).catch((err)=>console.log(err))
    }
    const editUser = ()=>{
        axiosInstance.put("/api/update-user/"+userData.id,{
            username:userData.username,
            password:userData.password
        }).then((data)=>{
            console.log(data.data)
            if(data.data.msg=="Обновлено!"){
            setEdit(false)
            getUsers()
            message.success(data.data.msg)
            }else{ 
            message.warning(data.data.msg)
            }
        }).catch((err)=>console.log(err))
    }

    const delateUser = (id)=>{
        console.log(id)
        axiosInstance.put("/api/delete-user/"+id,{
            is_deleted:true
        }).then((data)=>{
            console.log(data.data);
            message.success(data.data.status);
            getUsers()
        }).catch((err)=>console.log(err))
    }
    return(
        <div style={{width:"100%",background:" #F7F7FA",minHeight:"120vh",padding:"13vh"}}>
            <div style={{width:"100%", margin:"0 auto",background:"white"}}>
                <div style={{ width:"100%", position:"relative"}}>
                    <Button style={{position:"absolute",left:"0",width:"100px"}} className={pathN=="/users"?"activeBtn createBtn": "createBtn"} onClick={()=>navigate("/users")}>User</Button>
                    <Button style={{position:"absolute",left:"105px",width:"100px"}} className={pathN=="/admins"?"activeBtn createBtn": "createBtn"} onClick={()=>navigate("/admins")}>Admin</Button>
                </div>
                <div style={{justifyContent:"right", width:"100%", position:"relative"}}>
                    <Button className="createBtn" onClick={showDrawer}>Создать</Button>
                </div>
                <div>
                    <Drawer title="Добавить пользователя" placement="right"  width={500} onClose={onClose} open={open}>
                        <div>
                            <label htmlFor=""className="drawerLabel"> Имя пользователя</label>
                            <input onChange={(e)=>setAddUser(e.target.value)} value={addUser} type="text" className="drawerInput" /> <br />
                            <label htmlFor="" className="drawerLabel">Пароль</label>
                            <input onChange={(e)=>setAddPassword(e.target.value)} value={addPassword} type="text" className="drawerInput" /> <br /> 
                            <button onClick={createUser} className="drawerBtn">Сохранить</button>
                        </div>
                    </Drawer>
                    <Drawer title="Редактировать пользователя" placement="right"  width={500} onClose={()=>setEdit(false)} open={edit}>
                        <div>
                            <label htmlFor=""className="drawerLabel"> Имя пользователя</label>
                            <input onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} type="text" className="drawerInput" /> <br />
                            <label htmlFor="" className="drawerLabel">Пароль</label>
                            <input onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} type="text" className="drawerInput" /> <br /> 
                            <button onClick={editUser} className="drawerBtn">Обновить</button>
                            <button onClick={()=>setEdit(false)} className="drawerBtn">Отменить</button>
                        </div>
                    </Drawer>
                </div>
             
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Имя пользователя</th>
                        <th>Пароль</th>
                        <th>Тип пользователя</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                    {
                        users?.map((user)=>{
                            return <tr key={"user"+user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.create_at.slice(0,10)}</td>
                                        <td><Switch onClick={()=>changeActive({id:user.id,is_active:user.is_active})} defaultChecked={user?.is_active}/></td>
                                        <td style={{fontSize:"20px", textAlign:"center"}}><EditOutlined onClick={()=>{setEdit(true);setUserData(user)}} />
                                         <Popconfirm
                                            title="Delete the task"
                                            description="Are you sure to delete this task?"
                                            onConfirm={()=>delateUser(user.id)}
                                            // onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                            ><DeleteOutlined style={{marginLeft:"25px"}}/> </Popconfirm></td>
                                    </tr>
                        })
                    }
                    
                </table>
            </div>
        </div>
    )
}
export default React.memo(AddUser);