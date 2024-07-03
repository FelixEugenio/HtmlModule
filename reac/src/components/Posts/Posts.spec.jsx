import { render ,screen} from '@testing-library/react'
import {Posts} from './index'

const props = {
    posts : [
        {

            id:1,
            body:'body 1',
            tittle:'body 1',
            cover:'img/img1.png'
        },
        {
            id:2,
            body:'body 2',
            tittle:'body 2',
            cover:'img/img2.png'
        },
        
    ]

}

/*
describe('<Posts />',()=>{
    it('sould render posts',()=>{
      render(<Posts {...props} />)
      expect(screen.getAllByRole('heading',{name:/tittle/i}))
      .toHaveLength(2)
    })
})
    */