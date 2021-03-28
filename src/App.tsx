import styled from '@emotion/styled';
import Numpads from 'components/Numpads';

const FullScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <FullScreen>
      <Numpads />
    </FullScreen>
  );
}

export default App;
