import Image from "next/image";
import styles from "./page.module.scss";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Navbar from '@/components/NavBar'

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <header className="header">
        < Navbar />
      </header>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            {t("GetStartedByEditing")} <code>src/app/page.tsx</code>.
          </li>
          <li>{t("SaveAndSeeYourChangesInstantly")}</li>
        </ol>
      </main>
    </div>
  );
}
