import './Posts.scss'
import saint from '../../assets/saint.jpg'
import { useState } from 'react'
import postsBg from '../../assets/postsBg.jpg'

export const Posts = () => {
    const [search, setSearch] = useState('');

    return (
        <section className="posts" style={{backgroundImage: `url(${postsBg})`}}>
            <h1>Perspective Pulse</h1>
            <p className="by">By Bradley Matjie</p>
            <div className="recentPost">
                <img src={saint} alt="" />
                <div>
                    <p className="date">28 AUG 2028 14:43pm</p>
                    <h1>Tentana Creativity Block pada UI Designer</h1>
                    <p className="subtext">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Et numquam consequuntur 
                        est deserunt corporis aut dolores, quas 
                        suscipit sunt, molestias 
                    </p>
                </div>
            </div>

            <div className="search">
                <input type="text" placeholder='Search By Title or Author' />
            </div>

            <div className="postsContainer">
                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>
                </div>

                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>    
                </div>

                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>    
                </div>

                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>    
                </div>

                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>    
                </div>

                <div className="post">
                    <img src={saint} alt="" />
                    <div>
                        <p className="date">28 AUG 2028 14:43pm</p>
                        <h1>Tentana Creativity Block pada UI Designer</h1>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Et numquam consequuntur 
                            est deserunt corporis aut dolores, quas 
                            suscipit sunt, molestias aliquam beatae 
                            quia quo? Ullam laboriosam aspernatur 
                            dolor nam modi.
                        </p>
                    </div>    
                </div>
            </div>
        </section>
    )
}