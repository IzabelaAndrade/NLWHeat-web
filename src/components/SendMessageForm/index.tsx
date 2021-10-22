import styles from './styles.module.scss';
import {VscGithubInverted, VscSignOut} from 'react-icons/vsc'
import { useContext, useState, FormEvent } from 'react';
import { AuthContext } from '../../context/auth';
import { api } from '../../services/api';

export function SendMessageForm() {
const {user, signOut} = useContext(AuthContext);
  const [message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    await api.post("messages", { message })
    setMessage('')
  }

  return(
    <div className={styles.sendMesageFormWrapper}>

      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32"/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name}/>
        </div>
        <strong className={styles.userName}></strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="massage" 
          placeholder="Qual sua expectativa para o evento?"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  )
}