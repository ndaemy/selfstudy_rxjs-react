import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Subject } from 'rxjs';

import Numpads from 'components/Numpads';

const FullScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100vw;
  height: 100vh;
`;

const calculator = new Subject<string | number>();

function App() {
  useEffect(() => {
    calculator.subscribe(v => {
      console.log(v);
    });
  }, []);

  return (
    <FullScreen>
      <Numpads calculator={calculator} />
    </FullScreen>
  );
}

export default App;
