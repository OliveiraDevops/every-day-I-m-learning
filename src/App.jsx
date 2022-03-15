import { Component } from 'react'
import './App.css';
import CustomButton from './components/button'
import Modal from './components/modal'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isModalOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(){
    this.setState({
      isModalOpen: true
    })
  }

  closeModal(){
    this.setState({
      isModalOpen: false
    })
  }

 render(){
  return (
    <div className="App">
      { this.state.isModalOpen &&
      <Modal>
        <h1>Modal funcionando</h1>
        <p>Vamos aprendendo!</p>
        <CustomButton handleClick={ this.closeModal }>
          Fechar
        </CustomButton>
      </Modal>
      }
      <h1>Abrir Modal</h1>
      <CustomButton handleClick={ this.openModal }>
        Abrir
      </CustomButton>
    </div>
  );
 }
 
}

export default App;
