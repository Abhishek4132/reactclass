import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Rcar() {
  return (
    <div>
       <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZly4t3rdIz5XDJa4QIVwkNjkIEU3bRJVYbQ&s"height={800} alt="Legend 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg"  alt="Legend 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Legend 3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  );
}

export default Rcar;