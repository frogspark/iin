import IconLogo from "@/icons/logo.svg";
import IconSmile from "@/icons/smile.svg";
import IconArrow from "@/icons/arrow.svg";
import IconZagUnderline from "@/icons/zag-underline.svg";
import IconSquiggleUnderline from "@/icons/squiggle-underline.svg";
import { m } from "framer-motion";
import FancyLink from "@/components/fancyLink";
import Socials from "@/components/socials";
import Image from "next/image";
import { MouseParallax } from "react-just-parallax";
import { Fragment, useRef } from "react";
import FooterFlick from "./footer-flick";

export default function Footer({ policies, contact }) {
  const footerRef1 = useRef();
  const footerRef2 = useRef();

  return (
    <footer className="bg-off-black selection:text-off-white selection:bg-[#FF5F38] pb-24 lg:pb-0">
      <div className="relative flex overflow-x-hidden text-[17vw] lg:text-[10vw] text-white uppercase">
        <div className="animate-marquee will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
        </div>

        <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block font-display italic">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
          <span className="relative overflow-hidden inline-block">
            Be In The Know
            <span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2">
              <IconSmile className="inline-block animate-spin-slow-reverse" />
            </span>
          </span>
        </div>
      </div>

      <div className="p-5 pb-[10vw] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="col-span-1 aspect-square bg-[#5F0EFF] selection:text-[#5F0EFF] flex items-center justify-center relative group/main"
            ref={footerRef1}
          >
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bg-[#5F0EFF] opacity-0 scale-[0.75] lg:group-hover/main:opacity-100 lg:group-hover/main:scale-[1] transition-all ease-in-out duration-[550ms]">
              <div className="w-[50%] h-[75%] relative mix-blend-lighten opacity-[25%] bg-off-white overflow-hidden">
                <MouseParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.1}
                  strength={0.033}
                  zIndex={20}
                  parallaxContainerRef={footerRef1}
                >
                  <FooterFlick
                    images={[
                      "/images/footer-flick-01.jpg",
                      "/images/footer-flick-02.jpg",
                      "/images/footer-flick-03.jpg",
                    ]}
                  />
                </MouseParallax>
              </div>
            </div>

            <div className="w-11/12 lg:w-10/12 text-center text-white relative z-10">
              <span className="inline-block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-12 lg:mb-16 text-[#EFF366] relative overflow-hidden pb-[15px] lg:pb-[28px]">
                <span className="uppercase">Follow us</span>
                <span className="block font-display relative">
                  on <span className="uppercase italic">socials</span>
                </span>
                <svg
                  className="absolute bottom-0 right-[-7.5%] lg:right-[-17%] w-[85%] lg:w-[90%]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 431.774 17.59"
                >
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="none"
                        d="M0 17.592h431.774V.002H0Z"
                        data-name="Path 1178"
                      />
                    </clipPath>
                  </defs>
                  <g data-name="Group 417">
                    <g clipPath="url(#a)" data-name="Group 416">
                      <g data-name="Group 415">
                        <path
                          fill="none"
                          stroke="#eff366"
                          strokeMiterlimit="120"
                          strokeWidth="3"
                          d="m1.289 2.597 12.378 12.378L25.736 2.597l12.378 12.378L50.489 2.597l12.073 12.378L74.94 2.597l12.379 12.378 12.07-12.378 12.378 12.378 12.377-12.378 12.067 12.378 12.378-12.378 12.38 12.378 12.069-12.378 12.378 12.378 12.378-12.378 12.069 12.378 12.379-12.378 12.378 12.378 12.378-12.378 12.074 12.378 12.073-12.378 12.378 12.378 12.379-12.378 12.045 12.378 12.042-12.378 12.378 12.378 12.382-12.378 12.069 12.378 12.378-12.378 12.378 12.378 12.069-12.378 12.378 12.378L418.4 2.597l12.068 12.378"
                          data-name="Path 1177"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <p className="mb-12 lg:mb-16 leading-[1.25] xl:text-xl xl:leading-[1.25] max-w-[] md:max-w-[400px] xl:max-w-[500px] mx-auto">
                Amazing food and drinks, all the shops you&apos;ll ever need,
                and inspirational events and activities.
              </p>

              <Socials
                items={contact?.socials}
                className="text-off-black mx-auto justify-center"
              />
            </div>
          </div>

          <div
            className="col-span-1 aspect-square bg-[#EFF366] selection:text-[#EFF366] flex items-center justify-center relative group/main"
            ref={footerRef2}
          >
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bg-[#EFF366] opacity-0 scale-[0.75] lg:group-hover/main:opacity-100 lg:group-hover/main:scale-[1] transition-all ease-in-out duration-[550ms]">
              <div className="w-[50%] h-[75%] relative mix-blend-darken opacity-[15%] bg-[#EFF366] overflow-hidden">
                <MouseParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.1}
                  strength={0.033}
                  zIndex={20}
                  parallaxContainerRef={footerRef2}
                >
                  <FooterFlick
                    images={[
                      "/images/footer-flick2-01.jpg",
                      "/images/footer-flick2-02.jpg",
                      "/images/footer-flick2-03.jpg",
                    ]}
                  />
                </MouseParallax>
              </div>
            </div>

            <div className="w-11/12 lg:w-10/12 text-center text-off-black relative z-[10]">
              <span className="block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-10 lg:mb-16">
                <span className="uppercase relative">KEEP UP WITH </span>
                <span className="block font-display">
        
                  <span className=" italic relative">
                    what’s on!{" "}
                    <IconSquiggleUnderline className="absolute bottom-[-5px] left-[-5%] right-[-5%] w-[110%]" />
                  </span>
                </span>
              </span>

              <p className="mb-12 mt-16 lg:mb-16 mt-16 leading-[1.25] xl:text-xl xl:leading-[1.25] max-w-[] md:max-w-[400px] xl:max-w-[760px] mx-auto">
    Download the It’s in Nottingham app to keep up with what’s going on in the city, and for exclusive discounts.
              </p>
              
              <div class="flex justify-center lg:hidden">
                <a href="https://play.google.com/store/apps/details?id=com.loqiva.itsinnottingham&amp;pli=1" target="_blank" rel="noopener noreferrer" >
              <svg width="218" height="39" viewBox="0 0 218 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="218" height="39" rx="19.5" fill="#FC6E5C"/>
              <path d="M42.3281 24.5059C42.9199 24.5059 43.4062 24.4443 43.7871 24.3213C44.4668 24.0928 45.0234 23.6533 45.457 23.0029C45.8027 22.4814 46.0518 21.8135 46.2041 20.999C46.292 20.5127 46.3359 20.0615 46.3359 19.6455C46.3359 18.0459 46.0166 16.8037 45.3779 15.9189C44.7451 15.0342 43.7227 14.5918 42.3105 14.5918H39.208V24.5059H42.3281ZM37.4502 13.0889H42.6797C44.4551 13.0889 45.832 13.7188 46.8105 14.9785C47.6836 16.1152 48.1201 17.5713 48.1201 19.3467C48.1201 20.7178 47.8623 21.957 47.3467 23.0645C46.4385 25.0215 44.877 26 42.6621 26H37.4502V13.0889ZM53.9033 24.9805C54.9521 24.9805 55.6699 24.585 56.0566 23.7939C56.4492 22.9971 56.6455 22.1123 56.6455 21.1396C56.6455 20.2607 56.5049 19.5459 56.2236 18.9951C55.7783 18.1279 55.0107 17.6943 53.9209 17.6943C52.9541 17.6943 52.251 18.0635 51.8115 18.8018C51.3721 19.54 51.1523 20.4307 51.1523 21.4736C51.1523 22.4756 51.3721 23.3105 51.8115 23.9785C52.251 24.6465 52.9482 24.9805 53.9033 24.9805ZM53.9648 16.3145C55.1777 16.3145 56.2031 16.7188 57.041 17.5273C57.8789 18.3359 58.2979 19.5254 58.2979 21.0957C58.2979 22.6133 57.9287 23.8672 57.1904 24.8574C56.4521 25.8477 55.3066 26.3428 53.7539 26.3428C52.459 26.3428 51.4307 25.9062 50.6689 25.0332C49.9072 24.1543 49.5264 22.9766 49.5264 21.5C49.5264 19.918 49.9277 18.6582 50.7305 17.7207C51.5332 16.7832 52.6113 16.3145 53.9648 16.3145ZM60.917 16.5869L62.7275 24.0049L64.5645 16.5869H66.3398L68.1855 23.9609L70.1104 16.5869H71.6924L68.959 26H67.3154L65.3994 18.7139L63.5449 26H61.9014L59.1855 16.5869H60.917ZM73.1953 16.5869H74.6982V17.9229C75.1436 17.3721 75.6152 16.9766 76.1133 16.7363C76.6113 16.4961 77.165 16.376 77.7744 16.376C79.1104 16.376 80.0127 16.8418 80.4814 17.7734C80.7393 18.2832 80.8682 19.0127 80.8682 19.9619V26H79.2598V20.0674C79.2598 19.4932 79.1748 19.0303 79.0049 18.6787C78.7236 18.0928 78.2139 17.7998 77.4756 17.7998C77.1006 17.7998 76.793 17.8379 76.5527 17.9141C76.1191 18.043 75.7383 18.3008 75.4102 18.6875C75.1465 18.998 74.9736 19.3203 74.8916 19.6543C74.8154 19.9824 74.7773 20.4541 74.7773 21.0693V26H73.1953V16.5869ZM83.2588 13.0889H84.8408V26H83.2588V13.0889ZM90.958 24.9805C92.0068 24.9805 92.7246 24.585 93.1113 23.7939C93.5039 22.9971 93.7002 22.1123 93.7002 21.1396C93.7002 20.2607 93.5596 19.5459 93.2783 18.9951C92.833 18.1279 92.0654 17.6943 90.9756 17.6943C90.0088 17.6943 89.3057 18.0635 88.8662 18.8018C88.4268 19.54 88.207 20.4307 88.207 21.4736C88.207 22.4756 88.4268 23.3105 88.8662 23.9785C89.3057 24.6465 90.0029 24.9805 90.958 24.9805ZM91.0195 16.3145C92.2324 16.3145 93.2578 16.7188 94.0957 17.5273C94.9336 18.3359 95.3525 19.5254 95.3525 21.0957C95.3525 22.6133 94.9834 23.8672 94.2451 24.8574C93.5068 25.8477 92.3613 26.3428 90.8086 26.3428C89.5137 26.3428 88.4854 25.9062 87.7236 25.0332C86.9619 24.1543 86.5811 22.9766 86.5811 21.5C86.5811 19.918 86.9824 18.6582 87.7852 17.7207C88.5879 16.7832 89.666 16.3145 91.0195 16.3145ZM98.4551 23.4951C98.4551 23.9521 98.6221 24.3125 98.9561 24.5762C99.29 24.8398 99.6855 24.9717 100.143 24.9717C100.699 24.9717 101.238 24.8428 101.76 24.585C102.639 24.1572 103.078 23.457 103.078 22.4844V21.21C102.885 21.333 102.636 21.4355 102.331 21.5176C102.026 21.5996 101.728 21.6582 101.435 21.6934L100.477 21.8164C99.9023 21.8926 99.4717 22.0127 99.1846 22.1768C98.6982 22.4521 98.4551 22.8916 98.4551 23.4951ZM102.287 20.2959C102.65 20.249 102.894 20.0967 103.017 19.8389C103.087 19.6982 103.122 19.4961 103.122 19.2324C103.122 18.6934 102.929 18.3037 102.542 18.0635C102.161 17.8174 101.613 17.6943 100.898 17.6943C100.072 17.6943 99.4863 17.917 99.1406 18.3623C98.9473 18.6084 98.8213 18.9746 98.7627 19.4609H97.2861C97.3154 18.3008 97.6904 17.4951 98.4111 17.0439C99.1377 16.5869 99.9785 16.3584 100.934 16.3584C102.041 16.3584 102.94 16.5693 103.632 16.9912C104.317 17.4131 104.66 18.0693 104.66 18.96V24.3828C104.66 24.5469 104.692 24.6787 104.757 24.7783C104.827 24.8779 104.971 24.9277 105.188 24.9277C105.258 24.9277 105.337 24.9248 105.425 24.9189C105.513 24.9072 105.606 24.8926 105.706 24.875V26.0439C105.46 26.1143 105.272 26.1582 105.144 26.1758C105.015 26.1934 104.839 26.2021 104.616 26.2021C104.071 26.2021 103.676 26.0088 103.43 25.6221C103.301 25.417 103.21 25.127 103.157 24.752C102.835 25.1738 102.372 25.54 101.769 25.8506C101.165 26.1611 100.5 26.3164 99.7734 26.3164C98.9004 26.3164 98.1855 26.0527 97.6289 25.5254C97.0781 24.9922 96.8027 24.3271 96.8027 23.5303C96.8027 22.6572 97.0752 21.9805 97.6201 21.5C98.165 21.0195 98.8799 20.7236 99.7646 20.6123L102.287 20.2959ZM108.264 21.4033C108.264 22.4111 108.478 23.2549 108.905 23.9346C109.333 24.6143 110.019 24.9541 110.962 24.9541C111.694 24.9541 112.295 24.6406 112.764 24.0137C113.238 23.3809 113.476 22.4756 113.476 21.2979C113.476 20.1084 113.232 19.2295 112.746 18.6611C112.26 18.0869 111.659 17.7998 110.944 17.7998C110.147 17.7998 109.5 18.1045 109.002 18.7139C108.51 19.3232 108.264 20.2197 108.264 21.4033ZM110.646 16.4199C111.366 16.4199 111.97 16.5723 112.456 16.877C112.737 17.0527 113.057 17.3604 113.414 17.7998V13.0449H114.935V26H113.511V24.6904C113.142 25.2705 112.705 25.6895 112.201 25.9473C111.697 26.2051 111.12 26.334 110.47 26.334C109.421 26.334 108.513 25.8945 107.745 25.0156C106.978 24.1309 106.594 22.9561 106.594 21.4912C106.594 20.1201 106.942 18.9336 107.64 17.9316C108.343 16.9238 109.345 16.4199 110.646 16.4199ZM122.607 13.959H124.207V16.5869H125.71V17.8789H124.207V24.0225C124.207 24.3506 124.318 24.5703 124.541 24.6816C124.664 24.7461 124.869 24.7783 125.156 24.7783C125.232 24.7783 125.314 24.7783 125.402 24.7783C125.49 24.7725 125.593 24.7637 125.71 24.752V26C125.528 26.0527 125.338 26.0908 125.139 26.1143C124.945 26.1377 124.734 26.1494 124.506 26.1494C123.768 26.1494 123.267 25.9619 123.003 25.5869C122.739 25.2061 122.607 24.7139 122.607 24.1104V17.8789H121.333V16.5869H122.607V13.959ZM127.301 13.0449H128.883V17.8613C129.258 17.3867 129.595 17.0527 129.894 16.8594C130.403 16.5254 131.039 16.3584 131.801 16.3584C133.166 16.3584 134.092 16.8359 134.578 17.791C134.842 18.3125 134.974 19.0361 134.974 19.9619V26H133.348V20.0674C133.348 19.376 133.26 18.8691 133.084 18.5469C132.797 18.0312 132.258 17.7734 131.467 17.7734C130.811 17.7734 130.216 17.999 129.683 18.4502C129.149 18.9014 128.883 19.7539 128.883 21.0078V26H127.301V13.0449ZM141.24 16.376C141.908 16.376 142.556 16.5342 143.183 16.8506C143.81 17.1611 144.287 17.5654 144.615 18.0635C144.932 18.5381 145.143 19.0918 145.248 19.7246C145.342 20.1582 145.389 20.8496 145.389 21.7988H138.489C138.519 22.7539 138.744 23.5215 139.166 24.1016C139.588 24.6758 140.241 24.9629 141.126 24.9629C141.952 24.9629 142.611 24.6904 143.104 24.1455C143.385 23.8291 143.584 23.4629 143.701 23.0469H145.257C145.216 23.3926 145.078 23.7793 144.844 24.207C144.615 24.6289 144.357 24.9746 144.07 25.2441C143.59 25.7129 142.995 26.0293 142.286 26.1934C141.905 26.2871 141.475 26.334 140.994 26.334C139.822 26.334 138.829 25.9092 138.015 25.0596C137.2 24.2041 136.793 23.0088 136.793 21.4736C136.793 19.9619 137.203 18.7344 138.023 17.791C138.844 16.8477 139.916 16.376 141.24 16.376ZM143.763 20.542C143.698 19.8564 143.549 19.3086 143.314 18.8984C142.881 18.1367 142.157 17.7559 141.144 17.7559C140.417 17.7559 139.808 18.0195 139.315 18.5469C138.823 19.0684 138.562 19.7334 138.533 20.542H143.763ZM153.562 23.4951C153.562 23.9521 153.729 24.3125 154.063 24.5762C154.397 24.8398 154.793 24.9717 155.25 24.9717C155.807 24.9717 156.346 24.8428 156.867 24.585C157.746 24.1572 158.186 23.457 158.186 22.4844V21.21C157.992 21.333 157.743 21.4355 157.438 21.5176C157.134 21.5996 156.835 21.6582 156.542 21.6934L155.584 21.8164C155.01 21.8926 154.579 22.0127 154.292 22.1768C153.806 22.4521 153.562 22.8916 153.562 23.4951ZM157.395 20.2959C157.758 20.249 158.001 20.0967 158.124 19.8389C158.194 19.6982 158.229 19.4961 158.229 19.2324C158.229 18.6934 158.036 18.3037 157.649 18.0635C157.269 17.8174 156.721 17.6943 156.006 17.6943C155.18 17.6943 154.594 17.917 154.248 18.3623C154.055 18.6084 153.929 18.9746 153.87 19.4609H152.394C152.423 18.3008 152.798 17.4951 153.519 17.0439C154.245 16.5869 155.086 16.3584 156.041 16.3584C157.148 16.3584 158.048 16.5693 158.739 16.9912C159.425 17.4131 159.768 18.0693 159.768 18.96V24.3828C159.768 24.5469 159.8 24.6787 159.864 24.7783C159.935 24.8779 160.078 24.9277 160.295 24.9277C160.365 24.9277 160.444 24.9248 160.532 24.9189C160.62 24.9072 160.714 24.8926 160.813 24.875V26.0439C160.567 26.1143 160.38 26.1582 160.251 26.1758C160.122 26.1934 159.946 26.2021 159.724 26.2021C159.179 26.2021 158.783 26.0088 158.537 25.6221C158.408 25.417 158.317 25.127 158.265 24.752C157.942 25.1738 157.479 25.54 156.876 25.8506C156.272 26.1611 155.607 26.3164 154.881 26.3164C154.008 26.3164 153.293 26.0527 152.736 25.5254C152.186 24.9922 151.91 24.3271 151.91 23.5303C151.91 22.6572 152.183 21.9805 152.728 21.5C153.272 21.0195 153.987 20.7236 154.872 20.6123L157.395 20.2959ZM166.342 24.9365C167.08 24.9365 167.692 24.6289 168.179 24.0137C168.671 23.3926 168.917 22.4668 168.917 21.2363C168.917 20.4863 168.809 19.8418 168.592 19.3027C168.182 18.2656 167.432 17.7471 166.342 17.7471C165.246 17.7471 164.496 18.2949 164.092 19.3906C163.875 19.9766 163.767 20.7207 163.767 21.623C163.767 22.3496 163.875 22.9678 164.092 23.4775C164.502 24.4502 165.252 24.9365 166.342 24.9365ZM162.246 16.6309H163.784V17.8789C164.101 17.4512 164.446 17.1201 164.821 16.8857C165.354 16.5342 165.981 16.3584 166.702 16.3584C167.769 16.3584 168.674 16.7686 169.418 17.5889C170.162 18.4033 170.534 19.5693 170.534 21.0869C170.534 23.1377 169.998 24.6025 168.926 25.4814C168.246 26.0381 167.455 26.3164 166.553 26.3164C165.844 26.3164 165.249 26.1611 164.769 25.8506C164.487 25.6748 164.174 25.373 163.828 24.9453V29.7529H162.246V16.6309ZM176.361 24.9365C177.1 24.9365 177.712 24.6289 178.198 24.0137C178.69 23.3926 178.937 22.4668 178.937 21.2363C178.937 20.4863 178.828 19.8418 178.611 19.3027C178.201 18.2656 177.451 17.7471 176.361 17.7471C175.266 17.7471 174.516 18.2949 174.111 19.3906C173.895 19.9766 173.786 20.7207 173.786 21.623C173.786 22.3496 173.895 22.9678 174.111 23.4775C174.521 24.4502 175.271 24.9365 176.361 24.9365ZM172.266 16.6309H173.804V17.8789C174.12 17.4512 174.466 17.1201 174.841 16.8857C175.374 16.5342 176.001 16.3584 176.722 16.3584C177.788 16.3584 178.693 16.7686 179.438 17.5889C180.182 18.4033 180.554 19.5693 180.554 21.0869C180.554 23.1377 180.018 24.6025 178.945 25.4814C178.266 26.0381 177.475 26.3164 176.572 26.3164C175.863 26.3164 175.269 26.1611 174.788 25.8506C174.507 25.6748 174.193 25.373 173.848 24.9453V29.7529H172.266V16.6309Z" fill="white"/>
              </svg></a></div>

              <div id="mc_embed_shell">
               <div className="hidden lg:flex justify-center items-center">
                        <div className="relative rotate-[-2deg] w-[125px] lg:w-[150px] xl:w-[170px] aspect-square border-4 border-[#000] rounded-full flex items-center justify-center">
                          <Image
                            quality={80}
                            width={358}
                            height={356}
                            src="/icons/whatson2.png"
                            alt="QR Code to download the app"
                            className="w-[65%]"
                          />

                          <span className="text-sm lg:text-lg xl:text-lg 2xl:text-xl leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-[#000] block uppercase absolute bottom-[-50px] lg:bottom-[0px] xl:bottom-[20px]  right-[-190px] lg:right-[-180px] xl:right-[-230px]  rotate-[-2deg] xl:rotate-[-5deg] w-[180px] lg:w-[150px] xl:w-[230px] text-center z-[100]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="122" height="101" viewBox="0 0 122 101" fill="none">
                              <mask id="mask0_12_325" maskUnits="userSpaceOnUse" x="0" y="0" width="122" height="101">
                                <path d="M121.037 57.3906L95.5272 100.28L1.18462 44.1676L26.6942 1.2781L121.037 57.3906Z" fill="white" stroke="white"/>
                              </mask>
                              <g mask="url(#mask0_12_325)">
                                <path d="M118.188 62.6502C118.188 62.6502 82.4715 7.09087 3.23471 44.8514" stroke="#0D0D12" stroke-width="3"/>
                                <path d="M14.853 50.1825L2.75922 44.9252L8.01587 32.8311" stroke="#0D0D12" stroke-width="3"/>
                              </g>
                            </svg>
                            <span className="font-display">
                              <span className="italic">Scan me</span>
                            </span>{" "}
                            with your phone camera to download!
                          </span>

                          
                        </div>
                      </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-[3vw] left-0 right-0 w-full hidden lg:block">
          <div className="mx-auto w-[15%] max-w-[250px]">
            <div className="animate-spin-slower">
              <IconLogo
                className={`w-full transition-colors ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] text-[#FF5F38]`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 my-4 w-full">
        <p className="text-white iin-phone">
          <span className="font-bold mr-2">Phone Number:</span>
          <a
            href="tel: 0115 988 1441"
            className="transition-all text-[#BDB800]"
          >
            0115 988 1441
          </a>
        </p>
        <p className="text-white iin-address mt-2">
          <span className="font-bold mr-2">Address:</span>
          <br className="sm:hidden inline" />
          <span className="text-[#BDB800]">
            It&#39;s in Nottingham, Dryden Street, Nottingham NG1 4FQ
          </span>
        </p>
      </div>

      <nav className="p-5">
        <ul className="flex text-white text-xs lg:text-sm w-full justify-center lg:justify-start">
          {policies?.map((e, i) => {
            return (
              <Fragment key={i}>
                <li className="pr-3">
                  <FancyLink
                    destination={`/policies/${e.slug.current}`}
                    label={e.title}
                  />
                </li>
                <li className="pr-3">|</li>
              </Fragment>
            );
          })}
          <li className="font-medium">
            <a
              href="https://www.cubicstudio.co.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Branding By Cubic
            </a>
          </li>

          <li className="ml-auto text-right hidden lg:block">
            <a href="#" className="a11y-focus">
              <span className="hidden lg:inline">Back&nbsp;</span>To Top{" "}
              <IconArrow className="w-2 lg:w-3 inline ml-1" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
