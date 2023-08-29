import './Home.scss'
import { NavLink } from 'react-router-dom';
import saint from '../../assets/saint.jpg'
import right from '../../assets/right.svg'

export const Home = () => {
    return (
        <section className="home">
            <div>
                <h2>RECENT POST | <span>28 Aug 2023, 12:00pm</span></h2>
                <p><img src={saint} alt="" /> Bradley Matjie | Author</p>

                <h1>ALWAYS BE STRONG AND HAVE VALUES</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Eaque cumque ratione 
                        cum voluptas accusantium blanditiis, 
                        nemo consequuntur laudantium?
                    </p>
                    <button>
                        <NavLink to='/blog/posts/:id'>READ MORE</NavLink>
                        <img src={right} alt="lefta rrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}