import { captureRejectionSymbol } from "events";
import { FormEvent, useEffect, useRef, useState } from "react";
import ObjectField from "../ObjectField";
import OrdinaryField from "../OrdinaryField";
import { Container, FieldsWrapper, Counter, RemoveField, InputFieldWrapper, ButtonField } from "./styles";

export default function ArrayField({ field, handleChange }) {
  // id prefixo
  const idPrefix = field.id[0].text

  // counter e campos
  const [fieldsCounter, setFieldsCounter] = useState(0)
  const [fieldsData, setFieldsData] = useState([])

  // manipulação do counter
  const removeField = (id) => {
    const itemToRemove = fieldsData.findIndex(fieldData => fieldData === id)
    setFieldsData(() => fieldsData.filter((item, i) => i !== itemToRemove))
  }

  const addField = () => {
    setFieldsCounter(fieldsCounter + 1)
  }

  const updateFieldValue = (e) => {
    const newValue = e.currentTarget.value
    const id = e.target.name
    setFieldsData(() => {
      return fieldsData.map((field) => field[0] === id ? [field[0], newValue] : field)
    })
  }

  const getFinalArray = () => {
    return `[ ${fieldsData.reduce((all, [, value], index, array) => {
      if(index === (array.length - 1)) {
        return all + `'${value}'`
      }
      return all + `'${value}', `
    }, '')} ]`
  }

  const handleChangeArrayFields = (value) => {
    handleChange(value, field.id[0].text)
  }
    
  useEffect(() => {
    setFieldsData([...fieldsData, [`${idPrefix}#${fieldsCounter}`, '']])
  }, [fieldsCounter])

  useEffect(() => {
    const finalArray = getFinalArray()
    handleChangeArrayFields(finalArray)
  }, [fieldsData])
 
  return (
    <Container>
      <FieldsWrapper>
        { fieldsData.map(([fieldId, value], i) => (
          <InputFieldWrapper key={`${i}`}>

            <RemoveField isPossibleRemove={!!(fieldsCounter > 1)} onClick={() => removeField(`${fieldId}`)}>x</RemoveField>

            { field.type[0].text === 'object' ? <ObjectField field={field} handleChange={() => {}}></ObjectField> : <OrdinaryField name={String(fieldId).replace(',', '')} handleChange={(e) => updateFieldValue(e)}></OrdinaryField> }

          </InputFieldWrapper>
        )) }
      </FieldsWrapper>
      <ButtonField onClick={addField}>Adicionar novo item</ButtonField>
    </Container>
  )
}
