<script >
</script>

<template>
<hr class="border border-blue-300 mt-5" />
<div class="mt-2">
  <p class="text-3xl">Costumer Reviews</p>

  <div class="md:w-1/2 w-full gap-4 flex flex-row">
    <div class="w-1/4">
      <p class="text-5xl mt-5">4.5</p>
      <img src="../assets/stars.png" alt="" class="rounded-2xl" />
    </div>
    <div class="w-3/4">
      <div class="flex flex-row">
        <p class="mr-4">5</p>
        <div class="mt-1 w-40 h-3 bg-blue-200 rounded-full overflow-hidden relative">
          <div class="h-full bg-blue-500" :style="{ width: 45 + '%' }"></div>
        </div>
        <p class="ml-5">45%</p>
      </div>

      <div class="flex flex-row">
        <p class="mr-4">4</p>
        <div class="mt-1 w-40 h-3 bg-blue-200 rounded-full overflow-hidden relative">
          <div class="h-full bg-blue-500" :style="{ width: 27 + '%' }"></div>
        </div>
        <p class="ml-5">27%</p>
      </div>

      <div class="flex flex-row">
        <p class="mr-4">3</p>
        <div class="mt-1 w-40 h-3 bg-blue-200 rounded-full overflow-hidden relative">
          <div class="h-full bg-blue-500" :style="{ width: 15 + '%' }"></div>
        </div>
        <p class="ml-5">15%</p>
      </div>

      <div class="flex flex-row">
        <p class="mr-4">2</p>
        <div class="mt-1 w-40 h-3 bg-blue-200 rounded-full overflow-hidden relative">
          <div class="h-full bg-blue-500" :style="{ width: 8 + '%' }"></div>
        </div>
        <p class="ml-5">8%</p>
      </div>

      <div class="flex flex-row">
        <p class="mr-4">1</p>
        <div class="mt-1 w-40 h-3 bg-blue-200 rounded-full overflow-hidden relative">
          <div class="h-full bg-blue-500" :style="{ width: 5 + '%' }"></div>
        </div>
        <p class="ml-5">5%</p>
      </div>
    </div>
  </div>
</div>
</template>