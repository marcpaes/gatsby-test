import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ siteTitle }) => (
  <ul Class="menu"
  >
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/blog">Blog</Link></li>
  </ul>
)

export default Menu
