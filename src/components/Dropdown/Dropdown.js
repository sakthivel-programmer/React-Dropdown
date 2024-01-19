// importing localised style from css modules
import Styles from "./dropdown.module.css";

// functional component
export function Dropdown() {

  // returnning jsx to be rendered
  return (
    <div className={Styles.container}>

      <div>

          <label>

            <h3>Do you know, you can code!!! 😀</h3>

          </label>

          <br></br>

          <select className={Styles.dropdown}>

              <option>Yes, i do 😎</option>

              <option>No, i don't 🙄</option>

          </select>

      </div>

    </div>

  );

}