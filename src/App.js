import './App.css'
import styled from 'styled-components'
import Router from './Router'
import Layout from './pages/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`

const LogInBox = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: black; */

  display: flex;
  justify-content: center;
  align-items: center;
`
