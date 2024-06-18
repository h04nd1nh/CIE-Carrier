<script setup lang="ts">
// Doccument
    // import { useArticleStore } from '@/stores/article';
    // const store = {
    //     acticle: useArticleStore()
    // };
    // let authors = ref([]);
    // let categories = ref([]);
    // const articles = await store.acticle.fetchAll();
    // authors = await store.acticle.fetchAuthor();
    // categories = await store.acticle.fetchCategories();
</script>

<template>
  <div class="overflow-x-hidden">
    <Banner />
    <!--INTRO 1 -->
    <div class="container">
      <div
      class="z-20 relative bg-[#F7F2EC] mt-[80px] gap-5 flex flex-wrap items-start justify-between p-8 py-12 rounded-[32px]"
    >
      <div class="flex justify-start items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
        >
          <path
            d="M6.73987 23.1929H43.4722V27.0192H6.73987V23.1929Z"
            fill="#00237D"
          />
          <path
            d="M27.0192 6.73987V43.4722H23.1929L23.1929 6.73987L27.0192 6.73987Z"
            fill="#00237D"
          />
          <path
            d="M39.4456 13.472L13.472 39.4457L10.7664 36.7401L36.7401 10.7664L39.4456 13.472Z"
            fill="#00237D"
          />
          <path
            d="M36.7401 39.4457L10.7664 13.4721L13.472 10.7665L39.4457 36.7402L36.7401 39.4457Z"
            fill="#00237D"
          />
        </svg>
        <h4
          class="text-[40px] text-black font-semibold max-w-[410px]"
          style="line-height: 48px"
        >
          Học ngành này, <br class="hidden md:block" />
          sau này làm nghề gì?
        </h4>
      </div>
      <div>
        <p class="max-w-[523px] text-black mb-6">
          Bạn đang băn khoăn giữa các lựa chọn ngành nghề, không biết mình học
          ngành này thì sẽ làm những nghề nghiệp nào phù hợp với trình độ và sở
          thích của bản thân. Bắt đầu nhập thông tin để CIE có thể phân tích các
          nghề nghiệp phù hợp với bạn nhất
        </p>
        <nuxt-link to="/chi-tiet-nghe-nghiep/khoa-hoc-may-tinh">
          <span class="font-semibold !bg-transparent !text-[#00237D] !border-[#00237D] border-[1px] border-solid gap-1 !flex items-center justify-center !p-0 !w-[267px] !h-12 !rounded-3xl">
            Bắt đầu gợi ý nghề nghiệp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                stroke="#00237D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </nuxt-link>
      </div>
    </div>
    </div>
    <!-- FATURE -->
    <div
      class="container lg:h-[581px] bg-white mx-auto relative mt-[80px] !p-8 rounded-[32px]"
    >
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-8 items-center">
        <div class="relative sm:col-span-2 lg:col-span-1">
          <img src="~/assets/images/Union.png" />
          <div
            class="bg-[#00237D] p-8 absolute top-[0] left-[0] w-[260px] h-[260px] flex flex-col items-start gap-4 justify-center rounded-[18px]"
          >
            <p class="font-semibold text-[40px] text-white mb-1">1000+</p>
            <span class="text-white font-[400]"
              >nghề nghiệp tương ứng <br />
              với ngành học <br />
              và sở thích của bạn</span
            >
          </div>
          <div
            class="bg-[#EBEAE9] p-6 absolute bottom-[0] right-[0] w-[224px] h-[136px] flex flex-col gap-4 items-start justify-center rounded-[18px]"
          >
            <p class="font-semibold text-[22px] text-black mb-1">Hệ thống AI</p>
            <span class="text-black font-[400]"
              >thông minh, cá nhân hoá<br />
              các sự lựa chọn</span
            >
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-1">
          <h5 class="font-[500] text-[24px] leading-[32px]">Giới thiệu về</h5>
          <img class="h-[57px]" src="~/assets/images/logo-2.png" alt="logo-2" />
          <p class="max-w-[523px] mt-6 text-black">
            Our mission is simple: to empower students like you to make informed
            decisions about your future by providing personalized career
            guidance and resources tailored to your unique interests, skills,
            and aspirations.
          </p>
        </div>
      </div>
    </div>
    <!-- INTRO -->
    <div class="container">
      <div
      class="xl:h-[400px] bg-[#EBEAE9] relative mt-[80px] flex flex-wrap gap-4 items-start justify-between p-8 rounded-[32px]"
    >
      <h4
        class="text-[40px] text-black font-semibold max-w-[410px]"
        style="line-height: 48px"
      >
        Học ngành này, <br />
        sau này làm nghề gì?
      </h4>
      <p class="lg:max-w-[523px] text-black">
        Bạn đang băn khoăn giữa các lựa chọn ngành nghề, không biết mình học
        ngành này thì sẽ làm những nghề nghiệp nào phù hợp với trình độ và sở
        thích của bản thân. Bắt đầu nhập thông tin để CIE có thể phân tích các
        nghề nghiệp phù hợp với bạn nhất
      </p>
    </div>
    </div>
    <!-- CONTACT -->
    <div class="container">
      <div class="relative mb-20 sm:mb-[200px] mt-[40px]">
      <div
        class="rounded-[32px] px-8 h-[318px] bg-no-repeat bg-center"
        style="
          background-size: cover;
          background-image: url('https://firebasestorage.googleapis.com/v0/b/gensi-8df36.appspot.com/o/banner-1.png?alt=media&token=41e96d30-d835-41ae-9aa1-e63439c67bd1');
        "
      >
        <div
          class="bg-[#000] opacity-20 rounded-[32px] left-0 z-10 absolute w-full h-[318px]"
        ></div>
        <div
          class="z-20 relative grid grid-cols-1 md:grid-cols-2 items-center justify-between h-[318px] gap-[40px]"
        >
          <div>
            <h5
              style="line-height: 42px"
              class="m-0 font-[500] text-[40px] text-white"
            >
              Explore your career
            </h5>
            <h5
              style="line-height: 42px"
              class="m-0 font-[500] text-[40px] text-white"
            >
              Unlock your new world
            </h5>
          </div>
          <div class="flex flex-col items-start gap-8">
            <p class="m-0 text-white">
              Hệ thống phân tích dữ liệu thông minh sử dụng AI Bắt đầu khám phá
              các nghề nghiệp phù hợp với bạn,
            </p>
            <div class="flex items-center justify-center gap-4">
              <nuxt-link to="/chi-tiet-nghe-nghiep/khoa-hoc-may-tinh">
                <a-button
                class="text-[#00237D] font-semibold !bg-white gap-1 !flex items-center justify-center !p-0 !w-[194px] !h-[48px] !rounded-3xl"
              >
                Khám phá ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                    stroke="#00237D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a-button>
              </nuxt-link>
              <nuxt-link to="/chi-tiet-nghe-nghiep/khoa-hoc-may-tinh">
                <a-button
                class="!bg-[#00237D] !border-[#00237D] !text-white !w-[194px] !h-[48px] !p-0 !rounded-3xl"
              >
                Tìm hiểu thêm
              </a-button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- FOOTER -->
    <Footer />
  </div>
</template>