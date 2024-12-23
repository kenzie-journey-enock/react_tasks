import styles from "./style.module.css"

export default function TeacherCard() {
  const person = {
    name: 'Bernardo Enock',
    courseModule: "Kenzie's Helper",
    age: 25,
  }

  return (
    <li className={styles.teacherCard}>
      <h3>{person.name} - {person.courseModule}</h3>
      <p>Idade: {person.age}</p>
    </li>
  )
}