export function InputComp({namePlaceholder, typeInput, onChange , nameValue}) {
  return (
    <input
      className='w-full border outline-none rounded p-2 focus:border-yellow-200 focus:ring-1 focus:ring-yellow-200'
      placeholder={namePlaceholder}
      type={typeInput}
      value={nameValue}
      onChange={onChange}
      required
        >
    </input>
  )
}
