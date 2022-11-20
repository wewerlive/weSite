// Delete this welcome message folder and files when youre ready to start your project //
import styled from 'styled-components';
import JoinButton from './JoinButton';

const WelcomeMessage = () => {
  return (
    <>
      <StyledDiv>
        <Styledh2>Welcome!</Styledh2>
        <Styledh3>
          Choose your <StyledSpan>Avatar</StyledSpan>
        </Styledh3>
      </StyledDiv>
      <JoinButton />
    </>
  );
};

const StyledDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: fit-content;
  margin-top: 1rem;
`;

const Styledh2 = styled.h2`
  text-align: center;
  flex-grow: 1;
  filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4));
  font-size: 3rem;
  font-weight: 800;
  &::selection {
    background: hsl(51, 46%, 84%);
  }
`;

const StyledSpan = styled.span`
  font-family: 'Maven Pro', sans-serif;
  font-weight: bolder;
  color: hsl(9, 100%, 65%);
  &::selection {
    background: hsl(51, 46%, 84%);
  }
`;
const Styledh3 = styled.h3`
  text-align: center;
  font-weight: 800;
  flex-grow: 1;
  filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.5));
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.8rem;
  padding: 2px 12px 8px 12px;
  &::selection {
    background: hsl(51, 46%, 84%);
  }
`;

export default WelcomeMessage;
