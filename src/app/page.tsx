import Navbar from "@/components/navbar";
import ariseHealthLogo from "@/assets/images/arisehealth.png";
import ephicientLogo from "../assets/images/ephicient.png";
import twentyTwentyLogo from "../assets/images/2020inc.png";
import thePaakLogo from "../assets/images/thepaak.png";
import pipelinxLogo from "../assets/images/pipelinx.png";
import toogetherLogo from "../assets/images/toogether.png";
import zapierLogo from "../assets/svgs/zapier.svg";
import aidnLogo from "../assets/svgs/aidn.svg";
import synthesiaLogo from "../assets/svgs/synthesia.svg";
import mercuryLogo from "../assets/svgs/mercury.svg";
import cogniteLogo from "../assets/svgs/cognite.svg";
import latticeLogo from "../assets/svgs/lattice.svg";
import plusSign from "../assets/svgs/plusSign.svg";
import minusSign from "../assets/svgs/minusSign.svg";
import metaHeads from "../assets/images/metaLookinHeads.png";
import gridOne from "../assets/images/gridOne.png";
import gridTwo from "../assets/images/gridTwo.png";
import gridThree from "../assets/images/gridThree.png";
import gridFour from "../assets/images/gridFour.png";
import Image from "next/image";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      {/* page 1 */}
      <div className="min-w-screen h-[702px] bg-[#FAFAFA] relative z-0 outline outline-1">
        <div className="flex flex-col items-center justify-center min-w-screen h-[550px]">
          <div className="flex flex-col items-center justify-center w-[1124px] h-[406px]">
            <div className="w-[1060px] h-[342px]">
              <div className="font-bold text-6xl text-center mb-8 leading-[72px]">
                Forging Links, Empowering Connectivity in the Solar Universe
              </div>
              <div className="flex flex-col items-center mb-7">
                <p className="w-[967.52px] h-[96px] text-center text-lg leading-[32px]">
                  Welcome to Nigeria Solar Marketplace, where we're not just
                  bridging the gap; we're forging connections across the solar
                  universe. Our platform is more than just a marketplace; it's a
                  dynamic hub where green energy visionaries, innovators, and
                  pioneers converge to shape the future of sustainable energy.
                </p>
              </div>
              <div className="flex flex-row justify-center">
                <button
                  className="py-[8px] px-[16px] rounded-lg text-white mr-1"
                  style={{
                    background: "linear-gradient(180deg, #3E90F0, #1B6ECF)",
                  }}
                >
                  Sign Up
                </button>
                <button className="py-[8px] px-[32px] rounded-lg bg-[#F5F5F5] border border-[#404142]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full absolute left-[25%] bottom-10 bg-[url('/images/chessBoardBox.png')] -z-10"></div>
      </div>
      {/* page 1 end */}

      {/* page 2 */}
      <div className="flex flex-col items-center min-w-screen h-[2012px] bg-[#FAFAFA]">
        <div className="w-[1200px]">
          <div className="flex flex-col items-center mb-5">
            <div className="font-bold text-center text-5xl w-8/12">
              Igniting Innovation and Collaboration in the Solar Sphere
            </div>
          </div>
          <div className="flex flex-col items-center mb-12">
            <p className="text-center w-8/12 leading-8">
              Through our cutting-edge technology and visionary thinking, we
              empower stakeholders to navigate the dynamic landscape of green
              energy with confidence and ease.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12">

            <div className="w-full bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl relative">

              <div className="p-[40px]">
                <Image 
                  src={gridOne}
                  alt="image"
                /> 
              </div>

              <Image
                className="absolute top-[27%]"
                src={metaHeads}
                alt="Collaborate"
                height={323.85}
              />

              <div className="w-full h-[20%] absolute top-1/2" style={{background: 'linear-gradient(180deg, rgba(233, 234, 236, 0) 0%, #E9EAEC 100%)'}}></div>

              <div className="p-[40px] absolute bottom-0">
                <h4 className="font-bold text-[28px] text-[#404142] mb-4">
                  Unlock Unparalleled Connectivity Across the Solar Ecosystem
                </h4>
                <p className="text-[#6C7275] font-medium text-base">
                  Connect effortlessly with industry leaders, innovators, and
                  stakeholders across the solar ecosystem. Our platform fosters
                  seamless collaboration and networking opportunities,
                  empowering you to forge valuable connections that drive growth
                  and innovation.
                </p>
              </div>

            </div>

            <div className="w-[588px] h-[828px] bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl relative">

              <div className="p-[40px]">
                <Image
                  src={gridTwo}
                  alt="Image"
                />
              </div>

              <div className="p-[40px] absolute bottom-0">
                <h4 className="font-bold text-[28px] text-[#404142] mb-4">
                  Get Personalized Recommendations Aligned with Your Goals
                </h4>
                <p className="text-[#6C7275] font-medium text-base">
                  Receive tailored recommendations based on your preferences,
                  interests, and past interactions. Our platform leverages
                  advanced algorithms to deliver personalized insights and
                  connections that align with your goals.
                </p>
              </div>

            </div>

            <div className="w-[588px] h-[828px] bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl relative">

              <div className="p-[40px]">
                <Image
                  src={gridThree}
                  alt="Image"
                />
              </div>    

              <div className="p-[40px] absolute bottom-0">
                <h4 className="font-bold text-[28px] text-[#404142] mb-4">
                  Stay Ahead with Real-time Market Intelligence and Insights
                </h4>
                <p className="text-[#6C7275] font-medium text-base">
                  Stay ahead of the curve with access to real-time market
                  intelligence and curated industry insights. From emerging
                  trends to regulatory updates, our platform equips you with the
                  knowledge you need to thrive in the ever-evolving world of
                  green energy.
                </p>
              </div>

            </div>

            <div className="w-[588px] h-[828px] bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl relative">
              
              <div className="p-[40px]">
                <Image
                  className="h-full"
                  src={gridFour}
                  alt="Image"
                />
              </div> 

              <div className="p-[40px] absolute bottom-0">
                <h4 className="font-bold text-[28px] text-[#404142] mb-4">
                  Experience Streamlined Transactions with Secure E-signature
                  Capabilities
                </h4>
                <p className="text-[#6C7275] font-medium text-base">
                  With our secure transaction facilitation features, streamline
                  the process of sealing deals and collaborations. From
                  e-signature capabilities to transparent transaction histories,
                  rest assured that your solar ventures are in safe hands every
                  step of the way.
                </p>
              </div>

            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* page 2 end */}

      {/* page 3 */}
      <div className="min-w-screen h-[175.5px] bg-[#FAFAFA] flex flex-col items-center">
        <div className="w-[95%] flex flex-col items-center mb-7">
          <div className="w-[75%] flex flex-row items-center justify-between">
            <Image
              className="inline-block"
              src={ariseHealthLogo}
              alt="ariseHealthLogo"
              width={154}
              height={23.5}
            />
            <Image
              className="inline-block"
              src={ephicientLogo}
              alt="ephicientLogo"
              width={113}
              height={23.5}
            />
            <Image
              className="inline-block"
              src={twentyTwentyLogo}
              alt="twentyTwentyLogo"
              width={101}
              height={22.5}
            />
            <Image
              className="inline-block"
              src={thePaakLogo}
              alt="thePaakLogo"
              width={107}
              height={35.5}
            />
            <Image
              className="inline-block"
              src={pipelinxLogo}
              alt="pipelinxLogo"
              width={124}
              height={27.5}
            />
            <Image
              className="inline-block"
              src={toogetherLogo}
              alt="toogetherLogo"
              width={165}
              height={22.5}
            />
          </div>
        </div>
        <div className="w-[95%] flex flex-col items-center">
          <div className="w-[63%] flex flex-row items-center justify-between">
            <Image
              src={zapierLogo}
              alt="zapierLogo"
              width={92.53}
              height={26}
            />
            <Image src={aidnLogo} alt="aidnLogo" width={54} height={26} />
            <Image
              src={synthesiaLogo}
              alt="synthesiaLogo"
              width={121}
              height={26}
            />
            <Image
              src={mercuryLogo}
              alt="mercuryLogo"
              width={143}
              height={26}
            />
            <Image
              src={cogniteLogo}
              alt="cogniteLogo"
              width={48.6}
              height={26}
            />
            <Image
              src={latticeLogo}
              alt="latticeLogo"
              width={143}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* page 3 end */}

      {/* page 4 */}
      <div className="min-w-screen bg-[#FAFAFA] flex flex-col items-center justify-center py-[72px]">
        <div className="w-[1240px] flex flex-col items-center">
          <div className="w-[95%] flex flex-col items-center mb-10">
            <h2 className="text-center w-[70%] text-5xl font-bold leading-[56px]">
              Find Out What Others Are Saying: Testimonials From Our Community
            </h2>
          </div>

          <div className="w-[95%] grid grid-cols-3 gap-x-6 relative">
            <div className="w-[376px] h-[1216px]">
              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  The team behind Nigeria Solar Marketplace truly understands
                  the needs of the solar community. Their dedication to
                  fostering collaboration and facilitating meaningful
                  connections sets them apart in the industry. I'm grateful to
                  be part of this vibrant community.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Rachel Adams, Solar Alliance Network
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  I can't recommend Nigeria Solar Marketplace enough. The
                  platform's commitment to transparency and credibility sets it
                  apart. Whether you're a business owner, investor, or industry
                  enthusiast, you'll find immense value in this community-driven
                  platform.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Nguyen, Shane, Solar Connections Inc.
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-t-3xl p-8">
                <p className="leading-8 text-lg text-[#6C7275] font-semibold">
                  Navigating the solar industry can be daunting, but Nigeria
                  Solar Marketplace has made it a seamless experience. From
                  finding suppliers to accessing market insights, the platform
                  offers everything I need to succeed in the solar space.
                </p>
              </div>
            </div>

            <div className="w-[376px] h-[1088px]">
              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  As a newcomer to the solar sector, Nigeria Solar Marketplace
                  has been instrumental in helping us navigate the industry
                  landscape. The wealth of information and connections available
                  have been invaluable for our growth.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Flores Smith, Solar Innovations Ltd
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  Nigeria Solar Marketplace has been a game-changer for our
                  business. The platform's connectivity and ease of use have
                  enabled us to find valuable partnerships and expand our reach
                  in the solar industry.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Black Marvin, Solar Solutions Inc
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  Nigeria Solar Marketplace has exceeded my expectations. The
                  platform's comprehensive profiles and easy-to-use interface
                  have made connecting with like-minded professionals a breeze.
                  It's become my go-to resource for all things solar.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Emily Wilson, SolarTech Innovations
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[376px] h-[1152px]">
              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  I've been impressed with the level of engagement and support
                  provided by Nigeria Solar Marketplace. The team is dedicated
                  to fostering collaboration and driving innovation, making it a
                  go-to platform for anyone in the solar space.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      David Johnson, SolarTech Solutions
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  Nigeria Solar Marketplace is more than just a directory; it's
                  a community. The connections I've made and the insights I've
                  gained have been instrumental in advancing my career in the
                  solar industry. Highly recommended!
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Miles Brown, Solar Dynamics Group
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-8 mb-6">
                <p className="mb-8 leading-8 text-lg text-[#6C7275] font-semibold">
                  The user-friendly interface and robust features of Nigeria
                  Solar Marketplace make it a standout platform in the green
                  energy sector. Whether you're a seasoned professional or a
                  newcomer, there's something here for everyone.
                </p>
                <div className="flex flex-row justify-between">
                  <span className="block">Image</span>
                  <div>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                      Henry Michael, Solar Futures Initiative
                    </span>
                    <span className="block font-normal text-[#86898A] text-xs">
                      @dani_dev
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full h-[348px] absolute bottom-0 left-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FAFAFA 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* page 4 end */}

      {/* page 5 */}
      <div className="min-w-screen h-[1196px] bg-[#FAFAFA] flex flex-col items-center justify-center">
        <div className="w-[1240px] h-[1052px] flex flex-col items-center">
          <div className="w-[95%] flex flex-col items-center mb-10">
            <h2 className="w-[70%] text-center font-bold text-5xl leading-[56px]">
              Let us help clear some doubts: Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <div className="w-[878px] h-[900px] flex flex-col items-center justify-center rounded-lg bg-white">
            <div className="w-[697.08px] h-[745px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-[93%]">
                  <div className="flex flex-row justify-between">
                    <h4 className="mb-3 text-[22px] font-medium">
                      What is Nigeria Solar Marketplace?
                    </h4>
                    <div className="w-[41.5px] h-[41.5px] bg-blue-500 text-center text-white rounded-lg flex flex-col items-center justify-center">
                      <Image src={minusSign} alt="minusSign" />
                    </div>
                  </div>
                  <p className="text-[18px] leading-[30px] w-[90%]">
                    Nigeria Solar Marketplace is a dynamic platform that
                    connects businesses, investors, service providers, and other
                    key players in the solar industry. It serves as a hub for
                    collaboration, innovation, and networking within the solar
                    ecosystem.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center my-6">
                <div className="flex flex-row justify-between w-[93%]">
                  <h4 className="block text-[22px] pb-0 font-medium">
                    How can I join Nigeria Solar Marketplace?
                  </h4>
                  <div className="w-[41.5px] h-[41.5px] bg-[#F7F7FF] text-center text-white rounded-lg flex flex-col items-center justify-center">
                    <Image src={plusSign} alt="plusSign" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center my-6">
                <div className="flex flex-row justify-between w-[93%]">
                  <h4 className="block text-[22px] pb-0 font-medium w-[80%]">
                    What types of businesses can I find on Nigeria Solar
                    Marketplace?
                  </h4>
                  <div className="w-[41.5px] h-[41.5px] bg-[#F7F7FF] text-center text-white rounded-lg flex flex-col items-center justify-center">
                    <Image src={plusSign} alt="plusSign" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center my-6">
                <div className="flex flex-row justify-between w-[93%]">
                  <h4 className="block text-[22px] pb-0 font-medium w-[65%]">
                    How does the verification process work for businesses?
                  </h4>
                  <div className="w-[41.5px] h-[41.5px] bg-[#F7F7FF] text-center text-white rounded-lg flex flex-col items-center justify-center">
                    <Image src={plusSign} alt="plusSign" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center my-6">
                <div className="flex flex-row justify-between w-[93%]">
                  <h4 className="block text-[22px] pb-0 font-medium w-[80%]">
                    Can I showcase my products/services on Nigeria Solar
                    Marketplace?
                  </h4>
                  <div className="w-[41.5px] h-[41.5px] bg-[#F7F7FF] text-center text-white rounded-lg flex flex-col items-center justify-center">
                    <Image src={plusSign} alt="plusSign" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center my-6">
                <div className="flex flex-row justify-between w-[93%]">
                  <h4 className="block text-[22px] pb-0 font-medium w-[80%]">
                    How can I contact support if I have further questions or
                    issues?
                  </h4>
                  <div className="w-[41.5px] h-[41.5px] bg-[#F7F7FF] text-center text-white rounded-lg flex flex-col items-center justify-center">
                    <Image src={plusSign} alt="plusSign" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 5 end */}

      {/* page 6 */}
      <div className="flex flex-col items-center justify-center min-w-screen h-[568px] bg-[#FAFAFA]">
        <div className="flex flex-col items-center justify-center w-[1240px] h-[424px]">
          <div className="w-[1176px] h-[360px]">
            <div className="w-[623.65px] h-[360px]">
              <h2 className="font-bold text-5xl leading-[56px] w-[90%] mb-6">
                Unlock Limitless Potential by Joining the Solar Movement Now!
              </h2>
              <p className="w-[85%] mb-8">
                Ready to take your place in the forefront of the solar industry?
                Join Nigeria Solar Marketplace now to connect with industry
                leaders, access valuable insights, and drive innovation forward.
                Start your journey towards a brighter, more sustainable future
                today!
              </p>
              <div>
                <button className="py-[8px] px-[16px] rounded-lg bg-[#3E90F0] text-white mr-1">
                  Sign Up
                </button>
                <button className="py-[8px] px-[32px] rounded-lg bg-[#F5F5F5] border border-[#404142]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 6 end */}

      {/* page 7 */}
      <div className="min-w-screen h-[341px] bg-[#FAFAFA] pt-16 px-14">
        <div className="w-[1240px] h-[176px] mb-11 flex flex-row">
          <div className="w-[50%] h-[full]">
            <Logo />
          </div>
          <div className="w-[50%] h-[full]">
            <div className="w-[90%] pt-4 flex flex-row justify-between">
              <div>
                <h4 className="mb-2">COMPANY</h4>
                <span className="block mb-2">How it works</span>
                <span className="block mb-2">Pricing</span>
                <span className="block">Demo</span>
              </div>
              <div>
                <h4 className="mb-2">RESOURCES</h4>
                <span className="block mb-2">Solar connectivity</span>
                <span className="block mb-2">Green energy pratices</span>
                <span className="block mb-2">Business growth tracker</span>
                <span className="block">See all resources</span>
              </div>
              <div>
                <h4 className="mb-2">ABOUT</h4>
                <span className="block mb-2">Terms & Conditions</span>
                <span className="block">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1240px] h-[53px] flex flex-col items-center justify-center">
          <span className="block">Copyright &copy; 2024 Designluch</span>
        </div>
      </div>
      {/* page 7 end */}
    </>
  );
}
