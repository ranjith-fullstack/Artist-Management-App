import { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';

const initialFormState = {
  name: '',
  genre: '',
  country: '',
  bio: '',
  image: '',
  favorite: false
};

export default function ArtistForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(initialData || initialFormState);

  useEffect(() => {
    // Update form when initialData changes (for edit mode)
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Only reset form if we're not in edit mode (initialData is null)
    if (!initialData) {
      setFormData(initialFormState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (imageData) => {
    setFormData(prev => ({ ...prev, image: imageData }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ImageUpload onImageSelect={handleImageSelect} previewUrl={formData.image} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Artist Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          >
            <option value="">Select Genre</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Classical">Classical</option>
            <option value="Hip Hop">Hip Hop</option>
          </select>
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Biography
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center rounded-lg border border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {initialData ? 'Update Artist' : 'Add Artist'}
      </button>
    </form>
  );
}