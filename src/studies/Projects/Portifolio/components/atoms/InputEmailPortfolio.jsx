import style from './style.module.css'

import TextPortfolio from './TextPortfolio'

export default function InputEmailPortfolio() {
  return (
    <div className={style.input_email}>
      <label htmlFor="email">
        <TextPortfolio styleToken='caption'>Email</TextPortfolio>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Write your E-mail here..."
        required
      />
      <span>Ex: emailname@brand.com</span>
    </div>
  )
}