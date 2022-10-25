import './index.css';
import moonIcon from './images/luna.png';
import sunIcon from './images/sun.png';
import linkedinIcon from './images/linkedin.png';
import githubIcon from './images/github.png';
import imageP from './images/guido.jpeg';
import hmlIcon from './images/html5.png';
import cssIcon from './images/css-3.png';
import jsIcon from './images/js.png';
import reactIcon from './images/physics.png';
import responsiveIcon from './images/responsive.png';
import bootstrapIcon from './images/bootstrap.png';
import tailwindIcon from './images/tailwind-css-icon.png';
import gitIcon from './images/git.png';
import codeIcon from './images/visual-studio.png';
import pokeApp from './images/pokeApp.png';
import calculatorApp from './images/calculatorApp.png';
import shorterApp from './images/shorterApp.png';
import rickAndMortyApp from './images/rickAndMorty.png';
import tipCalculatorApp from './images/tipCalculatorApp.png';
import adviceGeneratorApp from './images/adviceGeneratorApp.png';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={darkMode ? 'dark' : ""}>
      <div className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className='min-h-screen'>
          <nav className='py-10 mb-8 flex justify-between md:mb-0 md:py-4'>
            <h1 className='text-xl font-mono dark:text-white'>GuidoDev</h1>
            <ul className='flex items-center'>
              {
                darkMode
                  ? <li><img src={sunIcon} alt="sun.png" className="w-8 cursor-pointer" onClick={handleDarkMode} /></li>
                  : <li><img src={moonIcon} alt="luna.png" className="w-8 cursor-pointer" onClick={handleDarkMode} /></li>
              }

              <li><a href="Entry Level Front End Developer Guido Garcia.pdf" download="Entry Level Front End Developer Guido Garcia.pdf" className='bg-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10 md:py-4'>
            <h1 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Guido Garcia</h1>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Front-End Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Passionate about technology. Come to see some of my projects...
            </p>
          </div>

          <div className='flex justify-center gap-16 py-3'>
            <a href="https://www.linkedin.com/in/guido-nicolas-garcia/"><img src={linkedinIcon} className="w-8 hover:scale-125 md:w-12" alt="linkedin.png" /></a>
            <a href="https://github.com/guido2288/guido2288"><img src={githubIcon} className="w-8 hover:scale-125 md:w-12" alt="github.png" /></a>
          </div>

          <div className='flex justify-center '>
            <img src={imageP} alt="guido.jpng" className='rounded-full md:h-80 md:w-80 drop-shadow-2xl' />
          </div>

        </section>

        {/* About Section */}
        <section className='text-center'>
          <h3 className='text-2xl py-3 md:text-3xl dark:text-white'> || About me ||</h3>

          <p className='text-md py-2 leading-8 text-gray-600 md:text-xl '>I'am a trainee front-end developer from Argentina, looking for take my first steps in the word of IT. My coding journey start in 2020 with a Full Stack bootcamp in <a href='https://www.digitalhouse.com/ar' className='text-teal-600'>Digital House</a> afer that I was fascinated with the programming, and sice then i have been coding almost everyday. Now i'am learning React and want to become a full React.js developer.</p>

          <p className='text-md py-2 leading-8 text-gray-600 md:text-xl '>Apart from coding, i work in payroll, i like video games 🎮, cats 😺 and love travelling 🏖 whenever is possible.</p>

        </section>

        {/* Skill Section */}


        <section className='text-center'>

          <h3 className='text-2xl py-3 md:text-3xl dark:text-white'>My Skills</h3>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>

            <div>
              <img src={hmlIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Html</h4>

            </div>

            <div>
              <img src={cssIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Css</h4>
            </div>

            <div>
              <img src={jsIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Js</h4>
            </div>

            <div>
              <img src={reactIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>React</h4>
            </div>

            <div>
              <img src={responsiveIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Mobile First</h4>
            </div>

            <div>
              <img src={bootstrapIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Bootstrap</h4>
            </div>

            <div>
              <img src={tailwindIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Tailwind</h4>
            </div>

            <div>
              <img src={gitIcon} width={50} height={60} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Git</h4>
            </div>

            <div>
              <img src={codeIcon} width={80} height={80} alt='html5.png' className='mx-auto' />
              <h4 className='text-lg font-medium py-4 dark:text-white'>Visual Studio Code</h4>
            </div>


          </div>

        </section>


        {/* Portfolio */}

        <section className='text-center py-6'>

          <h3 className='text-2xl py-3 md:text-3xl dark:text-white'>My Portfolio</h3>

          <div className='md:grid grid-cols-2 gap-4'>

            {/* PokeApp */}

            <div >
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>PokeApp</h4>
              <div className='relative'>
                <img src={pokeApp} alt="pokeApp.png" className='drop-shadow-2xl h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>An application that uses the pokeApi. This app was built with React + tailwind, i build this app to practice React Router.</p>

              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/pokeApp"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://pokeapp-eosin-gamma.vercel.app/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

            {/* Calculator App */}

            <div >
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>CalculatorApp</h4>
              <div className='relative'>
                <img src={calculatorApp} alt="calculatorApp.png" className='drop-shadow-2xl  h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>The classic calculator app, using React and with change of themes</p>
              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/CalculatorApp"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://guido2288.github.io/CalculatorApp/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

            {/* ShorterApp */}

            <div>
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>ShorterApp</h4>
              <div className='relative'>
                <img src={shorterApp} alt="calculatorApp.png" className='drop-shadow-2xl h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>Shorten your URLs with this app, integrated with the shrtcode API.</p>
              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/url-shortering-api"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://guido2288.github.io/url-shortering-api/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

            {/* RickAndMorty App */}

            <div>
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>RickAndMortyApp</h4>
              <div className='relative'>
                <img src={rickAndMortyApp} alt="calculatorApp.png" className='drop-shadow-2xl h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>This was my first project that integrates an API with React. You can search or filter any character in the series.</p>
              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/rickAndMortyApp"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://guido2288.github.io/rickAndMortyApp/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

            {/* Tip Calculator */}

            <div>
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>TipCalculatorApp</h4>
              <div className='relative'>
                <img src={tipCalculatorApp} alt="calculatorApp.png" className='drop-shadow-2xl h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>This app was made with Js for the functionality.</p>
              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/TipCalculatorApp.github.io"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://guido2288.github.io/TipCalculatorApp.github.io/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

            {/* Advice Generator App */}

            <div>
              <h4 className='text-lg font-medium py-4 md:text-xl dark:text-white'>AdvicegeneratorApp</h4>
              <div className='relative'>
                <img src={adviceGeneratorApp} alt="calculatorApp.png" className='drop-shadow-2xl h-60' />
                <p className='absolute top-0 left-0 flex flex-col align-middle justify-center opacity-0 text-white w-full h-full bg-trans cursor-pointer hover:opacity-100'>This app use the Advice Slip API to generate random quotes of advice</p>
              </div>
              <div className='flex gap-6 mt-2'>
                <a href="https://github.com/guido2288/Advice-generator-app.github.io"><button className='p-2 border rounded-md border-gray-200 text-gray-600 hover:border-black hover:text-black dark:hover:text-white dark:border-gray-600'>View Git Repository</button></a>
                <a href="https://guido2288.github.io/Advice-generator-app.github.io/"><button className='py-2 px-4 border rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:border-white dark:hover:text-white'>Visit</button></a>

              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}

export default App
