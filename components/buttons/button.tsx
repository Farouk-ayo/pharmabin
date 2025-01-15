import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  href,
  className,
}) => {
  const baseStyles =
    "px-5 py-4 rounded-md font-semibold transition-all duration-200";

  const variantStyles: Record<string, string> = {
    primary: "bg-primary hover:bg-tertiary",
    secondary: "bg-secondary hover:bg-tertiary1",
    tertiary: "bg-tertiary3 hover:bg-tertiary2",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant] || ""} ${
    className || ""
  }`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
