import './Home.scss'
import { NavLink } from 'react-router-dom';
import saint from '../../assets/saint.jpg'
import right from '../../assets/right.svg'
import { data } from '../../Data';

export const Home = () => {

    const recentItem = data.find(item => item.id === 1);

    return (
        <section className="home">
            <div>
                <h2>RECENT POST | <span>{recentItem.published}</span></h2>
                <p><img src={recentItem.img} alt="" /> Bradley Matjie | Author</p>

                <h1>{recentItem.title}</h1>
                <div>
                    <p>
                        {recentItem.subdescription}
                    </p>
                    <button>
                        <NavLink to={`/blog/posts/${recentItem.id}`}>READ MORE</NavLink>
                        <img src={right} alt="lefta rrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}