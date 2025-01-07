import styles from './style.module.scss';

export default function UserCard({ name, email, status }) {
  return (
    <div className={`${styles.card} ${status ? styles.active : ''}`}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
