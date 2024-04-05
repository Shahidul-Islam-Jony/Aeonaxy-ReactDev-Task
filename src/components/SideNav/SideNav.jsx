import { NavLink } from "react-router-dom";
import { TbWorldWww,TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEdit,FaCode } from "react-icons/fa";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { MdMobiledataOff,MdOutlineLocalGroceryStore,MdOutlineMailLock } from "react-icons/md";
import { CiMenuBurger,CiCircleQuestion } from "react-icons/ci";
import { VscGraph,VscMultipleWindows,VscError } from "react-icons/vsc";
import { RiFontSize } from "react-icons/ri";
import { PiDeviceMobileThin } from "react-icons/pi";
import { BsQuestionDiamond } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";


const SideNav = () => {
    return (
        <div className="flex flex-col gap-2 mt-5 mr-4">
            <NavLink to='/' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><TbWorldWww /> Domains</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><IoSettingsOutline /> Site Settings</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><FaRegEdit /> Page Editing</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><LiaCommentDollarSolid /> Plans and Billing</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><MdMobiledataOff /> Data Capture Forms</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><MdOutlineLocalGroceryStore /> Online Store</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><CiMenuBurger /> Menu</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><VscGraph /> Site Statistics and Goals</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><RiFontSize /> Fonts</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><TbDeviceIpadHorizontalSearch /> SEO</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><PiDeviceMobileThin /> Mobile Version</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><CiCircleQuestion /> General Questions</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><BsQuestionDiamond /> Other Questions</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><VscMultipleWindows /> Multilanding</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><MdOutlineMailLock /> Email Campaign Builder</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><BiError /> Errors</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><AiOutlineThunderbolt /> Zero Block</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><FaCode /> Custom Code</NavLink>
            <NavLink to='/link' className="flex items-center gap-2 hover:bg-gray-400 p-3 rounded-sm text-lg"><VscError /> Possible Problems</NavLink>
        </div>
    );
};

export default SideNav;