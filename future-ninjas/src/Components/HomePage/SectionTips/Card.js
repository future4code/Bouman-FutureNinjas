import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
	width: 266px;
	background-color: #F5F3FB;
`

const Title = styled.h2`
	margin: 0 3px;
	font-style: 18px;
`
const Paragraph = styled.p`
	margin 3px;
`

export default class Card extends React.Component{
    constructor(props){
        super(props)
		this.state = {title: ''}
		this.state = {image: ''}
		this.state = {paragraph: ''}
	}
	
	render(){
		return(
			<CardStyled>
				<img src={this.props.image}/>
				<Title>{this.props.title}</Title>
				<Paragraph>{this.props.paragraph}</Paragraph>
			</CardStyled>
		)
	}
}