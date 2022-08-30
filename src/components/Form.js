import Input from "./Input"
import Select from "./Select"
import Button from "./Button"
import TextArea from "./TextArea"

const Form = ({
  formTitle,
  handleSubmit,
  errors,
  inputsProps,
  selectsProps,
  textAreasProps,
}) => {
  // states

  // didMount, didUpdate

  // methodes

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mx-10"
    >
      <br />
      {selectsProps &&
        selectsProps.map((select) => {
          return (
            <Select
              key={select.label}
              handleChange={select.handleChange}
              value={select.value}
              options={select.options}
              // error={errors.filter((error) => {
              //   return error.param === {select.label}
              // })}
            />
          )
        })}
      <br />
      {inputsProps &&
        inputsProps.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            handleChange={input.handleChange}
            value={input.value}
            type={input.type}
            placeholder={input.placeholder}
            // errors={errors.filter((error) => {
            //   return error.param === input.label
            // })}
          />
        ))}

      {textAreasProps &&
        textAreasProps.map((textArea) => {
          return (
            <TextArea
              key={textArea.label}
              rows={textArea.rows}
              handleChange={textArea.handleChange}
              placeholder={textArea.placeholder}
              label={textArea.label}
              value={textArea.value}
            />
          )
        })}

      <Button type="submit" text={`Submit ${formTitle}`} />
    </form>
  )
}

export default Form
