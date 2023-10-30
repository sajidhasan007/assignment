import { ConfigProvider, Steps } from "antd";
import TopBar from "./components/TopBar";
import SecondTopBar from "./components/SecondTopBar";
import MainSection from "./components/MainSection";
import { Footer } from "./components";
function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          // algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#59AE43",
          },
          components: {
            // Pagination: {
            //   colorPrimary: "#424242",
            //   colorFillSecondary: "#075985",
            // },
            // Menu: {
            //   colorPrimaryBg: "#e61f09",
            // },
          },
        }}
      >
        <TopBar />
        <SecondTopBar />
        <div className="contain-container text-center">
          <h1 className="text-5xl font-normal mb-6">
            Wait ! your order in progress.
          </h1>
          <p className="text-[#4D5254] text-2xl font-normal mb-3 md:mb-[60px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          </p>
        </div>

        <div className="contain-container py-8">
          <Steps
            current={2}
            items={[
              {
                title: "Step 1 : Cart Review",
              },
              {
                title: "Step 2 : Checkout",
              },
              {
                title: "Step 3 : Special Offer",
              },

              {
                title: "Step 4 : Confirmatio",
              },
            ]}
          />
          <MainSection />
        </div>
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
