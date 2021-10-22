import styles from './styles.module.scss';
import {VscGithubInverted} from 'react-icons/vsc'

export function LoginBox() {
  return(
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe mensagens</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted/>
        Entrar com o Github
      </a>
    </div>
  )
}