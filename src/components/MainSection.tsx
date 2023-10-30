import { Col, Row } from "antd";
import { IoMdCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const MainSection = () => {
  return (
    <div className="bg-[#FAFAFA] p-10 mt-10">
      {/* <div className="md:hidden block">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            order={1}
          >
            <div className="text-black">
              <img src="./mainImage.svg" alt="" height={591} />
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            order={0}
            className="border"
          >
            <div className="text-black">
              <h1>Description</h1>
            </div>
          </Col>
        </Row>
      </div> */}
      <div className="">
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            order={0}
          >
            <img src="./mainImage.svg" alt="" height={591} className="w-full" />
            <div className="hidden md:block">
              <div className="bg-white p-6 flex gap-3 ">
                <div className="">
                  <div className="mb-[18px] flex gap-3 items-center">
                    <img
                      src="/reviewer.png"
                      alt="reviewer.png"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h1>review</h1>
                    <div className="flex items-center gap-1">
                      <h3>Ken T.</h3>
                      <p className="text-[#5BB59A] flex gap-1 items-center">
                        <img src="/verify.png" alt="verify.png" />
                        Verified Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4D5254] mt-[18px]">
                    “As soon as the Clarifions arrived I put one in my bedroom.
                    This was late in the afternoon. When I went to the bedroom
                    in the evening it smelled clean. When I went to bed I felt I
                    could breathe better. Wonderful.”
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            order={1}
          >
            <div className="text-black">
              <h1 className="title-style mb-8">
                <span className="text-[#2C7EF8]"> ONE TIME ONLY</span> special
                price for 6 extra Clarifion for only{" "}
                <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
              </h1>
              <img
                src="/secondImageD.svg"
                alt="second image"
                className="w-full"
              />
              <div className="mt-[37px]">
                <div className="benefit-list flex mb-[26px]">
                  <div className="text-2xl text-[#2C7EF8] font-bold mr-3">
                    <IoMdCheckmark />
                  </div>
                  <div className="text-base">
                    <p className="text-[#4D5254]">
                      Negative Ion Technology may{" "}
                      <span className="font-bold">help with allergens</span>
                    </p>
                  </div>
                </div>

                <div className="benefit-list flex mb-[26px]">
                  <div className="text-2xl text-[#2C7EF8] font-bold mr-3">
                    <IoMdCheckmark />
                  </div>
                  <div className="text-base">
                    <p className="text-[#4D5254]">
                      Designed for
                      <span className="font-bold">air rejuvenation</span>
                    </p>
                  </div>
                </div>

                <div className="benefit-list flex mb-[26px]">
                  <div className="text-2xl text-[#2C7EF8] font-bold mr-3">
                    <IoMdCheckmark />
                  </div>
                  <div className="text-base">
                    <p className="text-[#4D5254]">
                      <span className="font-bold"> Perfect for every room</span>
                      in all types of places.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EDF3FD] px-4 py-3 rounded-md flex gap-4 items-center my-8">
                <img src="/parcentage.svg" alt="" width={32} height={32} />
                <p className="text-base">
                  Save <span className="text-[#2C7EF8]">53%</span> and get
                  <span className="text-[#2C7EF8]">6 extra Clarifision</span>
                  for only <span className="text-[#2C7EF8]">$14 Each</span>.
                </p>
              </div>

              <button className="flex gap-4 items-center text-white bg-[#59AE43] py-4 px-16 font-bold text-[20px] rounded-2xl">
                Yes - Claim my discount <BsArrowRight />
              </button>

              <div className="px-4 py-2 border border-[#CFCFCF] rounded flex items-center justify-between text-xs mt-3">
                <p className="text-[#4D5254] ">Free Shipping</p>
                <span className="">|</span>
                <p className="text-[#4D5254] flex items-center">
                  <FiLock /> Secure 256-bit SSL encryption.
                </p>
                <span className="">|</span>
                <img src="/payment.svg" alt="payment" height={14} />
              </div>

              <div>
                <h1 className="text-[#F82C2C] font-medium text-lg underline uppercase mt-5 text-center">
                  No thanks, I don’t want this.
                </h1>
              </div>

              <div className="flex gap-4 items-center mt-8">
                <img
                  src="/satisfaction.png"
                  alt="satisfaction.svg"
                  width={88}
                  height={88}
                />
                <p className="text-[#4D5254] text-base">
                  If you are not completely thrilled with your Clarifion - We
                  have a
                  <span className="font-bold">
                    30 day satisfaction guarantee
                  </span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainSection;
