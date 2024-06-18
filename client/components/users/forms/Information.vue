

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'; 
  import type { Rule } from 'ant-design-vue/es/form';
  import type { FormInstance } from 'ant-design-vue';

  const emit = defineEmits(['submit'])

  interface FormState {
    name: string
    email: string
    phone: string
    address: string
  }

  const _props = defineProps<{
    form: {
        name: string
        email: string
        phone: string
        address: string
    }
  }>()

  const formRef = ref<FormInstance>();
  const formState = reactive<FormState>(_props.form ? useCloneDeep(_props.form) :  {
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: 'Không được để trống trường này!', trigger: 'change' }],
    email: [{ required: true, message: 'Không được để trống trường này!', trigger: 'change' }],
    phone: [{ required: true, message: 'Không được để trống trường này!', trigger: 'change' }],
    address: [{ required: true, message: 'Không được để trống trường này!', trigger: 'change' }],
  };

  const nextStep = () => {
    formRef.value && formRef.value.validate().then(() => {
      emit('submit', formState)
    }).catch((error : any) => {
      console.log('error', error);
    });
  }
</script>

<template>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
    >
        <div>
            <h6 class="!text-black font-[700] text-[16px]">Thông tin cá nhân</h6>
            <div class="grid grid-cols-2 gap-6 mt-4">
                <a-form-item label="" name="name">
                  <a-input v-model:value="formState.name" placeholder="Tên của bạn" />
                </a-form-item>
                <a-form-item label="" name="email">
                  <a-input v-model:value="formState.email" placeholder="Email của bạn" />
                </a-form-item>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-6">
                <a-form-item label="" name="phone">
                  <a-input v-model:value="formState.phone" placeholder="Số điện thoại" />
                </a-form-item>
                <a-form-item label="" name="address">
                  <a-input v-model:value="formState.address" placeholder="Địa chỉ hiện tại" />
                </a-form-item>
            </div>
            <div class="flex items-center justify-end gap-6 mt-6">
                <a-button 
                  class="!text-[#00237d] !border-[#00237d] !rounded-3xl !w-[130px] !p-0 !flex !items-center justify-center"
                  @click="nextStep"
                >
                  Lưu
                </a-button>
            </div>
        </div>
    </a-form>
</template>

