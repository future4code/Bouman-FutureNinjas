import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainSection = styled.div`
  margin: 60px 7vw 0;
  font-family: 'Roboto', sans-serif;
`

const Heading = styled.div`
  padding: 3vh 0 0;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 33.4788px;
  line-height: 39px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SearchForm = styled.form`
  padding-top: 3vh;
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
`

const TitleInput = styled.input`
`

const DescriptionInput = styled.input`
`

const ValueInput = styled.input`
`

const SearchButton = styled.button`
  display: block;
  text-align: center;
  right: 0;
`


export default class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      value: 0,
      payment:[],
      date: 0,
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

  handleSubmit = async event => {
    event.preventDefault();

    try {
			const data = {
				title: this.state.title,
				description: this.state.description,
				value: this.state.value,
				paymentMethods: [this.state.payment],
				dueDate: new Date(this.state.date),
			}
			console.log(data)

      await axios.post('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs', data)
			this.setState({
				title: '',
				description: '',
				value: '',
				payment: '',
				date: '',
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
        <SearchForm onSubmit={this.handleSubmit}>
        <Label htmlFor='title'>
          Título
        </Label>
        <br/>
        <TitleInput id='title' type='text' onChange={this.handleChangeTitle}/>
        <br/>
        <br/>
        <Label htmlFor='description'>
          Descrição  
        </Label>
        <br/>
        <DescriptionInput id='description' type='text' onChange={this.handleChangeDescription}/>
        <br/>
        <br/>
        <Label htmlFor='value'>
          Valor da Remuneração
        </Label>
        <br/>
        <ValueInput id='value' type='number' onChange={this.handleChangeValue}/>
        <br/>
        <br/>
        <Label htmlFor='payment'>
          Meios de Pagamento
        </Label>
        <br/>
        {/* <input type='checkbox' id='credit-card' value='credit-card'/><Label htmlFor='credit-card'>Cartão de Crédito</Label>
        <br/>
        <input type='checkbox' id='debit-card' value='debit-card'/><Label htmlFor='debit-card'>Cartão de Débito</Label>
        <br/>
        <input type='checkbox' id='bank-slip' value='ninja-cash'/><Label htmlFor='ninja-cash'>NinjaCash®</Label> */}
        <select id='payment' onChange={this.handleChangePayment}>
          <option value=''>--</option>
          <option value='credit-card'>Cartão de Crédito</option>
          <option value='debit-card'>Cartão de Débito</option>
        </select>
        <br/>
        <br/>
        <Label htmlFor='deadline'>
          Prazo
        </Label>
        <br/>
        <TitleInput id='deadline' type='date' onChange={this.handleChangeDate}/>
        <br/>
        <br/>
        <SearchButton type="submit" >Concluir</SearchButton>
        </SearchForm>
        <NinjaImage>
          <img src={require('../../../Resources/icone-ninja.png')}/>
        </NinjaImage>
      </Container>
    </MainSection>
  );
}
}