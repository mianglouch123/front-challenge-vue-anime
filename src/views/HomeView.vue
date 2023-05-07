<script setup>
import {RouterLink} from 'vue-router'
// onMounted(()=>{
//  getSessionUser() si no existe un inicio de sesion almacenado por el token,
//   el usuario es redirigido
// })
</script>

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
          <h1 class="flex gap-2 ">Hola, <h1 class="font-bold" >Pedro Perez</h1> </h1>
        </div>

      
       </div>

       <div class="flex flex-col gap-3 pt-16 px-16 text-[#FFFFFF]">

          <h1>Selecciona una opción</h1>

        <div class="flex flex-col gap-4 justify-center items-center font-bold pt-4">
           <button class="bg-[#E487FB] h-[60px] w-[278px] rounded-[10px] border-none text-[#3E1149] ">Ver todas las categorias</button>
           <button class="bg-[#E487FB] h-[60px] w-[278px] rounded-[10px] border-none text-[#3E1149] ">Crear categoria</button>
           <button class="bg-[#E487FB] h-[60px] w-[278px] rounded-[10px] border-none text-[#3E1149] ">Cerrar sesión</button>
         
        </div>
        </div>




    

      </div>
    </div>
  </div>
</template>
