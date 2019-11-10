import React, { useState, useEffect } from 'react'

const Footer = () => {
const [year, setYear] = useState<Number | null>(null)

  useEffect(() => {
    const getFullYear = () => {
      setYear(new Date().getFullYear())
    }    

    getFullYear()
  }, [])

return (
  <footer>
    <p>&copy; {year} Ryan Ponce</p>
  </footer>
)
}

export default Footer;