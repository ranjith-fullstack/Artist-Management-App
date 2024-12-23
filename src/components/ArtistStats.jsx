import { FaUsers, FaStar, FaGlobe } from 'react-icons/fa';

export default function ArtistStats({ artists }) {
  const totalArtists = artists.length;
  const favoriteArtists = artists.filter(artist => artist.favorite).length;
  const uniqueCountries = new Set(artists.map(artist => artist.country)).size;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
        <div className="p-3 bg-indigo-100 rounded-full">
          <FaUsers className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Artists</p>
          <p className="text-2xl font-bold text-gray-900">{totalArtists}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
        <div className="p-3 bg-purple-100 rounded-full">
          <FaStar className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Favorite Artists</p>
          <p className="text-2xl font-bold text-gray-900">{favoriteArtists}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
        <div className="p-3 bg-pink-100 rounded-full">
          <FaGlobe className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Countries</p>
          <p className="text-2xl font-bold text-gray-900">{uniqueCountries}</p>
        </div>
      </div>
    </div>
  );
}