<template>
  <div>
    <div class="container p-8">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-4">
            <SideJobs />
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="flex justify-start items-start">
            <h4
              class="text-[40px] text-black font-semibold"
              style="line-height: 48px"
            >
              So sánh nghề nghiệp
            </h4>
          </div>
          <div
            class="flex items-center justify-between max-w-[250px] mt-6 ml-4"
          >
            <div class="flex items-center">
              <span class="text-[#8B898C] mr-2">Không phù hợp</span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8 22.1C10.51 22.1 10.22 22.05 9.95004 21.95C8.70004 21.54 7.90004 20.16 8.18004 18.88L8.67004 15.73C8.68004 15.66 8.68004 15.56 8.61004 15.48C8.56004 15.43 8.49004 15.4 8.41004 15.4H4.41004C3.43004 15.4 2.58004 14.99 2.08004 14.28C1.59004 13.59 1.49004 12.68 1.81004 11.8L4.20004 4.52002C4.57004 3.07002 6.12004 1.90002 7.72004 1.90002H11.52C12.08 1.90002 13.3 2.07002 13.95 2.72002L16.98 5.06002L16.06 6.25002L12.96 3.85002C12.71 3.60002 12.08 3.40002 11.52 3.40002H7.72004C6.82004 3.40002 5.85004 4.12002 5.65004 4.93002L3.23004 12.28C3.07004 12.72 3.10004 13.12 3.31004 13.41C3.53004 13.72 3.93004 13.9 4.42004 13.9H8.42004C8.94004 13.9 9.42004 14.12 9.75004 14.5C10.09 14.89 10.24 15.41 10.16 15.95L9.66004 19.16C9.54004 19.72 9.92004 20.35 10.46 20.53C10.94 20.71 11.58 20.45 11.8 20.13L15.9 14.03L17.14 14.87L13.04 20.97C12.57 21.67 11.68 22.1 10.8 22.1Z"
                    fill="#8B898C"
                  />
                  <path
                    d="M19.6201 18.1H18.6201C16.7701 18.1 15.8701 17.23 15.8701 15.45V5.65C15.8701 3.87 16.7701 3 18.6201 3H19.6201C21.4701 3 22.3701 3.87 22.3701 5.65V15.45C22.3701 17.23 21.4701 18.1 19.6201 18.1ZM18.6201 4.5C17.5301 4.5 17.3701 4.76 17.3701 5.65V15.45C17.3701 16.34 17.5301 16.6 18.6201 16.6H19.6201C20.7101 16.6 20.8701 16.34 20.8701 15.45V5.65C20.8701 4.76 20.7101 4.5 19.6201 4.5H18.6201Z"
                    fill="#8B898C"
                  /></svg
              ></span>
            </div>
            <div class="flex items-center">
              <span class="text-[#8B898C] mr-2">Phù hợp</span>
              <span class="rotate-180"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8 22.1C10.51 22.1 10.22 22.05 9.95004 21.95C8.70004 21.54 7.90004 20.16 8.18004 18.88L8.67004 15.73C8.68004 15.66 8.68004 15.56 8.61004 15.48C8.56004 15.43 8.49004 15.4 8.41004 15.4H4.41004C3.43004 15.4 2.58004 14.99 2.08004 14.28C1.59004 13.59 1.49004 12.68 1.81004 11.8L4.20004 4.52002C4.57004 3.07002 6.12004 1.90002 7.72004 1.90002H11.52C12.08 1.90002 13.3 2.07002 13.95 2.72002L16.98 5.06002L16.06 6.25002L12.96 3.85002C12.71 3.60002 12.08 3.40002 11.52 3.40002H7.72004C6.82004 3.40002 5.85004 4.12002 5.65004 4.93002L3.23004 12.28C3.07004 12.72 3.10004 13.12 3.31004 13.41C3.53004 13.72 3.93004 13.9 4.42004 13.9H8.42004C8.94004 13.9 9.42004 14.12 9.75004 14.5C10.09 14.89 10.24 15.41 10.16 15.95L9.66004 19.16C9.54004 19.72 9.92004 20.35 10.46 20.53C10.94 20.71 11.58 20.45 11.8 20.13L15.9 14.03L17.14 14.87L13.04 20.97C12.57 21.67 11.68 22.1 10.8 22.1Z"
                    fill="#8B898C"
                  />
                  <path
                    d="M19.6201 18.1H18.6201C16.7701 18.1 15.8701 17.23 15.8701 15.45V5.65C15.8701 3.87 16.7701 3 18.6201 3H19.6201C21.4701 3 22.3701 3.87 22.3701 5.65V15.45C22.3701 17.23 21.4701 18.1 19.6201 18.1ZM18.6201 4.5C17.5301 4.5 17.3701 4.76 17.3701 5.65V15.45C17.3701 16.34 17.5301 16.6 18.6201 16.6H19.6201C20.7101 16.6 20.8701 16.34 20.8701 15.45V5.65C20.8701 4.76 20.7101 4.5 19.6201 4.5H18.6201Z"
                    fill="#8B898C"
                  /></svg
              ></span>
            </div>
          </div>
          <div class="p-6 rounded-3xl border-[1px] border-[#ebeae9] bg-[#FBFAF9] mt-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold mb-4 text-[18px]">Kỹ sư Khoa học dữ liệu</h6>
                <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.21"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                  fill="#8280FF"
                />
                <path
                  opacity="0.587821"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26685 9.33328C8.26685 10.5115 9.22197 11.4666 10.4002 11.4666C11.5784 11.4666 12.5335 10.5115 12.5335 9.33328C12.5335 8.15508 11.5784 7.19995 10.4002 7.19995C9.22197 7.19995 8.26685 8.15508 8.26685 9.33328ZM13.6002 11.4667C13.6002 12.3504 14.3166 13.0667 15.2002 13.0667C16.0839 13.0667 16.8002 12.3504 16.8002 11.4667C16.8002 10.583 16.0839 9.8667 15.2002 9.8667C14.3166 9.8667 13.6002 10.583 13.6002 11.4667Z"
                  fill="#8280FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3912 12.5333C7.87312 12.5333 5.80717 13.8275 5.60045 16.3729C5.58918 16.5116 5.85434 16.8 5.9881 16.8H14.7983C15.199 16.8 15.2052 16.4776 15.199 16.3733C15.0427 13.7564 12.9447 12.5333 10.3912 12.5333ZM18.1099 16.8001H16.0534V16.8C16.0534 15.5996 15.6568 14.4917 14.9874 13.6004C16.8042 13.6203 18.2876 14.5389 18.3993 16.4801C18.4037 16.5583 18.3993 16.8001 18.1099 16.8001Z"
                  fill="#8280FF"
                />
              </svg>
              <h6 class="text-[15px] font-semibold">Mô tả nghề nghiệp</h6>
            </div>
            <p class="text-[15px] font-[400] mt-2">
            Kỹ sư Khoa học dữ liệu (Data Science Engineer): Là người thực
            hành thiết kế và xây dựng các hệ thống để thu thập, lưu trữ và
            phân tích dữ liệu trên quy mô lớn. Đây là một lĩnh vực rộng lớn
            với các ứng dụng trong mọi ngành công nghiệp. Các tổ chức có khả
            năng thu thập lượng dữ liệu khổng lồ và họ cần đúng người cũng
            như công nghệ để đảm bảo dữ liệu ở trạng thái có thể sử dụng cao
            vào thời điểm dữ liệu đến tay các nhà khoa học và nhà phân tích
            dữ liệu.
            </p>
            </div>

            <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#00CC65"/>
<path d="M7.64435 16.3556H16.9777C17.3213 16.3556 17.5999 16.6342 17.5999 16.9778C17.5999 17.3214 17.3213 17.6 16.9777 17.6H7.02212C6.67848 17.6 6.3999 17.3214 6.3999 16.9778V7.02225C6.3999 6.6786 6.67848 6.40002 7.02212 6.40002C7.36577 6.40002 7.64435 6.6786 7.64435 7.02225V16.3556Z" fill="#00CC65"/>
<path opacity="0.5" d="M9.96483 13.6701C9.7298 13.9208 9.33603 13.9335 9.08533 13.6985C8.83463 13.4635 8.82193 13.0697 9.05696 12.819L11.3903 10.3301C11.6176 10.0877 11.9953 10.0666 12.2481 10.2824L14.0897 11.8539L16.4892 8.81457C16.7021 8.54485 17.0934 8.49882 17.3631 8.71176C17.6328 8.92469 17.6789 9.31596 17.4659 9.58569L14.6659 13.1324C14.4472 13.4094 14.0421 13.4492 13.7737 13.2201L11.892 11.6145L9.96483 13.6701Z" fill="#00CC65"/>
</svg>
              <h6 class="text-[15px] font-semibold">Mức lương</h6>
            </div>
              <p class="text-[15px] font-[400] mt-2">
                Từ $1000 - $4000/tháng
              </p>
            </div>
            <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#FEC53D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.72654L11.1602 12.7058C11.2158 12.7379 11.274 12.761 11.3333 12.7757V18.5538L6.36803 15.6154C6.13991 15.4804 6 15.235 6 14.9699V9.72654ZM18 9.64734V14.9699C18 15.235 17.8601 15.4804 17.632 15.6154L12.6667 18.5538V12.7251C12.6787 12.7191 12.6907 12.7126 12.7026 12.7058L18 9.64734Z" fill="#FEC53D"/>
<path opacity="0.499209" fill-rule="evenodd" clip-rule="evenodd" d="M6.16211 8.28052C6.22514 8.20093 6.30469 8.13366 6.39745 8.08426L11.6474 5.28799C11.8678 5.1706 12.1322 5.1706 12.3526 5.28799L17.6026 8.08426C17.6741 8.12234 17.7378 8.17104 17.792 8.22781L12.036 11.5511C11.9981 11.5729 11.9632 11.5979 11.9314 11.6256C11.8996 11.5979 11.8647 11.5729 11.8269 11.5511L6.16211 8.28052Z" fill="#FEC53D"/>
</svg>
              <h6 class="text-[15px] font-semibold">Các tổ chức có tuyển dụng vị trí này</h6>
            </div>
              <p class="text-[15px] font-[400] mt-2">
                Tập đoàn Viễn thông quân đội Việt Nam, Tập đoàn Bưu chính Viễn thông Việt Nam, Tập đoàn Vingroup, Tập đoàn FPT, các công ty trong và ngoài nước.
              </p>
            </div>
            <div>
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#FF9066"/>
<path opacity="0.78" fill-rule="evenodd" clip-rule="evenodd" d="M10.9109 9.22231C10.9295 9.01342 11.1044 8.85327 11.3141 8.85327C11.5198 8.85327 11.6927 9.00743 11.7163 9.2117L12.0406 12.0251L14.413 13.2011C14.5276 13.2579 14.6001 13.3747 14.6001 13.5027C14.6001 13.7199 14.3974 13.8802 14.186 13.8302L10.9992 13.0763C10.7574 13.0191 10.5943 12.793 10.6162 12.5455L10.9109 9.22231Z" fill="#FF9066"/>
<path opacity="0.901274" fill-rule="evenodd" clip-rule="evenodd" d="M8.59341 5.17892C8.3293 4.86417 7.81936 4.98465 7.72403 5.38431L7.12934 7.87746C7.05167 8.20311 7.30974 8.51161 7.64399 8.49267L10.2087 8.34733C10.6196 8.32404 10.828 7.84201 10.5635 7.52673L10.0184 6.87716C10.5841 6.68386 11.184 6.58291 11.8 6.58291C14.8402 6.58291 17.3047 9.04747 17.3047 12.0877C17.3047 15.1278 14.8402 17.5924 11.8 17.5924C8.7598 17.5924 6.29524 15.1278 6.29524 12.0877C6.29524 11.5773 6.36435 11.0774 6.49911 10.597L5.25201 10.2472C5.08781 10.8325 5 11.4498 5 12.0877C5 15.8432 8.04446 18.8876 11.8 18.8876C15.5555 18.8876 18.6 15.8432 18.6 12.0877C18.6 8.33213 15.5555 5.28767 11.8 5.28767C10.8554 5.28767 9.95581 5.48026 9.13832 5.82833L8.59341 5.17892Z" fill="#FF9066"/>
</svg>
              <h6 class="text-[15px] font-semibold">Yêu cầu kiến thức, kỹ năng</h6>
            </div>
              <p class="text-[15px] font-[400]">
                <ul class="pl-6 mt-2" style="list-style-type: disc">
                    <li>Có khả năng thu thập dữ liệu, các thông tin liên quan cho việc xây dựng các hệ thống thông minh.</li>
                    <li>Tiền xử lý dữ liệu, làm sạch dữ liệu, và trực quan hóa dữ liệu.</li>
                    <li>Lựa chọn đặc trưng, xây dựng và tối ưu các mô hình phân tích dữ liệu sử dụng các kỹ thuật học máy.</li>
                    <li>Đánh giá tính hiệu quả của các mô hình phân tích dữ liệu.</li>
                    <li>Áp dụng các tri thức đã học để phát triển và giải quyết các vấn đề chính trong các dự án về phân tích dữ liệu.</li>
                </ul>
              </p>
            </div>
              </div>
              <div>
                <div class="mb-6">
                  <a-select class="w-full" default-value="khoa-hoc-du-lieu" size="large">
                  <a-select-option value="ung-dung-robot">
                    Ứng dụng Robot
                  </a-select-option>
                  <a-select-option value="khoa-hoc-du-lieu">
                    Khoa học dữ liệu
                  </a-select-option>
                </a-select>
                </div>
                <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.21"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                  fill="#8280FF"
                />
                <path
                  opacity="0.587821"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26685 9.33328C8.26685 10.5115 9.22197 11.4666 10.4002 11.4666C11.5784 11.4666 12.5335 10.5115 12.5335 9.33328C12.5335 8.15508 11.5784 7.19995 10.4002 7.19995C9.22197 7.19995 8.26685 8.15508 8.26685 9.33328ZM13.6002 11.4667C13.6002 12.3504 14.3166 13.0667 15.2002 13.0667C16.0839 13.0667 16.8002 12.3504 16.8002 11.4667C16.8002 10.583 16.0839 9.8667 15.2002 9.8667C14.3166 9.8667 13.6002 10.583 13.6002 11.4667Z"
                  fill="#8280FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3912 12.5333C7.87312 12.5333 5.80717 13.8275 5.60045 16.3729C5.58918 16.5116 5.85434 16.8 5.9881 16.8H14.7983C15.199 16.8 15.2052 16.4776 15.199 16.3733C15.0427 13.7564 12.9447 12.5333 10.3912 12.5333ZM18.1099 16.8001H16.0534V16.8C16.0534 15.5996 15.6568 14.4917 14.9874 13.6004C16.8042 13.6203 18.2876 14.5389 18.3993 16.4801C18.4037 16.5583 18.3993 16.8001 18.1099 16.8001Z"
                  fill="#8280FF"
                />
              </svg>
              <h6 class="text-[15px] font-semibold">Mô tả nghề nghiệp</h6>
            </div>
            <p class="text-[15px] font-[400] mt-2">
            Kỹ sư Khoa học dữ liệu (Data Science Engineer): Là người thực
            hành thiết kế và xây dựng các hệ thống để thu thập, lưu trữ và
            phân tích dữ liệu trên quy mô lớn. Đây là một lĩnh vực rộng lớn
            với các ứng dụng trong mọi ngành công nghiệp. Các tổ chức có khả
            năng thu thập lượng dữ liệu khổng lồ và họ cần đúng người cũng
            như công nghệ để đảm bảo dữ liệu ở trạng thái có thể sử dụng cao
            vào thời điểm dữ liệu đến tay các nhà khoa học và nhà phân tích
            dữ liệu.
            </p>
            </div>

            <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#00CC65"/>
<path d="M7.64435 16.3556H16.9777C17.3213 16.3556 17.5999 16.6342 17.5999 16.9778C17.5999 17.3214 17.3213 17.6 16.9777 17.6H7.02212C6.67848 17.6 6.3999 17.3214 6.3999 16.9778V7.02225C6.3999 6.6786 6.67848 6.40002 7.02212 6.40002C7.36577 6.40002 7.64435 6.6786 7.64435 7.02225V16.3556Z" fill="#00CC65"/>
<path opacity="0.5" d="M9.96483 13.6701C9.7298 13.9208 9.33603 13.9335 9.08533 13.6985C8.83463 13.4635 8.82193 13.0697 9.05696 12.819L11.3903 10.3301C11.6176 10.0877 11.9953 10.0666 12.2481 10.2824L14.0897 11.8539L16.4892 8.81457C16.7021 8.54485 17.0934 8.49882 17.3631 8.71176C17.6328 8.92469 17.6789 9.31596 17.4659 9.58569L14.6659 13.1324C14.4472 13.4094 14.0421 13.4492 13.7737 13.2201L11.892 11.6145L9.96483 13.6701Z" fill="#00CC65"/>
</svg>
              <h6 class="text-[15px] font-semibold">Mức lương</h6>
            </div>
              <p class="text-[15px] font-[400] mt-2">
                Từ $1000 - $4000/tháng
              </p>
            </div>
            <div class="mb-6">
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#FEC53D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.72654L11.1602 12.7058C11.2158 12.7379 11.274 12.761 11.3333 12.7757V18.5538L6.36803 15.6154C6.13991 15.4804 6 15.235 6 14.9699V9.72654ZM18 9.64734V14.9699C18 15.235 17.8601 15.4804 17.632 15.6154L12.6667 18.5538V12.7251C12.6787 12.7191 12.6907 12.7126 12.7026 12.7058L18 9.64734Z" fill="#FEC53D"/>
<path opacity="0.499209" fill-rule="evenodd" clip-rule="evenodd" d="M6.16211 8.28052C6.22514 8.20093 6.30469 8.13366 6.39745 8.08426L11.6474 5.28799C11.8678 5.1706 12.1322 5.1706 12.3526 5.28799L17.6026 8.08426C17.6741 8.12234 17.7378 8.17104 17.792 8.22781L12.036 11.5511C11.9981 11.5729 11.9632 11.5979 11.9314 11.6256C11.8996 11.5979 11.8647 11.5729 11.8269 11.5511L6.16211 8.28052Z" fill="#FEC53D"/>
</svg>
              <h6 class="text-[15px] font-semibold">Các tổ chức có tuyển dụng vị trí này</h6>
            </div>
              <p class="text-[15px] font-[400] mt-2">
                Tập đoàn Viễn thông quân đội Việt Nam, Tập đoàn Bưu chính Viễn thông Việt Nam, Tập đoàn Vingroup, Tập đoàn FPT, các công ty trong và ngoài nước.
              </p>
            </div>
            <div>
                <div class="flex items-center justify-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#FF9066"/>
<path opacity="0.78" fill-rule="evenodd" clip-rule="evenodd" d="M10.9109 9.22231C10.9295 9.01342 11.1044 8.85327 11.3141 8.85327C11.5198 8.85327 11.6927 9.00743 11.7163 9.2117L12.0406 12.0251L14.413 13.2011C14.5276 13.2579 14.6001 13.3747 14.6001 13.5027C14.6001 13.7199 14.3974 13.8802 14.186 13.8302L10.9992 13.0763C10.7574 13.0191 10.5943 12.793 10.6162 12.5455L10.9109 9.22231Z" fill="#FF9066"/>
<path opacity="0.901274" fill-rule="evenodd" clip-rule="evenodd" d="M8.59341 5.17892C8.3293 4.86417 7.81936 4.98465 7.72403 5.38431L7.12934 7.87746C7.05167 8.20311 7.30974 8.51161 7.64399 8.49267L10.2087 8.34733C10.6196 8.32404 10.828 7.84201 10.5635 7.52673L10.0184 6.87716C10.5841 6.68386 11.184 6.58291 11.8 6.58291C14.8402 6.58291 17.3047 9.04747 17.3047 12.0877C17.3047 15.1278 14.8402 17.5924 11.8 17.5924C8.7598 17.5924 6.29524 15.1278 6.29524 12.0877C6.29524 11.5773 6.36435 11.0774 6.49911 10.597L5.25201 10.2472C5.08781 10.8325 5 11.4498 5 12.0877C5 15.8432 8.04446 18.8876 11.8 18.8876C15.5555 18.8876 18.6 15.8432 18.6 12.0877C18.6 8.33213 15.5555 5.28767 11.8 5.28767C10.8554 5.28767 9.95581 5.48026 9.13832 5.82833L8.59341 5.17892Z" fill="#FF9066"/>
</svg>
              <h6 class="text-[15px] font-semibold">Yêu cầu kiến thức, kỹ năng</h6>
            </div>
              <p class="text-[15px] font-[400]">
                <ul class="pl-6 mt-2" style="list-style-type: disc">
                    <li>Có khả năng thu thập dữ liệu, các thông tin liên quan cho việc xây dựng các hệ thống thông minh.</li>
                    <li>Tiền xử lý dữ liệu, làm sạch dữ liệu, và trực quan hóa dữ liệu.</li>
                    <li>Lựa chọn đặc trưng, xây dựng và tối ưu các mô hình phân tích dữ liệu sử dụng các kỹ thuật học máy.</li>
                    <li>Đánh giá tính hiệu quả của các mô hình phân tích dữ liệu.</li>
                    <li>Áp dụng các tri thức đã học để phát triển và giải quyết các vấn đề chính trong các dự án về phân tích dữ liệu.</li>
                </ul>
              </p>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
