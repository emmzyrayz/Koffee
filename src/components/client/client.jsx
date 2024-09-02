import './client.css';
import Client1 from '../../assets/images/client-img1.png';
import Client2 from '../../assets/images/client-img2.png';
import Client3 from '../../assets/images/client-img3.png';

function Client() {
    return (
      <div className="client_section layout_padding">
        <div className="container">
          <div
            id="custom_slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="about_taital">What Our Customer Says</h1>
                  </div>
                </div>
                <div className="client_section_2">
                  <div className="client_taital_main">
                    <div className="client_left">
                      <div className="client_img">
                        <img src={Client1} />
                      </div>
                    </div>
                    <div className="client_right">
                      <h3 className="moark_text">Joy Moark</h3>
                      <p className="client_text">
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancynow use Lorem Ipsum as their
                        default model text,{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="about_taital">What Our Customer Says</h1>
                  </div>
                </div>
                <div className="client_section_2">
                  <div className="client_taital_main">
                    <div className="client_left">
                      <div className="client_img">
                        <img src={Client2} />
                      </div>
                    </div>
                    <div className="client_right">
                      <h3 className="moark_text">Joy Moark</h3>
                      <p className="client_text">
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancynow use Lorem Ipsum as their
                        default model text,{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="about_taital">What Our Customer Says</h1>
                  </div>
                </div>
                <div className="client_section_2">
                  <div className="client_taital_main">
                    <div className="client_left">
                      <div className="client_img">
                        <img src={Client3} />
                      </div>
                    </div>
                    <div className="client_right">
                      <h3 className="moark_text">Joy Moark</h3>
                      <p className="client_text">
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancynow use Lorem Ipsum as their
                        default model text,{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev hidden"
              href="#custom_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="carousel-control-next hidden"
              href="#custom_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Client;