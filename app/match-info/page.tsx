import Link from "next/link";
import Layout from "../components/Layout";
import { cls } from "../libs/utils";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl pb-20 pt-16">
        <div className="fixed top-20 w-full max-w-6xl px-5 pb-5 shadow-[0_8px_10px_-3px_rgba(0,0,0,0.1)] sm:static sm:pt-6">
          <div className="h-44 rounded-xl bg-yellow-400 shadow-sm" />
          <div className="pt-5 text-xl font-bold">유앤아이 스포츠 명지대점</div>
          <div className="w-full border-b-2 py-3 text-xs text-[#7A7A7A]">
            서울 서대문구 가좌로 85
          </div>
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <span className="font-semibold">5월 16일 (목) 9::00</span>
            <button className="rounded-lg bg-[#48CAF2] px-4 py-2 text-sm text-white">
              신청하기
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 h-96 w-full overflow-y-scroll sm:static sm:overflow-visible">
          <div className="px-7 py-3 text-lg font-bold">매치 정보</div>
          <div className="flex w-full flex-col space-y-5 border-b-4 border-b-gray-200 px-7 py-3">
            <div className="flex w-full flex-row items-center text-sm text-[#595959]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 mr-5 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              <span className="w-24">모든 레벨</span>
              <span>레벨에 상관없이 참여 가능해요</span>
            </div>
            <div className="flex w-full flex-row items-center text-sm text-[#595959]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 mr-5 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="w-24">모든 성별</span>
              <span>성별에 상관없이 참여 가능해요</span>
            </div>
            <div className="flex w-full flex-row items-center text-sm text-[#595959]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 mr-5 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <span className="w-24">20~30대</span>
              <span>주로 20~30대가 신청했어요</span>
            </div>
            <div className="flex w-full flex-row items-center text-sm text-[#595959]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 mr-5 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              <span className="w-24">5 vs 5</span>
              <span>5 vs 5 / 2파전으로 진행돼요</span>
            </div>
          </div>
          <div className="px-7 py-3 text-lg font-bold">매치 데이터</div>
          <div className="w-full border-b-4 border-b-gray-200 px-7 py-3">
            <div className="px-3 text-sm font-semibold">레벨 분포</div>
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">초급</div>
                <div className="h-5 w-full overflow-hidden rounded-r-full border-2">
                  <div className="h-full w-2/3 rounded-r-full bg-orange-400" />
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">중급</div>
                <div className="h-5 w-full overflow-hidden rounded-r-full border-2">
                  <div className="h-full w-2/3 rounded-r-full bg-orange-400" />
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">고급</div>
                <div className="h-5 w-full overflow-hidden rounded-r-full border-2">
                  <div className="h-full w-2/3 rounded-r-full bg-orange-400" />
                </div>
              </div>
            </div>
            <div className="px-3 py-5 text-sm font-semibold">스탯 분포</div>
            <div className="h-80 w-full rounded-xl bg-slate-300" />
          </div>
          <div className="px-7 py-3 text-lg font-bold">구장 정보</div>
        </div>
      </div>
    </Layout>
  );
}
