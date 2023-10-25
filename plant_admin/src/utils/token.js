export const token = () => {
    if (JSON.parse(localStorage.getItem("UserData"))) {
      var data = JSON.parse(localStorage.getItem("UserData"));
      return data.token;
    }
  };

  export const login = () => {
    if (JSON.parse(localStorage.getItem("UserData"))) {
      var data = JSON.parse(localStorage.getItem("UserData"));
      if(data.token){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  };
  export const logout = () => {
    if (JSON.parse(localStorage.getItem("UserData"))) {
      localStorage.removeItem("UserData")
      
    }
  };