<template>
    <div class="w-full h-full flex justify-center items-center">
        <p class="text-4xl font-bold">Login Success this is protected route !!</p>
    </div>
</template>

<script setup lang="ts" >

definePageMeta({
    middleware: 'auth',
    layout: 'custom'
})

</script>