import { FaSearch, FaFilter } from 'react-icons/fa';

export default function SearchBar({ onSearch, onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search artists..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all duration-300 hover:shadow-md"
        />
      </div>
      <div className="relative">
        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="pl-10 pr-8 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm appearance-none bg-white transition-all duration-300 hover:shadow-md"
        >
          <option value="">All Genres</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
          <option value="Classical">Classical</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Electronic">Electronic</option>
          <option value="Folk">Folk</option>
          <option value="Blues">Blues</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}