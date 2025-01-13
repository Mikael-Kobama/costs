import loading from "../../img/loading.svg";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="loading" className={styles.loader} />
    </div>
  );
}

export default Loading;
