<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { ref, reactive, onMounted } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';
import { Select } from 'ant-design-vue';

const emit = defineEmits(['submit', 'backStep']);

interface FormState {
  experiences: any[];
}

const _props = defineProps<{
  experiences: any[];
}>();

const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  experiences: _props.experiences.length === 0 ? useCloneDeep([
    {
      position: '',
      expertise: '',
      company: '',
      startTime: '',
      endTime: '',
      currentWork: false,
      descriptions: '',
    },
  ]) : useCloneDeep(_props.experiences),
});

const expertiseOptions = ref<any[]>([]);
const selectedExpertise = ref<string>('');

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8989/api/primary_major/all', {
      method: 'GET', // Specify the HTTP method (GET, POST, etc.)
      // headers: {
      //   'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE4NTUwODU4LCJleHAiOjE3MjExNDI4NTh9.VG-oW4yHbK8knqxp0ncEjxSBM4WMQk60lDWbtICemr8',
      //   'Content-Type': 'application/json'
      //   // Add any other headers if required
      // }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch expertise options');
    }

    const data = await response.json();
    console.log(data);
    expertiseOptions.value = data.primary_majors.map((item: {
      sub_title_1: string;
      primary_title: string;
    }) => ({
      label: item.sub_title_1,
      value: item.primary_title
    }));
  } catch (error) {
    console.error('Error fetching expertise options:', error);
  }
});

const pushExperience = () => {
  console.log(formState.experiences);
  formState.experiences.push({
    position: '',
    expertise: '',
    company: '',
    startTime: '',
    endTime: '',
    currentWork: false,
    descriptions: '',
  });
};

const nextStep = () => {
  formRef.value && formRef.value.validate().then(() => {
    emit('submit', formState);
  }).catch((error: any) => {
    console.log('error', error);
  });
};

const backStep = () => {
  emit('backStep');
};
</script>

<template>
  <div>
    <a-form ref="formRef" name="custom-validation" :model="formState">
      <div>
        <h6 class="!text-black font-[700] text-[16px]">
          Kinh nghiệm làm việc
        </h6>

        <div class="grid grid-cols-1 gap-[30px] mt-6">
          <div v-for="experience, index in formState.experiences" :key="index">
            <h4 class="font-semibold">Kinh nghiệm {{ index + 1 }}</h4>
            <div>
              <div class="grid grid-cols-3 gap-6 mt-4">
                <a-form-item label="" :name="['experiences', index, 'position']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-input v-model:value="experience.position" placeholder="Vị trí công việc" />
                </a-form-item>
                <a-form-item label="" :name="['experiences', index, 'expertise']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-select v-model:value="experience.expertise" placeholder="Lĩnh vực chuyên môn">
                    <a-select-option v-for="(option, optIndex) in expertiseOptions" :key="optIndex"
                      :value="option.value">
                      {{ option.label }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="" :name="['experiences', index, 'company']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-input v-model:value="experience.company" placeholder="Công ty" />
                </a-form-item>
              </div>
              <div class="grid grid-cols-2 gap-6 mt-6">
                <a-form-item label="" :name="['experiences', index, 'startTime']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-input v-model:value="experience.startTime" placeholder="Thời gian bắt đầu" />
                </a-form-item>
                <a-form-item label="" :name="['experiences', index, 'endTime']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-input v-model:value="experience.endTime" placeholder="Thời gian kết thúc" />
                </a-form-item>
                <a-checkbox v-model:value="experience.currentWork">Hiện tại tôi đang làm việc ở đây</a-checkbox>
              </div>
              <div class="grid grid-cols-1 mt-6">
                <a-form-item label="" :name="['experiences', index, 'descriptions']" :rules="{
                  required: true,
                  message: 'Không được để trống trường này!',
                }">
                  <a-input v-model:value="experience.descriptions" placeholder="Mô tả công việc" />
                </a-form-item>
              </div>
            </div>
          </div>
        </div>

        <a-button
          class="!text-[#8B898C] !border-[#8B898C] !rounded-3xl !py-0 !px-4 !flex !items-center justify-center !mt-4"
          @click="pushExperience">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18" stroke="#8B898C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18V6" stroke="#8B898C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Thêm kinh nghiệm làm việc
        </a-button>

        <div class="flex items-center justify-end gap-6 mt-6">
          <a-button class="!text-[#00237d] !border-none" @click="backStep">Hủy</a-button>
          <a-button
            class="!text-[#00237d] !border-[#00237d] !rounded-3xl !w-[130px] !p-0 !flex !items-center justify-center"
            @click="nextStep">Lưu</a-button>
        </div>
      </div>
    </a-form>
  </div>
</template>
