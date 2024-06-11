import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ti from '../assets/images/t1.jpeg';
import t2 from '../assets/images/t2.jpeg';
import t3 from '../assets/images/t3.jpeg';
import t4 from '../assets/images/t4.jpeg';

function Team() {
    // State to track hover state for each figure
    const [hoverStates, setHoverStates] = useState([false, false, false, false]);

    // Handler for mouse enter
    const handleMouseEnter = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
    };

    // Handler for mouse leave
    const handleMouseLeave = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = false;
        setHoverStates(newHoverStates);
    };

    return (
        <section className="team">
            <span className="text-primary d-block">PRICING TABLE</span>
            <h1 className="header-with-line2 pt-3">Our Pricing Plan</h1>
            <p>
                There are many variations of passages of Lorem Ipsum available, but <br />
                the majority have suffered alteration in some form.
            </p>
            <Container>
                <Row>
                    <Col xl={3} sm={12}>
                        <figure
                            className={`snip1543 ${hoverStates[0] ? 'hover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                        >
                            <img src={ti} alt="sample108" className='w-100'/>
                            <figcaption>
                                <h3 className='text-light'>Dahlia Moore</h3>
                                <p className='text-dark'>Senior Manager</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </Col>
                    <Col xl={3} sm={12}>
                        <figure
                            className={`snip1543 ${hoverStates[1] ? 'hover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                        >
                            <img src={t2} alt="sample108" className='w-100'/>
                            <figcaption>
                                <h3 className='text-light'>Jhone Digo</h3>
                                <p className='text-dark'>Marketing</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </Col>
                    <Col xl={3} sm={12}>
                        <figure
                            className={`snip1543 ${hoverStates[2] ? 'hover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                        >
                            <img src={t3} alt="sample108" className='w-100'/>
                            <figcaption>
                                <h3 className='text-light'>Zara Tingo</h3>
                                <p className='text-dark'>Web Developer</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </Col>
                    <Col xl={3} sm={12}>
                        <figure
                            className={`snip1543 ${hoverStates[3] ? 'hover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                        >
                            <img src={t4} alt="sample108" className='w-100'/>
                            <figcaption>
                                <h3 className='text-light'>David Zone</h3>
                                <p className='text-dark'>SEO Expert</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Team;
