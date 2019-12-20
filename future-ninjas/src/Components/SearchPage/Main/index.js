import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const MainSection = styled.div`
  padding: 0 7%;
`

const Heading = styled.h2`
  margin: 0;
  margin-top: 0.5em;
  font-size: 22pt;
  line-height: 39px;
  font-weight: bold;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchForm = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 20vw;
`

const NinjaImage = styled.div`
  & > img {
    max-width: 640px;
  }
`

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
  margin-bottom: 0.5em;
`

const StyledInput = styled.input `
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  margin-bottom: 1em;
  text-indent: 0.5em;
  color: #959595;
`

const StyledSelect = styled.select `
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  margin-bottom: 1em;
  color: #959595;
`

const StyledTextarea = styled.textarea `
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 7.2em;
  width: 100%;
  margin-bottom: 1em;
  color: #959595;
`

const SearchButton = styled.button`
  display: block;
  margin-left: 50%;
  width: 49%;
  text-align: center;
  margin-top: 1.5em;
  background: #8E6CD2;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  height: 3em;
  color: white;
`



export default class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      value: 0,
      payment:[],
      date: new Date(''),
    }
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value })
  }

  handleChangeDescription = event => {
    this.setState({ description: event.target.value })
  }

  handleChangeValue = event => {
    this.setState({ value: event.target.value })
  }

  handleChangePayment = event => {
    this.setState({ payment: event.target.value })
  }

  handleChangeDate = event => {
    this.setState({ date: event.target.value })
  }

  handleSubmit = async () => {

    try {
			const data = {
				title: this.state.title,
				description: this.state.description,
				value: this.state.value,
				paymentMethods: [this.state.payment],
				dueDate: new Date(this.state.date),
			}

      await axios.post('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs', data)
      this.setState({
        title: "",
        description: "",
        value: "",
        payment: [],
        date: new Date(''),
      })
      
		} catch (err) {
			console.log(`Verifique todos os campos. Erro: ${err.message}`)
		}
  }

  render(){
  return (
    <MainSection>
      <Heading>
        Procure o profissional perfeito para o que você precisa
      </Heading>
      <Container>
        <SearchForm>
          <Label htmlFor='title'>Título</Label>
          <StyledInput id='title' type='text' placeholder='Título do anúncio' onChange={this.handleChangeTitle} />
          <Label htmlFor='description'>Descrição</Label>
          <StyledTextarea id='description' type='text' placeholder='Um pequeno texto que descreva sua necessidade' onChange={this.handleChangeDescription}/>
          <Label htmlFor='value'>Valor da Remuneração</Label>
          <StyledInput id='value' type='number' placeholder='R$200,00' onChange={this.handleChangeValue}/>
          <Label htmlFor='payment'>Meios de Pagamento</Label>
          <StyledSelect id='payment' onChange={this.handleChangePayment}>
            <option value=''>Selecione</option>
            <option value='credit-card'>Cartão de Crédito</option>
            <option value='debit-card'>Cartão de Débito</option>
          </StyledSelect>
          <Label htmlFor='deadline'>Prazo</Label>
          <StyledInput id='deadline' type='date' onChange={this.handleChangeDate}/>
          <SearchButton onClick={this.handleSubmit}>Concluir</SearchButton>
        </SearchForm>
        <NinjaImage>
          <img src={require('../../../Resources/icone-ninja.png')}/>
        </NinjaImage>
      </Container>
    </MainSection>
  )}
}



