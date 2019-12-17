import React from 'react';
import styled from 'styled-components';
import JobCard from '../JobCard/index'



const MainContainer = styled.div `
  background-color: #D4C7EB;
  display: flex;
  height: fit-content;
  padding: 1em;
`

const FilterArea = styled.div `
  background-color: #F5F3FB;
  width: 20%;
  height: 87vh;
  border-radius: 15px;
  margin-right: 1em; 
  display: flex;
  justify-content: initial;
  align-items: center;
  flex-direction: column;
`

const JobsArea = styled.div `
  background-color: #F5F3FB;
  width: 80%;
  height: 82.7vh;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  padding: 1em 0.5em;
`

const Title = styled.h4 `
  text-align: center;
`

const StyledLabel = styled.label `
  margin-bottom: 0.3em;
`

const StyledInput = styled.input `
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  text-indent: 0.5em;
  margin-bottom: 1em;
`

const StyledSelect = styled.select `
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  text-indent: 0.5em;
  margin-bottom: 1em;
`

const ContainerSearch = styled.div `
  display: flex;
  flex-direction: column;
  width: 88%;
`



function JobsDisplay() {
  return (
    <MainContainer>
      <FilterArea>
        <Title>FILTROS</Title>
        <ContainerSearch>
          <StyledLabel>Valor Mínimo</StyledLabel>
          <StyledInput placeholder='R$ 00,00'/>
          <StyledLabel>Valor Máximo</StyledLabel>
          <StyledInput placeholder='R$ 1.000,00'/>
          <StyledLabel>Título</StyledLabel>
          <StyledInput placeholder='Título'/>
          <StyledLabel>Descrição</StyledLabel>
          <StyledInput placeholder='Digite a descrição'/>
          <StyledLabel>Ordenar por:</StyledLabel>
          <StyledSelect>
            <option>Selecione</option>
            <option>Alfabética</option>
            <option>Preço - Crescente</option>
            <option>Preço - Decrescente</option>
            <option>Prazo - Crescente</option>
            <option>Prazo - Decrescente</option>
          </StyledSelect>
        </ContainerSearch>
      </FilterArea>
      <JobsArea>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </JobsArea>
    </MainContainer>
  );
}




export default JobsDisplay;