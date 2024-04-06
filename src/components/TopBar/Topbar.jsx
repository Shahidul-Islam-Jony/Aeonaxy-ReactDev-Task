import { NavLink } from 'react-router-dom';
import logo from '/tao.png'
import { LuArrowUpRightSquare } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";

const Topbar = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
                <div className='flex items-center gap-4'>
                    <img src={logo} className='w-14 h-14 border-2 border-black rounded-full' alt="logo" />
                    <h4 className='text-xl font-medium'>Frequently asked questions</h4>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <NavLink to='/go/tilda' className='flex items-center gap-2 font-medium'>Go to Tilda.cc <LuArrowUpRightSquare className='text-gray-500' /></NavLink>
                    <NavLink to='/go/help' className='flex items-center gap-2 font-medium'>Go to Help Center <LuArrowUpRightSquare className='text-gray-500' /></NavLink>
                    <div className='relative'>
                        <select name="language" className='border-2 border-gray-500 pl-6 rounded-sm' id="">
                            <option className='ml-10' value="En">En</option>
                            <option className='ml-10' value="Bangla">Bangla</option>
                            <option className='ml-10' value="hindi">Hindi</option>
                        </select>
                        <AiOutlineGlobal className='text-2xl absolute top-[2px] pl-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;