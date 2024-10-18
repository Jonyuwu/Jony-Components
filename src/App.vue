<template>
  <div class="grid grid-rows-[15%_85%] gap-2 bg-slate-100">
    <div class="bg-slate-500 flex items-center justify-center">Navbar</div>
    <div class="grid grid-cols-[18%_82%] gap-2">
      <div class="bg-slate-500 min-h-screen flex items-center justify-center">Slidebar</div>
      <div><router-view /></div>
    </div>
  </div>
</template>
