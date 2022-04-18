import BlogList from "./BlogList";
import useFetch from "./useFetch";

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
const person = {name:'İlhan Bayramoğlu',country:'Turkey',department:'Computer Engineer',link:'https://github.com/ilhan0909'};


const Home = () => {
    const { data,isPending,error } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">            
        <h1>{ title }</h1>
        <h2>My name is {person.name}, i am {getAge("1998/06/25")} years old and i am from {person.country}.</h2>
        <h3>I am a graduate {person.department} </h3>
        <a href={person.link}>Check My Github Profile</a>
            { error && <div>{ error }</div> }     
            { isPending && <div>Loading...</div> }
            { data && <BlogList blogs={data} title="All Blogs are here"/> }
        </div>
     );
}
 
export default Home;