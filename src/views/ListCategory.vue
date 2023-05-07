

<template>
  <div class="flex h-screen -mt-2
    pt-4 flex justify-center items-center relative

   ">
    <div class="h-screen w-[20vw] bg-[#3E1149] flex flex-col  pt-2 px-4">
  
      <div class="flex justify-start  items-center gap-3 py-3 text-[20px] text-[#FFFFFF] font-bold">
     <img src="../assets/logo.png" alt="">
     <span class="flex">Anime <span class="text-[#CA38ED]">Yabu</span></span>
      </div>

      <div class="flex flex-col justify-center ml-10 items-start gap-3 py-14">
   
   <div class="flex justify-start text-[20px] text-[#FFFFFF]">
    <h1 class="font-bold">Categorías</h1>
   </div>

   <ol class="flex gap-2 flex-col text-[18px] text-[#FFFFFF] list-sty">
    <li>Ver todos</li>
    <li>Crear</li>
   </ol>
 
    </div>

    <div class="flex text-[20px] flex-center items-center justify-center font-bold text-[#FFFFFF]">
   <RouterLink :to="{name: 'signUp'}">
   <p>Cerrar sesión</p>
  </RouterLink>
    </div>

    </div>



    <div class="h-screen w-[80vw] bg-[#1E1E1E] flex flex-col  pt-2 px-4">
      <div class="flex flex-col items-start justify-start gap-2  pt-12">

       <div class="flex justify-start items-center px-16 text-[#FFFFFF] text-[25px] ">
        
        <div class="flex">
           <h1 class="font-bold" >Lista de categorías</h1> 
        </div>

      
       </div>

       <div class=" flex pt-16 px-16 text-[#FFFFFF]">

       

        <div class="grid grid-cols-3 gap-4 justify-center items-center font-bold pt-4 text-[#ffffff] ">
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">ACCIÓN
           <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">AVENTURA
            <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">COMEDIA

            <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
         
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">TERROR

            <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">ROMANCE
            <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
           <button class="relative bg-[#3E1149] h-[124px] w-[278px] rounded-[5px] border-none text-[#ffffff] ">MISTERIO
            <p class="absolute right-0 py-5 mr-5 font-normal cursor-pointer">Editar</p>

           </button>
        </div>
        </div>




    

      </div>
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
// onMounted(()=>{
//  getSessionUser() si no existe un inicio de sesion almacenado por el token,
//   el usuario es redirigido
// })
</script>
