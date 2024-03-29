import Modal from 'react-modal'

import { Container } from './styles'
import { TransactionTypeContainer, RadioBox } from './styles'
import { FormEvent, useState } from 'react'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTrasactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTrasactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      type,
      category
    }) 

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox 
            type='button' 
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Ícone de entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type='button' 
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Ícone de saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}