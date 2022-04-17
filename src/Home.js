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
    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'MARIO WROTE THIS HEHEH', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'YOSHI ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'MARIO ipsum...', author: 'mario', id: 3 }
    ])
    
    return ( 
        <div className="home">
            
        <h1>{title}</h1>
        <h2>I am a graduate {department} </h2>
        <h3>My name is {person.name}, i am {getAge("1998/06/25")} years old and i am from {person.country}.</h3>
        <a href={link}>Check My Github Profile</a>
        {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h4>Written by { blog.author }</h4>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;