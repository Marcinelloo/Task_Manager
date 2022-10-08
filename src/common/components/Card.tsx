import  React ,  { ReactNode } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
width: fit-content;
height:  fit-content;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
border-radius: 10px;
padding: 10px;
`

interface CardProps {
  children?: ReactNode
}

const Card = ({children }:  CardProps) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Card