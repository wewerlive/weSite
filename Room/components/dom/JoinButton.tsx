import styled from 'styled-components';

const JoinButton = () => {
  return (
    <>
      <StyledView>
        <StyledButton type="button">Join</StyledButton>
      </StyledView>
    </>
  );
};

const StyledView = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
  items-align: center;
  transform: translate(-50%, 0);
  width: fit-content;
  margin-top: 1rem;
  filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.8));
`;

const StyledButton = styled.button`
  border: 4px solid hsl(9, 100%, 65%);
  border-radius: 20px;
  position: absolute;
  top: 55rem;
  font-weight: 800;
  color: hsl(0, 0%, 100%);
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    border: 2px solid hsl(9, 100%, 55%);
  }
  @media (min-width: 768px) {
    top: 50rem;
  }
  @media (min-width: 1024px) {
    top: 30rem;
  }
`;

export default JoinButton;
