import React from 'react';
import styled from 'styled-components';
import { Book } from 'react-feather';

function Education({ data }) {
  return (
    <Wrapper>
      <Heading>
        Education
        <Book />
      </Heading>
      {data.map((item) => (
        <ItemWrapper>
          <LineWrapper>
            <School>{item.school}</School>
            <Detail>
              {item.start}-{item.end}
            </Detail>
          </LineWrapper>
          <Degree>{item.degree}</Degree>
          <Detail>{item.location}</Detail>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 2rem;
  background: linear-gradient(to right, #f7dba7, white);
  width: 50%;
`;

const ItemWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px ridge grey;
`;

const School = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Detail = styled.p`
  margin: 0;
  text-align: left;
`;

const Degree = styled.p`
  margin: 0;
  font-style: italic;
  text-align: left;
`;

export default Education;
