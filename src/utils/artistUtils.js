// Utility functions for artist-related operations
export const validateArtist = (artist) => {
  const requiredFields = ['name', 'genre', 'country'];
  return requiredFields.every(field => artist[field] && artist[field].trim() !== '');
};

export const sortArtists = (artists, sortBy = 'name') => {
  return [...artists].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
};

export const filterArtistsByGenre = (artists, genre) => {
  if (!genre) return artists;
  return artists.filter(artist => artist.genre === genre);
};

export const searchArtists = (artists, searchTerm) => {
  if (!searchTerm) return artists;
  const term = searchTerm.toLowerCase();
  return artists.filter(artist => 
    artist.name.toLowerCase().includes(term) ||
    artist.bio.toLowerCase().includes(term)
  );
};