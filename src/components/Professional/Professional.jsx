import React from 'react';
import styled from 'styled-components';
import { Briefcase } from 'react-feather';

function Professional({ data }) {
  return (
    <Wrapper>
      <Heading>
        Professional Experience
        <Briefcase />
      </Heading>
      <Items>
        {data.map((item) => (
          <ItemWrapper key={item.organization}>
            <LineWrapper>
              <Organization>{item.organization}</Organization>
              <Detail>
                {item.start}-{item.end}
              </Detail>
            </LineWrapper>
            <Title>{item.title}</Title>
            <Detail>{item.location}</Detail>
            <List>
              {item.details.map((detail, index) => (
                <ListItem key={index}>{detail}</ListItem>
              ))}
            </List>
          </ItemWrapper>
        ))}
      </Items>
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
  width: 75%;
  margin: 0.5rem 0;
  color: darkslategray;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const Organization = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Detail = styled.p`
  margin: 0;
  text-align: left;
`;

const Title = styled.p`
  margin: 0;
  font-style: italic;
  text-align: left;
`;

const List = styled.ul``;

const ListItem = styled.li`
  padding-left: 1rem;
  line-height: 1.2;
  margin-bottom: 0.25rem;
`;

export default Professional;
