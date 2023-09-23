import styled from "styled-components"

export const FeedbackOptionsStyle = styled.div
  `
display: flex;
gap: 20px;
justify-content: center;
	`

export const FeedBackOptionsSlyleButton = styled.button
  `
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px;

  
  background-color: #fff;
  background-position: 0 90%;
  background-size: 4px 3px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 10px 20px 20px -10px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
	
&:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
	`	