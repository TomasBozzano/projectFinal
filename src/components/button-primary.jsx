export function ButtonPrimary({typeButton,nameButton, isLoading}) {
  return (
    <div className='w-full'>
        <button
        type={typeButton}
        onChange={isLoading}
        className='bg-yellow-300 border rounded p-2 w-full hover:bg-yellow-200'>{nameButton}</button>
    </div>
  )
}
