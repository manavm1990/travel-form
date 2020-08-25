import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

import api from "api"

export const Form = () => {
  const history = useHistory()

  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
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
      error: firstNameError,
    },
    {
      id: "lName",
      placeholder: "Last Name",
      error: lastNameError,
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email",
      error: emailError,
    },
  ]

  const validator = {
    validateEmail(val) {
      const lettersRe = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi)
      return (val && lettersRe.test(val)) || "Email is not valid!"
    },
    validateNames(val) {
      // Letters Only RegExp - 'start' - letters only (unlimited) - end of string
      const lettersRe = new RegExp(/^[a-zA-Z]+$/g)
      // Non-empty
      return (
        (val && lettersRe.test(val)) ||
        "Name must be non-empty and letters only "
      )
    },
  }

  const handleChange = ({ target: { id, value, checked } }) => {
    switch (id) {
      case "fName":
        setFirstNameError("")
        if (typeof validator.validateNames(value) === "string") {
          setFirstNameError(validator.validateNames(value))
        } else {
          setFirstName(value)
        }
        break
      case "lName":
        setLastNameError("")
        if (typeof validator.validateNames(value) === "string") {
          setLastNameError(validator.validateNames(value))
        } else {
          setLastName(value)
        }
        break
      case "email":
        setEmailError("")
        if (typeof validator.validateEmail(value) === "string") {
          setEmailError(validator.validateEmail(value))
        } else {
          setEmail(value)
        }
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

  const handleSubmit = (event) => {
    event.preventDefault()
    // Don't do anything if there are any errors!
    if (!firstNameError && !lastNameError && !emailError) {
      api
        .addTravel({
          firstName,
          lastName,
          email,
          gender,
          destination,
          dietRestrictions: { isVegan, isLactoseFree },
        })
        .then(() => {
          history.push("/success")
        })
        // 'e' has already been 'Error-ified' in the previous 'throw'
        .catch((e) => {
          history.push("/error", { error: e })
        })
    }
  }

  return (
    <form className="center" onSubmit={handleSubmit}>
      <div className="grid mt-3">
        {textInputs.map(({ id, placeholder, error }, i) => (
          <Input
            handler={handleChange}
            id={id}
            key={i}
            placeholder={placeholder}
            error={error}
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
