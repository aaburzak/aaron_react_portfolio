import React from "react";

import { Card, Button, Carousel  } from "react-bootstrap";

import TriviaPic from "./TriviaPic";
import MoviePic from "./MoviePic";
import TechPic from "./TechPic";
import QuizPic from "./QuizPic";

function Project(){
    return(



<Carousel fade className="picBox" >
      <Carousel.Item className="d-block w-100">
        <QuizPic/>
      </Carousel.Item>
      {/* <Carousel.Item>
        <TriviaPic/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MoviePic/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>



    //     <div class="container">
    //         <div class="row">
    //             <div class="col projectCard">
    //                 <Card>
    //                     <Card.Body>
    //                     <Card.Text>
    //                         <h4>Trivia Challenge</h4>
    //                     </Card.Text>
    //                     </Card.Body>
    //                         <TriviaPic/>
    //                     <Card.Body>
    //                     <div className="mb-2 buttonBar">
    //                     <Button href="https://boiling-reaches-95982.herokuapp.com/profile" variant="secondary" size="lg">
    //                             Test the App
    //                         </Button>{' '}
    //                         <Button href="https://github.com/aaburzak/trivia-challenge"  variant="primary" size="lg">
    //                             See The Code
    //                         </Button>{' '}
    //                     </div>
    //                     </Card.Body>
    //                 </Card>
    //             </div>

    //             <div class="col projectCard">
    //                 <Card>
    //                     <Card.Body>
    //                     <Card.Text>
    //                         <h4>Movie Review</h4>
    //                     </Card.Text>
    //                     </Card.Body>
    //                         <MoviePic/>
    //                     <Card.Body>
    //                     <div className="mb-2">
    //                     <Button href="https://aguasvivasjc.github.io/Cinema-Buff/" variant="secondary" size="lg">
    //                             Test the App
    //                         </Button>{' '}
    //                         <Button href="https://github.com/aguasvivasjc/Cinema-Buff" variant="primary" size="lg">
    //                             See The Code
    //                         </Button>
    //                     </div>
    //                     </Card.Body>
    //                 </Card>
    //             </div>

    //             <div class="col projectCard">
    //                 <Card>
    //                     <Card.Body>
    //                     <Card.Text>
    //                         <h4>Tech Blog</h4>
    //                     </Card.Text>
    //                     </Card.Body>
    //                         <TechPic/>
    //                     <Card.Body>
    //                     <div className="mb-2">
    //                         <Button  href="https://murmuring-eyrie-88791.herokuapp.com/dashboard" variant="secondary" size="lg">
    //                             Test the App
    //                         </Button>{' '}
    //                         <Button href="https://github.com/aaburzak/Tech_Blog" variant="primary" size="lg">
    //                             See The Code
    //                         </Button>
    //                     </div>
    //                     </Card.Body>
    //                 </Card>
    //             </div>

    //             <div class="col projectCard">
    //                 <Card>
    //                     <Card.Body>
    //                     <Card.Text>
    //                         <h4>Coding Quiz</h4>
    //                     </Card.Text>
    //                     </Card.Body>
    //                         <QuizPic/>
    //                     <Card.Body>
    //                     <div className="mb-2">
    //                         <Button href="https://aaburzak.github.io/coding_quiz/" variant="secondary" size="lg">
    //                             Test the App
    //                         </Button>{' '}
    //                         <Button href="https://github.com/aaburzak/coding_quiz" variant="primary" size="lg">
    //                             See The Code
    //                         </Button>
    //                     </div>
    //                     </Card.Body>
    //                 </Card>
    //             </div>

    //         </div>
    //     </div>
    );
};

export default Project;