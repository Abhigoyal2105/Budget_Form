import React, { useState } from "react";
import Button from "@mui/material/Button";
import ModalForm from "./Modal";

function FormButton({ onFormDataChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (data) => {
    setFormData(formData);
    onFormDataChange(data);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#EDA23E", textTransform: "none" }}
        onClick={openModal}
      >
        Add / Edit Info
      </Button>
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default FormButton;
