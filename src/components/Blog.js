import blog from "../assets/images/blog-grid1.jpeg";
import blog2 from "../assets/images/blog-grid2.jpeg";
import blog3 from "../assets/images/blog-grid3.jpeg";
import author from "../assets/images/author.jpeg"
import { Container} from "react-bootstrap";

function Blog() {
  return (
    <section className="blog text-center">

        <Container>
        <span className="text-primary d-block">LATEST NEWS</span>
        <h1 className="header-with-line2 pt-3">Latest News & Blog</h1>
        <p className='py-5'>
          There are many variations of passages of Lorem Ipsum available, but <br />
          the majority have suffered alteration in some form.
        </p>
      <figure class="snip1581">
        <img src={blog} alt="profile-sample2" />
        <figcaption>
            <img src={author} alt="" className="cap_img"/>
            <span>Martin timi</span>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure class="snip1581">
        <img src={blog2} alt="profile-sample7" />
        <figcaption> 
        <img src={author} alt=""  className="cap_img"/>
        <span>Martin timi</span>

        </figcaption>
        <a href="#"></a>
      </figure>
      <figure class="snip1581">
        <img src={blog3} alt="profile-sample6" />
        <figcaption>
        <img src={author} alt=""  className="cap_img"/>
        <span>Martin timi</span>

        </figcaption>
        <a href="#"></a>
      </figure>
      </Container>
    </section>
  );
}

export default Blog;
