import "./custom-button.styles.scss";

const customButton = ({ children, className, ...otherProps }) => (
  <button
    className={`${className ? className : ""} ${"custom-button"}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default customButton;
