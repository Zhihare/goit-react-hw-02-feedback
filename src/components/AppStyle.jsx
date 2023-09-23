
import styled from 'styled-components'


export const AppWraper = styled.div
  `
	position: relative;
font-family: 'Space Mono', monospace;
padding: 20px;
margin: 80px auto;
width: 500px;
text-align: center;

  background:
    linear-gradient(-45deg, #0000 6px, #fff 7px),
    linear-gradient( 45deg, #0000 6px, #fff 7px),
    linear-gradient(-45deg, #fff calc(100% - 7px), #0000 calc(100% - 8px)),
    linear-gradient( 45deg, #fff calc(100% - 7px), #0000 calc(100% - 8px));
  background-size: 10px 50%;
  background-position: 0 100%, 0 100%, 0 0, 0 0;
  background-repeat: repeat-x;
`