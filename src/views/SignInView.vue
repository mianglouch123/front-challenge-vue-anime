<script setup>
import {ref , onMounted , onUnmounted } from 'vue'
import { RouterLink} from 'vue-router';

// onMounted(()=>{
//  getSessionUser() si no existe un inicio de sesion almacenado por el token,
//   el usuario es redirigido
// })




const isAboveMediumScreens= ref(window.matchMedia('(min-width:1060px)').matches);

const handleResize = () => {
   return isAboveMediumScreens.value = window.matchMedia('(min-width:1060px)').matches;

}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Actualizar la variable reactiva al inicio
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


</script>
<template>
   <form @submit.prevent="login" v-if="isAboveMediumScreens"
   class="flex h-screen -mt-2
    pt-4 flex justify-center items-center relative

   "
   >

   <div class="h-[1500px] w-[50vw] bg-[#1E1E1E] flex flex-col items-center pt-2 px-4">

     <div class="h-full pt-[415px] w-full flex-col">
   
        <div class="flex items-center text-[22px] gap-3 pt-2 font-roboto font-bold cursor-pointer">
        <img src="../assets/logo.png" alt="logo">
        <span class="text-[#FFFFFF] duration-150">Anime <span class="duration-150 text-[#CA38ED]">Yabu</span></span>
        </div>

        <div class="pt-4 px-2">
            <img class="cursor-pointer hover:-translate-x-2 duration-150" src="../assets/iconBack.png" alt="back">
        </div>

        <div class="flex justify-center items-center gap-4 px-2 -translate-y-1">
          
            <div class="flex justify-center items-center flex-col gap-4 cursor-pointer -py-2">
                <img class="object-cover" src="../assets/logoForm.png" alt="Logo Form"  width="277px" height="135px">
                <img class="object-cover" src="../assets/textForm.png" alt="Text Form" width="258px" height="40px">
                 <em class="text-1xl text-white ">Hola, te extrañamos !</em>
            </div>

        </div>

        <div class="flex flex-col gap-4 items-center items-center py-10 text-[#FFFFFF] ">
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email" >Email</label>
            <input  style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[343px]" type="text" placeholder="usuario@">
         </div>
         <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input  style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[343px]" type="password" placeholder="constraseña">
         <RouterLink to="/signUp">
            <p  class="flex justify-end py-2 text-[#E487FB]">¿Has olvidado la constraseña?</p>
         </RouterLink>
        </div>
         <div class="flex flex-col justify-center">
            <input class="bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer  text-black" @submit.prevent="" type="submit" value="Acceder">
         </div>
        </div>

        <div class="flex justify-center items-center flex-col">

            <div class="flex items-center gap-3 justify-center text-[#D8D5D9]">
                <img src="../assets/Line 13.png" alt="Line">
                <p>Registrate también con</p>
                <img src="../assets/Line 13.png" alt="Line">


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

<div class="flex justify-center items-center gap-2 mt-8">
   <RouterLink :to="{name: 'signUp'}">
<span class="text-[17px] text-white">Quieres registrarte?
  <span class="text-[17px] text-[#E487FB] cursor-pointer">Registrate</span>
</span> </RouterLink>
</div>

        

        
        

     </div>


   </div>
   <div class="h-[1500px] w-[50vw] bg-[#3E1149] flex flex-col justify-center items-center px-4">
   
    <div class="flex items-center h-full w-full pt-[395px] flex-col">
   
   <div class="flex relative justify-center ml-[50px] mt-[45px] items-center w-[548px] h-[548px] bg-[#E487FB] rounded-[50%]"></div>
    <img src="../assets/HeroSlider 1.png" width="622px" height="625px" class="absolute ml-12 translate-y-20" alt="">
  </div> 

  <div class="flex flex-col justify-center items-center gap-4">
      
      <div class="flex justify-center items-center gap-1 mb-[190px] font-bold">
       <span class=" text-[85px] text-[#FFFFFF]" >anime</span>
       <span class="text-[85px] text-[#CA38ED]">Yabu</span>
      </div>

      <div class="flex justiy-center items-center flex-col text-[#FFFFFF] text-[18px] -translate-y-[207px]">
        <p>Ver Anime en HD, subitulado o doblado.</p>
        <p>en tu celular o computadora</p>
        <p>Anime Yabu , tu portal de anime en linea !</p>
      </div>
  
   
      
   
     </div>

     


    </div>




   </form>




   <form @submit.prevent="login" v-else style=" background:linear-gradient(180deg, #CA38ED -30.11%, #000000 100%)" class="h-[900px] w-full justify-center items-center">
    <div class=" w-full  flex-col items-center">
      
    
        <div class="flex justify-start px-5 pt-8 items-center text-[22px] gap-3 pt-2 font-roboto font-bold cursor-pointer">
            <img class="flexcursor-pointer hover:-translate-x-2 duration-150" src="../assets/iconBack.png" alt="back">

        </div>
        
        
        <div class="flex justify-center items-center gap-4 px-2 -translate-y-1">
          
            <div class="flex justify-center items-center flex-col gap-4 cursor-pointer -py-2">
                <img class="object-cover" src="../assets/logoForm.png" alt="Logo Form"  width="277px" height="135px">
                <img class="object-cover" src="../assets/textForm.png" alt="Text Form" width="258px" height="40px">
                 <em class="text-1xl text-white ">Hola, te extrañamos !</em>
            </div>

        </div>


        <div class="flex flex-col gap-4 items-center items-center py-2 text-[#FFFFFF] ">
         <div class="flex flex-col justify-center  ">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Email</label>
            <input  style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="text" placeholder="usuario@">
         </div>
         <div class="flex flex-col justify-center">
            <label class="text-[14px] font-[400] -py-2 text-[18px]" for="Email">Contraseña</label>
            <input  style="background: rgba(255, 255, 255, 0.47);
            border: 3px solid #FFFFFF;
            
            " class="hover:translate-y-1 rounded-[5px] font-semi-bold text-[#D8D5D9] duration-150 pl-2 outline-none border-none h-[60px] w-[373px]" type="password" placeholder="constraseña">
         <RouterLink to="/sigUp">
            <p  class="flex justify-end py-2 text-[#E487FB]">¿Has olvidado la constraseña?</p>
         </RouterLink>
        </div>
         <div class="flex flex-col justify-center">
            <input class="bg-[#E487FB] hover:bg-[#d984ee] rounded-[10px] h-[60px] w-[338px] cursor-pointer  text-black" @submit.prevent="" type="submit" value="Acceder">
         </div>
        </div>

        <div class="flex justify-center items-center flex-col">

<div class="flex items-center gap-3 pt-8 justify-center text-[#D8D5D9]">
    <img src="../assets/Line 13.png" alt="Line">
    <p>Logueate con RRS</p>
    <img src="../assets/Line 13.png" alt="Line">


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
   <RouterLink :to="{name: 'signUp'}">
<span class="text-[17px] text-white">Quieres registrarte?
  <span class="text-[17px] text-[#E487FB] cursor-pointer">Registrate</span>
</span> </RouterLink>
</div>


    

    </div> 
   </form>
</template>