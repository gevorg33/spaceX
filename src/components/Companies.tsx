import CompaniesList from './CompaniesList'
import CompaniesDetails from './ComapnyDetails'
import styled from 'styled-components'
import React from 'react'

const Companies: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container className="companies-blocks">
      <CompaniesList />
      <CompaniesDetails />
    </Container>
  )
}

export default Companies

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
