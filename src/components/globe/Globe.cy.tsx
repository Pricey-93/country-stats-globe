import Globe from './Globe'

describe('<Globe />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Globe />)
  })
})