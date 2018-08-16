import React from 'react'

const notFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h2>Oops, route not found.</h2>
}

export default {
  component: notFoundPage
}