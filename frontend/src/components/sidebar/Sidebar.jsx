import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className=' max-h-[50px] z-10 sm:max-h-full border-r border-slate-800 p-0 sm:p-4 flex sm:flex-col'>
      <div className="">
        <SearchInput />
      </div>
      <div className="sm:block hidden">
        <div className='divider px-3'></div>
      </div>
      <div className="sm:block hidden">
        <Conversations />
      </div>
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
