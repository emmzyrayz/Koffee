import './banner.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Banner() {
    return (
      <>
        <div className="banner_section layout_padding">
          <div className="container">
            <div
              id="banner_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Koffee <br /> Shop
                        </h1>
                        <p className="banner-text">
                          more-or-less normal distribution of letters, as
                          opposed to using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt active">
                            <a href="/about">About Us</a>
                          </div>
                          <div className="callnow_bt">
                            <a href="/contact">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Koffee <br /> Shop
                        </h1>
                        <p className="banner-text">
                          more-or-less normal distribution of letters, as
                          opposed to using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt active">
                            <a href="/about">About Us</a>
                          </div>
                          <div className="callnow_bt">
                            <a href="/contact">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Koffee <br /> Shop
                        </h1>
                        <p className="banner-text">
                          more-or-less normal distribution of letters, as
                          opposed to using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt active">
                            <a href="/about">About Us</a>
                          </div>
                          <div className="callnow_bt">
                            <a href="/contact">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a className='carousel-control-prev hidden' href='#banner_slider' role='button' data-slide='prev'>
                <FaArrowLeft />
              </a>
              <a className='carousel-control-next hidden' href='#banner_slider' role='button' data-slide='next'>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Banner;