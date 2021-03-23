import styled from '@emotion/styled';

interface ButtonProps {
  column?: number;
}

const Self = styled.div`
  display: grid;
  width: 360px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  background: black;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  font-size: 18px;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 6px;

  grid-column: span ${props => props.column || 1};
`;

function Numpads() {
  return (
    <Self>
      <Button column={4}>Clear</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>/</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>*</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button column={2}>0</Button>
      <Button>=</Button>
      <Button>+</Button>
    </Self>
  );
}

export default Numpads;