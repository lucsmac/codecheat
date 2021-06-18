import { Field } from "./styles";

export default function OrdinaryField({ handleChange, value = '', name = '', ...rest }) {
  return (
    <Field value={value} name={name} onChange={handleChange} {...rest} />
  )
}