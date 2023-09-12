import './Posts.scss';
import saint from '../../assets/saint.jpg';
import { useState } from 'react';
import postsBg from '../../assets/postsBg.jpg';
import { useNavigate } from "react-router-dom";
import { data } from '../../Data';

export const Posts = () => {
    const [search, setSearch] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(data);

    const navigate = useNavigate();

    function NavigateSinglePost(item) {
        navigate(`/blog/posts/${item.id}`);
    }
    // Function to handle search  input change
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearch(query);

        // Filter the posts based on the search query
        const filtered = data.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.author.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredPosts(filtered);
    };

    const recentItem = data.find((item) => item.id === 1);

    return (
        <section className="posts" style={{ backgroundImage: `url(${postsBg})` }}>
            <h1>Perspective Pulse</h1>
            <p className="by">By Bradley Matjie</p>
            <div className="recentPost">
                <img src={recentItem.img} alt="" />
                <div>
                    <p className="date">{recentItem.posted}</p>
                    <h1>{recentItem.title}</h1>
                    <p className="subtext">{recentItem.subdescription}</p>
                </div>
            </div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search By Title or Author"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="postsContainer">
                {filteredPosts.map((post) => (
                    <div className="post" key={post.id} onClick={() => NavigateSinglePost(post)}>
                        <img src={saint} alt="" />
                        <div>
                            <p className="date">{post.posted}</p>
                            <h1>{post.title}</h1>
                            <p className="subtext">{post.subdescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
