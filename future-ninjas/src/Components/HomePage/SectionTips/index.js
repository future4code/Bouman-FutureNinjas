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
	margin: 40px 0;
	font-size: 24px;
`

const ContainerTips = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	max-width: 1800px;
	margin: 0 auto;
`

export default class SectionTips extends React.Component{

	render(){
		return(
			<MainContainer>
				<Title>Dicas antes de contratar</Title>
				<ContainerTips>
					<Card  image={require("../../../Resources/priorise-dicas.svg")} title="O que é importante?" paragraph="Antes do primeiro contato, tenha em mente quais elementos são mais importantes para o seu serviço, assim você conseguirá focar a sua busca pelo profissional perfeito." />
					<Card  image={require("../../../Resources/question-dicas.svg")} title="Esclareça as dúvidas!" paragraph="Não saia da negociação sem entender algo. Peça para o profissional esclarecê-las e escrever os detalhes que não estão bem claros." />
					<Card  image={require("../../../Resources/search-dicas.svg")} title="Pesquise!" paragraph="Antes de contratar um profissional, faça um levantamento para verificar as melhores condições e quais profissionais se adequam à sua demanda." />
				</ContainerTips>
			</MainContainer>
		)
	}
}