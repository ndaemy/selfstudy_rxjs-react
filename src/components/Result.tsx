import styled from '@emotion/styled';

interface ResultProps {
  currentNum: number;
}

const Self = styled.div`
  width: 292px;
  text-align: right;
  font-size: 48px;
  margin: 0 0 24px;
`;

function Result({ currentNum }: ResultProps) {
  return <Self>{currentNum}</Self>;
}

export default Result;
