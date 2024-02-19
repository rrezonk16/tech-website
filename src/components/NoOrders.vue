<template>
  <div class="flex flex-col justify-center text-center items-center">
    <img src="../assets/noOrder.png" alt="no-order" class="w-1/6 md:w-1/3 sm:w-full" />
    <p class=" text-3xl font-bold">You have no orders :(</p>
    <p class=" text-xl italic mt-2">
      When you order something, it will show up here.
    </p>
    <p class=" text-xl italic"> It's easy to track your order, see what's new,
      and check out quickly.</p>

    <RouterLink to="/products" class="mt-5">Shop Now</RouterLink>
  </div>
</template>
