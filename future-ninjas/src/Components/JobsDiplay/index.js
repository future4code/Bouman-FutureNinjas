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
    height: 87.4vh;
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

const jobs = [
  {
    oferta: 'Abc',
    valor: 25.75
  },
  {
    oferta: 'bcd',
    valor: 125
  },
  {
    oferta: 'BCDE',
    valor: 8000
  },
  {
    oferta: 'ABCD',
    valor: 1
  },
  {
    oferta: 'EEE',
    valor: 40000
  },
  {
    oferta: 'aBCD',
    valor: 12
  }
]

export default class JobsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: '',
      maxValue: '',
      title: '',
      filteredJobs: []
    }
  }

  changeMinValue = (el) => {
    this.setState({minValue: el.target.value})
    this.refreshSearch()
  }

  changeMaxValue = el => {
    this.setState({maxValue: el.target.value})
    this.refreshSearch()
  }

  changeTitle = el => {
    this.setState({title: el.target.value});
    this.refreshSearch()
  }

  refreshSearch() {

    const minValue = this.state.minValue
    const maxValue = this.state.maxValue ? this.state.maxValue : 10000000
  

    const filtered = jobs.filter(function(el) {
      return el.valor >= minValue &&
      el.valor <= maxValue
    })

    this.setState({filteredJobs: filtered}, () => {
      this.setState({filteredJobs: this.state.filteredJobs})
    })
  }

  componentDidUpdate() {
  }

  render() {
    // const jobsToDisplay = this.state.filteredJobs.map((job) => {
    //   return <JobCard title={job.oferta} value={job.valor}/>
    // })
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
          {/* {jobsToDisplay} */}
          <JobCard filter={this.state.filteredJobs}/>
        </JobsArea>
      </MainContainer>
    );
  }
}