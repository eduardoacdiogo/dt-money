import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form action="">
          <input type="text" placeholder='Description' required />
          <input type="text" placeholder='Price' required />
          <input type="text" placeholder='Category' required />

          <TransactionType>
            <TransactionTypeButton variant='income'>
              <ArrowCircleUp size={24} />
              <span>Income</span>
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome'>
              <ArrowCircleDown size={24} />
              <span>Outcome</span>
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>
            Submit
          </button>
        </form>

        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}