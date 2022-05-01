import {useHistory,useParams} from 'react-router-dom';

import useFetch from './useFetch';
const BlogDetails = () =>{
    const {id}=useParams();
    const history = useHistory();
    const {data:blog,isPedding,eror}=useFetch('http://localhost:8000/blogs/' + id);
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
            alert('The Blog Deleted')
            history.push("/");
        })
    }
     return(
         <div className='blog-details'>
             {eror && <div>{eror}</div>}
            {isPedding && <div>Loading ...</div>}
            {blog &&<article>
                <h2>{blog.title}</h2>
                <p>Writen By {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>DELETE</button>
                </article>}
         </div>
     )
}
export default BlogDetails;