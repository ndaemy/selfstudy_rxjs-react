import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

import Numpads from 'components/Numpads';
import Result from 'components/Result';

const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100vw;
  height: 100vh;
`;

const calculator$ = new Subject<string>();
const calculation$ = new Subject<string | number>();

function App() {
  const [currentNum, setCurrentNum] = useState(0);
  const [operator, setOperator] = useState<string>('');
  const [calculation, setCalculation] = useState<(string | number)[]>([]);

  useEffect(() => {
    calculator$.subscribe(v => {
      if (v === 'Clear') {
        setCurrentNum(0);
        setCalculation([]);
        setOperator('');
      }

      // 연산자면
      if (isNaN(+v)) {
        setOperator(v);
        console.log(currentNum);
        calculation$.next(currentNum);
      }

      if (!isNaN(+v)) {
        // 숫자면 연산자에 유무/타입에 따라 switch case
        switch (operator) {
          case '+':
            console.log('이전이 +였던 숫자');
            setCurrentNum(+v);
            setOperator('');
            calculation$.next(operator);
            break;

          case '-':
            break;

          case '*':
            break;

          case '/':
            break;

          case '=':
            break;

          default:
            console.log('그냥 숫자');
            console.log(operator);
            setCurrentNum(currentNum * 10 + +v);
            break;
        }
      }
    });
  }, [operator, currentNum]);

  useEffect(() => {
    calculation$.subscribe(v => {
      setCalculation(prev => [...prev, v]);
    });
  }, []);

  return (
    <FullScreen>
      <Result currentNum={currentNum} />
      <Numpads calculator={calculator$} operator={operator} />
    </FullScreen>
  );
}

export default App;
