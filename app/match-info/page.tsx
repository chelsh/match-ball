import Link from "next/link";
import Layout from "../components/Layout";
import { cls } from "../libs/utils";
import "../styles/polygon.css";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl pb-20 pt-16">
        <div className="fixed top-20 w-full max-w-6xl px-5 pb-4 shadow-[0_8px_10px_-3px_rgba(0,0,0,0.1)] sm:static sm:pt-6">
          <div className="h-44 rounded-xl bg-yellow-400 shadow-sm" />
          <div className="pt-5 text-xl font-bold">유앤아이 스포츠 명지대점</div>
          <div className="w-full border-b-2 py-3 text-xs text-[#7A7A7A]">
            서울 서대문구 가좌로 85
          </div>
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <span className="font-semibold">5월 16일 (목) 9::00</span>
            <button className="rounded-lg bg-[#48CAF2] px-4 py-2 text-sm text-white sm:px-7 sm:text-base">
              신청하기
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 h-[50%] w-full overflow-y-scroll sm:static sm:h-auto sm:overflow-visible">
          <div className="px-7 pb-3 pt-5 text-lg font-bold">매치 정보</div>
          <div className="flex w-full flex-col space-y-5 border-b-4 border-b-gray-200 px-7 pt-3 pb-7">
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
          <div className="px-7 pb-3 pt-5 text-lg font-bold">매치 데이터</div>
          <div className="w-full border-b-4 border-b-gray-200 px-7 py-3">
            <div className="px-3 text-sm font-semibold">레벨 분포</div>
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">초급</div>
                <div className="w-full">
                  <div className="h-4 w-full overflow-hidden rounded-r-full border-2" />
                  <div className="absolute -mt-4 h-4 w-1/3 rounded-r-full bg-orange-400" />
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">중급</div>
                <div className="w-full">
                  <div className="h-4 w-full overflow-hidden rounded-r-full border-2" />
                  <div className="absolute -mt-4 h-4 w-1/3 rounded-r-full bg-orange-400" />
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-center">
                <div className="whitespace-nowrap px-5 text-xs">고급</div>
                <div className="w-full">
                  <div className="h-4 w-full overflow-hidden rounded-r-full border-2" />
                  <div className="absolute -mt-4 h-4 w-2/4 rounded-r-full bg-orange-400" />
                </div>
              </div>
            </div>
            <div className="px-3 py-5 text-sm font-semibold">스탯 분포</div>
            <div className="w-full pb-10">
              <div className="clip-custom mx-auto aspect-square h-40 rotate-[22.5deg] bg-gray-500 sm:h-60">
                <div className="clip-custom mx-auto aspect-square h-40 bg-yellow-400 sm:h-60"></div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-4 border-b-gray-200 px-8 pb-5 pt-5">
            <div className="text-lg font-bold">구장 정보</div>
            <div className="order-1 grid grid-flow-row grid-cols-2 gap-5 border-b-2 border-b-gray-200 pb-8 pt-5 text-xs text-[#595959]">
              {[
                ["svg1", "17m x 7.5m x 8m"],
                ["svg2", "농구공 및 옷"],
                ["svg3", "무료 주차 (3대)"],
                ["svg4", "음료"],
                ["svg5", "남녀 구분"],
                ["svg6", "샤워실"],
                ["svg7", "편의 시설 정보"],
              ].map((info, i) => (
                <div key={i} className="flex flex-row items-center">
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
                  <span>{info[1]}</span>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col space-y-5 pb-5 pt-3 text-xs">
              <div className="font-semibold">구장 특이사항</div>
              <div className="flex w-full flex-col space-y-1">
                <div>접근성: 6호선 새절역, 3호선 홍제역에서 10분 거리</div>
                <div>어쩌구 저쩌구 구장 관련 정보들</div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-4 border-b-gray-200">
            <div className="px-7 py-5 text-lg font-bold">매치 진행 방식</div>
            <div className="flex flex-col pb-5">
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold">매치 규칙</div>
                <ul className="list-disc space-y-2 px-11 py-5 text-xs font-normal">
                  <li>경기는 쿼터당 10분씩 총 4쿼터로 구성된다.</li>
                  <li>
                    경기가 시작되기 전에 최소한 20분의 준비시간이 있어야 한다.
                  </li>
                  <li>하프타임에는 12분의 준비시간이 주어진다.</li>
                  <li>
                    4쿼터 경기시간이 끝나고도 양 팀의 득점이 동점인 경우, 경기는
                    승패가 가려질 때까지 5분씩의 연장전을 진행한다.
                  </li>
                  <li>
                    만약 준비 기간 동안 파울을 범하면, 자유투는 이어지는 쿼터
                    또는 연장전 시작 전에 시행된다.
                  </li>
                </ul>
              </div>
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold">진행 방식</div>
                <ul className="list-disc space-y-2 px-11 py-5 text-xs font-normal">
                  <li>
                    경기 중 볼은 손으로만 플레이 해야 하며, 어느 방향으로든
                    패스하고, 던지고, 탭하고, 굴리거나 드리블 할 수 있고, 아래의
                    규칙이 적용된다.
                  </li>
                  <li>
                    선수는 볼을 가지고 달릴 수 없고, 볼을 고의적으로 발로 차거나
                    다리의 일부분을 이용해 막거나 주먹으로 칠 수 없다.
                  </li>
                  <li>
                    그러나 실수로 다리의 일부분과 접촉하거나 닿는 것은
                    바이얼레이션이 아니다.
                  </li>
                </ul>
              </div>
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold">
                  알아두면 좋아요
                </div>
                <ul className="list-disc space-y-2 px-11 py-5 text-xs font-normal">
                  <li>서로 존중하고 격려하며 함께 즐겨요.</li>
                  <li>평균 레벨은 중급이에요.</li>
                  <li>하루 평균 300매치가 진행되고 있어요.</li>
                  <li>매일 5,500여 명이 농구를 즐기고 있어요.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-7 py-5 text-lg font-bold">환불 규정</div>
            <div className="flex flex-col pb-5">
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold pb-3">
                  신청 취소 시 환불 기준
                </div>
                <div className="mx-7 grid rounded-lg border-[0.7px] border-black text-xs" style={{gridTemplateColumns:"1.3fr 1fr"}}>
                  <div className="border-r-[0.7px] border-black">
                    <div className="px-3 py-2">매치 2일 전</div>
                    <div className="px-3 py-2">매치 1일 전</div>
                    <div className="px-3 py-2">당일 ~ 매치 시작 00분 전까지</div>
                    <div className="px-3 py-2">매치 시작 00분 이내</div>
                  </div>
                  <div>
                    <div className="px-3 py-2">무료 취소</div>
                    <div className="px-3 py-2">80% 환급</div>
                    <div className="px-3 py-2">20% 환급</div>
                    <div className="px-3 py-2">환불 불가</div>
                  </div>
                </div>
                <ul className="list-disc px-11 py-5 text-xs font-normal">
                  <li>
                    취소 수수료 발생 시 사용된 포인트를 우선 차감 후 차액을
                    캐시로 지급 합니다.
                  </li>
                </ul>
              </div>
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold">그 외 취소 기준</div>
                <ul className="list-disc space-y-2 px-11 py-5 text-xs font-normal">
                  <li>
                    결제 후 30분 이내에는 하루 1회에 한해 무료 취소가
                    가능합니다.
                  </li>
                  <li>
                    쿠폰 신청자는 매치 시작 90분 전까지 취소 시 쿠폰이
                    반환됩니다.
                  </li>
                  <li>
                    결제 시 실 결제금액(쿠폰 제외)을 기준으로 위 규정에 따라
                    환급됩니다.
                  </li>
                  <li>
                    현장에서 매치가 취소되는 경우 참가비는 진행되지 않은
                    시간만큼 다음날 오전 환급됩니다.
                  </li>
                  <li>
                    매치 시작 90분 전까지 최소 인원이 모이지 않을 시 카카오톡
                    혹은 LMS로 안내되며, 자동 전액 환불됩니다.
                  </li>
                </ul>
              </div>
              <div className="pb-5">
                <div className="px-7 text-sm font-semibold">유의사항</div>
                <ul className="list-disc space-y-2 px-11 py-5 text-xs font-normal">
                  <li>
                    무단 불참하거나 매치 시작 90분 이내에 취소하면 패널티를 받을
                    수 있습니다. 
                  </li>
                  <li>변경은 취소와 동일한 환불 규정으로 적용됩니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
