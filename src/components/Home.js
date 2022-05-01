import BlogList from "./blog-list";
import useFetch from '../components/useFetch';
const Home = () => {
   const {data:blogs,isPedding,eror}=useFetch('http://localhost:8000/blogs');
    return(
        <div className="home">
            {eror && <div>{eror}</div>}
            {isPedding && <div>Loading ...</div>}
            {blogs &&<BlogList blogs={blogs} title='All Blogs' />}
        </div>
    )
}
export default Home;