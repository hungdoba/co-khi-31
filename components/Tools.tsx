'use client';
import { useState, useRef } from 'react';
import Transition from '../utils/Transition';
import Image from 'next/image';

export default function Tools() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab - 1]) {
  //     tabs.current.style.height =
  //       tabs.current.children[tab - 1].offsetHeight + 'px';
  //   }
  // };

  // useEffect(() => {
  //   heightFix();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab]);

  return (
    <section id="thiet-bi" className="relative scroll-mt-16">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Danh sách thiết bị</h1>
            <p className="text-xl text-gray-600">
              Hiện tại xưởng chúng tôi có nhiều thiết bị hiện đại được nhập khẩu
              từ Nhật và Đức. Đảm bảo chất lượng và đáp ứng mọi nhu cầu về gia
              công. Chúng tôi sẽ tiếp tục mua thêm thiết bị mới để phục vụ khách
              hàng tốt nhất.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-0"
              data-aos="fade-right"
            >
              <div className="mb-8 md:mb-0">
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Máy tiện
                    </div>
                    <div className="text-gray-600">
                      Máy dùng để gia công các chi tiết có hình trụ hoặc hình
                      cầu bằng cách quay phôi và cắt gọt bằng dao cắt.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Máy phay CNC
                    </div>
                    <div className="text-gray-600">
                      Máy gia công chính xác với trục XYZ để tạo ra các chi tiết
                      phức tạp theo bản vẽ.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Máy hàn TIG/MIG/MAX
                    </div>
                    <div className="text-gray-600">
                      Máy sử dụng nhiệt để hàn kim loại, phù hợp cho các mối nối
                      chắc chắn và thẩm mỹ cao.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Máy cắt dây
                    </div>
                    <div className="text-gray-600">
                      Máy dùng để cắt các chi tiết kim loại theo bản vẽ, độ
                      chính xác cao.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src="/tools/lathe.jpg"
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src="/tools/cnc.jpg"
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src="/tools/welding.jpg"
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src="/tools/cutting.jpg"
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
