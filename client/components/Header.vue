
<script setup lang="ts">
  const freeWord = ref('')
  const route = useRoute();

  const navMenu = [{
    label: 'Trang chủ',
    route: '/',
  }, {
    label: 'So sánh nghề nghiệp',
    route: '/so-sanh-nghe-nghiep',
  }, {
    label: 'Cá nhân',
    route: '/ca-nhan',
  }]

  const menuStatus = ref(false)
</script>

<template>
  <div
    class="p-2 bg-white z-50 sticky top-0"
    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
  >
    <div
      class="container !px-8 flex py-2 items-center justify-between"
    >
      <img src="~/assets/images/logo-3.png" alt="/" @click="$router.push('/')" />
      <div class="flex items-center justify-center gap-4">
        <div class="hidden lg:flex items-center justify-center gap-4">
          <nuxt-link
            v-for="nav, index in navMenu"
            :key="index"
            :to="nav.route"
            class="flex gap-3 items-center justify-center rounded-[20px] px-[18px] py-[7px] "
            :class="[nav.route === route.href && 'border-[1px] border-[#131313]']"
          >
            <div v-if="nav.route === route.href" class="w-[6px] h-[6px] rounded-full bg-[#131313]"></div>
            <p class="m-0 font-semibold">{{ nav.label }}</p>
          </nuxt-link>
        </div>

        <div class="flex items-center gap-2">
          <div class="relative">
            <svg
              class="absolute z-20 top-[7px] left-2"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M19 19.5L13.8033 14.3033M13.8033 14.3033C15.1605 12.9461 16 11.0711 16 9C16 4.85786 12.6421 1.5 8.5 1.5C4.35786 1.5 1 4.85786 1 9C1 13.1421 4.35786 16.5 8.5 16.5C10.5711 16.5 12.4461 15.6605 13.8033 14.3033Z"
                stroke="#131313"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a-input
              class="!w-[120px] sm:!w-[262px] !pl-7"
              v-model:value="freeWord"
              placeholder="Tìm kiếm"
            />
          </div>
          <div class="block lg:hidden cursor-pointer" @click="menuStatus = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="#131313" stroke-width="1.5" stroke-linecap="round"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <a-drawer
      v-model:open="menuStatus"
      class="custom-class"
      title="Danh mục"
      width="300px"
      placement="right"
    >
      <nuxt-link
        v-for="nav, index in navMenu"
        :key="index"
        :to="nav.route"
        class="flex gap-3 items-center justify-center rounded-[20px] px-[18px] py-[7px] "
        :class="[nav.route === route.href && 'border-[1px] border-[#131313]']"
      >
        <div v-if="nav.route === route.href" class="w-[6px] h-[6px] rounded-full bg-[#131313]"></div>
        <p class="m-0 font-semibold">{{ nav.label }}</p>
      </nuxt-link>
    </a-drawer>
  </div>
</template>

<style scoped>
input {
  box-shadow: none;
  border: 1px solid #ebeae9;
  border-radius: 20px !important;
  background: #fbfaf9;
  box-shadow: none;
}

/* Style for the placeholder text */
input::placeholder {
  color: #000 !important;
}

/* Style for the input field when it has focus */
input:focus {
  border-color: #000; /* Change border color when focused */
}
</style>
