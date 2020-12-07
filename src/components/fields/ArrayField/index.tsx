import { useEffect, useState } from "react";
import ArrayObjectField from "../ArrayObjectField";
import OrdinaryField from "../OrdinaryField";
import { Container, FieldsWrapper, RemoveField, InputFieldWrapper, ButtonField } from "./styles";

export default function ArrayField({ field, handleChange }) {
  // id prefixo
  const idPrefix = field.id[0].text

  // counter e campos
  const [fieldsCounter, setFieldsCounter] = useState(0)
  const [fieldsData, setFieldsData] = useState([])

  // manipulação do counter
  const removeField = (id) => {
    const itemToRemove = fieldsData.findIndex(([fieldId]) => fieldId === id)
    setFieldsData(() => fieldsData.filter((item, i) => i !== itemToRemove))
  }

  const addField = () => {
    setFieldsCounter(fieldsCounter + 1)
  }

  const updateFieldValue = (newValue, id) => {
    setFieldsData(() => {
      return fieldsData.map((field) => field[0] === id ? [field[0], newValue] : field)
    })
  }

  const getFinalArray = () => {
    return `[ ${fieldsData.reduce((all, [, value], index, array) => {
      if(index === (array.length - 1)) {
        return all + `${value}`
      }
      return all + `${value}, `
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

            { field.type === 'object' ? 
              <ArrayObjectField
                field={field}
                id={fieldId}
                handleChange={updateFieldValue}
              ></ArrayObjectField> : 
              <OrdinaryField
                value={value}
                name={String(fieldId).replace(',', '')}
                handleChange={(e) => updateFieldValue(`'${e.currentTarget.value}'`, e.target.name)}
              ></OrdinaryField> }

          </InputFieldWrapper>
        )) }
      </FieldsWrapper>
      <ButtonField onClick={addField}>Adicionar novo item</ButtonField>
    </Container>
  )
}
