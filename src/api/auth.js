import axios from "axios";

export const createUser=async (phoneNumber)=>{
    try{
      console.log(phoneNumber)

   const {data}= await axios.post('http://localhost:8081/api/auth/send-otp?phoneNumber=${phoneNumber}');
   return data;
    } catch(error){
      const{response}=error;
      if(response?.data) return response.data;

      return {error: error.message || error}
    }

}

// export const verifyUser=async (userInfo)=>{
//   try{
//  const {data}= await axios.post('http://localhost:8081/api/auth/send-otp',userInfo);
//  return data;
//   } catch(error){
//     const{response}=error;
//     if(response?.data) return response.data;

//     return {error: error.message || error}
//   }
// }



