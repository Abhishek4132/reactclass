import "./button.css" ;
import styles from "./button.module.css";

const ButtonComponent= () =>{
  const ButtonComponent = {color: "red",backgroundColor:"green"}
    return (
    <button onClick={() => {}} className={styles.buttonCss}>
      click me
      </button>
    );
};

export default ButtonComponent;