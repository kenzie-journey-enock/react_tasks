import styles from "./style.module.css"

export default function TeacherCard() {
  const person = {
    name: 'Alex',
    courseModule: 'M3',
    age: 33,
 }

 return (
  <li className={styles.teacherCard}>
    <h3>{person.name} - {person.courseModule}</h3>
    <p>Idade: {person.age}</p>
  </li>
 )
}