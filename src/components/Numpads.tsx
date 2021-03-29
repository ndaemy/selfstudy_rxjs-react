import styled from '@emotion/styled';
import React, { MouseEvent } from 'react';
import { Subject } from 'rxjs';

interface ButtonProps {
  background?: string;
  column?: number;
}

interface NumpadsProps {
  calculator: Subject<string | number>;
}

const Self = styled.div`
  display: grid;
  width: 292px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  background: black;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  font-size: 18px;
  background: ${props => (props.background ? props.background : '#333333')};
  width: ${props =>
    props.column ? props.column * 64 + (props.column - 1) * 12 + 'px' : '64px'};
  height: 64px;
  margin: 0 auto;
  padding: 0;
  border-radius: 32px;

  color: ${props => (props.color ? props.color : 'inherit')};
  grid-column: span ${props => props.column || 1};
`;

function Numpads({ calculator }: NumpadsProps) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    calculator.next(e.currentTarget.innerText);
  }

  return (
    <Self>
      <Button background={'#a5a5a5'} color='#000' column={4}>
        Clear
      </Button>
      <Button onClick={handleClick}>7</Button>
      <Button onClick={handleClick}>8</Button>
      <Button onClick={handleClick}>9</Button>
      <Button background={'#fd9f07'} onClick={handleClick}>
        /
      </Button>
      <Button onClick={handleClick}>4</Button>
      <Button onClick={handleClick}>5</Button>
      <Button onClick={handleClick}>6</Button>
      <Button background={'#fd9f07'} onClick={handleClick}>
        *
      </Button>
      <Button onClick={handleClick}>1</Button>
      <Button onClick={handleClick}>2</Button>
      <Button onClick={handleClick}>3</Button>
      <Button background={'#fd9f07'} onClick={handleClick}>
        -
      </Button>
      <Button column={2} onClick={handleClick}>
        0
      </Button>
      <Button background={'#fd9f07'} onClick={handleClick}>
        =
      </Button>
      <Button background={'#fd9f07'} onClick={handleClick}>
        +
      </Button>
    </Self>
  );
}

export default Numpads;
