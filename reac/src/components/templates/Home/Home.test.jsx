import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from './Home';
import { server } from '../mocks/mock';


describe('<Home />',()=>{
  beforeAll(()=>{
    server.listen()
  })

  afterEach(()=>{
    server.resetHandlers()
  })

  afterAll(()=>{
    server.close();
  })

  it('should render saerch post and load more', async () => {
    render(<Home />)

    const noMorePosts = screen.getByText('Nao existem Posts = ')

    await waitForElementToBeRemoved(noMorePosts);

    screen.debug()
  });

})

