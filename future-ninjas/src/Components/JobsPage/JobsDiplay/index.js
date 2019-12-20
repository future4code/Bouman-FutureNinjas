import React from 'react';
import styled from 'styled-components';
import JobCard from '../JobCard/index';
import axios from 'axios';



const MainContainer = styled.div`
  background-color: #D4C7EB;
  display: flex;
  height: fit-content;
  padding: 1em;
`

const FilterArea = styled.div`
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

const JobsArea = styled.div`
  background-color: #F5F3FB;
  width: 80%;
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

const Title = styled.h4`
  text-align: center;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 0.3em;
`

const StyledInput = styled.input`
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

const StyledSelect = styled.select`
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

const ContainerSearch = styled.div`
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



export default class JobsDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      minValue: null,
      maxValue: Infinity,
      title: '',
      description: '',
      allJobs: [],
      order: '',
    }
  }

  changeMinValue = (el) => {
    this.setState({ minValue: el.target.value })
  }

  changeMaxValue = el => {
    if (el.target.value === '') {
      this.setState({ maxValue: Infinity })
    } else {
      this.setState({ maxValue: el.target.value })
    }
  }

  changeTitle = el => {
    this.setState({ title: el.target.value });
  }

  changeDescription = el => {
    this.setState({ description: el.target.value });
  }

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    axios.get(`https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs`).then(res => {
      const allJobs = res.data.jobs
      this.setState({ allJobs })
    })
  }


  filtroServico = () => {
    return this.state.allJobs.filter((preco) => {
      if (preco.value >= Number(this.state.minValue)) {
        return true
      } else {
        return false
      }
    }).filter((preco) => {
      if (preco.value <= Number(this.state.maxValue)) {
        return true
      } else {
        return false
      }
    }).filter((titulo) => {
      if (titulo.title.includes(this.state.title)) {
        return true
      } else {
        return false
      }
    }).filter((descricao) => {
      if (descricao.description.includes(this.state.description)) {
        return true
      } else {
        return false
      }
    })
  }

  changeSelectorOrder = (el) => {
    const orderType = el.target.value
    this.setState({order: orderType,})
  }

  orderJobs = (itemA, itemB) => {
    switch(this.state.order) {
      case 'alfabetica':
        return itemA.title - itemB.title
        break;
      case '$Crescente':
        return itemA.value - itemB.value
        break;
      case '$Decrescente':
        return itemB.value - itemA.value
        break;
      case 'pzCrescente':
        return itemA.dueDate - itemB.dueDate
        break;
      case 'pzDecrescente':
        return itemB.dueDate - itemA.dueDate
        break;
    }
  }

  render() {
    const servicosFiltrados = this.filtroServico()
    const servicosOrdenados = servicosFiltrados.sort(this.orderJobs)
    console.log(this.state.allJobs)
    return (
      <MainContainer>
        <FilterArea>
          <Title>FILTROS</Title>
          <ContainerSearch>
            <StyledLabel>Valor Mínimo</StyledLabel>
            <StyledInput type='number' placeholder='R$ 00,00' onChange={this.changeMinValue} value={this.state.minValue} />
            <StyledLabel>Valor Máximo</StyledLabel>
            <StyledInput type='number' placeholder='R$ 1.000,00' value={this.state.maxValue} onChange={this.changeMaxValue} />
            <StyledLabel>Título</StyledLabel>
            <StyledInput placeholder='Título' value={this.state.title} onChange={this.changeTitle} />
            <StyledLabel>Descrição</StyledLabel>
            <StyledInput placeholder='Digite a descrição' value={this.state.description} onChange={this.changeDescription} />
            <StyledLabel>Ordenar por:</StyledLabel>
            <StyledSelect onChange={this.changeSelectorOrder}>
              <option>Selecione</option>
              <option value='alfabetica'>Alfabética</option>
              <option value='$Crescente'>Preço - Crescente</option>
              <option value='$Decrescente'>Preço - Decrescente</option>
              <option value='pzCrescente'>Prazo - Crescente</option>
              <option value='pzDecrescente'>Prazo - Decrescente</option>
            </StyledSelect>
          </ContainerSearch>
        </FilterArea>
        <JobsArea>
          {servicosOrdenados.map(job => <JobCard title={job.title} price={job.value} />)}
        </JobsArea>
      </MainContainer>
    );
  }
}
