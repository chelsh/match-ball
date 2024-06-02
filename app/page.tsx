import Link from "next/link";
import Layout from "./components/Layout";
import { cls } from "./libs/utils";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl pb-20 pt-24">
        <div className="fixed top-16 flex w-full max-w-6xl flex-row items-center justify-between px-5 py-5 sm:static">
          <div className="ml-3 text-lg font-bold">소셜 매치</div>
          <Link href="/match-open">
            <button className="rounded-md border-0 bg-[#3D80CF] px-2 py-1 text-xs text-white sm:text-base">
              매치 개설
            </button>
          </Link>
        </div>
        <div className="fixed top-32 w-full max-w-6xl px-5 pb-5 sm:static">
          <div className="h-32 rounded-md bg-yellow-400 shadow-sm" />
        </div>
        <div className="fixed top-64 mt-5 flex w-full max-w-6xl flex-row overflow-x-scroll px-1 scrollbar-hide sm:static">
          {[
            [13, "월"],
            [14, "화"],
            [15, "수"],
            [16, "목"],
            [17, "금"],
            [18, "토"],
            [19, "일"],
            [20, "월"],
            [21, "화"],
            [22, "수"],
          ].map((day, i) => (
            <button
              key={i}
              className={cls(
                "flex h-[8.5vh] flex-col items-center justify-between rounded-2xl border-0 px-5 py-3 text-sm focus:bg-[#95C3EE] focus:text-white focus:shadow-lg sm:px-7 sm:text-lg",
                day[1] === "일" ? "text-[#cf3d3d]" : "text-black",
              )}
            >
              {day[0]}
              <div className="text-xs sm:text-base">{day[1]}</div>
            </button>
          ))}
        </div>
        <div className="fixed top-80 mt-7 flex w-full max-w-6xl flex-row space-x-3 overflow-x-scroll px-5 py-3 scrollbar-hide sm:static sm:mt-3">
          {["지역", "실내외", "레벨", "성별"].map((filter, i) => (
            <button
              key={i}
              className="flex flex-row items-center justify-center whitespace-nowrap rounded-3xl border-[1.5px] border-zinc-300 px-3 py-1 text-sm text-zinc-400 hover:border-[#B5B5B5] hover:text-[#787878] focus:border-[#B5B5B5] focus:text-[#787878]"
            >
              <span className="mx-3">{filter}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          ))}
        </div>
        <div className="fixed bottom-0 h-[27rem] w-full max-w-6xl overflow-y-scroll sm:static sm:h-auto sm:overflow-visible">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((match, i) => (
            <div
              key={i}
              className="flex flex-row items-center border-b-[1px] py-3 sm:px-10"
            >
              <div className="flex items-center justify-center px-5 font-bold sm:px-8">
                09:00
              </div>
              <div className="flex flex-col space-y-3 sm:px-5">
                <div className="font-semibold">농구코트 이름</div>
                <div className="flex flex-row items-center justify-between space-x-7 text-xs text-[#848484]">
                  <span>5 vs 5</span>
                  <span>성별</span>
                  <span>레벨</span>
                </div>
              </div>
              <div className="ml-auto flex items-center justify-center px-5">
                <Link href="/match-info">
                  <button className="mx-auto rounded-lg bg-[#48CAF2] px-5 py-2 text-xs text-white hover:bg-[#47b1d1] sm:px-7 sm:text-base">
                    참여 가능
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
