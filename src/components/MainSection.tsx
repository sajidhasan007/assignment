import { Col, Rate, Row } from "antd";
import { IoMdCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const MainSection = () => {
  return (
    <div className="bg-[#FAFAFA] p-0 md:p-10 mt-10">
      <div className="">
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            order={0}
          >
            <div>
              <h1 className="title-style bg-white mb-8 md:hidden block">
                <span className="text-[#2C7EF8]"> ONE TIME ONLY</span> special
                price for 6 extra Clarifion for only{" "}
                <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
              </h1>
            </div>
            <img src="./mainImage.svg" alt="" height={591} className="w-full" />
            <div className="hidden md:block">
              <div className="bg-white p-6 flex gap-3 ">
                <div className="mt-12">
                  <div className="flex gap-4">
                    <div className="mb-[18px] flex gap-3 items-center">
                      <img
                        src="/reviewer.png"
                        alt="reviewer.png"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <Rate value={5} className="my-4" />
                      <div className="flex items-center gap-1">
                        <h3>Ken T.</h3>
                        <p className="text-[#5BB59A] flex gap-1 items-center">
                          <img src="/verify.png" alt="verify.png" />
                          Verified Customer
                        </p>
                      </div>
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
              <h1 className="title-style mb-8 hidden md:block">
                <span className="text-[#2C7EF8]"> ONE TIME ONLY</span> special
                price for 6 extra Clarifion for only{" "}
                <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
              </h1>

              <div>
                <Row>
                  <Col
                    xs={{ span: 6 }}
                    sm={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                    className="flex items-center"
                  >
                    <div className="bg-[#2C7EF8] w-full p-3 rounded-2xl ">
                      <img src="/secondImage.svg" alt="" />
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 18 }}
                    sm={{ span: 18 }}
                    md={{ span: 18 }}
                    lg={{ span: 18 }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <h1 className="text-sm">Clarifion Air Ionizer</h1>
                        <div className="flex items-center gap-2">
                          <del className="text-[#969696] text-xs">$180</del>
                          <div className="text-[#2C7EF8] text-base font-bold">
                            $80
                          </div>
                        </div>
                      </div>
                      <Rate value={5} className="my-4" />

                      <div className="flex items-center gap-4">
                        <img src="/radioMarker.svg" alt="" />
                        <h1 className="text-[#37465A] text-xs">
                          12 left in Stock
                        </h1>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* <img
                src="/secondImageD.svg"
                alt="second image"
                className="w-full"
              /> */}
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

              <button className="flex gap-4 items-center justify-center text-white bg-[#59AE43] py-4 px-6 md:px-16 font-bold text-[20px] rounded-full w-full file:">
                Yes - Claim my discount <BsArrowRight />
              </button>

              <div className="hidden  px-4 py-2 border border-[#CFCFCF] rounded md:flex items-center justify-between flex-wrap text-xs mt-3">
                <p className="text-[#4D5254] ">Free Shipping</p>
                <span className="">|</span>
                <p className="text-[#4D5254] flex items-center ">
                  <FiLock /> Secure 256-bit SSL encryption.
                </p>

                <span className="">|</span>
                <img src="/payment.svg" alt="payment" height={14} />
              </div>

              <div className="block md:hidden  px-4 py-2 border border-[#CFCFCF] rounded  text-xs mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-[#4D5254] ">Free Shipping</p>
                  <span className="">|</span>
                  <p className="text-[#4D5254] flex items-center ">
                    <FiLock /> Secure 256-bit SSL encryption.
                  </p>
                </div>
                <div className="block md:hidden py-3">
                  <hr className="horizontal-line" />
                </div>
                <div className="flex justify-center">
                  <img src="/payment.svg" alt="payment" height={14} />
                </div>
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
                  className="description-image"
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
