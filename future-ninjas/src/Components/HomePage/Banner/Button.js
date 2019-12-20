import React from 'react';
import styled from 'styled-components';



const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 229px;
	height: 48px;
	background-color: #8E6CD2;
	border: none;
	color: white;
	border-radius: 200px;
	margin: 40px 110px;
	:hover {
		background-color: #6202EE;
	}
`

const TextButton = styled.span`
	font-weight: bold;
	font-size: 14px;
`

const ImageButton = styled.img`
	width: 40px;
	height: 40px;
`



export default class ButtonHome extends React.Component{
    constructor(props){
        super(props)
		this.state = {
			text: this.props.text,
			image: this.props.image,
		}
	}
	

    render() {
        return(
		<ButtonStyled onClick={() => {this.props.function(this.props.page)}} variant="contained">
			<TextButton>{this.state.text}</TextButton>
			<ImageButton src={this.state.image}/> 
		 </ButtonStyled>
        )
    }
}