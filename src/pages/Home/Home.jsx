import SideNav from "../../components/SideNav/SideNav";
import Topbar from "../../components/TopBar/Topbar";
import { FiSearch } from "react-icons/fi";
import Domains from "../Domain/Domains";
import Footer from "../../components/Footer/Footer";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);    //for mobile view hidding and open side nav Link
    return (
        <div>
            {/* for top navbar */}
            <Topbar></Topbar>
            {/* Main Home page body */}
            <div className="bg-gray-200 mt-5 p-5">
                <h2>Enter your question</h2>
                <div className="relative">
                    <input className="border-2 border-gray-300 mt-2 w-full md:w-1/2 h-8 rounded-sm pl-8" placeholder="How do I connect a custom domain ?" type="text" name="" id="" />
                    <FiSearch className="absolute text-gray-400 top-4 left-3" />
                </div>
                {/* For handle side nav mobile view */}
                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden mt-5">   
                    <p><RiMenuUnfoldFill className="text-2xl" /></p>
                </div>
                <div className="grid grid-cols-12">
                    <div className={`${isOpen ? 'z-50 col-span-12' : 'hidden'} md:col-span-3`}>
                        {/* Side navbar */}
                        <SideNav></SideNav>
                    </div>
                    {/* Side body */}
                    <div className="col-span-12 md:col-span-9 bg-white mt-5 p-5">
                        <Domains></Domains>
                    </div>
                </div>
            </div>
            {/* Home page Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;