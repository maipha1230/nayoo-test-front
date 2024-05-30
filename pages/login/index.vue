<template>
    <div class="w-full min-h-screen h-auto flex flex-col p-3 bg-slate-300 items-center justify-center">
        <div class="w-full md:w-[450px] h-auto min-h-[200px] flex flex-col gap-2 bg-white rounded-md shadow-md">
            <div
                class="w-full rounded-t-md bg-slate-700 text-white flex justify-center items-center font-bold py-3 text-xl">
                เข้าสู่ระบบ
            </div>
            <v-form  v-model="isFormValid" class="flex flex-col gap-3 w-full p-3" :on-submit="submitForm">
                <v-text-field v-model="loginForm.email" :rules="emailRules" label="อีเมล">
                </v-text-field>
                <v-text-field v-model="loginForm.password" :rules="passwordRules" label="รหัสผ่าน"
                    required type="password">
                </v-text-field>
                <v-btn variant="elevated" color="success" @click="submitForm" :disabled="!isFormValid">
                    เข้าสู่ระบบ
                </v-btn>
                <v-btn variant="elevated" color="grey" @click="() => $router.push('/register')">
                    ไปยังหน้าลงทะเบียน
                </v-btn>
            </v-form>
        </div>
    </div>

</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'unprotected',
})
import {emailRules, passwordRules } from '~/utils/validate-rule';
const router = useRouter()
const sweetAlert = useSweetAlert()
const api = useApi()
const loginForm = reactive({
    email: '',
    password: '',
})
const isFormValid = ref(false)

const submitForm = async() => {
    try {
        if (!isFormValid.value) return
        let loginBody = {
            email: loginForm.email,
            password: loginForm.password
        }
        let { data: response } =  await api.post(`/auth/signin`, loginBody)
        if (response) {
            localStorage.setItem('accessToken', response?.data?.accessToken)
            localStorage.setItem('refreshToken', response?.data?.refreshToken)
            sweetAlert.successAlert(response.message)
            router.push('/')
        }
    } catch (error) {
        console.log(error)
    }
    
};

</script>