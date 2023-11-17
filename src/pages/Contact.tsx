
export const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/51e61944-ac84-4cab-8710-205a76b32e07' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 items-center text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-500 text-1xl py-4'>// Submit the form bellow or shoot me an email - elasri9999@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#ccd6f6]' name='message' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
