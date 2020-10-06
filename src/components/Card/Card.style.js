import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.space[4]};
`

export const CardImageContainer = styled.picture`
  display: flex;
  justify-content: center;
  width: 100%;

  > img {
    width: 50%;
    height: auto;
    -webkit-border-top-left-radius: ${props => props.theme.space[4]};
    -webkit-border-top-right-radius: ${props => props.theme.space[4]};
    -moz-border-radius-topleft: ${props => props.theme.space[4]};
    -moz-border-radius-topright: ${props => props.theme.space[4]};
    border-top-left-radius: ${props => props.theme.space[4]};
    border-top-right-radius: ${props => props.theme.space[4]};
  }
`
export const CardBodyCotnainer = styled.div`
  padding: ${props => props.theme.space[12]};
`