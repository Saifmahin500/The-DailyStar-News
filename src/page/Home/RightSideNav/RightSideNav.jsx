import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import qz1 from '../../../assets/qZone1.png';
import qz2 from '../../../assets/qZone2.png';
import qz3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-8'>
                <h1>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-8'>
                <h1>Find Us On</h1>
                <a className='p-4 flex items-center text-2xl gap-2 border' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex items-center text-2xl gap-2 border' href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                    
                </a>
                <a className='p-4 flex items-center text-2xl gap-2 border' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q-zone */}
            <div className='p-4 space-y-3 mb-8'>
                <h1>Q Zone</h1>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;