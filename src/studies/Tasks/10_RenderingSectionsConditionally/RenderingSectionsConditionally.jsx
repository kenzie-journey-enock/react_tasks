import { useState } from 'react';

import styles from './style.module.scss'

import LoginSection from './LoginSection';
import RestrictedSection from './RestrictedSection';

export default function RenderingSectionsConditionally() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <div className={styles.restric}>
          <RestrictedSection setIsLogin={setIsLogin} />
        </div>
      ) : (
        <div className={styles.renderingSectionsStyle}>
          <LoginSection setIsLogin={setIsLogin} />
        </div>
      )}
    </div>
  )
}