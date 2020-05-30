import styles from "@styles/Footer.module.css";
import Card from "../Cards/Card";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Collaborators</h3>
      <div className={styles.cardBox}>
        <Card
          Name={"Owen Na"}
          email={"owensungminna@gmail.com"}
          linkedinLink={"https://www.linkedin.com/in/owen-na-634247236/"}
          githubLink={"https://github.com/owen-na"}
        />
        <Card
          Nam