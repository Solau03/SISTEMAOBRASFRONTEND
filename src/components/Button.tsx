// components/Button.tsx
import React from "react";

// Define las props con tipos TypeScript
interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset"; // Tipos válidos para un botón HTML
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", className }) => {
  return (
    <button 
      type={type} // Aplica el type al elemento HTML
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;