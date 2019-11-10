import React, { FC } from 'react'

const PageTitle: FC<{}> = ({children}) => (
  <h2 className="text-4xl font-bold">{children}</h2>
)

export default PageTitle