import { css } from 'styled-components'

export const fadeOutTransition = css`
  opacity: 0;
  transition: all .5s ease-in-out;
`
export const fadeInTransition = css`
  opacity: 1;
  transition: all .5s ease-in-out;
`
export const flexCenter = css`
  display: flex;
  align-items: center;
`
export const flexEnd = css`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`
export const paddingBorder = css `
  padding-left: min(3.5vw, 50px);
  border-left: 1px solid grey;
`