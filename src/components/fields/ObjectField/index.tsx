import { FormEvent, useEffect, useState } from "react";
import { Container, VariableHeader, VariableTitle, Field } from "./styles";

export default function ObjectField({ handleChange, field }) {
  const getKeys = (field) => {
    const initialObjectFieldsString = field.object_fields[0].text
    const trimObjectFieldsString = initialObjectFieldsString.replace(/ /g, '')
    const objectKeys = trimObjectFieldsString.split(',')
    
    return objectKeys
  }
  
  const objectKeys = getKeys(field)

  // cria uma array com os estados dos campos dinâmicos
  const keysState = objectKeys && objectKeys.map((objectKey: string) => {
    const [key, setKey] = useState('')
    const id = objectKey
    const keyState = {
      id,
      key,
      setKey
    }

    return keyState
  })

  // armazena apenas os estados dos campos dinâmicos
  const objectKeysState = keysState.map((keyState) => keyState.key)

  // retorna o estado com base no id do campo
  const findStatePropsById = (id: string) => {
    const stateProps = keysState.find(key => key.id === id)
    return stateProps
  }

  // atualiza o codigo
  const handleDynamicKeyChange = (e: FormEvent<HTMLInputElement>, id: string) => {
    const { setKey } = findStatePropsById(id)
    const keyValue = e.currentTarget.value

    setKey(keyValue)
  }

  const objectTemplate = () => {
    return `{ ${objectKeys.reduce((all, curr, index, array) => {
      if(index === (array.length - 1)) {
        return all + `${curr}: %${curr}`
      }
      return all + `${curr}: %${curr}, `
    }, '')} }`
  }

  // cria o código
  const updateObjectCode = (objectKeys): string => {
    const dirtyObjectCode = objectTemplate()
    
    const updatedObjectCode = objectKeys.reduce((object, { id, key }) => {
      return object.replace(`%${id.toLowerCase()}`, key)
    }, dirtyObjectCode)

    return updatedObjectCode
  }
  
  const objectHandleChange = (e: FormEvent<HTMLInputElement>, id: string) => {
    handleDynamicKeyChange(e, id)
  }

  useEffect(() => {
    const updatedObjectCode:string  = updateObjectCode(keysState)
    handleChange(updatedObjectCode, field.id[0].text)
  }, [...objectKeysState])

  return (
    <Container>
      { objectKeys && objectKeys.map((key: string) => {
        return (
          <div key={key}>
            <VariableHeader key={key}>
              <VariableTitle>{key}</VariableTitle>
            </VariableHeader>

            <Field onChange={(e) => objectHandleChange(e, key)} />
          </div>
        )
      })}
    </Container>
  )
}
