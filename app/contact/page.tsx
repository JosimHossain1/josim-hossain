import { AiFillHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-28 lg:py-28 px-4 md:px-24">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="text-green-500 mb-4 block text-base font-semibold">
                Contact Us
              </span>
              <h2 className="mb-2 font-bold uppercase text-2xl">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-body-color mb-9 text-base leading-relaxed">
                Hello! Contact with us for any kind of information
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <AiFillHome className="text-2xl" />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-md font-bold">
                    Our Location
                  </h4>
                  <p className="text-body-color text-base">
                    Dhanmondi 32, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <BiPhoneCall className="text-2xl" />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-md font-bold">
                    Phone Number
                  </h4>
                  <p className="text-body-color text-base">(+880)1303xxxxxxx</p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <BsFillEnvelopeOpenFill className="text-2xl" />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-md font-bold">
                    Email Address
                  </h4>
                  <p className="text-body-color text-base">
                    greenhawker37@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-green-500 w-full rounded border p-3 text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
