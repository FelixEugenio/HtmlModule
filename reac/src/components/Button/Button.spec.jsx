import { fireEvent, render,screen } from '@testing-library/react'
import {Button} from './index'

describe('<Button />',() => {
    it('should render the button with the text load more',() => {
      render(<Button text="load more" />);
      const button = screen.getByRole('button',{name:/load more/i})
      expect(button).toBeInTheDocument();
    })

    it('should call function on button click',() => {
        // criando um mock simples
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn}/>);
        const button = screen.getByRole('button',{name:/load more/i})
        fireEvent.click(button)
        expect(fn).toHaveBeenCalled()
      })

      it('should be disabled when disabled is true',() => {
        render(<Button text="load more" disabled={true}/>);
        const button = screen.getByRole('button',{name:/load more/i})
        expect(button).toBeDisabled()
      })

      it('should be enabled when disabled is false',() => {
        render(<Button text="load more" disabled={false}/>);
        const button = screen.getByRole('button',{name:/load more/i})
        expect(button).toBeEnabled()
      })
})