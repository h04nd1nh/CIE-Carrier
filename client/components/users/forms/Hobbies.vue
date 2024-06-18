

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'; 
  import { message } from 'ant-design-vue';
  import type { FormInstance } from 'ant-design-vue';
  const [messageApi, contextHolder] = message.useMessage();

  const emit = defineEmits(['submit', 'backStep'])

  const formRef = ref<FormInstance>();

  const _props = defineProps<{
    hobbies: string[]
    fortes: string[]
    weaknesses: string[]
    workEnv: string[]
  }>()

  let hobbies = ref(_props.hobbies ? useCloneDeep(_props.hobbies) : []);
  let fortes = ref(_props.fortes ? useCloneDeep(_props.fortes) : []);
  let weaknesses = ref(_props.weaknesses ? useCloneDeep(_props.weaknesses) : []);
  const formState = reactive<any>({ workEnv: _props.workEnv.length === 0 ? useCloneDeep([{ content: '' }]) : useCloneDeep(_props.workEnv) });

  const state = reactive({ hobbie: '', forte: '', weakness: '' });

  const nextStep = () => {
    formRef.value && formRef.value.validate().then(() => {
        // if (hobbies.value.length === 0 || fortes.value.length === 0 || weaknesses.value.length === 0) {
        //     messageApi.info('Cần thêm ít nhất 1 sở thích hoặc sở trường hoặc sở đoản');
        // } else {
        //     emit('submit', { hobbies: hobbies.value, fortes: fortes.value, weaknesses: weaknesses.value, workEnv: formState.workEnv })
        // }
    }).catch((error : any) => {
        console.log('error', error);
    });
  }

  const addhobbie = (type: any) => {
    switch (type) {
        case 'hobbies':
            if(state.hobbie !== '') {
                state.hobbie.split(',').forEach((_hobbie : any) => {
                    hobbies.value.push(_hobbie.trim());
                })
                state.hobbie = ''
            }
            break;
        case 'fortes':
            if(state.forte !== '') {
                state.forte.split(',').forEach((_forte : any) => {
                    fortes.value.push(_forte.trim());
                })
                state.forte = ''
            }
            break;
        default:
            if(state.weakness !== '') {
                state.weakness.split(',').forEach((_weakness : any) => {
                    weaknesses.value.push(_weakness.trim());
                })
                state.weakness = ''
            }
            break;
    }
  }

  const removeHobbie = (__hobbie : any, type: any) => {
    switch (type) {
        case 'hobbies':
            hobbies.value = hobbies.value.filter((_hobbie : any) => _hobbie !== __hobbie);
            break;
        case 'fortes':
            fortes.value = fortes.value.filter((_hobbie : any) => _hobbie !== __hobbie);
            break;
        default:
            weaknesses.value = weaknesses.value.filter((_hobbie : any) => _hobbie !== __hobbie);
            break;
    }
  }

  const pushWorkEnv = () => {
    formState.workEnv.push({
      content: '',
    });
  }
</script>

<template>
    <div class="mb-8">
      <context-holder />
      <h3 class="text-xl font-semibold mb-6">Sở thích</h3>
      <div>
        <a-input 
            :disabled="hobbies.length === 20" v-model:value="state.hobbie" placeholder="Thêm tối đa 20 sở thích (Các sở thích cách nhau bằng dấu phẩy)" 
            @pressEnter="() => addhobbie('hobbies')" 
        />
        <div class="mt-3 flex gap-3 flex-wrap items-center">
          <div v-for="_hobbie, index in hobbies" :key="index" class="inline-flex items-center gap-1 border-[1px] border-solid text-[#00237d] border-[#00237d] py-[2px] pl-2 pr-1 rounded-[999px]">
            <span>{{ _hobbie }}</span>
            <span class="relative font-bold -top-[1px] text-[16px] block cursor-pointer px-2" @click="() => removeHobbie(_hobbie, 'hobbies')">x</span>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <a-input 
            :disabled="fortes.length === 20" v-model:value="state.forte" placeholder="Thêm tối đa 20 sở trường (Các sở trường cách nhau bằng dấu phẩy)" 
            @pressEnter="() => addhobbie('fortes')" 
        />
        <div class="mt-3 flex gap-3 flex-wrap items-center">
          <div v-for="_hobbie, index in fortes" :key="index" class="inline-flex items-center gap-1 border-[1px] border-solid text-[#00237d] border-[#00237d] py-[2px] pl-2 pr-1 rounded-[999px]">
            <span>{{ _hobbie }}</span>
            <span class="relative font-bold -top-[1px] text-[16px] block cursor-pointer px-2" @click="() => removeHobbie(_hobbie, 'fortes')">x</span>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <a-input 
            :disabled="weaknesses.length === 20" v-model:value="state.weakness" placeholder="Thêm tối đa 20 sở đoản (Các sở đoản cách nhau bằng dấu phẩy)" 
            @pressEnter="() => addhobbie('weaknesses')" 
        />
        <div class="mt-3 flex gap-3 flex-wrap items-center">
          <div v-for="_hobbie, index in weaknesses" :key="index" class="inline-flex items-center gap-1 border-[1px] border-solid text-[#00237d] border-[#00237d] py-[2px] pl-2 pr-1 rounded-[999px]">
            <span>{{ _hobbie }}</span>
            <span class="relative font-bold -top-[1px] text-[16px] block cursor-pointer px-2" @click="() => removeHobbie(_hobbie, 'weaknesses')">x</span>
          </div>
        </div>
      </div>

      <a-form
        ref="formRef"
        name="custom-validation"
        :model="formState"
        >
            <div>
                <div class="grid grid-cols-1 gap-[30px] mt-6">
                    <div v-for="_workEnv, index in formState.workEnv" :key="index">
                        <h3 class="text-xl font-semibold mb-6">Môi trường làm việc bạn muốn</h3>
                        <a-form-item 
                            label="" 
                            :name="['experiences', index, 'content']" 
                            :rules="{
                                required: true,
                                message: 'Không được để trống trường này!',
                            }"
                        >
                            <a-input 
                                v-model:value="_workEnv.content" placeholder="Mô tả về môi trường muốn làm việc của bạn" 
                            />
                        </a-form-item>
                    </div>
                </div>
                <a-button class="!text-[#8B898C] !border-[#8B898C] !rounded-3xl !py-0 !px-4 !flex !items-center justify-center !mt-4" @click="pushWorkEnv">
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
                    /></svg>
                    Thêm môi trường làm việc
                </a-button>
            </div>
        </a-form>

        <div class="mt-10">
          <a-button
          class="!bg-[#00237D] !border-[#00237D] !text-white mx-auto mb-12 mt-4 gap-4 !h-[48px] !flex items-center justify-center !py-0 !px-6  !rounded-3xl"
          @click="nextStep"
        >
          Xem gợi ý ngành nghề khác phù hợp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a-button>
        </div>
    </div>
</template>
