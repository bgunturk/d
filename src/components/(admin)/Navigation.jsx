

import styles from "./navigation.module.scss";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { PiArticleLight } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";

const Navigation = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.navigation}>
        <ul>
        <li>
            <a href="">
              <span className={styles.icon}>
                <AiOutlineHome />
              </span>
              <span className={styles.title}>İstib Haber Admin</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <AiOutlineHome />
              </span>
              <span className={styles.title}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <BsNewspaper />
              </span>
              <span className={styles.title}>Haberler</span>
            </a>
          </li>

          <li>
            <a href="">
              <span className={styles.icon}>
                <PiArticleLight />
              </span>
              <span className={styles.title}>Makale</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <AiOutlineUserAdd />
              </span>
              <span className={styles.title}>Brand Name</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <BiSolidCategoryAlt />
              </span>
              <span className={styles.title}>Haber Kategorisi</span>
            </a>
            
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <HiOutlineUsers />
              </span>
              <span className={styles.title}>Kullanıcılar</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
