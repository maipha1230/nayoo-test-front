<template>
    <div class="w-full min-h-screen h-auto flex flex-col p-3 bg-slate-300 items-center justify-center">
        Verify Email
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'unprotected',
})
const router = useRouter()
const route = useRoute()
const sweetAlert = useSweetAlert()
const api = useApi()


onMounted(async() => {
 try {
    const token = route.query['token']
    const { data: response } = await api.post('/auth/verify', {
        token: token
    })
    if (response) {
        await sweetAlert.successAlert('ยืนยันอีเมลสำเร็จ')
        router.push('/login')
    }
 } catch (error) {
    router.push('/')
 }
})


</script>