import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const FormElement = () => {
  const { addFormElement } = useFormContext();
  const [clickedElement, setClickedElement] = useState(null);

  const handleIconClick = (elementType) => {
    setClickedElement(elementType);
    addFormElement(elementType);
    setTimeout(() => {
      setClickedElement(null);
    }, 1000);
  };

  const getCardStyle = (elementType) =>
    `flex flex-col items-center justify-center border rounded-lg gap-1 w-[110px] h-[72px] ${
      clickedElement === elementType
        ? "bg-gray-100 border-gray-500"
        : "bg-gray-50 border-[#EAECF0]"
    }`;

  return (
    <div className="w-[280px] h-[2092px] p-4 bg-white border border-[#EAECF0] rounded-md">
      <h2 className="text-[#475467] font-semibold text-xs">FORM ELEMENTS</h2>

      <div className="flex flex-wrap gap-3 mt-3 justify-between">
        <div
          className={getCardStyle("name")}
          onClick={() => handleIconClick("name")}
        >
          <div className="flex items-center p-1  justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.2518 15C9.08173 15 6.2626 16.5306 4.4678 18.906C4.08151 19.4172 3.88836 19.6728 3.89468 20.0183C3.89956 20.2852 4.06716 20.6219 4.27717 20.7867C4.54899 21 4.92567 21 5.67904 21H18.8246C19.5779 21 19.9546 21 20.2264 20.7867C20.4364 20.6219 20.604 20.2852 20.6089 20.0183C20.6152 19.6728 20.4221 19.4172 20.0358 18.906C18.241 16.5306 15.4219 15 12.2518 15Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.2518 12C14.7371 12 16.7518 9.98528 16.7518 7.5C16.7518 5.01472 14.7371 3 12.2518 3C9.76652 3 7.7518 5.01472 7.7518 7.5C7.7518 9.98528 9.76652 12 12.2518 12Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium">Name</span>
          </div>
        </div>

        <div
          className={getCardStyle("email")}
          onClick={() => handleIconClick("email")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M2.75 7L10.9149 12.7154C11.5761 13.1783 11.9067 13.4097 12.2663 13.4993C12.5839 13.5785 12.9161 13.5785 13.2337 13.4993C13.5933 13.4097 13.9239 13.1783 14.5851 12.7154L22.75 7M7.55 20H17.95C19.6302 20 20.4702 20 21.112 19.673C21.6765 19.3854 22.1354 18.9265 22.423 18.362C22.75 17.7202 22.75 16.8802 22.75 15.2V8.8C22.75 7.11984 22.75 6.27976 22.423 5.63803C22.1354 5.07354 21.6765 4.6146 21.112 4.32698C20.4702 4 19.6302 4 17.95 4H7.55C5.86984 4 5.02976 4 4.38803 4.32698C3.82354 4.6146 3.3646 5.07354 3.07698 5.63803C2.75 6.27976 2.75 7.11984 2.75 8.8V15.2C2.75 16.8802 2.75 17.7202 3.07698 18.362C3.3646 18.9265 3.82354 19.3854 4.38803 19.673C5.02976 20 5.86984 20 7.55 20Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Email
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("date")}
          onClick={() => handleIconClick("date")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.25 10H3.25M16.25 2V6M8.25 2V6M8.05 22H16.45C18.1302 22 18.9702 22 19.612 21.673C20.1765 21.3854 20.6354 20.9265 20.923 20.362C21.25 19.7202 21.25 18.8802 21.25 17.2V8.8C21.25 7.11984 21.25 6.27976 20.923 5.63803C20.6354 5.07354 20.1765 4.6146 19.612 4.32698C18.9702 4 18.1302 4 16.45 4H8.05C6.36984 4 5.52976 4 4.88803 4.32698C4.32354 4.6146 3.8646 5.07354 3.57698 5.63803C3.25 6.27976 3.25 7.11984 3.25 8.8V17.2C3.25 18.8802 3.25 19.7202 3.57698 20.362C3.8646 20.9265 4.32354 21.3854 4.88803 21.673C5.52976 22 6.36984 22 8.05 22Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Date
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("phone")}
          onClick={() => handleIconClick("phone")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.13028 8.85335C9.82627 10.303 10.7751 11.6616 11.9766 12.8632C13.1782 14.0648 14.5369 15.0136 15.9865 15.7096C16.1112 15.7694 16.1735 15.7994 16.2524 15.8224C16.5328 15.9041 16.877 15.8454 17.1144 15.6754C17.1813 15.6275 17.2384 15.5704 17.3527 15.4561C17.7023 15.1064 17.8771 14.9316 18.0529 14.8174C18.7158 14.3864 19.5704 14.3864 20.2333 14.8174C20.4091 14.9316 20.5839 15.1064 20.9335 15.4561L21.1283 15.6509C21.6598 16.1824 21.9255 16.4481 22.0698 16.7335C22.3569 17.301 22.3569 17.9713 22.0698 18.5389C21.9255 18.8242 21.6598 19.09 21.1283 19.6214L20.9707 19.779C20.4411 20.3087 20.1763 20.5735 19.8162 20.7757C19.4167 21.0001 18.7962 21.1615 18.338 21.1601C17.9251 21.1589 17.6428 21.0788 17.0784 20.9186C14.045 20.0576 11.1826 18.4332 8.79466 16.0452C6.40668 13.6572 4.78221 10.7948 3.92124 7.76144C3.76103 7.19699 3.68092 6.91477 3.6797 6.50182C3.67833 6.0436 3.83969 5.42311 4.06411 5.0236C4.26636 4.66357 4.53117 4.39876 5.0608 3.86913L5.21843 3.7115C5.74987 3.18006 6.0156 2.91433 6.30098 2.76999C6.86854 2.48292 7.5388 2.48292 8.10636 2.76999C8.39174 2.91433 8.65747 3.18006 9.18891 3.7115L9.38378 3.90637C9.73338 4.25597 9.90819 4.43078 10.0225 4.60655C10.4535 5.26945 10.4535 6.12403 10.0225 6.78692C9.90819 6.96269 9.73338 7.1375 9.38378 7.4871C9.26947 7.60142 9.21231 7.65857 9.16447 7.72538C8.99446 7.96281 8.93576 8.30707 9.01748 8.58743C9.04048 8.66632 9.07041 8.72866 9.13028 8.85335Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Phone
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("select")}
          onClick={() => handleIconClick("select")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M5.31066 5.06066L4.25 4M16.1145 16.1896L13.6227 20.817C13.3381 21.3457 13.1957 21.61 13.0245 21.6769C12.8759 21.7349 12.7085 21.7185 12.574 21.6328C12.4189 21.534 12.3306 21.2471 12.1538 20.6733L8.69519 9.44525C8.5508 8.97651 8.4786 8.74213 8.53669 8.58383C8.58729 8.44595 8.69595 8.33729 8.83383 8.2867C8.99213 8.22861 9.2265 8.3008 9.69525 8.44519L20.9232 11.9038C21.497 12.0806 21.7839 12.169 21.8827 12.324C21.9685 12.4586 21.9848 12.6259 21.9268 12.7745C21.86 12.9458 21.5956 13.0881 21.067 13.3728L16.4396 15.8645C16.361 15.9068 16.3217 15.9279 16.2874 15.9551C16.2568 15.9792 16.2292 16.0068 16.2051 16.0374C16.1779 16.0717 16.1568 16.111 16.1145 16.1896Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Single Select
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("multiselect")}
          onClick={() => handleIconClick("multiselect")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.75 3.5V2M5.81066 5.06066L4.75 4M5.81066 13L4.75 14.0607M13.75 5.06066L14.8107 4M4.25 9H2.75M16.6145 16.1896L14.1227 20.817C13.8381 21.3457 13.6957 21.61 13.5245 21.6769C13.3759 21.7349 13.2085 21.7185 13.074 21.6328C12.9189 21.534 12.8306 21.2471 12.6538 20.6733L9.19519 9.44525C9.0508 8.97651 8.9786 8.74213 9.03669 8.58383C9.08729 8.44595 9.19595 8.33729 9.33383 8.2867C9.49213 8.22861 9.7265 8.3008 10.1952 8.44519L21.4232 11.9038C21.997 12.0806 22.2839 12.169 22.3827 12.324C22.4685 12.4586 22.4848 12.6259 22.4268 12.7745C22.36 12.9458 22.0956 13.0881 21.567 13.3728L16.9396 15.8645C16.861 15.9068 16.8217 15.9279 16.7874 15.9551C16.7568 15.9792 16.7292 16.0068 16.7051 16.0374C16.6779 16.0717 16.6568 16.111 16.6145 16.1896Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Multi Select
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("radio")}
          onClick={() => handleIconClick("radio")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M7.75 12L10.75 15L16.75 9M22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Radio
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("checkbox")}
          onClick={() => handleIconClick("checkbox")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M8.25 12L11.25 15L17.25 9M8.55 21H16.95C18.6302 21 19.4702 21 20.112 20.673C20.6765 20.3854 21.1354 19.9265 21.423 19.362C21.75 18.7202 21.75 17.8802 21.75 16.2V7.8C21.75 6.11984 21.75 5.27976 21.423 4.63803C21.1354 4.07354 20.6765 3.6146 20.112 3.32698C19.4702 3 18.6302 3 16.95 3H8.55C6.86984 3 6.02976 3 5.38803 3.32698C4.82354 3.6146 4.3646 4.07354 4.07698 4.63803C3.75 5.27976 3.75 6.11984 3.75 7.8V16.2C3.75 17.8802 3.75 18.7202 4.07698 19.362C4.3646 19.9265 4.82354 20.3854 5.38803 20.673C6.02976 21 6.86984 21 8.55 21Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Check Box
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("textarea")}
          onClick={() => handleIconClick("textarea")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.3516 11.3982C20.4308 11.4772 20.4936 11.571 20.5364 11.6742C20.5793 11.7775 20.6013 11.8882 20.6013 12C20.6013 12.1118 20.5793 12.2225 20.5364 12.3258C20.4936 12.429 20.4308 12.5228 20.3517 12.6017L20.3516 11.3982ZM20.3516 11.3982L20.281 11.469M20.3516 11.3982L20.281 11.469M20.281 11.469L20.3518 11.3984C20.2728 11.3192 20.179 11.2564 20.0758 11.2136C19.9725 11.1707 19.8618 11.1487 19.75 11.1487C19.6382 11.1487 19.5275 11.1707 19.4242 11.2136C19.321 11.2564 19.2272 11.3192 19.1483 11.3983L20.281 11.469ZM20.3516 15.1482C20.4308 15.2272 20.4936 15.321 20.5364 15.4242C20.5793 15.5275 20.6013 15.6382 20.6013 15.75C20.6013 15.8618 20.5793 15.9725 20.5364 16.0758C20.4936 16.179 20.4308 16.2728 20.3517 16.3517L20.3516 15.1482ZM20.3516 15.1482L20.281 15.219M20.3516 15.1482L20.281 15.219M20.281 15.219L20.3518 15.1484C20.2728 15.0692 20.179 15.0064 20.0758 14.9636C19.9725 14.9207 19.8618 14.8987 19.75 14.8987C19.6382 14.8987 19.5275 14.9207 19.4242 14.9636C19.321 15.0064 19.2272 15.0692 19.1483 15.1483L20.281 15.219ZM1.27764 4.02764C0.555624 4.74965 0.15 5.72892 0.15 6.75V17.25C0.15 18.2711 0.555624 19.2503 1.27764 19.9724C1.99965 20.6944 2.97892 21.1 4 21.1H20.5C21.5211 21.1 22.5003 20.6944 23.2224 19.9724C23.9444 19.2503 24.35 18.2711 24.35 17.25V6.75C24.35 5.72892 23.9444 4.74965 23.2224 4.02764C22.5003 3.30562 21.5211 2.9 20.5 2.9H4C2.97892 2.9 1.99965 3.30562 1.27764 4.02764ZM2.47972 5.22972C2.88292 4.82652 3.42978 4.6 4 4.6H20.5C21.0702 4.6 21.6171 4.82652 22.0203 5.22972C22.4235 5.63292 22.65 6.17978 22.65 6.75V17.25C22.65 17.8202 22.4235 18.3671 22.0203 18.7703C21.6171 19.1735 21.0702 19.4 20.5 19.4H4C3.42978 19.4 2.88292 19.1735 2.47972 18.7703C2.07652 18.3671 1.85 17.8202 1.85 17.25V6.75C1.85 6.17978 2.07652 5.63292 2.47972 5.22972ZM15.8517 17.1017L20.3516 12.6018L19.1482 11.3984L14.6483 15.8983C14.4887 16.0579 14.3991 16.2743 14.3991 16.5C14.3991 16.7257 14.4887 16.9421 14.6483 17.1017C14.8079 17.2613 15.0243 17.3509 15.25 17.3509C15.4757 17.3509 15.6921 17.2613 15.8517 17.1017ZM19.6017 17.1017L20.3516 16.3518L19.1482 15.1484L18.3983 15.8983C18.2387 16.0579 18.1491 16.2743 18.1491 16.5C18.1491 16.7257 18.2387 16.9421 18.3983 17.1017C18.5579 17.2613 18.7743 17.3509 19 17.3509C19.2257 17.3509 19.4421 17.2613 19.6017 17.1017Z"
                fill="#667085"
                stroke="#667085"
                strokeWidth="0.2"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Text Area
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("address")}
          onClick={() => handleIconClick("address")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.75 13C14.4069 13 15.75 11.6569 15.75 10C15.75 8.34315 14.4069 7 12.75 7C11.0931 7 9.75 8.34315 9.75 10C9.75 11.6569 11.0931 13 12.75 13Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.75 22C16.75 18 20.75 14.4183 20.75 10C20.75 5.58172 17.1683 2 12.75 2C8.33172 2 4.75 5.58172 4.75 10C4.75 14.4183 8.75 18 12.75 22Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Address
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("divider")}
          onClick={() => handleIconClick("divider")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M7.25 22L17.25 2"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Divider
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("fileupload")}
          onClick={() => handleIconClick("fileupload")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.75 15V16.2C21.75 17.8802 21.75 18.7202 21.423 19.362C21.1354 19.9265 20.6765 20.3854 20.112 20.673C19.4702 21 18.6302 21 16.95 21H8.55C6.86984 21 6.02976 21 5.38803 20.673C4.82354 20.3854 4.3646 19.9265 4.07698 19.362C3.75 18.7202 3.75 17.8802 3.75 16.2V15M17.75 8L12.75 3M12.75 3L7.75 8M12.75 3V15"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              File Upload
            </span>
          </div>
        </div>
      </div>

      <div className="h-px w-[233px] bg-[#EAECF0] mt-4"></div>

      <h2 className="text-[#475467] font-semibold text-xs mt-3 ">
        SIGNATURE ELEMENTS
      </h2>
      <div className="flex flex-wrap gap-3 mt-3 justify-between">
        <div
          className={getCardStyle("signature")}
          onClick={() => handleIconClick("signature")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.25 18L20.2499 19.094C19.7195 19.6741 19.0001 20 18.2501 20C17.5001 20 16.7808 19.6741 16.2504 19.094C15.7192 18.5151 15 18.1901 14.2502 18.1901C13.5004 18.1901 12.7811 18.5151 12.25 19.094M3.25 20H4.92454C5.41372 20 5.65832 20 5.88849 19.9447C6.09256 19.8957 6.28765 19.8149 6.4666 19.7053C6.66843 19.5816 6.84138 19.4086 7.18729 19.0627L19.75 6.49998C20.5785 5.67156 20.5785 4.32841 19.75 3.49998C18.9216 2.67156 17.5785 2.67156 16.75 3.49998L4.18726 16.0627C3.84136 16.4086 3.6684 16.5816 3.54472 16.7834C3.43506 16.9624 3.35425 17.1574 3.30526 17.3615C3.25 17.5917 3.25 17.8363 3.25 18.3255V20Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Signature
            </span>
          </div>
        </div>
        <div
          className={getCardStyle("initials")}
          onClick={() => handleIconClick("initials")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M2.75 7L10.9149 12.7154C11.5761 13.1783 11.9067 13.4097 12.2663 13.4993C12.5839 13.5785 12.9161 13.5785 13.2337 13.4993C13.5933 13.4097 13.9239 13.1783 14.5851 12.7154L22.75 7M7.55 20H17.95C19.6302 20 20.4702 20 21.112 19.673C21.6765 19.3854 22.1354 18.9265 22.423 18.362C22.75 17.7202 22.75 16.8802 22.75 15.2V8.8C22.75 7.11984 22.75 6.27976 22.423 5.63803C22.1354 5.07354 21.6765 4.6146 21.112 4.32698C20.4702 4 19.6302 4 17.95 4H7.55C5.86984 4 5.02976 4 4.38803 4.32698C3.82354 4.6146 3.3646 5.07354 3.07698 5.63803C2.75 6.27976 2.75 7.11984 2.75 8.8V15.2C2.75 16.8802 2.75 17.7202 3.07698 18.362C3.3646 18.9265 3.82354 19.3854 4.38803 19.673C5.02976 20 5.86984 20 7.55 20Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Initials
            </span>
          </div>
        </div>
      </div>

      <div className="h-px w-[233px] bg-[#EAECF0] mt-4"></div>

      <h2 className="text-[#475467] font-semibold text-xs mt-3">
        TEXT ELEMENTS
      </h2>

      <div className="flex flex-wrap gap-3 mt-3 justify-between">
        <div
          className={getCardStyle("shorttext")}
          onClick={() => handleIconClick("shorttext")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.25 18L20.2499 19.094C19.7195 19.6741 19.0001 20 18.2501 20C17.5001 20 16.7808 19.6741 16.2504 19.094C15.7192 18.5151 15 18.1901 14.2502 18.1901C13.5004 18.1901 12.7811 18.5151 12.25 19.094M3.25 20H4.92454C5.41372 20 5.65832 20 5.88849 19.9447C6.09256 19.8957 6.28765 19.8149 6.4666 19.7053C6.66843 19.5816 6.84138 19.4086 7.18729 19.0627L19.75 6.49998C20.5785 5.67156 20.5785 4.32841 19.75 3.49998C18.9216 2.67156 17.5785 2.67156 16.75 3.49998L4.18726 16.0627C3.84136 16.4086 3.6684 16.5816 3.54472 16.7834C3.43506 16.9624 3.35425 17.1574 3.30526 17.3615C3.25 17.5917 3.25 17.8363 3.25 18.3255V20Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Short Text
            </span>
          </div>
        </div>
        <div
          className={getCardStyle("longtext")}
          onClick={() => handleIconClick("longtext")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5 17H6.5M17.5 13H6.5M3 9H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Long Text
            </span>
          </div>
        </div>

        <div
          className={getCardStyle("list")}
          onClick={() => handleIconClick("list")}
        >
          <div className="flex items-center justify-center w-10 h-10  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              List
            </span>
          </div>
        </div>
      </div>

      <div className="h-px w-[233px] bg-[#EAECF0] mt-4"></div>

      <h2 className="text-[#475467] font-semibold text-xs mt-3">
        VISUAL ELEMENTS
      </h2>
      <div className="flex flex-wrap gap-3 mt-3 justify-between">
        <div
          className={getCardStyle("image")}
          onClick={() => handleIconClick("image")}
        >
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-md w-full h-[28px] flex items-center justify-center border-t border-[#EAECF0] bg-white">
            <span className="text-[#344054] text-sm font-medium flex items-center justify-between">
              Image
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElement;
