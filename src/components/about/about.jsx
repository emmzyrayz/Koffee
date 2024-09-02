import './about.css';
import AboutImage from '../../assets/images/about-img.png'

function About() {
    return (
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_box">
                  <h1 className="about_taital">About Our Shop</h1>
                  <h1 className="about_taital_1">Coffe distribution '</h1>
                  <p className="about_text">
                    has a more-or-less normal distribution of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editorhas a more-or-less normal distribution of
                    letters, as oppos
                  </p>
                  <div className='readmore_btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='image-iman'>
                    <img src={AboutImage} className='about_img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;