import {testIdSelector} from './testing-utils';

describe('User Navigates to Tech-Radar Page', () => {

  it('should display Navigation Item', () => {
    cy.visit('/')

    let techRadarLinkElement =
      cy.get(testIdSelector('TOP_LEVEL_NAVBAR')).contains('Tech Radar');
    techRadarLinkElement.click()

    cy.url().should('include', '/tech-radar')

    cy.contains('Tech Radar II')
    cy.contains('Table')
    cy.contains('List View')

    cy.get(testIdSelector('LIST_ITEM_Angular')).should(
      'include.text',
      'Angular - Hold - kategorie 1 - Angular is cool'
    )
  })
})
