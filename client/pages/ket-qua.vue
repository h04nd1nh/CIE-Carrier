<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const firstMajor = ref<string>('');
const imageURL = ref<string>('');
const subTitle = ref<string>('');

const router = useRouter();
const idFromQuery = ref<string | null>(null);
interface TabItem {
  label: string;
  value: string;
}
const tabs = ref<TabItem[]>([]);
 // Default selected tab

onMounted(async () => {
  const route = router.currentRoute.value;
  if (route.query && route.query.ids) {
    idFromQuery.value = route.query.ids as string;
    console.log('IDs from query:', idFromQuery.value);

    const ids = idFromQuery.value.split(',').map(id => id.trim());
    for (const id of ids) {
      try {
        const response = await fetch(`http://127.0.0.1:8989/api/primary_major?primary_major_id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (firstMajor.value == '') {
          firstMajor.value = data.primary_major.sub_title_1;
        }

        if (imageURL.value == '') {
          imageURL.value = data.primary_major.image;
        }

        if (subTitle.value == '') {
          subTitle.value = data.primary_major.sub_title_2;
        }
        tabs.value.push({
          label: data.primary_major.sub_title_1,
          value: data.primary_major.id,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
});
const currentTab = ref("4");

watch(currentTab, async (newValue) => {
  try {
    console.log(newValue);
    const response = await fetch(`http://127.0.0.1:8989/api/primary_major?primary_major_id=${newValue}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    firstMajor.value = data.primary_major.sub_title_1;
    subTitle.value = data.primary_major.sub_title_2;
    imageURL.value = data.primary_major.image;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>



<template>
  <div>
    <!--HEADING -->
    <div class="flex flex-col items-center justify-center gap-8 mt-8">
      <div
        class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-2">
        <p class="m-0 text-black">Kết quả đánh giá</p>
      </div>
      <h1 class="text-center font-semibold text-black text-[24px] sm:text-[40px]" v-html="firstMajor">
      </h1>
      <p class="text-center text-[18px] font-[400]">
        Là lĩnh vực phù hợp với bạn, các vị trí nghề nghiệp cụ thể của ngành<br />
        mà bạn có thể làm được liệt kê dưới đây
      </p>
    </div>
    <!-- FEATURE -->

    <div class="container pt-14">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div class="md:col-span-2 order-2 md:order-none">
          <ul class="sm:w-72 mt-5">
            <li v-for="tab, index in tabs" :key="index"
              class="text-black font-medium text-base sm:text-xl p-3 md:p-5 cursor-pointer"
              :class="[currentTab === tab.value && 'text-white bg-[#00237D]']" @click="currentTab = tab.value">
              {{ tab.label }}
            </li>
          </ul>
        </div>
        <div class="md:col-span-3 order-1 md:order-none">
          <div
            class="group relative rounded-2xl sm:col-span-2 bg-[#F4F2F0] border-[#EBEAE9] bg-cover min-h-[300px] md:min-h-[450px] w-full" :style="{ 'background-image': `url(${imageURL})` }">
            <div
              class="opacity-0 transition-all duration-300 group-hover:opacity-100 bg-black/50 p-6 absolute w-full h-full  flex flex-col justify-end rounded-2xl">
              <h5 class="text-white text-xl md:text-3xl font-semibold mb-3" v-html="firstMajor"></h5>
              <p class="m-0 text-white font-light md:text-2xl" v-html="subTitle"></p>

              <nuxt-link to="/chi-tiet-nghe-nghiep/khoa-hoc-may-tinh" class="mt-5">
                <span
                  class="font-semibold !bg-transparent !border-white !text-white border-[1px] border-solid gap-1 !flex items-center justify-center !p-0 !w-[267px] !h-12 !rounded-3xl">
                  Bắt đầu gợi ý nghề nghiệp
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3" stroke="#ffffff" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CATEGORIES -->
    <div class="bg-white">
      <div class="container py-14 w-full relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pb-12">
          <div>
            <div
              class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-2">
              <p class="m-0 text-black">Giới thiệu</p>
            </div>
            <h4 class="font-[700] text-black text-[40px] mt-6 leading-[44px]" v-html="firstMajor">
            </h4>
          </div>
          <div>
            <h6 class="font-semibold text-2xl text-black " v-html="subTitle"></h6>
            
          </div>
        </div>
      </div>
    </div>
    <!-- CATEGORIES -->
    <div class="bg-[#FBFAF9]">
      <div class="container py-14 w-full relative">
        <div
          class="flex items-center bg-white justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#ebeae9] py-2">
          <p class="m-0 text-black">Tương tự</p>
        </div>
        <h4 class="font-[700] text-black text-[40px] mt-6">Các ngành con</h4>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pb-12">
          <div v-for="e in 9" :key="e" class="rounded-[12px] flex items-start justify-between p-4 bg-white">
            <div>
              <h6 class="text-black text-[18px] font-[500] mb-[2px]">
                Kỹ sư Học máy
              </h6>
              <p class="text-black text-[14px]">Machine Learning Engineer</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1.5 16.5L16.5 1.5M16.5 1.5L5.25 1.5M16.5 1.5V12.75" stroke="black" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <Footer />
  </div>
</template>