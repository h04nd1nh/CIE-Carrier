
<script setup>

</script>

<template>
  <div class="bg-[#00237D]">
    <div class="container flex items-start justify-between h-[404px]  py-14 w-full relative">
      <div class="w-full flex items-start flex-wrap justify-between">
        <div>
          <img src="~/assets/images/logo.png" alt="icon-footer" />
          <div class="mt-10 md:mt-[120px]">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.5 10.5C15.5 12.1569 14.1569 13.5 12.5 13.5C10.8431 13.5 9.5 12.1569 9.5 10.5C9.5 8.84315 10.8431 7.5 12.5 7.5C14.1569 7.5 15.5 8.84315 15.5 10.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 10.5C20 17.6421 12.5 21.75 12.5 21.75C12.5 21.75 5 17.6421 5 10.5C5 6.35786 8.35786 3 12.5 3C16.6421 3 20 6.35786 20 10.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-white block ml-3"> Hà Nội </span>
            </div>
          </div>
        </div>
        <div>
          <ul class="relative z-[1] flex items-center justify-end gap-10 mt-6">
            <li class="text-white">
              <nuxt-link to="/">Trang chủ</nuxt-link>
            </li>
            <li class="text-white">
              <nuxt-link to="/so-sanh-nghe-nghiep"> So sánh nghề nghiệp </nuxt-link>
            </li>
            <li class="text-white">
              <nuxt-link to="/">Liên hệ</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <img class="absolute top-[50%] right-[0%] z-0" style="transform: translate(0, -50%)" src="~/assets/images/icon-footer.png" alt="icon-footer" />
    </div>
  </div>
</template>

<style scoped>
</style>
