function MyFirstJSX() {
  const person = {
    name: 'Enock',
    work: 'Freelancer',
    age: '25'
  };

  const alertName = () => {
    alert(person.name);
  }

  return (
    <>
      <li>
        <h3>
            {person.name} - {person.work}
        </h3>
        <p>Tenho: {person.age} anos</p>
        <button onClick={alertName}>Quem sou eu?</button>
      </li>
    </>
  )
}

export default MyFirstJSX;