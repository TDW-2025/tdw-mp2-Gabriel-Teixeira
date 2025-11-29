import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/BackButton.module.css";

interface BackButtonProps {
  type: string; 
  label?: string; 
}

const BackButton: React.FC<BackButtonProps> = ({ type, label = "Voltar" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      className={`${styles.backButton} ${styles[type]}`}
      onClick={handleGoBack}
    >
      ← {label}
    </button>
  );
};

export default BackButton;
