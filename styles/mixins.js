import { css } from 'styled-components'
import { colorPicker } from '../utils/colorPicker'

export const fadeOutTransition = css`
  opacity: 0;
  transition: all .6s ease-in-out;
`
export const fadeInTransition = css`
  opacity: 1;
  transition: all .6s ease-in-out;
`
export const linkStyles = css`
  opacity: ${props => props.selected ? 1 : 0.5};
  transition: all .5s ease-in-out;
  margin: 0.7em;
  padding: 0.3em;
  cursor: pointer;

  :hover {
    ${fadeInTransition}
  }
`
export const flexCenter = css`
  display: flex;
  align-items: center;
`
export const flexEnd = css`
  display: flex;
  align-items: flex-end;
`
export const paddingBorder = css `
  padding: 1em 0 1em min(4vw, 55px);
  border-left: 1px solid ${props => props.theme.border};
`
export const square = css`
  background: ${props => colorPicker(props.theme.gradients, props.i) };
  width: ${props => props.width};
  height: ${props => props.height};
`
export const techText = css`
  font-size: 1em;
  font-weight: bold;
  position: absolute;
`