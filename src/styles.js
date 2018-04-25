import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  justify-content: space-between;
  align-items: center;
  `
export const logoLink = "http://www.alivemma.dreamhosters.com/wp-content/uploads/2017/06/cropped-c5979c_1a0bb9867e020320c8720e908d3ba9da-e1498343549417.png"
