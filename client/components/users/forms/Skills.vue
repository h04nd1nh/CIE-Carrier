<template>
  <div class="mb-8">
    <context-holder />
    <h6 class="!text-black font-[700] text-[16px]">Kỹ năng cứng</h6>
    <div class="mt-4">
      <a-input :disabled="hardSkills.length === 20" v-model:value="state.hardSkill" placeholder="Thêm tối đa 20 kỹ năng (Các kỹ năng cách nhau bằng dấu phẩy)" @pressEnter="addHardSkill" />
      <div class="mt-3 flex gap-3 flex-wrap items-center">
        <div v-for="(hardSkill, index) in hardSkills" :key="index" class="inline-flex items-center gap-1 border-[1px] border-solid text-[#00237d] border-[#00237d] py-[2px] pl-2 pr-1 rounded-[999px]">
          <span>{{ hardSkill }}</span>
          <span class="relative font-bold -top-[1px] text-[16px] block cursor-pointer px-2" @click="() => removeHardSkill(hardSkill)">x</span>
        </div>
      </div>
    </div>

    <h6 class="!text-black font-[700] text-[16px] mt-6">Kỹ năng mềm</h6>
    <div class="mt-4">
      <a-input :disabled="softSkills.length === 20" v-model:value="state.softSkill" placeholder="Thêm tối đa 20 kỹ năng (Các kỹ năng cách nhau bằng dấu phẩy)" @pressEnter="addSoftSkill" />
      <div class="mt-3 flex gap-3 flex-wrap items-center">
        <div v-for="(softSkill, index) in softSkills" :key="index" class="inline-flex items-center gap-1 border-[1px] border-solid text-[#00237d] border-[#00237d] py-[2px] pl-2 pr-1 rounded-[999px]">
          <span>{{ softSkill }}</span>
          <span class="relative font-bold -top-[1px] text-[16px] block cursor-pointer px-2" @click="() => removeSoftSkill(softSkill)">x</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-6 mt-6">
      <a-button class="!text-[#00237d] !border-none" @click="backStep">Hủy</a-button>
      <a-button class="!text-[#00237d] !border-[#00237d] !rounded-3xl !w-[130px] !p-0 !flex !items-center justify-center" @click="nextStep">Lưu</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { defineProps, defineEmits } from 'vue'; 
import { message, AutoComplete } from 'ant-design-vue';

const { Option } = AutoComplete;
const [messageApi] = message.useMessage();

const emit = defineEmits(['submit', 'backStep']);

const _props = defineProps<{
  hardSkills: string[];
  softSkills: string[];
}>();

let hardSkills = ref(_props.hardSkills ? useCloneDeep(_props.hardSkills) : []);
let softSkills = ref(_props.softSkills ? useCloneDeep(_props.softSkills) : []);

const state = reactive({
  hardSkill: '',
  softSkill: '',
});

const nextStep = () => {
  if (hardSkills.value.length === 0 && softSkills.value.length === 0) {
    messageApi.info('Cần thêm ít nhất 1 kỹ năng');
  } else {
    emit('submit', { hardSkills: hardSkills.value, softSkills: softSkills.value });
  }
};

const backStep = () => {
  emit('backStep');
};

const addHardSkill = () => {
  if (state.hardSkill !== '') {
    state.hardSkill.split(',').forEach((_skill: any) => {
      hardSkills.value.push(_skill.trim());
    });
    state.hardSkill = '';
  }
};

const addSoftSkill = () => {
  if (state.softSkill !== '') {
    state.softSkill.split(',').forEach((_skill: any) => {
      softSkills.value.push(_skill.trim());
    });
    state.softSkill = '';
  }
};

const removeHardSkill = (hardSkill: any) => {
  hardSkills.value = hardSkills.value.filter((_skill: any) => _skill !== hardSkill);
};

const removeSoftSkill = (softSkill: any) => {
  softSkills.value = softSkills.value.filter((_skill: any) => _skill !== softSkill);
};

</script>

<style scoped>
/* Add custom styles as needed */
</style>
