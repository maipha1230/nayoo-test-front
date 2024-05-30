<template>
    <div class="w-full min-h-screen h-auto flex flex-col p-3 bg-slate-300 items-center justify-center">
        <div class="w-[450px] h-auto min-h-[200px] flex flex-col gap-2 bg-white rounded-md shadow-md">
            <div
                class="w-full rounded-t-md bg-slate-700 text-white flex justify-center items-center font-bold py-3 text-xl">
                ลงทะเบียน
            </div>
            <v-form v-model="isFormValid" class="flex flex-col gap-3 w-full p-3" :on-submit="submitForm">
                <v-text-field v-model="registerForm.nameTh" :rules="notEmptyRules('ชื่อ-สกุล ภาษาไทย')"
                    label="ชื่อ-สกุล ภาษาไทย" required @keypress="onlyThai($event)">
                </v-text-field>
                <v-text-field v-model="registerForm.nameEn" :rules="notEmptyRules('ชื่อ-สกุล ภาษาอังกฤษ')"
                    label=" ชื่อ-สกุล ภาษาอังกฤษ" required @keypress="onlyEnglish($event)">
                </v-text-field>
                <v-text-field v-model="registerForm.phone" :rules="phoneRules"
                    @keypress="phoneNumber($event, registerForm.phone)" label="เบอร์โทร" required>
                </v-text-field>
                <v-text-field v-model="registerForm.email" :rules="emailRules" label="อีเมล" required>
                </v-text-field>
                <v-text-field v-model="registerForm.password" :rules="passwordRules" label="รหัสผ่าน" required
                    type="password">
                </v-text-field>
                <v-text-field v-model="registerForm.confirmPassword" :rules="[...passwordRules, confirmPasswordRule]"
                    label="ยืนยันรหัสผ่าน" required type="password">
                </v-text-field>
                <v-btn variant="elevated" color="success" @click="submitForm" :disabled="!isFormValid">
                    ลงทะเบียน
                </v-btn>
                <v-btn variant="elevated" color="grey" @click="() => $router.push('/login')">
                    ไปยังหน้าเข้าสู่ระบบ
                </v-btn>
            </v-form>
        </div>
    </div>

</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'unprotected',
})
import { notEmptyRules, emailRules, passwordRules, phoneRules } from '~/utils/validate-rule';
import { RegisterRequestBody } from '~/types/register-request.model';
import { phoneNumber, onlyThai, onlyEnglish } from '~/utils/regex';
const router = useRouter()
const sweetAlert = useSweetAlert()
const api = useApi()
const registerForm = reactive({
    email: '',
    nameTh: '',
    nameEn: '',
    phone: '',
    password: '',
    confirmPassword: ''
})
const isFormValid = ref(false)

const confirmPasswordRule = (value: string): boolean | string => {
    if (value === registerForm.password) return true;
    return 'รหัสผ่านทั้งสองไม่เหมือนกัน';
};

const submitForm = async () => {
    try {
        if (!isFormValid.value) return
        let registerBody: RegisterRequestBody = {
            email: registerForm.email,
            nameTh: registerForm.nameTh,
            nameEn: registerForm.nameEn,
            phone: registerForm.phone,
            password: registerForm.password
        }
        let { data: response } =  await api.post(`/auth/signup`, registerBody)
        if (response) {
            sweetAlert.successAlert(response.message)
            router.push('/login')
        }
    } catch (error) {
        console.log(error);
    }
};

</script>