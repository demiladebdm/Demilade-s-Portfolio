import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/portfolio/about.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__page {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top__section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top__section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Demilade Folarin</span>
            </p>
            <h2 className="about__heading">A freelance Web Developer</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus cum iure quaerat velit similique explicabo aut
                molestias eos voluptatem et aspernatur vero laborum, tempora ea!
                Ratione vero quo impedit.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus cum iure quaerat velit similique explicabo aut
                molestias eos voluptatem et aspernatur vero laborum, tempora ea!
                Ratione vero quo impedit.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus cum iure quaerat velit similique explicabo aut
                molestias eos voluptatem et aspernatur vero laborum, tempora ea!
                Ratione vero quo impedit.
              </PText>
            </div>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://drive.google.com/file/d/1nviDCCFEYUKdUvQldHRaAzCfOy-xM10O/view?usp=sharing';
              }}
              btnText="Download CV"
              // btnLink="https://drive.google.com/file/d/1nviDCCFEYUKdUvQldHRaAzCfOy-xM10O/view?usp=sharing"
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Demilade Folarin img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Unique Children School, Omole']}
            />
            <AboutInfoItem
              title="College"
              items={['Unique Heights School, Magodo']}
            />
            <AboutInfoItem
              title="Varsity"
              items={['University of Lagos, Yaba']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'After Effect', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2010-2012"
              items={['Junior Developer at Daddydof']}
            />
            <AboutInfoItem
              title="2012-2016"
              items={['Front EndDeveloper at Daddydof']}
            />
            <AboutInfoItem title="2016-" items={['Freelance Web Developer']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
