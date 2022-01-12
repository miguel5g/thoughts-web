import styles from '../styles/components/button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      {children}
    </button>
  );
};
