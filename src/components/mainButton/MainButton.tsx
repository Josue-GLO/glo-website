import styles from "./MainButton.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

type MainButtonProps = {
  text: string;
  className?: string;
}

function MainButton({ text, className }: MainButtonProps) {
  return (
    <button className={`${styles.main__button} ${className}`}>
      {text} <FaArrowRightLong className={styles.arrow__icon}  />
    </button>
  )
}

export default MainButton
