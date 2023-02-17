import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import lg2 from "../../Assets/logo-change-backgr.png";


const About = () => {
    const { loading } = useSelector(
        (state) => state.profile
      );
  return (
    <>
    {loading ? <Loading /> : 
    <>
    <MetaData title="About" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="about__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img src={lg2}/>
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Welcome to 0164 W&P
              </span>
              <p>
                Vì sao lại là
              </p>
            </div>
          </div>
        </div>

        {/* 2nd verse */}
        <div className="second">
          <div className="heading">
            <h2>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                </div>
              <span>Giá cả tốt</span>
              <p>
                0164 tự tin hướng tới những sản phẩm tốt với giá cả phải chăng,
                phù hợp với người tiêu dùng Việt Nam
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                </div>
              <span>Chất lượng và sự phục vụ</span>
              <p>
                Với con người và đội ngũ nhiều năm trong ngành, 0164 hy vọng
                có thể đem lại cho quý khách hàng những trải nghiệm tốt nhất về 
                dịch vụ và sản phẩm.
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                </div>
              <span>Hệ thống giao hàng</span>
              <p>
                0164 luôn đặt khách hàng lên hàng đầu và một trong số đó là 
                hệ thống giao hàng tại 0164 luôn được thay đổi qua từng ngày 
                nhằm đáp ứng mọi nhu cầu cấp thiết của khách hàng.
              </p>
              </div>
            </div>


            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                </div>
              <span>Đội ngũ tư vấn chuyên sâu</span>
              <p>
                Với nhiều năm trong lĩnh vực, 0164 tự tin mang đến cho khách hàng 
                những sự tư vấn tốt nhất, qua đó giúp cho khách hàng có thể lựa chọn 
                cho mình những sản phẩm thật sự phù hợp nhất.
              </p>
              </div>
            </div>

            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                </div>
              <span>100% sự hài lòng</span>
              <p>
                0164 rất tự hào vì sự hài lòng của khách hàng dành cho 0164.
                Đó là một niềm vinh dự lớn để 0164 có thể bước tiếp trong 
                hành trình sắp tới.
              </p>
              </div>
            </div>
            
            

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <BottomTab />
  </>
    }
    </>
  );
};

export default About;