import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyle>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt unde rem consectetur tenetur? Sunt modi atque id nisi eaque necessitatibus, debitis distinctio, perferendis repellendus magnam neque illo! Quas, ea?"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt unde rem consectetur tenetur? Sunt modi atque id nisi eaque necessitatibus, debitis distinctio, perferendis repellendus magnam neque illo! Quas, ea?"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt unde rem consectetur tenetur? Sunt modi atque id nisi eaque necessitatibus, debitis distinctio, perferendis repellendus magnam neque illo! Quas, ea?"
          />
        </div>
      </div>
    </ServicesItemStyle>
  );
}
