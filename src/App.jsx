import "./App.css";
import star from "./img/star.svg";
import info from "./img/info.svg";
import tick from "./img/tick.svg";

function App() {
  return (
    <div className="App bg-[#0F1012] min-h-[100vh]">
      <div className="w-[1517px] mx-auto max-w-[90%] py-20 xl:max-w-[98%] sm:!max-w-[90%]">
        <h1 className="CreatoDisplay-Bold mb-8 text-[55px] font-bold text-[#fff] text-center lgmed:text-[40px] sm:!text-[25px]">
          Get More Bonuses By Investing!
        </h1>
        <div className="flex items-center gap-6 justify-center mb-[60px] sm:flex-col">
          <p className="text-[16px] font-medium text-[#FAFAFA]">
            Your deposit:
          </p>
          <div className="flex w-[330px] bg-[#101419] border-[1px] border-[#292E34] rounded-full ">
            <div className="p-[1px] flex-1 bg-gradient-to-r from-[#288FC7] to-[#37AB7E] rounded-full">
              <button className="flex w-full items-center gap-[6px] bg-[#101419]  rounded-full text-[16px] text-[#FAFAFA] CreatoDisplay-Reg px-[24px] py-[13px]">
                <img src={star} alt="" />
                Silver bonuses
              </button>
            </div>
            <div className="p-[1px] flex-[.8]  rounded-full ">
              <button className="flex items-center justify-center gap-[6px] bg-[#101419]  rounded-full text-[16px] text-[#969DA3] CreatoDisplay-Reg px-[24px] py-[13px] w-full">
                $
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $0
            </p>
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $50
            </p>
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $1,000
            </p>
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $5,000
            </p>
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $50,000
            </p>
            <p className="text-[18px] font-bold text-[#FAFAFA] sm:text-[14px]">
              $500,000
            </p>
          </div>

          <div className="tint-range mt-4 mb-[60px]">
            <input type="range" className="range-input w-full" />
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-1 lg:gap-10">
            <div>
              <div>
                <h1 className="text-[18px] CreatoDisplay-Bold text-center bg-[#21262C] rounded-tl-[24px] h-[70px] flex items-center justify-center text-[#FAFAFA] border-b-[1px] border-b-[#272C32] border-t-[1px] border-t-[#272C32] lg:rounded-tr-[24px]">
                  Special Features
                </h1>
              </div>
              <ul>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Minimum deposit
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Payouts Boost
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Deposit bonus
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Maximum trade size
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Free Rollovers
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    TradeBack
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Withdrawal time
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Customer Support
                  </p>
                </li>

                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Demo Account
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Tech Analysis
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Giveaway
                  </p>
                </li>
                <li className="py-[30px] px-[30px]  bg-[#21262C] gap-[14px] flex items-center border-b-[1px] lg:rounded-br-[24px] lg:rounded-bl-[24px] rounded-bl-[24px] border-b-[#272C32]">
                  <img src={info} alt="" />
                  <p className="text-[16px] text-[#FAFAFA] CreatoDisplay-Medium">
                    Personal Manager
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h1 className="text-[18px] CreatoDisplay-Bold text-center bg-[#21262C]  h-[70px] flex items-center justify-center text-[#FAFAFA] border-b-[1px] border-b-[#272C32] border-t-[1px] border-t-[#272C32] border-l-[1px] border-l-[#272C32] lg:rounded-tr-[24px] lg:rounded-tl-[24px]">
                  BRONZE
                </h1>
              </div>
              <ul>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    50%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    +0%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    20
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $250
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    20
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    0.1%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    8 Hours
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    Standard
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] lg:rounded-br-[24px] lg:rounded-bl-[24px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h1 className="text-[18px] CreatoDisplay-Bold text-center bg-[#21262C]  h-[70px] flex items-center justify-center text-[#FAFAFA] border-b-[1px] border-b-[#272C32] border-t-[1px] border-t-[#272C32] border-l-[1px] border-l-[#272C32]  lg:rounded-tr-[24px] lg:rounded-tl-[24px]">
                  SILVER
                </h1>
              </div>
              <ul>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $1,000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    +1%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    50%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $1000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    50
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    0.5%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    4 Hours
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    Priority
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="px-[11px]  rounded-bl-[24px] rounded-br-[24px]  bg-[#191B1F] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] h-[89px] border-l-[#272C32] border-r-[1px] border-r-[#272C32] lg:rounded-br-[24px] lg:rounded-bl-[24px]"
                >
                  <a
                    className="text-[18px] h-[69px] flex items-center justify-center rounded-[16px] bg-gradient-to-r from-[#288FC7] to-[#37AB7E] CreatoDisplay-Bold text-[#FAFAFA] w-full "
                    href="#"
                  >
                    Open
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h1 className="text-[18px] CreatoDisplay-Bold text-center bg-[#21262C]  h-[70px] flex items-center justify-center text-[#FAFAFA] border-b-[1px] border-b-[#272C32] border-t-[1px] border-t-[#272C32] border-l-[1px] border-l-[#272C32]  lg:rounded-tr-[24px] lg:rounded-tl-[24px]">
                  GOLD
                </h1>
              </div>
              <ul>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $5,000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    +296%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    100%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $5000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    300
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    1%6
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    1 Hours
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    Priority
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]  lg:rounded-br-[24px] lg:rounded-bl-[24px]"
                >
                  <img src={tick} alt="" />
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h1 className="text-[18px] CreatoDisplay-Bold text-center bg-gradient-to-r from-[#288FC7] to-[#37AB7E]    h-[70px] flex items-center justify-center text-[#FAFAFA] border-b-[1px] border-b-[#272C32] border-t-[1px] border-t-[#272C32] border-l-[1px] border-l-[#272C32]   lg:rounded-tr-[24px] lg:rounded-tl-[24px]">
                  VIP
                </h1>
              </div>
              <ul>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $5,000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    +3%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    200%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    $5000
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    300
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    2%
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    Instant
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <p className="text-[16px] text-[#969DA3] CreatoDisplay-Medium">
                    Priority
                  </p>
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32]"
                >
                  <img src={tick} alt="" />
                </li>
                <li
                  className="py-[30px] px-[30px]  bg-[#121416] gap-[14px] flex items-center border-b-[1px] justify-center border-b-[#272C32]
                 border-l-[1px] border-l-[#272C32] border-r-[1px] border-r-[#272C32] lg:rounded-br-[24px] lg:rounded-bl-[24px]"
                >
                  <img src={tick} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
