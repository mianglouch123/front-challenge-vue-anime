<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {RouterLink} from 'vue-router'
import instance from '../api/config'
import {getToken , getTimeZone} from '../api/auth.js'

const isAboveMediumScreens= ref(window.matchMedia('(min-width:1060px)').matches);
const selectedPerson = ref('Natural');

//login enveriorments person natural
const name = ref('')
const secondName = ref('')
const cel = ref('')
const numberIdentification = ('');
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
//


//login enveriorments person juridicial


const socialR = ref('');
const nit = ref('')
const cel_juridicial = ref('');
const email_juridicial=ref('');
const password_juridicial = ref('');
const password_repeat_juridicial = ref('')
//


const handleResize = () => {
   return isAboveMediumScreens.value = window.matchMedia('(min-width:1060px)').matches;

}

onMounted(async () => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Actualizar la variable reactiva al inicio

})


onUnmounted(() => {
  window.removeEventListener('resize', handleResize);

});

// onMounted(()=>{
//  getSessionUser() si no existe un inicio de sesion almacenado por el token,
//   el usuario es redirigido
// })

async function register(){
    try{
      const signature = await getToken();
      const response = instance.post('/register', {
        data:{
          telephone : "1234567895",
          NIT : "1234567895",
          razon_social : "randomusername5",
          type_user_id : 1, 
          verify_tc :"1",
         password : "strongkey1235", 
      password_confirmation :"strongkey1235",
     email : "randommail5@mail.com",
apiKey: "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
utcTimeStamp: await getTimeZone(),
signature: signature
        }
      })

      const data = response.user
      const token = response.token;
      localStorage.setItem('token-user', token)
      return {data , token}
    }catch(err){
      throw new err(err.name)
    }
 
   
  }




</script>


<template>
    <form @submit.prevent="register" v-if="!isAboveMediumScreens" style=" background:linear-gradient(180deg, #CA38ED -30.11%, #000000 100%)" class=" h-[1300px] w-full flex-col
    items-center justify-center 
    ">
    <div class="w-full items-center">
       
        <div class="flex justify-start px-5 pt-8 items-center text-[22px] gap-3 pt-2 font-roboto font-bold cursor-pointer">
            <img class="flexcursor-pointer hover:-translate-x-2 duration-150" src="../assets/iconBack.png" alt="back">

        </div>

        <div class="flex justify-center pt-8 mr-6 items-center gap-4 px-2 -translate-y-1">
          
          <div class="flex justify-center items-center flex gap-4 cursor-pointer -py-2">
              <img class="object-cover" src="../assets/logoCat.png" alt="Logo Form"  width="89px" height="87px">
              <img class="object-cover mb-5" src="../assets/textForm.png" alt="Text Form" width="240px" height="40px">
          </div>

      </div>

      <div class="flex justify-center items-center">
        <em class="text-[20px] text-white -translate-y-6 ">Bienvenido(a) !</em>

      </div>
        
    </div>

   <div class="flex items-center justify-center gap-4 text-1xl text-[#FFFFFF]">

    <p class="text-[20px]">Tipo persona</p>

    <label class="text-[20px]">
      <input type="radio" v-model="selectedPerson" value="Natural">
      Natural
    </label>

    <label class="text-[20px]">
      <input type="radio" v-model="selectedPerson" value="Juridica">
      Juridica
    </label>
   </div>

   <div v-if="selectedPerson === 'Natural'" class="text-[#FFFFFF] flex flex-col gap-4 items-center items-center py-2 text-[#FFFFFF] ">
         
    
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Nombre</label>
            <input v-model="name" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>
         
         <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Apellido</label>
            <input v-model="secondName" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>

        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Telefono</label>
            <input v-model="cel" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Numero de identificación</label>
            <input v-model="numberIdentification" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Email</label>
            <input v-model="email" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input v-model="password" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Confirmar Contraseña</label>
            <input v-model="passwordRepeat" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="constraseña">
      
        </div>
      
        <div class="flex flex-col justify-center mt-4">
        <RouterLink :to="{name: 'sigIn'}"> <input class="bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer font-bold text-[#3E1149]" @submit.prevent="" type="submit" value="Acceder"></RouterLink>
        </div>
       
       
        </div>
      
        <div v-else class="text-[#FFFFFF] flex flex-col gap-4 items-center items-center py-2 text-[#FFFFFF]">


          <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Razón social</label>
            <input v-model="socialR" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Nit</label>
            <input v-model="nit" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Teléfono</label>
            <input v-model="cel_juridicial" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Email</label>
            <input v-model="email_juridicial" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>


         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input v-model="password_juridicial" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            "  class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px] " for="Email">Confirmar contraseña</label>
            <input v-model="password_repeat_juridicial" style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="border-4  hover:translate-y-1 border-white rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="usuario@">
         </div>

         
        <div class="flex flex-col justify-center mt-4">
            <input style="" class=" bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer font-bold text-[#3E1149]" @submit.prevent="" type="submit" value="Acceder">
         </div>
       

        </div>

        <div class="flex gap-8 items-center justify-center pt-8 cursor-pointer">
   <div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
    <i class="fa-brands fa-instagram text-3xl text-white"></i>
   
   </div>
   <div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
    <i class="fa-brands fa-twitter text-3xl text-white"></i>
   </div>
   <div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
    <i class="fa-brands fa-facebook text-3xl text-white"></i>
   </div>
</div>

<div class="flex justify-center items-center gap-3 mt-8">
<RouterLink :to="{name: 'signIn'}">
<span class="text-[17px] text-white">Ya estás registrado?
  <span class="text-[17px] text-[#E487FB] cursor-pointer">Acceder</span>
</span> </RouterLink>
</div>


      </form>
    
    
    <form v-else class="flex h-screen -mt-2
    pt-4 flex justify-center items-center relative">
    
    <div class="h-[2000px] w-[50vw] bg-[#1E1E1E] flex flex-col items-center pt-[300px] px-4">

<div class="h-full pt-[385px] w-full flex-col">

   <div class="flex items-center text-[22px] gap-3 pt-2 font-roboto font-bold cursor-pointer">
   <img src="../assets/logo.png" alt="logo">
   <span class="text-[#FFFFFF] duration-150">Anime <span class="duration-150 text-[#CA38ED]">Yabu</span></span>
   </div>

   <div class="pt-4 px-2">
       <img class="cursor-pointer hover:-translate-x-2 duration-150" src="../assets/iconBack.png" alt="back">
   </div>

   <div class="flex flex-col justify-center items-center gap-4 px-2 -translate-y-1">
     
       <div class="flex justify-center items-center gap-4 cursor-pointer -py-2">
           <img class="object-cover" src="../assets/logoCat.png" alt="Logo Form"  width="122px" height="125px">
           <img class="object-cover" src="../assets/textForm.png" alt="Text Form" width="175px" height="40px">
       </div>

       <div class="-translate-y-14 translate-x-14">
        <em class="text-1xl text-white ">Bienvenidos(a) !</em>

       </div>

   </div>

   
   <div class="flex items-center justify-center gap-4 text-1xl text-[#FFFFFF]">

<p class="text-[20px]">Tipo persona</p>

<label class="text-[20px]">
  <input type="radio" v-model="selectedPerson" value="Natural">
  Natural
</label>

<label class="text-[20px]">
  <input type="radio" v-model="selectedPerson" value="Juridica">
  Juridica
</label>
</div>

<div v-if="selectedPerson === 'Natural'" class="text-[#FFFFFF] flex flex-col gap-4 items-center items-center py-2 text-[#FFFFFF] ">
         
    
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Nombre</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>
         
         <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Apellido</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>

        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Telefono</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Numero de identificación</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Email</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="constraseña">
      
        </div>
        <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Confirmar Contraseña</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="constraseña">
      
        </div>
      
        <div class="flex flex-col justify-center mt-4">
            <input class="bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer font-bold text-[#3E1149]" @submit.prevent="" type="submit" value="Acceder">
         </div>
       
       
        </div>
      
        <div v-else class="text-[#FFFFFF] flex flex-col gap-4 items-center items-center py-2 text-[#FFFFFF]">


          <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Razón social</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Nit</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Teléfono</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Email</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>


         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            "  class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="usuario@">
         </div>

         
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px] " for="Email">Confirmar contraseña</label>
            <input style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="border-4  hover:translate-y-1 border-white rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="usuario@">
         </div>

         
        <div class="flex flex-col justify-center mt-4">
            <input style="" class=" bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer font-bold text-[#3E1149]" @submit.prevent="" type="submit" value="Acceder">
         </div>
       

        </div>

   <div class="flex gap-8 items-center justify-center pt-8 cursor-pointer">
<div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
<i class="fa-brands fa-instagram text-3xl text-white"></i>

</div>
<div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
<i class="fa-brands fa-twitter text-3xl text-white"></i>
</div>
<div style="background: rgba(255, 255, 255, 0.47);" class="flex items-center justify-center h-[60px] w-[90px] rounded-[5px] bg-gray-200">
<i class="fa-brands fa-facebook text-3xl text-white"></i>
</div>


</div>


   
<div class="flex justify-center items-center mt-8">
  <RouterLink :to="{name: 'signIn'}">
<span class="text-[17px] text-white">Ya estás registrado?
  <span class="text-[17px] text-[#E487FB] cursor-pointer">Acceder</span>
</span> </RouterLink>

</div>

  

</div>


</div>
<div class="h-[2000px] w-[50vw] bg-[#3E1149] flex flex-col justify-center items-center px-4">

<div class="flex items-center h-full w-full pt-[395px] flex-col">
 
  <div class="flex relative justify-center translate-x-[35px] mt-[325px] items-center w-[548px] h-[548px] bg-[#E487FB] rounded-[50%]"></div>
  <img src="../assets/HeroSlider 1.png" width="622px" height="625px" class=" absolute translate-y-[380px] ml-12 " alt="">

</div> 

<div class="flex flex-col justify-center items-center gap-4">
 
 <div class="flex justify-center items-center gap-1 mb-[395px] font-bold">
  <span class=" text-[85px] text-[#FFFFFF]" >anime</span>
  <span class="text-[85px] text-[#CA38ED]">Yabu</span>
 </div>

 <div class="flex justiy-center items-center flex-col text-[#FFFFFF] text-[18px] -translate-y-[407px]">
   <p>Ver Anime en HD, subitulado o doblado.</p>
   <p>en tu celular o computadora</p>
   <p>Anime Yabu , tu portal de anime en linea !</p>
 </div>


 

</div>




</div>
    
</form>
</template>