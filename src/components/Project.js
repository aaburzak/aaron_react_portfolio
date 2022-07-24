import React from "react";

import { Card, Button, Carousel  } from "react-bootstrap";

import TriviaPic from "./TriviaPic";
import MoviePic from "./MoviePic";
import TechPic from "./TechPic";
import QuizPic from "./QuizPic";

function Project(){
    return(



<Carousel fade className="portBox" >
      <Carousel.Item >
        <QuizPic/>
        <Carousel.Caption>
          <h4>MTG: Trading Block</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div className="mb-2 buttonBar">
            <>
              <style type="text/css">
                {`
                  .btn-port {
                  background-color: var(--darkBlue);
                  color: var(--beige);
                  cursor: pointer;
                  border: 2px solid var(--beige);
                  margin-right: 1%;
                  } 
                  .btn-port:hover {
                  box-shadow: inset 0px 0px var(--beige), 0 0 15px var(--beige);
                  color: var(--beige);
                  }
                `}
              </style>
                <Button variant="port" href=" https://immense-garden-06811.herokuapp.com/evaluate"  size="md">
                  Test the App
                </Button>{' '}
                <Button variant="port" href="https://github.com/MaxFrank13/MtG-Trading-Block"   size="md">
                  See The Code 
                </Button>{' '}
            </>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <TriviaPic/>
        <Carousel.Caption>
          <h4>Trivia Challenge</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="mb-2 buttonBar">
            <>
              <style type="text/css">
                {`
                  .btn-port {
                  background-color: var(--darkBlue);
                  color: var(--beige);
                  cursor: pointer;
                  border: 2px solid var(--beige);
                  margin-right: 1%;
                  } 
                  .btn-port:hover {
                  box-shadow: inset 0px 0px var(--beige), 0 0 15px var(--beige);
                  color: var(--beige);
                  }
                `}
              </style>
                <Button variant="port" href="https://boiling-reaches-95982.herokuapp.com/profile"  size="lg">
                  Test the App
                </Button>{' '}
                <Button variant="port" href="https://github.com/aaburzak/trivia-challenge"   size="lg">
                  See The Code 
                </Button>{' '}
            </>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MoviePic/>
        <Carousel.Caption>
          <h4>Movie Review</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div className="mb-2 buttonBar">
            <>
              <style type="text/css">
                {`
                  .btn-port {
                  background-color: var(--darkBlue);
                  color: var(--beige);
                  cursor: pointer;
                  border: 2px solid var(--beige);
                  margin-right: 1%;
                  } 
                  .btn-port:hover {
                  box-shadow: inset 0px 0px var(--beige), 0 0 15px var(--beige);
                  color: var(--beige);
                  }
                `}
              </style>
                <Button variant="port" href="https://aguasvivasjc.github.io/Cinema-Buff/" size="lg">
                  Test the App
                </Button>{' '}
                <Button variant="port" href="https://github.com/aguasvivasjc/Cinema-Buff"   size="lg">
                  See The Code 
                </Button>{' '}
            </>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
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