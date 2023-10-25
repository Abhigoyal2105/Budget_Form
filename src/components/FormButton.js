import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "./Modal";

function FormButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#EDA23E", textTransform: "none" }}
        onClick={openModal}
      >
        Add / Edit Info
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default FormButton;
