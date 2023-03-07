import React from 'react'
import styles from './styles.module.css'

import { TextInput } from './TextInput'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {TextInput}