import { Link } from "react-router-dom";
import { FaSquareInstagram,FaSquareYoutube,FaFacebook,FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gray-300 py-10">
            <div className="flex justify-center gap-3 md:gap-7">
                <Link to='#'>Tilda.cc</Link>
                <Link to='#'>Help Center</Link>
                <Link to='#'>Video Tutorials</Link>
                <Link to='#'>Blog</Link>
            </div>
            <div className="flex justify-center my-5 text-3xl gap-5">
                <Link><FaSquareInstagram className="rounded-full" /></Link>
                <Link><FaSquareYoutube className="rounded-full"/></Link>
                <Link><FaFacebook /></Link>
                <Link><FaSquareTwitter className="rounded-full"/></Link>
            </div>
            <div className="flex flex-col p-2 md:flex-row justify-center lg:px-10 gap-16 mt-20">
                <div>
                    <h4 className="text-lg font-medium">Report abuse</h4>
                    <p>If you belive that any website made on <br /> Tilda is violating you rights, file a <br />compliant by filling out this <Link to='#' className="text-orange-400">form</Link></p>
                </div>
                <div>
                    <h4 className="text-lg font-medium">How to contact our support</h4>
                    <p>To find out more about the platform <br /> features, use the feedback form in your <br />Tilda account, or contact us via email <br /> <Link to='#' className="text-orange-400">team@tilda.cc</Link></p>
                </div>
                <div>
                    <h4 className="text-lg font-medium">Accounting docs</h4>
                    <p>to get the supporting documentation and <br />proof of payment, send your request to <br /><Link to='#' className="text-orange-400">docs@tilda.cc</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;