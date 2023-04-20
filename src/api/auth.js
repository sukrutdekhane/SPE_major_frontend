import axios from "axios";

export const createUser=async (phoneNumber)=>{
    try{
      console.log(phoneNumber)

   const {data}= await axios.post(`http://e417-119-161-98-68.ngrok-free.app/api/auth/send-otp?phoneNumber=${phoneNumber}`);
   return data;
    } catch(error){
      const{response}=error;
      if(response?.data) return response.data;

      return {error: error.message || error}
    }

}

export const verifyUser=async (userInfo,OTP)=>{
  try{
  console.log(userInfo);
  console.log(OTP);
 const {data}= await axios.post(`http://e417-119-161-98-68.ngrok-free.app/api/auth/validate-otp-register?OTP=${OTP}`,userInfo);
 return data;
  } catch(error){
    const{response}=error;
    if(response?.data) return response.data;

    return {error: error.message || error}
  }
}



