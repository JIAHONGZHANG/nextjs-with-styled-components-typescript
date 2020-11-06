import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${props => props.theme.palette.primary.main};

  ${props => props.theme.media.phone}{
    color: ${props => props.theme.palette.secondary.main}
  }
`

export default function Home() {
  return <Title>My page</Title>
}