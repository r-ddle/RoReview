import Ripple from "./ui/ripple";

export default function MainHeader() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <header className="text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 mb-4">
            R<span className="relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className='inline h-[0.7em] w-[0.7em]'>
                <g fill="#F76371" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M20.4,5.6l-12.8,-3.2c-0.134,-0.034 -0.269,-0.05 -0.401,-0.05c-0.739,0 -1.411,0.5 -1.599,1.25l-3.2,12.8c-0.221,0.884 0.316,1.779 1.2,2l12.8,3.2c0.134,0.034 0.269,0.05 0.401,0.05c0.739,0 1.411,-0.5 1.599,-1.25l3.2,-12.8c0.221,-0.884 -0.316,-1.779 -1.2,-2zM9.155,12.882l0.749,-3c0.114,-0.454 0.521,-0.758 0.969,-0.758c0.08,0 0.162,0.01 0.243,0.03l3,0.75c0.536,0.134 0.861,0.677 0.728,1.213l-0.749,2.999c-0.114,0.454 -0.521,0.758 -0.969,0.758c-0.08,0 -0.162,-0.01 -0.243,-0.03l-3,-0.75c-0.536,-0.133 -0.862,-0.676 -0.728,-1.212z"></path></g></g>
              </svg>
            </span>Review
          </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 max-w-3xl mx-auto leading-tight">
            Uncover Hidden Gems and Experience <br /> The Best of the Best
            <br />
            <span className="text-rose-400">Beyond the Pay-to-Win/Cashgrab Slop</span>
            </p>
        </header>
        <a href="#latest-reviews" className="mt-8">
          <button className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition duration-300 ease-in-out">
            Start Reviewing
          </button>
        </a>
        <Ripple mainCircleSize={500}/>
      </div>
    )
  }
