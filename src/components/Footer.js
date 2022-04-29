import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Dof</h1>
          <PText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            consequatur asperiores obcaecati, sint iure ipsum hic cupiditate id
            sit magnam, dolorem quasi veniam? Veritatis incidunt nulla illum
            totam praesentium? A.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+2349039984143',
                path: 'tel:+2349039984143',
              },
              {
                title: 'demiladefolarin@gmail.com',
                path: 'mailto:demiladefolarin@gmail.com',
              },
              {
                title: 'Location',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Faebook',
                path: 'https://www.facebook.com/demilade.folarin.9/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/demiladebdm',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/demiladebdm_/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/demilade-folarin-01944016b/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/demiladebdm',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Demilade Folarin | Designed By Demilade Folarin
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
