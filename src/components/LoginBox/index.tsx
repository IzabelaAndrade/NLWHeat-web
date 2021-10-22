import styles from './styles.module.scss';
import {VscGithubInverted} from 'react-icons/vsc'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

export function LoginBox() {

const {signInUrl} = useContext(AuthContext)

  return(
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe mensagens</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted/>
        Entrar com o Github
      </a>
    </div>
  )
}