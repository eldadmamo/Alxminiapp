import './IntroAnimation.css';
import photoing from '../assets/rabbit-logo.jpg'
import videing from '../assets/cars.mp4'

const IntroAnimation = () => {
    return (
        <div className="intro-container">
            <video className="background-video" autoPlay loop muted>
                <source src={videing} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay">
                <div className="logo-container">
                    <div className="circle">
                        <img src={photoing} alt="Rocky Rabbit Logo" className="rabbit-logo" />
                    </div>
                    <h1 className="rocky-rabbit-text">Hulemekina</h1>
                </div>
            </div>

            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    );
};

export default IntroAnimation;
