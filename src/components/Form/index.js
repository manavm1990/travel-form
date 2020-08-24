import React, { useState, setState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [destination, setDestination] = useState("India")
  const [isVegan, setIsVegan] = useState(false)
  const [isLactose, setIsLactose] = useState(false)
  const [location, setLocation] = useState("")

  const destinations = {
    name: "destination",
    options: ["India", "America", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
    {
      checked: isVegan,
      name: "isVegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      checked: isLactose,
      name: "isLactoseFree",
      type: "checkbox",
      value: "isLactoseFree",
    },
  ]

  const genderInputs = [
    {
      name: "gender",
      type: "radio",
      value: "M",
    },
    {
      name: "gender",
      type: "radio",
      value: "F",
    },
  ]

  const textInputs = [
    {
      name: "fName",
      placeholder: "First Name",
    },
    {
      name: "lName",
      placeholder: "Last Name",
    },
    {
      name: "age",
      placeholder: "Age",
    },
  ]

  const handleChange = ({ target: { name, value, checked } }) => {
    switch (name) {
      case "fName":
        setFirstName(value)
        break
      case "lName":
        setLastName(value)
        break
      case "age":
        setAge(value)
        break
      case "gender":
        setGender(value)
        break
      case "destination":
        setDestination(value)
        break
      case "isVegan":
        setIsVegan(checked)
        break
      case "isLactose":
        setIsLactose(checked)
        break
      case "Location":
        setIsLactose(checked)
        break
    }
  }

  return (
    <form>
      {textInputs.map(({ name, placeholder }, i) => (
        <Input
          name={name}
          placeholder={placeholder}
          inputHandler={handleChange}
          key={i}
        />
      ))}

      {genderInputs.map(({ name, value }, i) => (
        <Radio
          checked={gender === value}
          name={name}
          value={value}
          handler={handleChange}
          key={i}
        />
      ))}

      <Select selections={destinations} selectionsHandler={handleChange} />

      {dietaryRestrictions.map(({ checked, name, value = name }, i) => (
        <Checkbox
          name={name}
          value={value}
          handler={handleChange}
          checked={checked}
          key={i}
        />
      ))}

      <button>Submit</button>
    </form>
  )
}
