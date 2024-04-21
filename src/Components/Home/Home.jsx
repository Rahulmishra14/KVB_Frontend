import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import Products from "./Products";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        <img src="/Assets/img1.jpg" alt="" className="Images" />
        <img src="/Assets/img2.jpg" alt="" className="Images" />
        <img src="/Assets/img3.jpg" alt="" className="Images" />
        <img src="/Assets/img4.jpg" alt="" className="Images" />
      </Carousel>
      <div class="container">
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img1.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Mission</h1>
            <p>
              Our Mission is to maintain tune with the industry standards and
              meet all the expectations of our clients
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img2.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Vision</h1>
            <p>
              Banking on our workforce, our vision is to be able to reach the
              epitome of success through smartwork
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img3.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Quality Policy</h1>
            <p>
              We are committed to enhance value to our customers by delivering
              services of high quality and that too on time.
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img3.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Team</h1>
            <p>
              Our services are provided by well-qualified group of technocrats
              to clients in the power & other verticals
            </p>
          </div>
        </article>
      </div>
      <div class="about-container">
        <article class="about-card">
          <div class="background">
            <img src="/Assets/img1.jpg" alt="Fetch API GraphQL Preview" />
          </div>
          <div class="about-content">
            <div class="card-header">
              <div class="card-type">Web Dev</div>
              <div class="latest-article">Latest Article</div>
            </div>
            <div class="card-content">
              <h2>Who we are About KVB Electricals</h2>
              <p>
                We are well equipped with experienced and dedicated team of
                staff to serve you better. We deal with the below mentioned
                products and will be pleased to supply as per your
                specifications as & when required. These products are
                manufactured using supreme quality raw material and the most
                advanced techniques by our prestigious vendors in order to match
                the global quality standard.
              </p>
            </div>
            <div class="blog-preview__bottom">
              <div class="blog-author">
                <img src="Assets/img2.jpg" alt="Avatar" />
                <div class="blog-author__name">
                  <div class="blog-author__name">David Mráz</div>
                  <a
                    rel="author"
                    href="mailto:david@atheros.ai"
                    class="blog-author__alias"
                  >
                    @davidmraz
                  </a>
                </div>
              </div>
              <a class="go-to-article-button" href="/my-blog" title="New Blog">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <Products/>
      <div class="container">
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img1.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Mission</h1>
            <p>
              Our Mission is to maintain tune with the industry standards and
              meet all the expectations of our clients
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img2.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Vision</h1>
            <p>
              Banking on our workforce, our vision is to be able to reach the
              epitome of success through smartwork
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img3.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Quality Policy</h1>
            <p>
              We are committed to enhance value to our customers by delivering
              services of high quality and that too on time.
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-background">
            <img src="/Assets/img3.jpg" alt="background" />
          </div>
          <div class="content">
            <h1>Our Team</h1>
            <p>
              Our services are provided by well-qualified group of technocrats
              to clients in the power & other verticals
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
