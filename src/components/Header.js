// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Andrey Kirsanov" />

            <div className='header__content'>
                <h1>Hi, I'm Andrey Kirsanov</h1>
                <p>Software Engineer Backend Developer</p>
                <a href="https://telegram.me/andre3000k"><button className='button'>Get In Touch</button></a>
            </div>
        </section>
    );
}

export default Header;