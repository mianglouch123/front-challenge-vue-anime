import instance  from './config.js'
import {SHA256} from 'crypto-js'
import state from '../store/state.js'


const PUBLIC_KEY = typeof process !== 'undefined' ? process.env.VUE_APP_PUBLIC_KEY  :  'VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g';
const PRIVATE_KEY =  typeof process !== 'undefined' ? process.env.VUE_APP_PRIVATE_KEY  :  'DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6'; 


function getSessionUser(){
  let redirect = false;
if(localStorage.getItem('token-user') && state.token !== null || state.token !== undefined){
 redirect = true;

 redirect === true ? window.location.href = '/' : window.location.href ='/signIn?error=nousercreated'

}
}


async function initSession(){
  try{
    const response = await instance.get('/login', {
      
      email: "randommail2@mail.com",
      password: "strongkey1232",
      apiKey:"VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
      utcTimeStamp: "2022-01-20T09:39:38Z",
      signature: "756403b52606111ee553e75e927bc0d92cc376d2aa63d469ee6d851e2cc04e9a"

    })

    const token = response.token;
    return token ;
  }catch(e){
    throw new Error(e.name)
  }
}



async function getTimeZone(){
  try {
    const response = await instance.get('/timezone' , {
      headers:{
        'Accept': 'application/json'
      }
      
    });
   const data = response.data
   const token = data.timezone
   return token;
}catch(e){
throw new Error(e.name)
}
}




  async function getToken() {
    try {
      const response = await instance.get('/timezone' , {
        headers:{
          'Accept': 'application/json'
        }
      });
     const data = response.data
     const token = data.timezone
      
     const signature = `${PRIVATE_KEY},${PUBLIC_KEY},${token}`; 
     const signatureHash = SHA256(signature).toString()
     return signatureHash;
    } catch (error) {
      throw new Error(error.name);
    }
  }
    
  export {
    getToken,
    getTimeZone,
    getSessionUser,
    initSession
  }
