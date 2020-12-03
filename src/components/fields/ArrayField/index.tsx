import { useEffect, useRef, useState } from "react";
import ObjectField from "../ObjectField";
import OrdinaryField from "../OrdinaryField";
import { Container, FieldsWrapper, Counter, RemoveField, InputFieldWrapper, ButtonField } from "./styles";

export default function ArrayField({ field, handleChange }) {
  const [fieldsCounter, setFieldsCounter] = useState(1)

  const [arrayFields, setArrayFields] = useState([])

  const removeField = () => {
    if(fieldsCounter > 1) setFieldsCounter(fieldsCounter - 1)
  }

  const addField = () => {
    setFieldsCounter(fieldsCounter + 1)
  }

  const buildField = () => {
    if(field.type[0].text === 'object') {
      return (
        <InputFieldWrapper>
          <RemoveField isPossibleRemove={!!(fieldsCounter > 1)} onClick={removeField}>x</RemoveField>
          <ObjectField field={field} handleChange={() => {}}></ObjectField>
        </InputFieldWrapper>
      )
    } else {
      return (
        <InputFieldWrapper>
          <RemoveField isPossibleRemove={!!(fieldsCounter > 1)} onClick={removeField}>x {!!(fieldsCounter > 1)}</RemoveField>
          <OrdinaryField handleChange={() => {}}></OrdinaryField>
        </InputFieldWrapper>
      )
    }
  }

  const fields = () => {
    let tempFieldsArray = []
    for(let i = 1; i <= fieldsCounter; i++) {
      const newField = buildField()
      tempFieldsArray.push(newField)
    }
    setArrayFields(tempFieldsArray)
  }

  useEffect(() => {
    fields()
  }, [fieldsCounter])

  return (
    <Container>
      <FieldsWrapper>
        { arrayFields.map(field => field) }
      </FieldsWrapper>
      <ButtonField onClick={addField}>Adicionar novo item</ButtonField>
    </Container>
  )
}