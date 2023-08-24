import styles from './page.module.css';
import Header from '../components/header/Header';
import AsteroidList from '../components/AsteroidList/AsteroidList';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className={styles.container}>
      <AsteroidList/>
    </div>
  )
}
