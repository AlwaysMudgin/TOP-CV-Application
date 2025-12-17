import React from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';

function SideMenu({ open, toggle, content, setContent }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ContentWrapper $open={open}>
          <FormSection>
            <SectionName>Personal Information</SectionName>
            {Object.keys(content.personal).map((item) => (
              <FormItem key={item}>
                <Label>{item.toUpperCase()}</Label>
                <Input
                  value={content.personal[item]}
                  onChange={(e) => {
                    const newContent = { ...content };
                    newContent.personal[item] = e.target.value;
                    setContent(newContent);
                  }}
                ></Input>
              </FormItem>
            ))}
          </FormSection>
          <FormSection>
            <SectionName>Education</SectionName>
            {content.education.map((item, index) => (
              <SubItem>
                <SubHeading>{item.school}</SubHeading>
                <FormItem>
                  <Label>School</Label>
                  <Input
                    value={item.school}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.education[index].school = e.target.value;
                      setContent(newContent);
                    }}
                  ></Input>
                </FormItem>
                <FormItem>
                  <Label>Degree</Label>
                  <Input
                    value={item.degree}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.education[index].degree = e.target.value;
                      setContent(newContent);
                    }}
                  ></Input>
                </FormItem>
                <FormItem>
                  <Label>Start Date</Label>
                  <Input
                    value={item.start}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.education[index].start = e.target.value;
                      setContent(newContent);
                    }}
                  ></Input>
                </FormItem>
                <FormItem>
                  <Label>End Date</Label>
                  <Input
                    value={item.end}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.education[index].end = e.target.value;
                      setContent(newContent);
                    }}
                  ></Input>
                </FormItem>
                <FormItem>
                  <Label>Location</Label>
                  <Input
                    value={item.location}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.education[index].location = e.target.value;
                      setContent(newContent);
                    }}
                  ></Input>
                </FormItem>
              </SubItem>
            ))}
          </FormSection>
        </ContentWrapper>
      </InnerWrapper>
      <MenuButtonWrapper $open={open}>
        <MenuButton onClick={toggle}>
          <Menu />
        </MenuButton>
      </MenuButtonWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  position: relative;
`;

const MenuButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(${(props) => (props.$open ? '15rem' : '0rem')});
  transition: transform 400ms;
`;

const MenuButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const InnerWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
`;

const ContentWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  transform: translateX(${(props) => (props.$open ? '0rem' : '-15rem')});
  transition: transform 400ms, visibility 400ms;
`;

const FormSection = styled.section``;

const SectionName = styled.h2``;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input``;

const SubItem = styled.div`
  margin-left: 1rem;
`;

const SubHeading = styled.h3``;

export default SideMenu;
