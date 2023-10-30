import { Col, Row } from "antd";
import { FiLock } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
const Footer = () => {
  return (
    <div className=" bg-tobarBackground text-white py-6">
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <div className="px-4 md:px-32 flex flex-col md:flex-row justify-between w-full">
            <div className="flex gap-2 items-center text-white">
              <p>Copyright (c) 2023</p>
              <span className="px-2 md:px-4">|</span>
              <p>Clarifionsupport@clarifion.com</p>
            </div>
            <div>
              <p className="flex items-center justify-center mt-[26px] md:mt-0">
                <FiLock /> Secure 256-bit SSL encryption.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
