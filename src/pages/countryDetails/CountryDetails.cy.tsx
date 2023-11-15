import CountryDetails from './CountryDetails'

describe('<CountryDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CountryDetails />)
  })
})