import React from 'react';
import styled from 'styled-components';
import Card from './Card.js'

const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 0 60px 0;
`

const Title = styled.h1`
	text-align: center;
	width: 100%;
	margin-top: 40px;
	font-size: 24px;
`

const ContainerTips = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	
`

export default class SectionTips extends React.Component{

	render(){
		return(
			<MainContainer>
				<Title>Dicas antes de contratar</Title>
				<ContainerTips>
					<Card  image={require("../../../Resources/capa-card.png")} title="Lorem Ipsum?" paragraph="Morbi urna risus, gravida eget venenatis ac, efficitur in augue. Ut consectetur nisi orci, et egestas ligula hendrerit quis. Nulla porttitor massa vel lobortis porttitor. Donec eget tempor nunc." />
					<Card  image={require("../../../Resources/capa-card.png")} title="Lorem Ipsum?" paragraph="Morbi urna risus, gravida eget venenatis ac, efficitur in augue. Ut consectetur nisi orci, et egestas ligula hendrerit quis. Nulla porttitor massa vel lobortis porttitor. Donec eget tempor nunc." />
					<Card  image={require("../../../Resources/capa-card.png")} title="Lorem Ipsum?" paragraph="Morbi urna risus, gravida eget venenatis ac, efficitur in augue. Ut consectetur nisi orci, et egestas ligula hendrerit quis. Nulla porttitor massa vel lobortis porttitor. Donec eget tempor nunc." />
				</ContainerTips>
			</MainContainer>
		)
	}
}