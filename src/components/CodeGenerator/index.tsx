import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/vsDark";
import PrismicDOM from 'prismic-dom'
import { useEffect, useState } from "react";
import { Document } from 'prismic-javascript/types/documents'
import OrdinaryField from "../fields/OrdinaryField";
import ObjectField from "../fields/ObjectField";
import ArrayField from "../fields/ArrayField";

import { Container, Info, Variables, Variable, VariableHeader, VariableTitle, VariableInfo, NoVariables, CodeWrapper, Code, Pre, Line, LineNumber, LineContent, CopyButton, InfoFields, InfoField } from "./styles";

interface CodeGeneratorProps {
  code: Document;
}

interface IFieldsStateProps {
  id: string;
  field: any;
  setField: any;
}

export default function CodeGenerator({ code }: CodeGeneratorProps) {
  const [username, setUsername] = useState('')
  const [motivation, setMotivation] = useState('')

  // gerando a descrição do script
  const getScriptDate = () => {
    const formatDateItemToTwoDigits = (item: number) => String(item).length < 2 ? `0${item}` : item

    const date = new Date()
    const day = formatDateItemToTwoDigits(date.getDate())
    const month = formatDateItemToTwoDigits(date.getMonth() + 1)
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const scriptCreationDate = getScriptDate()

  const scriptDescription = `<!-- ${scriptCreationDate} | ${code.data.title[0].text}
  Inserido por: ${username}
  Pelo motivo: ${motivation}
-->
  `

  // fim da descrição do script

  const defaultCode = scriptDescription + code.data.code[0].text
  const [finalCode, setFinalCode] = useState(defaultCode)

  const [copied, setCopied] = useState(false)


  // cria uma array com os estados dos campos dinâmicos
  const dynamicFieldsState: IFieldsStateProps[] = code.data.dynamic_fields.map((dynamicField) => {
    const [field, setField] = useState('')
    const id = dynamicField.id.length ? dynamicField.id[0].text : ''
    const fieldState = {
      id,
      field,
      setField
    }

    return fieldState
  })

  // armazena apenas os estados dos campos dinâmicos
  const fieldsState = dynamicFieldsState.map((dynamicField: IFieldsStateProps) => dynamicField.field)

  // retorna o estado com base no id do campo
  const findStatePropsById = (id: string): IFieldsStateProps => {
    const stateProps = dynamicFieldsState.find(field => field.id === id)
    return stateProps
  }

  const getValueById = (id: string): string => {
    const { field } = dynamicFieldsState.find(field => field.id === id)
    return field
  }

  // atualiza o codigo
  const handleDynamicFieldChange = (newValue: string, id: string) => {
    const { setField } = findStatePropsById(id)
    const fieldValue = newValue

    setField(fieldValue)
  }

  // cria o código
  const updateCode = (dynamicFields: IFieldsStateProps[]): string => {
    const dirtyCode = scriptDescription + code.data.code[0].text

    const updatedCode = dynamicFields.reduce((code, { id, field }) => {
      return code.replace(`#codecheat%${id.toLowerCase()}`, field)
    }, dirtyCode)

    return updatedCode
  }

  useEffect(() => {
    const updatedCode:string  = updateCode(dynamicFieldsState)
    setFinalCode(updatedCode)
    setCopied(false)
  }, [...fieldsState, username, motivation])

  // copiar o código para o clipboard
  const handleCopyCode = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
  }

  return (
    <Container>
      {code.data.dynamic_fields[0].id.length ? (
          <>
          <Info>Insira as informações de acordo com o que é pedido, ao final o seu código estará prontinho para você copiar e colar na área de <b>{ code.data.config_area[0].text.toUpperCase() }</b> nas configurações do site no autódromo.</Info>

          <InfoFields>
            <InfoField>
              <label>
                Nome *
                <OrdinaryField placeholder="Digite seu nome aqui..." name="user_name" value={username} handleChange={(e) => setUsername(e.target.value)}/>
              </label>
            </InfoField>
            <InfoField>
              <label>
                Motivação *
                <OrdinaryField placeholder="Descreva brevemente qual a sua necessidade..." name="motivation" value={motivation} handleChange={(e) => setMotivation(e.target.value)}/>
              </label>
            </InfoField>
          </InfoFields>

          <Variables>
            {code.data.dynamic_fields.map((field, i) => (
              <Variable key={`${field.id[0].text}-${i}`}>

                <VariableHeader>
                  <VariableTitle>{PrismicDOM.RichText.asText(field.field_title)}</VariableTitle>
                  <VariableInfo>
                    <span></span>
                    <p>{PrismicDOM.RichText.asText(field.field_help)}</p>
                  </VariableInfo>
                </VariableHeader>

                { field.is_array ? <ArrayField field={field} handleChange={handleDynamicFieldChange} /> :
                  field.type === 'object' ? <ObjectField handleChange={handleDynamicFieldChange} field={field} /> :
                  <OrdinaryField value={getValueById(field.id[0].text)} handleChange={(e) => handleDynamicFieldChange(e.currentTarget.value, field.id[0].text)}/>}

              </Variable>
            ))}
          </Variables>
          </>
      ) : (<><NoVariables>Basta copiar o código abaixo e colar na área de <b>{ code.data.config_area[0].text.toUpperCase() }</b> nas configurações do site no autódromo.</NoVariables></>)}


      <CodeWrapper>
        <h2>Código gerado:</h2>
        <Code>
          <Highlight {...defaultProps} theme={theme} code={finalCode} language="javascript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                <div className="linesContainer">
                  {tokens.map((line, i) => (
                    <Line {...getLineProps({ line, key: i })}>
                      <LineNumber>{ i + 1 }</LineNumber>
                      {line.map((token, key) => (
                        <LineContent {...getTokenProps({ token, key })} />
                      ))}
                    </Line>
                  ))}
                </div>
              </Pre>
            )}
          </Highlight>
          <CopyButton isDisabled={!username || !motivation} isCopied={copied} onClick={() => handleCopyCode(finalCode)}>{ copied ? 'Copiado' : 'Copiar' }{ !username || !motivation ? ' *' : '' }</CopyButton>
        </Code>
      </CodeWrapper>
    </Container>
  )
}
