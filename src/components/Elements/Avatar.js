export const Avatar = () => {
  return (
    <div className='flex justify-center w-10 h-10 scale-75 md:scale-100 overflow-hidden bg-gray-100 text-secondary hover:text-primary rounded-full dark:bg-gray-600 '>
      <svg
        className='w-12 h-12 bg-gray-200 -left-1'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          fill='currentColor'
          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
          clipRule='evenodd'
        ></path>
      </svg>
    </div>
  )
}
