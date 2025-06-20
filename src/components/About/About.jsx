import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos obcaecati impedit, ipsam, quasi qui, tenetur ut debitis dolorem cupiditate vero eum. Laborum delectus impedit harum recusandae laboriosam maxime reprehenderit quidem ullam illo voluptas molestias sunt, deserunt itaque cum placeat nulla id. Temporibus eius molestias architecto voluptate veritatis. Quasi suscipit ducimus impedit quas iste, iusto ipsum atque cum? Iusto, delectus officiis ipsam laborum, provident minima excepturi neque aliquid suscipit eius quibusdam, nemo sequi corrupti! Porro at nobis quasi, vitae animi error praesentium, consequatur provident nisi corporis, fuga voluptatem eligendi! At officiis voluptates, ab commodi pmolestias sint perspiciatis. Sunt neque facere voluptas quatas suscipit laudantium exercitationem. Nostrum corporis quisquam, facilis cum ab debitis incidunt quae molestias, laboriosam iusto quis dicta maiores esse. Explicabo nobis, at quos corporis molestiae provident mollitia, eius cupiditate necessitatibus repudiandae repellendus minima aliquid similique, autem a debitis. Quam voluptatum blanditiis magnam modi eos et ipsum temporibus asperiores voluptatem. Nulla nihil alias optio.</p>
            <Link to='/contact' className="btn btn-outline-primary px-3">Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="../aboutimage.jpg" alt="About us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About