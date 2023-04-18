import axios from "axios";

export const createUser=async (userInfo)=>{
    try{
   const {data}= await axios.post('http://localhost:8081/api/auth/send-otp',userInfo);
   return data;
    } catch(error){
      const{response}=error;
      if(response?.data) return response.data;

      return {error: error.message || error}
    }
}