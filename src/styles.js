import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  justify-content: space-between;
  align-items: center;
  `
