export function ButtonSecondary({nameButton}) {
  return (
    <div className='w-full'>
        <button
        className='bg-yellow-200 border rounded p-2 w-full hover:bg-yellow-300'>{nameButton}</button>
    </div>
  )
}
