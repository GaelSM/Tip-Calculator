import { useEffect, useState } from 'react'
import Left from './Left'
import Rigth from './Rigth'
import logo from '../images/logo.svg'
import './App.css'

export default function App() {

  const [bill, setBill] = useState("")
  const [tip, setTip] = useState("")
  const [people, setPeople] = useState("")
  const [custom, setCustom] = useState("")
  const [calculate, setCalculate] = useState(false)

  useEffect(() => {
    if(bill > 0 && tip > 0 && people > 0) setCalculate(true)
    else setCalculate(false)
  }, [bill, people, tip])

  const handleChange = (e, type) => {
    const value = e.target.value
    if(type === "bill"){
      if(value == "" || value <= 0) return setBill("")
      setBill(Number(value))
    }
    else if(type === "people"){
      if(value == "" || value <= 0) return setPeople("")
      setPeople(Number(value))
    }
    else{
      if(value == "" || value <= 0) return setTip("")
      setCustom("")
      setTip(Number(value))
    }
  }

  const handleCustom = (e) => {
    let element = document.querySelector("input[name='tip']:checked")
    const value = e.target.value
    if(element != null) element.checked = false
    if(value == "" || value <= 0){
      setTip("")
      setCustom("")
      return
    }
    setCustom(value)
    setTip(value)
  }

  const handleReset = () => {
    let element = document.querySelector("input[name='tip']:checked")
    if(!calculate) return
    setCustom("")
    setBill("")
    setTip("")
    setPeople("")
    setCalculate(false)
    if(element != null) element.checked = false
  }

  let amount = bill/people * tip/100
  let total = amount + bill/people

  return (
    <>
      <img src={logo} alt="Splitter Logo" />
      <main>
        <Left 
          bill={bill}
          custom={custom}
          people={people}
          handleChange={handleChange}
          handleCustom={handleCustom}
        />
        <Rigth
          calculate={calculate}
          amount={amount}
          total={total}
          handleReset={handleReset}
        />
      </main>
    </>
  )
}