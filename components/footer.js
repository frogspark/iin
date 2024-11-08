import IconLogo from '@/icons/logo.svg'
import IconSmile from '@/icons/smile.svg'
import IconArrow from '@/icons/arrow.svg'
import IconZagUnderline from '@/icons/zag-underline.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { m } from 'framer-motion'
import FancyLink from '@/components/fancyLink'
import Socials from '@/components/socials'
import Image from 'next/image'
import { MouseParallax } from 'react-just-parallax'
import { Fragment, useRef } from 'react'
import FooterFlick from './footer-flick'

export default function Footer({ policies, contact }) {
  const footerRef1 = useRef()
  const footerRef2 = useRef()

  return (
    <footer className="bg-off-black selection:text-off-white selection:bg-[#FF5F38] pb-24 lg:pb-0">
      <div className="relative flex overflow-x-hidden text-[17vw] lg:text-[10vw] text-white uppercase">
        <div className="animate-marquee will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
        </div>

        <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
        </div>
      </div>

      <div className="p-5 pb-[10vw] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="col-span-1 aspect-square bg-[#5F0EFF] selection:text-[#5F0EFF] flex items-center justify-center relative group/main" ref={footerRef1}>
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bg-[#5F0EFF] opacity-0 scale-[0.75] lg:group-hover/main:opacity-100 lg:group-hover/main:scale-[1] transition-all ease-in-out duration-[550ms]">
                <div className="w-[50%] h-[75%] relative mix-blend-lighten opacity-[25%] bg-off-white overflow-hidden">
                  <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.1} strength={0.033} zIndex={20} parallaxContainerRef={footerRef1}>
                    <FooterFlick images={['/images/footer-flick-01.jpg','/images/footer-flick-02.jpg','/images/footer-flick-03.jpg']} />
                  </MouseParallax>
              </div>
            </div>

            <div className="w-11/12 lg:w-10/12 text-center text-white relative z-10">
              <span className="inline-block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-12 lg:mb-16 text-[#EFF366] relative overflow-hidden pb-[15px] lg:pb-[28px]">
                <span className="uppercase">Follow us</span>
                <span className="block font-display relative">on <span className="uppercase italic">socials
              </span></span>
              <svg className="absolute bottom-0 right-[-7.5%] lg:right-[-17%] w-[85%] lg:w-[90%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.774 17.59">
                  <defs>
                  <clipPath id="a">
                  <path fill="none" d="M0 17.592h431.774V.002H0Z" data-name="Path 1178"/>
                  </clipPath>
                  </defs>
                  <g data-name="Group 417">
                  <g clip-path="url(#a)" data-name="Group 416">
                  <g data-name="Group 415">
                    <path fill="none" stroke="#eff366" stroke-miterlimit="120" stroke-width="3" d="m1.289 2.597 12.378 12.378L25.736 2.597l12.378 12.378L50.489 2.597l12.073 12.378L74.94 2.597l12.379 12.378 12.07-12.378 12.378 12.378 12.377-12.378 12.067 12.378 12.378-12.378 12.38 12.378 12.069-12.378 12.378 12.378 12.378-12.378 12.069 12.378 12.379-12.378 12.378 12.378 12.378-12.378 12.074 12.378 12.073-12.378 12.378 12.378 12.379-12.378 12.045 12.378 12.042-12.378 12.378 12.378 12.382-12.378 12.069 12.378 12.378-12.378 12.378 12.378 12.069-12.378 12.378 12.378L418.4 2.597l12.068 12.378" data-name="Path 1177"/>
                  </g>
                  </g>
                  </g>
                </svg>
              </span>

              <p className="mb-12 lg:mb-16 leading-[1.25] xl:text-xl xl:leading-[1.25] max-w-[] md:max-w-[400px] xl:max-w-[500px] mx-auto">Amazing food and drinks, all the shops you&apos;ll ever need, and inspirational events and activities.</p>

              <Socials items={contact?.socials} className="text-off-black mx-auto justify-center" />
            </div>
          </div>

          <div className="col-span-1 aspect-square bg-[#EFF366] selection:text-[#EFF366] flex items-center justify-center relative group/main" ref={footerRef2}>
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bg-[#EFF366] opacity-0 scale-[0.75] lg:group-hover/main:opacity-100 lg:group-hover/main:scale-[1] transition-all ease-in-out duration-[550ms]">
              <div className="w-[50%] h-[75%] relative mix-blend-darken opacity-[15%] bg-[#EFF366] overflow-hidden">
                <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.1} strength={0.033} zIndex={20} parallaxContainerRef={footerRef2}>
                  <FooterFlick images={['/images/footer-flick2-01.jpg','/images/footer-flick2-02.jpg','/images/footer-flick2-03.jpg']} />
                </MouseParallax>
              </div>
            </div>

            <div className="w-11/12 lg:w-10/12 text-center text-off-black relative z-[10]">
              <span className="block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-10 lg:mb-16">
                <span className="uppercase relative">Sign up </span>
                <span className="block font-display">for <span className="uppercase italic relative">updates <IconSquiggleUnderline className="absolute bottom-[-5px] left-[-5%] right-[-5%] w-[110%]" /></span></span>
              </span>

              <p className="mb-12 lg:mb-16 leading-[1.25] xl:text-xl xl:leading-[1.25] max-w-[] md:max-w-[400px] xl:max-w-[500px] mx-auto">No spam, ever. Just occasional news, city updates, and tasty offers direct to your inbox!</p>


              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form action="https://itsinnottingham.us12.list-manage.com/subscribe/post?u=a2589d6638b3851af61d31af5&amp;id=ab842ef9a9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="relative xl:text-xl xl:leading-none xl:max-w-[720px] mx-auto">
                    <div id="mc_embed_signup_scroll">
                      <div className="w-full">
                        {/* <label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label> */}
                        <input type="email" name="EMAIL" id="mce-EMAIL" required="" placeholder="Email address..." className="appearance-none rounded-full bg-white py-4 lg:py-5 px-6 inline-block leading-none w-full a11y-focus focus-visible:ring-2" />
                      </div>
                      <div id="mce-responses" class="clear">
                        <div id="mce-error-response" className="hidden"></div>
                        <div id="mce-success-response" className="hidden"></div>
                      </div>
                      <div aria-hidden="true" style={{ position: `absolute`, left: `-5000px` }}>
                        <input type="text" name="b_a2589d6638b3851af61d31af5_ab842ef9a9" tabindex="-1" value="" />
                      </div>
                      <div class="clear">
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="absolute top-0 right-0 w-auto bg-[#FC6E5C] px-8 h-full flex items-center justify-center rounded-full text-white a11y-focus focus-visible:ring-2 focus-visible:ring-black group overflow-hidden leading-[1.1]">
                          <div className="relative z-[1] overflow-hidden">
                            <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Sign&nbsp;<span className="hidden lg:inline">me&nbsp;</span>up!</span>
                            <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Sign&nbsp;<span className="hidden lg:inline">me&nbsp;</span>up!</span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                            <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[50] origin-center bg-black/30`}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>


              {/* <form className="relative xl:text-xl xl:leading-none xl:max-w-[720px] mx-auto">
                <input type="email" placeholder="Email address..." className="appearance-none rounded-full bg-white py-4 lg:py-5 px-6 inline-block leading-none w-full a11y-focus focus-visible:ring-2" />

                <button type="submit" className="absolute top-0 right-0 w-auto bg-[#FC6E5C] px-8 h-full flex items-center justify-center rounded-full text-white a11y-focus focus-visible:ring-2 focus-visible:ring-black group overflow-hidden leading-[1.1]">
                  <div className="relative z-[1] overflow-hidden">
                    <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Sign&nbsp;<span className="hidden lg:inline">me&nbsp;</span>up!</span>
                    <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Sign&nbsp;<span className="hidden lg:inline">me&nbsp;</span>up!</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                    <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[50] origin-center bg-black/30`}></div>
                  </div>
                </button>
              </form> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-[3vw] left-0 right-0 w-full hidden lg:block">
          <div className="mx-auto w-[15%] max-w-[250px]">
            <div className="animate-spin-slower">
              <IconLogo className={`w-full transition-colors ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] text-[#FF5F38]`} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 my-4 w-full">
        <p className="text-white iin-phone">
          <span className="font-bold mr-2">Phone Number:</span>
          <a href="tel: 0115 988 1441" className="transition-all text-[#BDB800]">0115 988 1441</a>
        </p>
        <p className="text-white iin-address mt-2">
          <span className="font-bold mr-2">Address:</span>
          <br className="sm:hidden inline"/>
          <span className="text-[#BDB800]">It's in Nottingham, Dryden Street, Nottingham NG1 4FQ</span>
        </p>
      </div>

      <nav className="p-5">
        <ul className="flex text-white text-xs lg:text-sm w-full justify-center lg:justify-start">
          {policies?.map((e, i) => {
            return (
              <Fragment key={i}>
              <li className="pr-3"><FancyLink destination={`/policies/${e.slug.current}`} label={e.title} /></li>
              <li className="pr-3">|</li>
              </Fragment>
            )
          })}
          <li className="font-medium"><a href="https://www.cubicstudio.co.uk/" rel="noopener noreferrer" target="_blank">Branding By Cubic</a></li>

          <li className="ml-auto text-right hidden lg:block"><a href="#" className="a11y-focus"><span className="hidden lg:inline">Back&nbsp;</span>To Top <IconArrow className="w-2 lg:w-3 inline ml-1" /></a></li>
        </ul>
      </nav>
    </footer>
  )
}