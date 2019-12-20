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
  height: 86.5vh;
  border-radius: 15px;
  margin-right: 1em; 
  display: flex;
  justify-content: initial;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1600px) {
    height: 87.5vh;
  }
  @media (min-width: 1920px) {
    height: 88vh;
  }
  @media (min-width: 2560px) {
    height: 88.9vh;
  }
`

const JobsArea = styled.div `
  background-color: #F5F3FB;
  width: 80%;
  height: 82.1vh;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  padding: 1em 0.5em;
  @media (min-width: 1600px) {
    height: 83.9vh;
  }
  @media (min-width: 1920px) {
    height: 85vh;
  }
  @media (min-width: 2560px) {
    height: 86vh;
    font-size: 18pt;
  }
`

const Title = styled.h4 `
  text-align: center;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
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
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const StyledSelect = styled.select `
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  text-indent: 0.5em;
  margin-bottom: 1em;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const ContainerSearch = styled.div `
  display: flex;
  flex-direction: column;
  width: 88%;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`



// Array de Teste

const jobs = [
  {
    title: 'Abc',
    value: 25.75
  },
  {
    title: 'bcd',
    value: 125
  },
  {
    title: 'BCDE',
    value: 8000
  },
  {
    title: 'ABCD',
    value: 1
  },
  {
    title: 'EEE',
    value: 40000
  },
  {
    title: 'aBCD',
    value: 12
  }
]



// Mudei para componente de classe porque vai atualizar o estado

class JobsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      minValue: '',
      maxValue: '',
      title: '',
    }
  }

  // Inputs controlados
  changeMinValue = (el) => {
    this.setState({minValue: el.target.value})
  }

  changeMaxValue = el => {
    this.setState({maxValue: el.target.value})
  }

  changeTitle = el => {
    this.setState({title: el.target.value});
  }

  render() {

    // Atualização a partir dos filtros
    const minValue = this.state.minValue
    const maxValue = this.state.maxValue

    const filteredJobs = jobs.filter(function(el) {
      if (maxValue) {
        return el.value >= minValue && el.value <= maxValue
      } if (!maxValue) {
        return el.value >= minValue
      }
    })

    const jobsToDisplay = filteredJobs.map((job) => {
      return <JobCard title={job.title} value={job.value}/>
    })

    return (
      <MainContainer>
        <FilterArea>
          <Title>FILTROS</Title>
          <ContainerSearch>
            <StyledLabel>Valor Mínimo</StyledLabel>
            <StyledInput type='number' placeholder='R$ 00,00' onChange={this.changeMinValue} value={this.state.minValue}/>
            <StyledLabel>Valor Máximo</StyledLabel>
            <StyledInput type='number' placeholder='R$ 1.000,00' value={this.state.maxValue} onChange={this.changeMaxValue}/>
            <StyledLabel>Título</StyledLabel>
            <StyledInput placeholder='Título' value={this.state.title} onChange={this.changeTitle}/>
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
          {jobsToDisplay}
        </JobsArea>
      </MainContainer>
    );
  }
}




export default JobsDisplay;