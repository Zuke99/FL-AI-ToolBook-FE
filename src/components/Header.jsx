import React , {useState} from 'react';
import NavLink from './NavLink';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleLogin = () => {
        // Login functionality would be implemented here
        console.log("Login button clicked");
      };

  return (
    <nav className="text-base rounded-none text-zinc-800 w-[85%] mx-auto mt-10">
    <div className="flex flex-wrap gap-5 justify-between items-center px-8 py-2 border border-solid bg-[#f6f6f6] border-[#838383] rounded-[40px] max-md:px-5">
      {/* <Logo imageUrl="" /> */}
      <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e61b9e03bb38c8183126d871f3aac94c74a1d29?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
      alt="Logo"
      className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[4.17] w-[125px]"
    />
      {/* <SearchBar /> */}
      <div className="flex gap-2.5 self-stretch px-5 py-3.5 leading-none whitespace-nowrap bg-white border border-solid border-zinc-500 rounded-[30px] text-zinc-500">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c405dae606785d4abf12494577d103ad797d436?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        alt="Search icon"
        className="object-contain shrink-0 w-3.5 aspect-square"
      />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="basis-auto bg-transparent outline-none"
      />
    </div>
    <NavLink text="AI Tools" isActive={true} />
        <NavLink text="Categories" />
        <NavLink text="Compare" />
        <NavLink text="Blog" />
        <NavLink text="Submit" />
        <NavLink text="Promote" />
   
        <button
      onClick={handleLogin}
      className="px-12 py-3 text-center  font-bold leading-none text-white whitespace-nowrap bg-sky-600 rounded-[30px] max-md:px-5"
    >
      Login
    </button> 
    </div>
  </nav>
  )
}

export default Header