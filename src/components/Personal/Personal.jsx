import React from 'react';
import styled from 'styled-components';
import { Mail, Smartphone, MapPin } from 'react-feather';

function Personal({ data }) {
  return (
    <Wrapper>
      <Name>{data.name}</Name>
      <Details>
        <Detail>
          <Mail />
          {data.email}
        </Detail>
        <Detail>
          <Smartphone />
          {data.phone}
        </Detail>
        <Detail>
          <MapPin />
          {data.location}
        </Detail>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 15%;
  background-color: #26408b;
  color: white;
`;

const Name = styled.h1`
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Detail = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Personal;
