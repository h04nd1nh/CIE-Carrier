<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'; 
  import type { Rule } from 'ant-design-vue/es/form';
  import type { FormInstance } from 'ant-design-vue';

  const emit = defineEmits(['submit', 'backStep'])

  interface FormState {
    awards: any[]
  }

  const _props = defineProps<{
    awards: any[]
  }>()

  const formRef = ref<FormInstance>();
  const formState = reactive<FormState>({ awards: _props.awards.length === 0 ? useCloneDeep([{
    awardName: '',
    awardIn: '',
    awardAt: '',
  }]) : useCloneDeep(_props.awards) });

  const pushAward = () => {
    formState.awards.push({
      awardName: '',
      awardIn: '',
      awardAt: '',
    });
  }

  const nextStep = () => {
    formRef.value && formRef.value.validate().then(() => {
      emit('submit', formState)
    }).catch((error : any) => {
      console.log('error', error);
    });
  }

  const backStep = () => {
    emit('backStep')
  }
</script>

<template>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
    > 
        <div>
          <h6 class="!text-black font-[700] text-[16px]">Giải thưởng</h6>

          <div class="grid grid-cols-1 gap-[30px] mt-6">
            <div v-for="award, index in formState.awards" :key="index">
              <h4 class="font-semibold">Giải thưởng {{ index + 1 }}</h4>
              <div class="grid grid-cols-3 gap-6 mt-4">
                <a-input v-model:value="award.awardName" placeholder="Tên giải thưởng" />
                <a-input v-model:value="award.awardIn" placeholder="Đơn vị tổ chức" />
                <a-input v-model:value="award.awardAt" placeholder="Thời gian nhận giải thưởng" />
              </div>
            </div>
          </div>

          <a-button
            class="!text-[#8B898C] !border-[#8B898C] !rounded-3xl !py-0 !px-4 !flex !items-center justify-center !mt-4"
            @click="pushAward"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12H18"
                stroke="#8B898C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18V6"
                stroke="#8B898C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >Thêm giải thưởng
          </a-button>
          <div class="flex items-center justify-end gap-6 mt-6">
            <a-button class="!text-[#00237d] !border-none" @click="backStep">Hủy</a-button>
            <a-button class="!text-[#00237d] !border-[#00237d] !rounded-3xl !w-[130px] !p-0 !flex !items-center justify-center" @click="nextStep">Lưu</a-button>
          </div>
        </div>
    </a-form>
</template>
