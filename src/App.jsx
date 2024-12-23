import { useState, useMemo } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import ArtistForm from './components/ArtistForm';
import ArtistCard from './components/ArtistCard';
import SearchBar from './components/SearchBar';
import EditArtistModal from './components/EditArtistModal';
import ArtistStats from './components/ArtistStats';

function App() {
  const [artists, setArtists] = useState([]);
  const [editingArtist, setEditingArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredArtists = useMemo(() => {
    return artists.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artist.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || artist.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [artists, searchTerm, selectedGenre]);

  const handleAddArtist = (newArtist) => {
    setArtists([...artists, { ...newArtist, id: Date.now() }]);
    toast.success('Artist added successfully!');
  };

  const handleEditArtist = (artist) => {
    setEditingArtist(artist);
    setIsEditModalOpen(true);
  };

  const handleUpdateArtist = (updatedArtist) => {
    setArtists(artists.map(artist => 
      artist.id === editingArtist.id ? { ...updatedArtist, id: artist.id } : artist
    ));
    setEditingArtist(null);
    setIsEditModalOpen(false);
    toast.success('Artist updated successfully!');
  };

  const handleDeleteArtist = (artistToDelete) => {
    if (window.confirm('Are you sure you want to delete this artist?')) {
      setArtists(artists.filter(artist => artist !== artistToDelete));
      toast.success('Artist deleted successfully!');
    }
  };

  const handleToggleFavorite = (artist) => {
    setArtists(artists.map(a => 
      a.id === artist.id ? { ...a, favorite: !a.favorite } : a
    ));
    toast.success(artist.favorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center">
          Artist Management App
        </h1>
        
        <ArtistStats artists={artists} />
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Artist</h2>
          <ArtistForm onSubmit={handleAddArtist} />
        </div>

        <SearchBar 
          onSearch={setSearchTerm}
          onFilterChange={setSelectedGenre}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArtists.map(artist => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onEdit={handleEditArtist}
              onDelete={handleDeleteArtist}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              {artists.length === 0 
                ? 'No artists added yet. Add your first artist above!'
                : 'No artists match your search criteria.'}
            </p>
          </div>
        )}

        <EditArtistModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingArtist(null);
          }}
          artist={editingArtist}
          onSubmit={handleUpdateArtist}
        />
      </div>
    </div>
  );
}

export default App;