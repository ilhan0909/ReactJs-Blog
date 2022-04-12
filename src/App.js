import './App.css';

function App() {
  const title = 'Welcome to my blog!';
  const department = 'Computer Engineer';
  const person = {name:'İlhan Bayramoğlu',age:23,country:'Turkey'};
  const link = 'https://github.com/ilhan0909'
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <h2>I am a graduate {department} </h2>
        <p>My name is {person.name}, i am {person.age} years old and i am from {person.country}.</p>
        <a href={link}>Check My Github Profile</a>
      </div>
    </div>
  );
}

export default App;
