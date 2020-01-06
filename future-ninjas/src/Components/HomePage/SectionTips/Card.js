import React from 'react';
import styled from 'styled-components';



const CardStyled = styled.div `
	width: 266px;
	background-color: #F5F3FB;
	box-shadow: 0 0 1em rgba(0, 0, 0, 0.15);
`

const Title = styled.h2 `
	margin: 0.5em 3px;
	font-style: 18px;
`

const Paragraph = styled.p `
	margin: 3px;
`

const Thumbnail = styled.img `
	width: 100%;
	height: 50%;
	background-color: #FAFBFC;
`


export default class Card extends React.Component{
    constructor(props){
        super(props)
		this.state = {
			title: '',
			image: '',
			paragraph: '',
		}
	}
	
	render(){
		return(
			<CardStyled>
				<Thumbnail src={this.props.image}/>
				<Title>{this.props.title}</Title>
				<Paragraph>{this.props.paragraph}</Paragraph>
			</CardStyled>
		)
	}
}