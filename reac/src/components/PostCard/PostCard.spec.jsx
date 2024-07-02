import { render,screen } from "@testing-library/react"
import { PostCard } from "./index"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"

//criar um mock

const mock = {
    tittle:'tittle 1',
    body:'body 1',
    id:1,
    cover:'img/img.png'
}

describe('<PostCard />',()=>{
    it('should render PostCard correctly',()=>{
       render(<PostCard {...mock} />)

       expect(screen.getByRole('img',{name:/tittle 1/i})).toHaveAttribute('src',mock.cover)
       expect(screen.getByRole('heading',{name:/tittle 1/i})).toBeInTheDocument()
       expect(screen.getByText('body 1')).toBeInTheDocument()
    })
})