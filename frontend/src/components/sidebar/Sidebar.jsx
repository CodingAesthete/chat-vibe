import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className=' max-h-[210px] sm:max-h-full border-r border-slate-800 p-1 sm:p-4 flex sm:flex-col'>
      <div className="sm:block hidden">
        <SearchInput />
      </div>
      <div className="sm:block hidden">
        <div className='divider px-3'></div>
      </div>
      <div className="w-96 sm:w-full">
        <Conversations />
      </div>
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
