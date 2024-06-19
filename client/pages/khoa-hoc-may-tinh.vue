<template>
  <div>
    <!--HEADING -->
    <div class="flex flex-col items-center justify-center gap-8 mt-8">
      <div
        class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-[8px]"
      >
        <p class="m-0 text-[#000]">Kết quả đánh giá</p>
      </div>
      <h1 class="text-center font-[600] text-[#000] text-[24px] sm:text-[40px]">
        Khoa học máy tính
      </h1>
      <p class="text-center text-[18px] font-[400]">
        Là lĩnh vực phù hợp với bạn, các vị trí nghề nghiệp cụ thể của ngành<br />
        mà bạn có thể làm được liệt kê dưới đây
      </p>
    </div>
    <!-- FEATURE -->
    <div class="container max-w-[1200px] mx-auto px-4 py-14 w-full relative">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="rounded-[12px] bg-[#F4F2F0] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-[#000] text-2xl font-[600]">
            1. Kỹ sư<br />Khoa học dữ liệu
          </h5>
          <p class="m-0 text-[#8B898C] font-[400]">
            Người thực hành thiết kế và xây dựng các hệ thống để thu thập, lưu
            trữ và phân tích dữ liệu trên quy mô lớn.
          </p>
        </div>
        <div class="rounded-[12px] bg-[#00237D] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-white text-2xl font-[600] ">
            2. Kiến trúc sư<br />Dữ liệu
          </h5>
          <p class="m-0 text-white font-light">
            Đảm bảo rằng dữ liệu được định dạng tốt và có thể truy cập được, cải
            thiện hiệu suất của các data pipelines.
          </p>
        </div>
        <div class="rounded-[12px] sm:col-span-2 bg-[#F4F2F0] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full flex-col justify-end"
          style="
            background-size: cover;
            background-image: url('https://firebasestorage.googleapis.com/v0/b/gensi-8df36.appspot.com/o/Rectangle%204388.png?alt=media&token=2456edaf-1b38-48ce-b469-13ff553402d3');
          "
        >
          <h5 class="text-white text-2xl font-[600] ">Khoa học dữ liệu</h5>
          <p class="m-0 text-white font-light">
            Khoa học máy tính là ngành nghiên cứu các cơ sở lý thuyết về thông
            tin và tính toán cùng sự thực hiện và ứng dụng của chúng trong các
            hệ thống máy tính.
          </p>
        </div>
        <div class="rounded-[12px] bg-[#00237D] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-white text-2xl font-[600] ">
            3. Kỹ sư Dữ liệu<br />- Data Engineer
          </h5>
          <p class="m-0 text-white font-light">
            Xử lý hàng loạt dữ liệu được thu thập và khớp định dạng với dữ liệu
            được lưu trữ.
          </p>
        </div>
        <div class="rounded-[12px] bg-[#F4F2F0] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-[#000] text-2xl font-[600]">
            4. Kỹ sư Học máy -<br />Machine Learning Engineer
          </h5>
          <p class="m-0 text-[#8B898C] font-[400]">
            Thiết kế và xây dựng các hệ thống học máy, và chạy các bài kiểm tra
            hệ thống.
          </p>
        </div>
        <div class="rounded-[12px] bg-[#00237D] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-white text-2xl font-[600] ">
            5. Quản trị cơ sở <br />dữ liệu -Database Admin
          </h5>
          <p class="m-0 text-white font-light">
            Quản lý hệ thống cơ sở dữ liệu, giám sát hoạt động, theo dõi các dữ
            liệu, tạo các bản sao lưu và khôi phục.
          </p>
        </div>
        <div class="rounded-[12px] bg-[#00237D] border-[1px] border-[#EBEAE9] h-[260px] p-6 flex flex-wrap w-full items-start flex-col justify-between">
          <h5 class="text-white text-2xl font-[600] ">
            6. Lập trình viên<br />BI - Business Intelligence Dev
          </h5>
          <p class="m-0 text-white font-light">
            Thiết kế và phát triển các chiến lược giúp người dùng doanh nghiệp
            tìm thấy thông tin để đưa ra quyết định.
          </p>
        </div>
      </div>
    </div>
    <!-- CATEGORIES -->
    <div class="bg-white">
      <div class="max-w-[1200px] mx-auto px-4 py-14 w-full relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pb-12">
          <div>
            <div
              class="flex items-center gap-4 bg-[#FBFAF9] justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#EBEAE9] py-[8px]"
            >
              <p class="m-0 text-[#000]">Giới thiệu</p>
            </div>
            <h4 class="font-[700] text-[#000] text-[40px] mt-6 leading-[44px]">
              Ngành<br />
              Khoa học máy tính
            </h4>
          </div>
          <div>
            <h6 class="font-[600] text-2xl text-[#000] ">
              Khoa học máy tính (tiếng Anh: Computer Science) là ngành nghiên cứu các cơ sở lý thuyết về thông tin và tính toán cùng sự thực hiện và ứng dụng của chúng trong các hệ thống máy tính. 
            </h6>
            <p class="text-[#8B898C] font-[400] mt-8">
              Khoa học máy tính là cách tiếp cận khoa học và thực tiễn để tính toán và các ứng dụng của nó và nghiên cứu có hệ thống về tính khả thi, cấu trúc, biểu hiện và cơ giới hóa các thủ tục (hoặc các thuật toán) cơ bản làm cơ sở cho việc thu thập, đại diện, xử lý, lưu trữ, truyền thông và truy cập thông tin. 
            </p>
            <p class="text-[#8B898C] font-[400] mt-8">
              Nói cách khác, khoa học máy tính là nghiên cứu về các quy trình thuật toán tự động hóa mà có thể nhân rộng trên quy mô lớn. Một nhà khoa học máy tính là chuyên gia về lý thuyết tính toán và thiết kế các hệ thống tính toán.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- CATEGORIES -->
    <div class="bg-[#FBFAF9]">
      <div class="max-w-[1200px] mx-auto px-4 py-14 w-full relative">
        <div
          class="flex items-center bg-white justify-center w-fit px-[20px] rounded-[20px] border-[1px] border-[#ebeae9] py-[8px]"
        >
          <p class="m-0 text-[#000]">Tương tự</p>
        </div>
        <h4 class="font-[700] text-[#000] text-[40px] mt-6">Các ngành con</h4>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pb-12">
          <div
            v-for="e in 9"
            :key="e"
            class="rounded-[12px] flex items-start justify-between p-4 bg-white"
          >
            <div>
              <h6 class="text-[#000] text-[18px] font-[500] mb-[2px]">
                Kỹ sư Học máy
              </h6>
              <p class="text-[#000] text-[14px]">Machine Learning Engineer</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.5 16.5L16.5 1.5M16.5 1.5L5.25 1.5M16.5 1.5V12.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <Footer />
  </div>
</template>
