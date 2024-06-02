"use client";
import Link from "next/link";
import Layout from "../components/Layout";
import { cls } from "../libs/utils";
import Calendar from "react-calendar";
import "../styles/calendar.css";
import moment from "moment";
import "moment/locale/ko";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl pb-20 pt-16">
        <div className="px-7 py-3 text-lg font-bold">매치 개설</div>
        <div className="px-9 py-3 font-semibold">일정 등록</div>
        <div className="px-7">
          <div className="rounded-xl shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)]">
            <Calendar
              calendarType="gregory"
              locale="ko"
              formatDay={(locale, date) => moment(date).format("D")}
              showNeighboringMonth={false}
              formatMonthYear={(locale, date) =>
                moment(date).format("YYYY. MM")
              }
              formatYear={(locale, date) => moment(date).format("YYYY")}
              minDetail="year"
              className="react-calendar"
              prev2Label={null}
              next2Label={null}
            />
          </div>
        </div>
        <div className="mt-5 px-9 py-3 font-semibold">장소 등록</div>
        <div className="px-7">
          <div className="flex h-28 flex-col justify-between rounded-xl px-5 py-5 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row items-center rounded-full bg-[#F4F4F4] px-3 hover:bg-[#FAFAFA]">
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
            <textarea className="resize-none h-full w-full border-0 focus:ring-0" />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-10 px-7 py-10">
          <button className="rounded-xl bg-[#C2C2C2] px-5 py-2 text-white">
            돌아가기
          </button>
          <button className="rounded-xl bg-[#48CAF2] px-5 py-2 text-white">
            개설하기
          </button>
        </div>
      </div>
    </Layout>
  );
}
