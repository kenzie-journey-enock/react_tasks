import { useState, useEffect } from "react";
import { IconCartNockBurguerStyle } from "./StyleAtoms";

export default function IconCartNockBurguer() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  const handleCartClick = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCartCount(0);
  };

  return (
    <IconCartNockBurguerStyle onClick={handleCartClick}>
      <div className="cart-count">{cartCount}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
        <path d="M22.6875 13.7266C22.5586 14.1992 22.1289 14.5 21.6562 14.5H9.06641L9.36719 15.875H20.8828C21.5273 15.875 22.043 16.5195 21.8711 17.1641L21.6562 18.1953C22.4727 18.582 23.0312 19.3984 23.0312 20.3438C23.0312 21.6758 21.9141 22.75 20.625 22.75C19.293 22.75 18.2188 21.6758 18.2188 20.3438C18.2188 19.6992 18.4766 19.0977 18.9062 18.625H9.92578C10.3555 19.0977 10.6562 19.6992 10.6562 20.3438C10.6562 21.6758 9.53906 22.75 8.25 22.75C6.91797 22.75 5.84375 21.6758 5.84375 20.3438C5.84375 19.4844 6.31641 18.7109 7.04688 18.2812L3.99609 3.5H1.03125C0.429688 3.5 0 3.07031 0 2.46875V1.78125C0 1.22266 0.429688 0.75 1.03125 0.75H5.41406C5.88672 0.75 6.31641 1.13672 6.44531 1.60938L6.83203 3.5H23.6758C24.3633 3.5 24.8359 4.14453 24.707 4.78906L22.6875 13.7266Z" fill="#BDBDBD" />
      </svg>
    </IconCartNockBurguerStyle>
  );
}