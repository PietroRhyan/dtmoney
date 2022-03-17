import Modal from 'react-modal'
import { Container } from './styles'
import { TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTrasactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTrasactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

    <button type='button' onClick={onRequestClose} className='react-modal-close'>
      <img src={closeImg} alt="Botão de fechar" />
    </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Título'/>
        <input type="number" placeholder='Valor'/>

        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='Ícone de entrada' />
            <span>Entrada</span>
          </button>

          <button type='button'>
            <img src={outcomeImg} alt='Ícone de saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder='Categoria'/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}