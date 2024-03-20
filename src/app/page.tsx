import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex py-2 pr-2 h-screen">
      <section className="xl:w-6/12 w-full">
        <Navbar />

        <div className="pt-52 w-full md:w-[550px] mx-auto px-6 md:px-0">
          <div>
            <div className="flex mb-7">
              <div className="flex items-center bg-[#EEEEEE] w-auto p-1 pr-3 rounded-2xl text-sm">
                <div className="bg-white rounded-2xl px-2 mr-3">New</div>
                <div className="mr-1">
                  Only signup if you are a business owner{" "}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667"
                    stroke="#030303"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-7 text-left leading-[3.5rem]">
              Forging Links, Empowering Connectivity in the Solar Universe
            </h1>

            <p className="text-[#6C7275] mb-7 leading-7">
              Welcome to Nigeria Solar Marketplace, where we&apos;re not just
              bridging the gap; we&apos;re forging connections across the solar
              universe. Our platform is more than just a marketplace; it&apos;s
              a dynamic hub where green energy visionaries, innovators, and
              pioneers converge to shape the future of sustainable energy.
            </p>

            <button className="bg-[#367AFF] text-white h-[50px] rounded-xl font-semibold w-[210px]">
              <a href="/auth/signup">Sign up</a>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-400 h-full w-6/12 rounded-2xl hidden xl:block relative">
        <Image
          className="rounded-2xl"
          objectFit="cover"
          src="/images/solar-panel-1.jpg"
          alt="Picture of solar panels"
          fill
        />
      </section>
    </main>
  );
}
