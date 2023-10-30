import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const TopBar = () => {
  return (
    <div className="h-12 bg-tobarBackground text-white ">
      <Row>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <div className="h-12 flex items-center">
            <div className="contain-container flex justify-between w-full">
              {topbarData.map((item: { icon: string; title: string }) => (
                <div className="flex gap-2 items-center">
                  <img src={item.icon} alt="icon" width={22} height={22} />
                  <div className="text-xs">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 0 }}
          lg={{ span: 0 }}
          xxl={{ span: 0 }}
        >
          <div className="h-12 flex items-center">
            <Swiper
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              //   loop={true}
            >
              {topbarData.map((item: { icon: string; title: string }) => (
                <SwiperSlide className="flex justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <img src={item.icon} alt="icon" width={22} height={22} />
                    <div className="text-xs">{item.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;

const topbarData = [
  {
    icon: "/satisfaction.svg",
    title: "30-DAY SATISFACTION GUARANTEE",
  },
  {
    icon: "/car.svg",
    title: " Free delivery on orders over $40.00",
  },
  {
    icon: "/heart.svg",
    title: "50.000+ HAPPY CUSTOMERS",
  },
  {
    icon: "/circle.svg",
    title: "100% Money Back Guarantee",
  },
];
