import Link from "next/link";
import Layout from "../components/Layout";
import { cls } from "../libs/utils";
import Calendar from "react-calendar";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl pb-20 pt-16">
        <div className="px-7 py-3 text-lg font-bold">매치 개설</div>
        <div className="px-9 py-3 font-semibold">일정 등록</div>
        <div className="px-7">
          <div className="h-64 rounded-xl shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)]">
            {/* <Calendar locale='ko'/> */}
          </div>
        </div>
        <div className="mt-5 px-9 py-3 font-semibold">장소 등록</div>
        <div className="px-7">
          <div className="flex h-28 flex-col justify-between rounded-xl px-5 py-5 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row items-center rounded-full bg-[#F4F4F4] px-3">
              <svg
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-5 text-[#878787]"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                ></path>
              </svg>
              <input
                type="text"
                className="w-full border-0 bg-transparent text-sm focus:ring-0"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-medium text-[#626262]">
                유앤아이 스포츠 명지대점
              </div>
              <div className="text-sm text-[#BCBCBC]">취소</div>
            </div>
          </div>
        </div>
        <div className="mt-5 px-9 py-3 font-semibold">매치 정보 등록</div>
        <div className="px-7">
          <div className="h-64 rounded-xl px-5 py-5 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] sm:h-96">
            <textarea className="h-full w-full border-0 focus:ring-0" />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-10 px-7 py-10">
          <button className="rounded-xl bg-[#C2C2C2] px-5 py-2 text-white">
            돌아가기
          </button>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="rounded-xl bg-[#48CAF2] px-5 py-2 text-white"
          >
            개설하기
          </button>
        </div>
      </div>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center md:p-5">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
              >
                Yes I am sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                No cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
