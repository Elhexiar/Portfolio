import type React from "react";

interface AlertProps {
  children: React.ReactNode;
}

export const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children || "Default Alert Message, No message provided."}
    </div>
  );
};

export default Alert;
