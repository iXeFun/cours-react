import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const About = () => {

    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam praesentium labore, beatae at quae dignissimos accusantium laboriosam quam, placeat velit iste mollitia optio.
                Corrupti possimus voluptates fuga aliquam voluptatibus odio, fugit repudiandae eveniet, culpa temporibus cupiditate, impedit doloremque facilis id mollitia explicabo?
                Dolores consectetur voluptates voluptas itaque consequuntur alias eaque tempore expedita, praesentium blanditiis, possimus dolorum magni est ad cumque ex!
                Deserunt, impedit vel accusantium cupiditate dolorum provident perspiciatis dolorem maiores ducimus voluptatem libero voluptatum saepe minus repellendus harum fuga, culpa veritatis eius in porro!
                Facere, magnam dolore. Quod eos quo error! Magnam doloribus reprehenderit dolor repellendus et, voluptatum error.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam praesentium labore, beatae at quae dignissimos accusantium laboriosam quam, placeat velit iste mollitia optio.
                Corrupti possimus voluptates fuga aliquam voluptatibus odio, fugit repudiandae eveniet, culpa temporibus cupiditate, impedit doloremque facilis id mollitia explicabo?
                Dolores consectetur voluptates voluptas itaque consequuntur alias eaque tempore expedita, praesentium blanditiis, possimus dolorum magni est ad cumque ex!
                Deserunt, impedit vel accusantium cupiditate dolorum provident perspiciatis dolorem maiores ducimus voluptatem libero voluptatum saepe minus repellendus harum fuga, culpa veritatis eius in porro!
                Facere, magnam dolore. Quod eos quo error! Magnam doloribus reprehenderit dolor repellendus et, voluptatum error.
            </p>
        </div>
    );
};

export default About;