// components/Button.js

import PropTypes from "prop-types";

const Button = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styleClass = "",
}) => {
  // Button size classes
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-md",
    large: "px-8 py-4 text-lg",
  };

  // Button shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  // Combine classes
  const classes = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${styleClass}`;

  return <button className={classes}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["rounded-sm", "rounded-md", "rounded-full"]),
  styleClass: PropTypes.string,
};

export default Button;
