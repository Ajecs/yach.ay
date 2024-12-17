export const PrimaryButton = ({ children }) => {
  return (
    <button className='bg-primary-dark hover:bg-primary-darker text-white font-bold py-2 px-4 rounded'>
      {children}
    </button>
  )
}
