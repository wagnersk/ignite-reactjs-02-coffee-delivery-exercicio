import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: calc(100vh);
  background: ${(props) => props.theme.COLORS.background};

  border-radius: 8px;

  padding: 0 0 157px 0;

  display: flex;
  flex-direction: column;
`
