import './App.css'

function App() {

  const user = {
    name: 'Trafalgar D. Water Law',
    crew: 'Heart Pirates',
    bounty: '3 B/-',
    degree: 'MBBS',
    image: 'https://i.pinimg.com/564x/d0/ad/6e/d0ad6e812c641320dcfdf87e46e16d1d.jpg'
  }
  return (
    <>
      <div className='h-screen w-screen bg-slate-300 sm:px-24 sm:py-20 custom-font'>
        <div className='flex flex-col-reverse sm:flex-row justify-between h-full w-full bg-orange-800 shadow-orange-950 drop-shadow-2xl'>
          <div className='basis-1/2 flex flex-col bg-blue-100 justify-center items-center'>
            <img src='https://i.pinimg.com/564x/99/18/de/9918de5a179cce35f5a48a4586ef26b5.jpg' className='w-24 mt-2 sm:w-40 rounded-full sm:-mt-24' />
            <p className='my-8 text-2xl sm:text-5xl font-black text-orange-800'>{" " + user.name}</p>
            <div className='flex justify-center items-baseline italic'>
              <p className='my-5 mx-5 font-black text-sm sm:text-xl '>Crew:<span className='font-medium text-blue-950 underline'>{" " + user.crew}</span></p>
              <p className='my-5 mx-5 font-black text-sm sm:text-xl'>Bounty:<span className='font-medium text-blue-950 underline text-xl sm:text-5xl'>{" " + user.bounty}</span></p>
            </div>
            <p className='text-5xl font-black my-5 tracking-widest underline'>WANTED</p>
          </div>
          <div className='basis-1/2 flex flex-col justify-center items-center'>
            <img src={user.image} className='rounded-full w-60 sm:w-[70%]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
