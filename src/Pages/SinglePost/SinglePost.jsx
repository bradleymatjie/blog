import { NavLink } from 'react-router-dom'
import './SinglePost.scss'
import left from '../../assets/left.svg'
import saint from '../../assets/saint.jpg'


export const SinglePost = () => {
    return (
        <section className="singlePost">
            <div className='leftarrow'>
                <img src={left}  alt="left arrow" />
                <NavLink to='/blog/posts'>Back</NavLink>
            </div>
            
            <div className='middle'>
                <div>
                    <div>
                        <h2>Categories: computers, AI, software</h2>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p> 
                        Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias 
                        </p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <img src={saint} alt="post image" />
                    <div>
                        <div className="author">
                            <p>Author</p>
                            <p>Bradley Matjie</p>
                        </div>
                        <div className="published">
                            <p>Published</p>
                            <p>28 AUG 2023. 16:13pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. A magnam non quia dolores 
                doloremque iure incidunt consequuntur ad! 
                Ducimus ad deleniti exercitationem pariatur 
                sed doloribus quod eveniet quo ipsa animi.
                Odit, a, voluptate delectus dolores libero 
                earum numquam suscipit iste id voluptatibus 
                esse quidem cupiditate? Necessitatibus harum 
                quos facilis, eum aliquid itaque. Tempora 
                reiciendis quibusdam dolorem quaerat 
                necessitatibus incidunt? Necessitatibus!
                Necessitatibus aut repellat provident omnis 
                saepe iure maiores est magni fugit nostrum, 
                reiciendis perspiciatis distinctio ullam laborum. 
                Quaerat beatae, dolores necessitatibus incidunt 
                eaque inventore modi eius suscipit nihil. Voluptates, 
                quibusdam?
            </p>
        </section>
    );
}