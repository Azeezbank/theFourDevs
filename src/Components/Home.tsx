import React, { useState, useEffect } from "react";
import hand from "../assets/download.jfif";
import led from "../assets/OIP.jfif";
import red from "../assets/OIP1.jfif";
import baby from "../assets/baby-removebg-preview.png";
import mission from "../assets/home-charity-tab-1.jpg";
import program from "../assets/home-charity-tab-2.jpg";
import partner from "../assets/home-charity-tab-3.jpg";
import donate from "../assets/home-charity-tab-4.jpg";
import clean from "../assets/home-charity-donation-2.jpg";
import hunger from "../assets/home-charity-donation-4.jpg";
import serve from "../assets/home-charity-donation-6.jpg";
import woman_love from "../assets/woman-love.jpg";
import man from "../assets/man.jpg";
import edu_scholar from "../assets/edu-scholar.jpg";
import health_camp from "../assets/health-camp.jpg";
import env_proj from "../assets/env-proj.jpg";
import comm_dev from "../assets/com-dev.jpg";
import health_care_woman from "../assets/health-care-woman.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import AmericaR from '../assets/america.png';
import medeci from '../assets/medecin.png';
import unicef from '../assets/unicef.png';
import greenP from '../assets/greenP.png';
import oxfarm from '../assets/oxfam.png';
import HealthP from '../assets/healthP.png';

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState(1);
  const images = [
    {
      image: hand,
      text: "Be part of the world by making dona",
      bold: "JOIN WITH US AND SAVE THE WORD",
    },
    {
      image: led,
      text: "For the poor child",
      bold: "GIVE A HELPING HAND AND HELP UNFORTUNATE",
    },
    {
      image: red,
      text: "Be part of the world by make a donation",
      bold: "HELP US TO SAVE THE HOMELESS PEOPLES",
    },
  ];

  const texts = ["lives", "hope", "futures"];


  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentText, setcurrentText] = useState(0);

  const [ref1, inview1] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref2, inview2] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref3, inview3] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref4, inview4] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref5, inview5] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref6, inview6] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [ref7, inview7] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prevIndex: any) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const intertext = setInterval(() => {
      setcurrentText((prevText: any) => (prevText + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intertext);
  }, [texts.length]);

  //Supporters
  const parthners = [AmericaR, medeci, unicef, greenP, oxfarm, HealthP]
  const [indexp, setIndexP] = useState(0);

  const swipeP = (direction : any) => {
    if (direction === 'next') {
      setIndexP((prevInd) => (prevInd + 1) % parthners.length);
    } else {
      setIndexP((prevInd) => prevInd === 0 ? parthners.length -1 : prevInd - 1);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvaNav"
            aria-controls="offCanvaNav"
          >
            <span className="navbar-toggler-icon btn btn-danger"></span>
          </button>
          <div className="d-flex header pe">
            <div className="bi bi-heart-pulse-fill text-danger heart"></div>
            <h1 className="offcanvas-title text-center text-danger human">
              CHARITIES{" "}
              <p className="text-dark rights">
                HUMAN <span className="text-danger rights">RIGHTS</span>
              </p>
            </h1>
          </div>
        </div>

        <div className="offcanvas offcanvas-start" id="offCanvaNav">
          <div className="offcanvas-header">
            <div className="d-flex header">
              <div className="bi bi-heart-pulse-fill text-danger heart"></div>
              <h1 className="offcanvas-title text-center text-danger human">
                CHARITIES{" "}
                <p className="text-dark rights">
                  HUMAN <span className="text-danger rights">RIGHTS</span>
                </p>
              </h1>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow pe-5">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src.image} alt={`Slide ${index}`} />
              {currentIndex === index && (
                <>
                  <h3 className="overlay-text overlay">{src.text}</h3>
                  <h1 className="overlay-text overla">{src.bold}</h1>
                  <button className="overlay-text bg-danger text-white bott">
                    DONATE NOW
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-light text-container">
        <div className="row pt-4 pb-4 ps-2 pe-2">
          <div className="col-sm-6">
            <h2 className="pt-3">
              Empowering{" "}
              <span className="future text-danger">{texts[currentText]}</span>{" "}
              <br />
              through giving
            </h2>
            <p className="text-muted">
              Join us in collective journey of compassion and impact as we work
              hand in hand, transforming lives and nurturing hope around the
              world.
            </p>
            <button className="btn btn-danger rounded-pill">
              Make a donation
            </button>
          </div>
          <div className="col-sm-6">
            <img className="float-center pt-3" src={baby} alt="image" />
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5 ps-3 pe-3">
        <h2 className="pe-2 support-mission">
          Commitment to <span className="text-danger">impactful</span> change
          and <span className="text-danger"> community welfare</span>
        </h2>
        <p className="pt-2 text-muted support-mission-C">
          Discover our commitment to social welfare, ethical governnance, and
          impactful change
        </p>

        <div id="accordion">
          <div className=" round bg-light mt-5">
            <div className="cardd text-white">
              <div
                className={`hover2 mission ps-3 pe-3 ${
                  isActive === 1 ? "active" : ""
                }`}
                onClick={() => setIsActive(1)}
              >
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                >
                  <div className={`row`}>
                    <div className="col-2 pt-4">
                      <h3 className="bi bi-bullseye"></h3>
                    </div>
                    <div className="col-10 ps-4">
                      <h4 className='text-start'>Our mission</h4>
                      <p className="text-muted text-start">
                        About us and history
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={`hover2 ps-3 pe-3 ${isActive === 2 ? "active" : ""}`}
                onClick={() => setIsActive(2)}
              >
                <a
                  className="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  <div className="row">
                    <div className="col-2 pt-3">
                      <h3 className="bi bi-backpack-fill"></h3>
                    </div>
                    <div className="col-10 ps-4">
                      <h4 className="text-start">Our programs</h4>
                      <p className="text-muted text-start">Make a change</p>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={`hover2 ps-2 ${isActive === 3 ? "active" : ""}`}
                onClick={() => setIsActive(3)}
              >
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseThree"
                >
                  <div className="row ps-2">
                    <div className="col-2 pt-3">
                      <h3 className="bi bi-people-fill"></h3>
                    </div>
                    <div className="col-10 ps-4">
                      <h4 className="text-start">Our partners</h4>
                      <p className="text-muted text-start">
                        long-term partners
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={`hover2 ps-2 donate ${
                  isActive === 4 ? "active" : ""
                }`}
                onClick={() => setIsActive(4)}
              >
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseFour"
                >
                  <div className="row ps-2">
                    <div className="col-2 pt-3">
                      <h3 className="bi bi-cash"></h3>
                    </div>
                    <div className="col-10 ps-4">
                      <h4 className="text-start">Donate now</h4>
                      <p className="text-muted text-start">Save a life</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="round bg-light round p-4">
            <motion.div className="cardd2" ref={ref1} initial={{opacity: 0, y: 50}} 
            animate={{opacity: inview1 ? 1 : 0, y: 0}} transition={{duration: 1.5, ease: 'easeIn'}}
            >
              <div
                id="collapseOne"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                    <h3>Empowering lives through compassionate support</h3>
                    <p className="text-muted">
                      Our mission is to empower individuals and family through
                      comprehensive services, fostering resience, dignity, and
                      positive community impact for a brighter future.
                    </p>
                    <button className="btn btn-danger rounded-pill mt-3">
                      Learn more
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <img className="accord" src={mission} alt="mission" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="cardd2">
              <div
                id="collapseTwo"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                    <h3>Offering diverse programs focused on education</h3>
                    <p className="text-muted">
                      Offering diverse programs focused on education,
                      healthcare, environment, and community development for
                      sustainable positive impact.
                    </p>
                    <button className="btn btn-danger rounded-pill mt-3">
                      Learn more
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <img className="accord" src={program} alt="programs" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cardd2">
              <div
                id="collapseThree"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                    <h3>Collaborating with like-minded organizations</h3>
                    <p className="text-muted">
                      Collaborating with like-minded organizations, bussiness,
                      and individuals to maximize resources and extend our reach
                      for greater impact.
                    </p>
                    <button className="btn btn-danger rounded-pill mt-3">
                      Learn more
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <img className="accord" src={partner} alt="partnership" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cardd2">
              <div
                id="collapseFour"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                    <h3>Every contribution direcly support our causes</h3>
                    <p className="text-muted">
                      Our mission is to empower individuals and family through
                      comprehensive services, fostering resience, dignity, and
                      positive community impact for a brighter future.
                    </p>
                    <button className="btn btn-danger rounded-pill mt-3">
                      Learn more
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <img className="accord" src={donate} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light pt-5 pb-5 ps-3 pe-3">
        <h2 className="pe-2 support-mission">
          Support <span className="text-danger">our mission,</span> change lives
          today
        </h2>
        <p className="text-muted support-mission-C">
          Your donation empower us to continue our vital work, creating lasting
          impact and positive change
        </p>
        <div className="p-2 grid1">
          <motion.div className="bg-white rounded grid2Top" ref={ref2} initial={{opacity: 1, x: -50}} animate={{opacity: inview2 ? 1 : 0, x: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <img className="imageWidth " src={clean} alt="clean water" />
            <div className="p-3">
              <h5>support acces to clean water</h5>
              <p className="text-muted">
                Together, we can make a meaningful impact and transform lives.
              </p>
              <hr />
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>
                  #1,000 <br />
                  <span className="text-muted">Amount available</span>
                </p>
                <p className="text-center">
                  1 <br />
                  <span className="text-muted">Donations</span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded grid2Top" ref={ref3} initial={{opacity: 1, y: 50}} animate={{opacity: inview3 ? 1 : 0, y: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <img className="imageWidth" src={hunger} alt="clean water" />
            <div className="p-3">
              <h5>Ending hunger - donate for access to food</h5>
              <p className="text-muted">
                Every contribution counts towards building a world for everyone
                to live in.
              </p>
              <hr />
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>
                  #1,000 <br />
                  <span className="text-muted">Amount available</span>
                </p>
                <p className="text-center">
                  1 <br />
                  <span className="text-muted">Donations</span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded grid2Top" ref={ref4} initial={{opacity: 1, x: 50}} animate={{opacity: inview4 ? 1 : 0, x: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <img className="imageWidth " src={serve} alt="clean water" />
            <div className="p-3">
              <h5>Serve and support the community</h5>
              <p className="text-muted">
                Join us in our mission to create a brighter future for
                generations to come.
              </p>
              <hr />
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>
                  #1,000 <br />
                  <span className="text-muted">Amount available</span>
                </p>
                <p className="text-center">
                  1 <br />
                  <span className="text-muted">Donations</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-fluid ps-4 pe-4 pb-4">
        <h3 className="support-mission-C pt-5">
          Reasons to trust our <br />{" "}
          <span className="text-danger">commitment</span> and impact
        </h3>
        <p className="text-muted support-mission-C pt-2">
          Connect with us - your gateway to engaging with our mission and
          contributing to positive change.
        </p>
        <div className="engage mt-5">
          <motion.div className="engagement" ref={ref5} initial={{opacity: 0, x: -50}} animate={{opacity: inview5 ? 1 : 0, x: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <h2 className="mt-4">
              {" "}
              <i className="bi bi-cookie bg-danger p-3 round rounded-circle text-white">
                {" "}
              </i>
            </h2>
            <div>
              <h5 className="eng">Community engagement</h5>
              <p className="text-muted">
                Involving local communities to drive grassroots initiatives and
                foster inclusive development
              </p>
            </div>
          </motion.div>
          <motion.div className="engagement" ref={ref6} initial={{opacity: 0, y: 50}} animate={{opacity: inview6 ? 1 : 0, y: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <h2 className="mt-4">
              <i className="bi bi-browser-safari bg-danger p-3 round rounded-circle text-white"></i>
            </h2>
            <div>
              <h5 className="eng">Innovative solutions</h5>
              <p className="text-muted">
                Using technology and best practise to address complex challenge
                effectively
              </p>
            </div>
          </motion.div>
          <motion.div className="engagement" ref={ref7} initial={{opacity: 0, x: -50}} animate={{opacity: inview7 ? 1 : 0, x: 0}} transition={{duration: 1.5, ease: 'easeIn'}}>
            <h2 className="mt-4">
              <i className="bi bi-people bg-danger p-3 round rounded-circle text-white"></i>
            </h2>
            <div>
              <h5 className="eng">Dedicated team</h5>
              <p className="text-muted">
                passionate professional committed to making a real difference.
              </p>
            </div>
          </motion.div>
        </div>
        <img src={woman_love} className="woman_love" />
        <img src={man} className="woman_love" />
      </div>

      <div className="container-fluid bg-light ps-4 pe-4 pb-4">
        <h3 className="support-mission pt-5">
          Empowering community through{" "}
          <span className="text-danger">sustainable</span> programs
        </h3>
        <p className="text-muted support-mission-C pb-5">
          Explore our impactful programs promoting education, healthcare access,
          and community development.
        </p>
        <div className="card_edu_grid">
          <div className="card_edu">
            <h1 className="text-center">
              <i className="bi bi-book text-danger"></i>
            </h1>
            <h4>Education initiatives</h4>
            <p className="text-muted">
              Empowering future generations through access to quality education
              and skill development programs.
            </p>
            <button className="read mt-3 text-danger">Read more</button>
          </div>
          <div className="card_edu">
            <h1 className="text-center">
              <i className="bi bi-bandaid text-danger"></i>
            </h1>
            <h4>Healthcare services</h4>
            <p className="text-muted">
              Enhancing health outcomes and promoting wellness through
              accessible healthcare services.
            </p>
            <button className="read mt-3 text-danger">Read more</button>
          </div>
          <div className="card_edu">
            <h1 className="text-center">
              <i className="bi bi-globe text-danger"></i>
            </h1>
            <h4>Community development</h4>
            <p className="text-muted">
              Fostering inclusive and resilient communities through
              infrastructure projects, and social programs.
            </p>
            <button className="read mt-3 text-danger">Read more</button>
          </div>
        </div>
      </div>

      <div className="grid_back_image">
        <div
          style={{
            backgroundImage: `url(${edu_scholar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-4 container-fluid overflow"
        >
          <div className="image_cover">
            <h3 className="text-white ps-5 pt-4">
              Education scholarships program
            </h3>
            <button className="readd text-white bg-danger ms-5">
              Read more
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${health_camp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-4 container-fluid overflow"
        >
          <div className="image_cover">
            <h3 className="text-white ps-5 pt-4">
              Healthcare and support access campaign
            </h3>
            <button className="readd text-white bg-danger ms-5">
              Read more
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${env_proj})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-4 container-fluid overflow"
        >
          <div className="image_cover">
            <h3 className="text-white ps-5 pt-4">
              Environmental conservation project
            </h3>
            <button className="readd text-white bg-danger ms-5">
              Read more
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${comm_dev})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-4 container-fluid overflow"
        >
          <div className="image_cover">
            <h3 className="text-white ps-5 pt-4">
              Community development initiative
            </h3>
            <button className="readd text-white bg-danger ms-5">
              Read more
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${health_care_woman})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-4 container-fluid overflow"
        >
          <div className="image_cover">
            <h3 className="text-white ps-5 pt-4">
              Heathcare and support access campaign
            </h3>
            <button className="readd text-white bg-danger ms-5">
              Read more
            </button>
          </div>
        </div>
        <div className="bg-dark"></div>
      </div>
      <div className="container-fluid bg-light pt-5 ps-3 pe-3 pb-4">
        <div className="think1">
          <div>
            <h3 className="">
              Inspiring <span className="text-danger">stories</span> from
              supporters
            </h3>
            <p className="text-muted">
              Discover hearthfelt stories from our supporters, sharing their
              experience and the impact of our work.
            </p>
          </div>
          <div>
            <button className="think bg-danger mt-2">What do you think</button>
          </div>
        </div>
        <div className="card_edu_grid mt-5">
          <div className="testimonial">
            <h5 className="pt-2">Empowering change</h5>
            <p className="text-muted">
              Their work inspires hope and real change, fostering sustainable
              practices for a healthier planet.
            </p>
            <div className="d-flex pt-2">
              <img src={woman_love} alt="image" className="me-2 textmonialImage" />
              <div>
                <h5>David Lee</h5>
                <p className="text-muted">Environmentalist</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <h5 className="pt-2">Inpiring commitment</h5>
            <p className="text-muted">
              Their collaboration create lasting impact and change lives,
              empowering communities.
            </p>
            <div className="d-flex pt-2">
              <img src={woman_love} alt="image" className="me-2 textmonialImage" />
              <div>
                <h5>Sarah Johnson</h5>
                <p className="text-muted">Activist</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <h5 className="pt-2">Impactful work</h5>
            <p className="text-muted">
              I trust their accountability and ethical practices, ensuring my
              contributionsnmake a meaningful difference.
            </p>
            <div className="d-flex pt-2">
              <img src={baby} alt="image" className="me-2 textmonialImage"/>
              <div>
                <h5>Emily Davis</h5>
                <p className="text-muted">Philantropist</p>
              </div>
            </div>
          </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', overflow: 'hidden', position: 'relative', height: '100px'}}>
          <AnimatePresence initial={false}>
            <motion.img key={indexp} src={parthners[indexp]} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}} transition={{duration: 0.5}} drag="x" dragConstraints={{left: 0, right: 0}}
             onDragEnd={(_, info) => {
              const { offset } = info;
              if (offset.x > 100) {
                swipeP('prev');
              } else if (offset.x < -100) {
                swipeP('next');
              }
            }}
            style={{position: 'absolute', fontSize: '2rem', paddingTop: '25px', cursor: 'grab', height: 'auto'}} 
            />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Home;
