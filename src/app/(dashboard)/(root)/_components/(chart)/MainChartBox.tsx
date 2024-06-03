import React from "react";
import Chart from "./Chart";

const MainChartBox = () => {
  return (
    <>
        <div className="bg-white rounded-[25px] px-[31px] py-[24px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#212121] text-lg font-semibold leading-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M34.6617 18.9179C34.6617 27.7876 27.4712 34.9861 18.5935 34.9861C9.71579 34.9861 2.52527 27.7876 2.52527 18.9179C2.52527 10.0402 9.71579 2.8497 18.5935 2.8497C27.4712 2.8497 34.6617 10.0402 34.6617 18.9179Z"
                  fill="#283544"
                />
                <path
                  d="M26.125 14.852C26.0373 14.9031 23.95 15.9826 23.95 18.376C24.0484 21.1056 26.5841 22.0628 26.6276 22.0628C26.5841 22.114 26.2448 23.3668 25.2396 24.6801C24.4419 25.8114 23.5565 26.952 22.212 26.952C20.9331 26.952 20.474 26.198 18.9984 26.198C17.4136 26.198 16.9652 26.952 15.7519 26.952C14.4074 26.952 13.4564 25.7503 12.6153 24.6297C11.5224 23.1629 10.5935 20.8611 10.5607 18.651C10.5386 17.4799 10.7796 16.3287 11.3912 15.3508C12.2545 13.9857 13.7958 13.059 15.4789 13.0285C16.7685 12.988 17.9162 13.8535 18.7032 13.8535C19.4574 13.8535 20.8675 13.0285 22.4629 13.0285C23.1516 13.0291 24.988 13.2224 26.125 14.852ZM18.5942 12.7946C18.3646 11.7251 18.9984 10.6556 19.5886 9.9734C20.3428 9.14835 21.5341 8.58835 22.5613 8.58835C22.6269 9.65786 22.2113 10.7068 21.4685 11.4707C20.8019 12.2958 19.6542 12.9169 18.5942 12.7946Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col">
                Apple Inc{" "}
                <span className="text-[#848484] text-xs font-medium leading-normal">
                  AAPL
                </span>
              </div>
            </div>
            <div className="text-[#212121] text-lg font-semibold leading-normal flex flex-col text-right">
              <div>$150,70</div>
              <span className="text-[#848484] text-[11px] font-medium leading-normal">
                Last update at 14.30
              </span>
            </div>
          </div>
          <div className="mt-3">
            <Chart />
          </div>
        </div>
    </>
  );
};

export default MainChartBox;
