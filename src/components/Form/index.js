import React, { useState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [destination, setDestination] = useState("India")
  const [isVegan, setIsVegan] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)

  const destinations = {
    id: "destination",
    options: ["India", "America", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
    {
      checked: isVegan,
      id: "isVegan",
      label: "Vegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      checked: isLactoseFree,
      id: "isLactoseFree",
      label: "Lactose Free",
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
      id: "fName",
      placeholder: "First Name",
    },
    {
      id: "lName",
      placeholder: "Last Name",
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email"
    },
  ]

  const handleChange = ({ target: { id, value, checked } }) => {
    switch (id) {
      case "fName":
        setFirstName(value)
        break
      case "lName":
        setLastName(value)
        break
      case "email":
        setEmail(value)
        break
      case "destination":
        setDestination(value)
        break
      case "isVegan":
        setIsVegan(checked)
        break
      case "isLactoseFree":
        setIsLactoseFree(checked)
        break
      // If nothing else, must be 🔘s
      default:
        setGender(value)
    }
  }

  return (
    <form className="center">
      <div className="grid mt-3">
        {textInputs.map(({ id, placeholder }, i) => (
          <Input
            handler={handleChange}
            id={id}
            key={i}
            placeholder={placeholder}
          />
        ))}
        <Select selections={destinations} handler={handleChange} />
      </div>

      <div className="flex flex--justify-space-around">
        {genderInputs.map(({ name, value }, i) => (
          <Radio
            checked={gender === value}
            name={name}
            value={value}
            handler={handleChange}
            key={i}
          />
        ))}

        {dietaryRestrictions.map(({ checked, id, label, value }, i) => (
          <Checkbox
            id={id}
            label={label}
            value={value}
            handler={handleChange}
            checked={checked}
            key={i}
          />
        ))}
      </div>

      <button className="button mt-3">Submit</button>
    </form>
  )
}
