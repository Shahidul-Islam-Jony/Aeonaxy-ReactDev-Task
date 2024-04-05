import SideNav from "../../components/SideNav/SideNav";
import Topbar from "../../components/TopBar/Topbar";
import { FiSearch } from "react-icons/fi";
import Domains from "../Domain/Domains";

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="bg-gray-200 mt-5 p-5">
                <h2>Enter your question</h2>
                <div className="relative">
                    <input className="border-2 border-gray-300 mt-2 w-1/2 h-8 rounded-sm pl-10" placeholder="How do I connect a custom domain ?" type="text" name="" id="" />
                    <FiSearch className="absolute text-gray-400 top-4 left-4" />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <SideNav></SideNav>
                    </div>
                    <div className="col-span-9 bg-white mt-5 p-5">
                        <Domains></Domains>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;