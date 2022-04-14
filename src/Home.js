import { useState } from "react";

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const title = 'Welcome to my blog!';
const department = 'Computer Engineer';
const person = {name:'İlhan Bayramoğlu',country:'Turkey'};
const link = 'https://github.com/ilhan0909';

const Home = () => {
    const [text, setText] = useState('Try button to see if it works?');

    const handleClick = () => {
        setText('Hook works on click!');
    }
    
    return ( 
        <div className="home">
        <h1>{title}</h1>
        <h2>I am a graduate {department} </h2>
        <h3>My name is {person.name}, i am {getAge("1998/06/25")} years old and i am from {person.country}.</h3>
        <a href={link}>Check My Github Profile</a>
        <h4>{text}</h4>
        <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;