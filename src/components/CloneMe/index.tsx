import * as Styled from './style';

export type CloneMeProps = {
  title?: string;
}

export const CloneMe = ({ title = 'Componente exemplo'}: CloneMeProps) => {
  return (
    <Styled.Container>
     <h1>{title}</h1>
    </Styled.Container>
  );
};
