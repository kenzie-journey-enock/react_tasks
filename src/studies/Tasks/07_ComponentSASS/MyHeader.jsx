import styles from "./style.module.scss";

export default function MyHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>My Header</h1>
      </div>
      <div>
        <nav>
          <li>
            <button>home</button>
          </li>
          <li>
            <button>about</button>
          </li>
          <li>
            <button>contact</button>
          </li>
          <li>
            <button>speak now</button>
          </li>
        </nav>
      </div>
    </header>
  )
}
