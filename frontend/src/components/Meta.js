import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bun venit la Trilogy Optic',
  description: 'Locul unde poti achizitiona ochelarii perfecți',
  keywords: 'rame, lentile, ochelari de vedere',
}

export default Meta
