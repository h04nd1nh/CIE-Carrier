

<script setup lang="ts">
  const currentStep = ref(0);
  const router = useRouter();
  interface FormState {
    hobbies: any[]
    fortes: any[]
    weaknesses: any[]
    workEnv: any[]
  }
  let formState = reactive<FormState>({
    hobbies: [],
    fortes: [],
    weaknesses: [],
    workEnv: []
  });
  
  const assignData = (data : any) => {
    formState = Object.assign(formState, data)
  }

  const submitForm = async () => {
    router.push('/khoa-hoc-may-tinh')
  }
</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center justify-center gap-8 mt-8">
      <div
        class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-2"
      >
        <p class="m-0 text-black">Gợi ý chuyển ngành</p>
      </div>
      <div class="relative">
        <h1 class="text-center font-semibold text-black text-[24px] sm:text-[40px]">
          Thêm thông tin về bạn
        </h1>
        <svg
          class="absolute right-[-50px] top-[-20px]"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.19775 24.7685H46.4254V28.8547H7.19775V24.7685Z"
            fill="#00237D"
          />
          <path
            d="M28.8547 7.19775L28.8547 46.4254H24.7685L24.7685 7.19775L28.8547 7.19775Z"
            fill="#00237D"
          />
          <path
            d="M42.1253 14.3872L14.3872 42.1254L11.4978 39.236L39.2359 11.4978L42.1253 14.3872Z"
            fill="#00237D"
          />
          <path
            d="M39.2359 42.1254L11.4978 14.3873L14.3872 11.4979L42.1253 39.236L39.2359 42.1254Z"
            fill="#00237D"
          />
        </svg>
      </div>
      <p class="text-center text-[18px] font-[400]">
        Điền thông tin của bạn để Career  CIE giúp bạn tìm những <br>
        nghành nghề khác phù hợp với bạn hơn
      </p>
    </div>
    <div class="form-customize mt-14 mb-10">
      <UsersFormsHobbies :hobbies="formState.hobbies" :fortes="formState.fortes" :weaknesses="formState.weaknesses" :work-env="formState.workEnv" @submit="assignData" />
    </div>
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
.ant-steps
  .ant-steps-item-process
  > .ant-steps-item-container
  > .ant-steps-item-content
  > .ant-steps-item-title::after {
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
