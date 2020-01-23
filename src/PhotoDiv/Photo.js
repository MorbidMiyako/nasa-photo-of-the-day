import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: auto;
  text-align:center;
  color: yellow;
`

const Img = styled.img`
  width: 60%;
`
const BottomTextDiv = styled.div`
  display:flex;
  justify-content:space-evenly;
  flex-direction:row-reverse;
`

const Explanation = styled.div`
  width:85%;
`
const Info = styled.div`
  width:10%;
`

const Photo = props => {
  console.log(props)
  return (
    <Div>
      <h2>{props.photo.title}</h2>
      <Img src={props.photo.hdurl} alt="spacePicture" />
      <BottomTextDiv>
        <Explanation>
          <p>{props.photo.explanation}</p>
        </Explanation>
        <Info>
          <p>{props.photo.copyright}</p>
          <p>{props.photo.date}</p>
        </Info>
      </BottomTextDiv>
    </Div>
  )
}

export default Photo;
