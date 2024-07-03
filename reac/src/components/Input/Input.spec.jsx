import { render ,screen} from '@testing-library/react'
import {TextInput} from './index'
import userEvent from '@testing-library/user-event';

describe('<Input />',()=>{
    it('sould have a value of searchValue',()=>{
        const fn = jest.fn();
      render(<TextInput handleChange={fn} searchValue={'testando'} />)
      expect(screen.getAllByPlaceholderText(/type your search/i))
      .toBeInTheDocument()
    })

    it('sould call handleChange function on each key pressed',()=>{
        const fn = jest.fn();
      render(<TextInput handleChange={fn}  />)

      const input = screen.getByPlaceholderText(/type your search/i)

      const value = 'o valor'

      userEvent.type(input,value);

      expect(input.value).toBe(value);
      expect(fn).toHaveBeenCalledTimes(value.length + 1)
      
    })
})