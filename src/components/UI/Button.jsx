// const Button = ({children, ...props}) => <button {...props}>{children}</button>;

// export default Button;

export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}