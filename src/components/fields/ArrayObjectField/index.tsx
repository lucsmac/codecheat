import ObjectField from "../ObjectField";

export default function ArrayObjectField({ field, id, handleChange }) {
  const updateArrayObjectItem = (newValue) => {
    handleChange(newValue, id)
  }
 
  return (
    <>
      <ObjectField
        field={field}
        handleChange={updateArrayObjectItem}
      ></ObjectField>
    </>
  )
}
