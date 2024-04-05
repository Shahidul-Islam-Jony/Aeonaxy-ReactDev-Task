import { NavLink } from "react-router-dom";


const SideNav = () => {
    return (
        <div className="flex flex-col gap-2 mt-5 mr-4">
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Domains</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Site Settings</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Page Editing</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Plans and Billing</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Data Capture Forms</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Online Store</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Menu</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Site Statistics and Goals</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Fonts</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">SEO</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Mobile Version</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">General Questions</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Other Questions</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Multilanding</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Email Campaign Builder</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Errors</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Zero Block</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Custom Code</NavLink>
            <NavLink className="hover:bg-gray-400 p-3 rounded-sm text-lg">Possible Problems</NavLink>
        </div>
    );
};

export default SideNav;