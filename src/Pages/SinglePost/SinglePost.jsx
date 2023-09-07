import { NavLink } from 'react-router-dom'
import './SinglePost.scss'
import left from '../../assets/left.svg'
import saint from '../../assets/saint.jpg'

import { useParams } from 'react-router-dom';
import { data } from '../../Data';

export const SinglePost = () => {
    const { id } = useParams();

    const item = data.find((item) => item.id === Number(id));

    return (
        <section className="singlePost">
            <div className='leftarrow'>
                <img src={left}  alt="left arrow" />
                <NavLink to='/blog/posts'>Back</NavLink>
            </div>
            
            <div className='middle'>
                <div>
                    <div>
                        <h2>Categories: {item.categories}</h2>
                        <h1>{item.title}</h1>
                        <p> {item.subdescription} 
                        </p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <img src={item.img} alt="post image" />
                    <div>
                        <div className="author">
                            <p>Author</p>
                            <p>{item.author}</p>
                        </div>
                        <div className="published">
                            <p>Published</p>
                            <p>{item.posted}</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='paragraph'>
                {item.description}
            </p>
        </section>
    );
}