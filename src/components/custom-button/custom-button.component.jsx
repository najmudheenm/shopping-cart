import "./custom-button.styles.scss";

const customButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

export default customButton;
