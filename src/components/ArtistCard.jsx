import { FaEdit, FaTrash, FaHeart, FaGlobe, FaMusic } from 'react-icons/fa';

export default function ArtistCard({ artist, onEdit, onDelete, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 group">
        {artist.image ? (
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">{artist.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onEdit(artist)}
                className="p-2 rounded-full bg-white/90 text-blue-600 hover:bg-blue-100"
              >
                <FaEdit className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(artist)}
                className="p-2 rounded-full bg-white/90 text-red-600 hover:bg-red-100"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(artist)}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
            artist.favorite ? 'bg-red-500 scale-110' : 'bg-white/90'
          }`}
        >
          <FaHeart className={`w-4 h-4 ${artist.favorite ? 'text-white' : 'text-gray-500'}`} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaMusic className="w-4 h-4 text-indigo-500" />
              <span>{artist.genre}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGlobe className="w-4 h-4 text-purple-500" />
              <span>{artist.country}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{artist.bio}</p>
        
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
            {artist.genre}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
            {artist.country}
          </span>
        </div>
      </div>
    </div>
  );
}