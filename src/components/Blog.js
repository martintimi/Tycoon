import blog from "../assets/images/blog-grid1.jpeg";
import blog2 from "../assets/images/blog-grid2.jpeg";
import blog3 from "../assets/images/blog-grid3.jpeg";
import author from "../assets/images/author.jpeg";
import { Container, Col, Row } from "react-bootstrap";

function Blog() {
  return (
    <section className="blog">
      <Container>
        <div className="text-center" id="blog">
          <span className="text-primary d-block">LATEST NEWS</span>
          <h1 className="header-with-line2 pt-3">Latest News & Blog</h1>
          <p className="py-5">
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>
        <Row>
          <Col xl={4} sm={12} md={4}>
            <figure class="snip1581">
              <img src={blog} alt="profile-sample2" />
              <figcaption>
                <img src={author} alt="" className="cap_img" />
                <span>Martin timi</span>
              </figcaption>
            </figure>
            <h4 className="pt-2 mb-0">
              <a href="#">Make your team a Design driven company</a>
            </h4>
            <p className="sub_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </Col>
          <Col xl={4} sm={12} md={4}>
            <figure class="snip1581">
              <img src={blog2} alt="profile-sample7" />
              <figcaption>
                <img src={author} alt="" className="cap_img" />
                <span>Martin timi</span>
              </figcaption>
              <a href="#"></a>
            </figure>
            <h4 className="pt-2 mb-0">
              <a href="#">The newest web framework that changed the world</a>
            </h4>
            <p className="sub_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </Col>
          <Col xl={4} sm={12} md={4}>
            <figure class="snip1581">
              <img src={blog3} alt="profile-sample6" />
              <figcaption>
                <img src={author} alt="" className="cap_img" />
                <span>Martin timi</span>
              </figcaption>
              <a href="#"></a>
            </figure>
            <h4 className="pt-2 mb-0">
              <a href="#">5 ways to improve user retention for your startup</a>
            </h4>
            <p className="sub_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
