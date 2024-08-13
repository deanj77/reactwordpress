import SearchIcon from "../assets/images/search.png";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const SearchForm = () => {
  const context = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(context.searchValue); // You can replace this with your search logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center [&>*]:h-10 w-screen mt-1"
    >
      <input
        type="text"
        placeholder="search..."
        value={context.searchValue} // Bind the input value to state
        onChange={(e) => context.setSearchValue(e.target.value)} // Update state on input change
        className="border border-gray-300 rounded-l px-2 py-1 h-full text-black"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r  px-2">
        <img src={SearchIcon} alt="search" className="h-3/4" />
      </button>
      {context.searchValue}
    </form>
  );
};

export default SearchForm;
