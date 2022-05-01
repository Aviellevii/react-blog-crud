import {useState} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () =>{
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })


    }
    return(
        <div className='create'>
            <h1>A new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>settitle(e.target.value)}/>

                <label>Blog body:</label>
                <textarea value={body} onChange={(e)=>setbody(e.target.value)} required></textarea>

                <select value={author} onChange={(e)=>setauthor(e.target.value)} > 
                    <option value='mario'>mario</option>
                    <option value='luigi'>luigi</option>
                </select>
                {!isPending && <button>Add a blog</button>}
                {isPending && <button disabled>Adding ...</button>}
            </form>
        </div>
    )

}
export default Create;