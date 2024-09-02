import "./contact.css";

export default function Contact() {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="contact_taital">Get In Touch</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-12">
              <div className="mail_section_1">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Name"
                  name="Your Name"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Email"
                  name="Your Email"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Phone"
                  name="Your Phone"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Message"
                  rows="5"
                  id="comment"
                  name="Massage"
                ></textarea>
                <div className="send_bt">
                  <a href="#">Send</a>
                </div>
              </div>
            </div>
            <div className="map_main">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&maptype=satellite&center=48.8584,2.2945&zoom=18"
                  width="250"
                  height="500"
                  style={{border: 0, width: "100%"}}
                  allowFullScreen
                  title="Google Map of Eiffel Tower in 3D"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
