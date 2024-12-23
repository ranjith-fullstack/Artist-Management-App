import React from 'react';
import Modal from './Modal';
import ArtistForm from './ArtistForm';

export default function EditArtistModal({ isOpen, onClose, artist, onSubmit }) {
  const handleSubmit = (formData) => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Artist"
    >
      <ArtistForm
        initialData={artist}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}