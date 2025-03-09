import React from "react";

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default Form;
