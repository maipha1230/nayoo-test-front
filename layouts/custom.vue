<template>
    <div class="w-full h-auto min-h-screen flex flex-col">
        <div class="flex justify-end items-center p-2 bg-slate-600">
            <v-btn variant="elevated" color="grey" @click="onLogoutClick">
                ออกจากระบบ
            </v-btn>
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts" >
const sweetAlert = useSweetAlert()
const router = useRouter()

const onLogoutClick = async() => {
    let check = await sweetAlert.ensureAlert('ต้องการออกจากระบบใช่หรือไม่')
    if (check.isConfirmed) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        router.push('/login')
    }
}

</script>