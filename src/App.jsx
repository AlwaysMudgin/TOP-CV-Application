import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import Personal from './components/Personal/Personal';
import Education from './components/Education/Education';
import Professional from './components/Professional/Professional';

import { EXAMPLE } from './constants';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [content, setContent] = useState(EXAMPLE);

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <PageWrapper>
      <SideMenu open={menuOpen} toggle={toggleMenuOpen} />
      <MainWrapper>
        <Personal data={content.personal} />
        <Body>
          <Education data={content.education} />
          <Professional data={content.professional} />
        </Body>
      </MainWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div``;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
