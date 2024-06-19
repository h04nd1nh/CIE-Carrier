<script setup lang="ts">
const currentStep = ref(0);
const router = useRouter();
interface FormState {
  name: string
  email: string
  phone: string
  address: string
  experiences: any[]
  softSkills: string[]
  hardSkills: string[]
  awards: any[]
}
let formState = reactive<FormState>({
  name: '',
  email: '',
  phone: '',
  address: '',
  experiences: [],
  softSkills: [],
  hardSkills: [],
  awards: []
});

const assignData = (data: any) => {
  formState = Object.assign(formState, data)
  console.log(formState)
  if (steps.value[currentStep.value + 1] && steps.value[currentStep.value + 1].key) currentStep.value++;
}

const backStep = () => {
  currentStep.value--;
}

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:8989/api/resource', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Use type assertion inline
    const data = await response.json() as {
      message: string;
      recommendations: { id: number; sub_title_1: string; }[];
    };

    console.log('Response:', data);

    // Lấy danh sách các id từ recommendations
    const ids = data.recommendations.map(item => item.id);

    // Redirect to '/ket-qua' with ids as query parameter
    router.push({
      path: '/ket-qua',
      query: {
        ids: ids.join(',') // Chuyển danh sách ids thành một chuỗi ngăn cách bởi dấu phẩy
      }
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const steps = ref([{
  title: 'Thông tin cá nhân',
  key: 'information',
}, {
  title: 'Kinh nghiệm',
  key: 'experience',
}, {
  title: 'Kỹ năng',
  key: 'skills',
}, {
  title: 'Giải thưởng',
  key: 'awards',
}]);
const _steps = ref([{
  title: '',
  key: 'information',
}, {
  title: '',
  key: 'experience',
}, {
  title: '',
  key: 'skills',
}, {
  title: '',
  key: 'awards',
}]);
</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center justify-center gap-8 mt-8">
      <div
        class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-2">
        <p class="m-0 text-black">Thông tin cơ bản</p>
      </div>
      <div class="relative">
        <h1 class="text-center font-semibold text-black text-[24px] sm:text-[40px]">
          Tìm hiểu về bạn
        </h1>
        <svg class="absolute right-[-50px] top-[-20px]" width="54" height="54" viewBox="0 0 54 54" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.19775 24.7685H46.4254V28.8547H7.19775V24.7685Z" fill="#00237D" />
          <path d="M28.8547 7.19775L28.8547 46.4254H24.7685L24.7685 7.19775L28.8547 7.19775Z" fill="#00237D" />
          <path d="M42.1253 14.3872L14.3872 42.1254L11.4978 39.236L39.2359 11.4978L42.1253 14.3872Z" fill="#00237D" />
          <path d="M39.2359 42.1254L11.4978 14.3873L14.3872 11.4979L42.1253 39.236L39.2359 42.1254Z" fill="#00237D" />
        </svg>
      </div>
      <p class="text-center text-[18px] font-[400]">
        Điền thông tin của bạn hoặc
        <span><a-upload>tải lên CV</a-upload></span> để bắt đầu khám phá các
        công việc phù hợp với bạn
      </p>
    </div>
    <div class="max-w-[500px] mx-auto mt-8 mb-12">
      <div class="sm:block hidden">
        <a-steps :current="currentStep" :items="_steps"></a-steps>
      </div>
      <div class="sm:hidden block">
        <a-steps :current="currentStep" :items="steps"></a-steps>
      </div>
    </div>

    <div class="form-customize mt-14 mb-10">
      <UsersFormsInformation v-if="steps[currentStep].key === 'information'" :form="formState" @submit="assignData" />
      <UsersFormsExperience v-if="steps[currentStep].key === 'experience'" :experiences="formState.experiences"
        @back-step="backStep" @submit="assignData" />
      <UsersFormsSkills v-if="steps[currentStep].key === 'skills'" :softSkills="formState.softSkills"
        :hardSkills="formState.hardSkills" @back-step="backStep" @submit="assignData" />
      <UsersFormsAwards v-if="steps[currentStep].key === 'awards'" :awards="formState.awards" @back-step="backStep"
        @submit="assignData" />
    </div>
    <a-button v-if="steps[currentStep].key === 'awards'"
      class="!bg-[#00237D] !border-[#00237D] !text-white mx-auto mb-12 mt-4 gap-4 !h-[48px] !flex items-center justify-center !py-0 !px-6  !rounded-3xl"
      @click="submitForm">
      Khám phá nghề nghiệp phù hợp với bạn
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3" stroke="#fff" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a-button>
  </div>
  <Footer />
</template>

<style lang="scss">
.ant-upload {
  color: #00237d;
  font-weight: 600 !important;
  font-size: 16px !important;
}

.ant-steps-item-process .ant-steps-item-icon {
  background-color: #00237d !important;
  border-color: #00237d !important;
}

.ant-steps .ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
  height: 6px !important;
  background-color: #00237d !important;
}

.ant-steps .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
  height: 6px !important;
  background-color: #00237d !important;
}

.ant-steps .ant-steps-item-finish .ant-steps-item-icon {
  @apply bg-[#00237d] border-[#00237d] leading-[29px] #{!important};

  svg {
    @apply fill-white #{!important}
  }
}

.form-customize {
  input {
    border: none !important;
    border-radius: 0 !important;
    border-bottom: 1px solid #8b898c !important;
    @apply shadow-none #{!important}
  }

  input::placeholder {
    color: #8b898c !important;
    font-weight: 500 !important;
    font-size: 14px !important;
  }
}

.ant-tag {
  background-color: #fff !important;
  border-radius: 40px !important;
  border: 1px solid #00237d !important;
  color: #00237d !important;

  .anticon {
    vertical-align: 3px !important;

    svg {
      fill: #00237d;
    }
  }
}
</style>
