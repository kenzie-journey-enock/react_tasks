import style from './style.module.css'

export default function SocialCardFinok() {
  return (
    <div className={style.social_card}>
      <a href="https://facebook.com" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="24" />
      </a>
      <a href="https://github.com" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/2175/2175377.png" alt="GitHub" width="24" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" />
      </a>
    </div>
  )
}