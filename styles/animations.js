import { keyframes } from 'styled-components'

export const fadeInAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  0.01% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const fadeInThenOut = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  90% {
    opacity:1;
  }
  95% {
    opacity: 0;
  }
`
export const fadeOutThenIn = keyframes`
  0% {
    opacity:1;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  93% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
`