import { useState } from 'react';
import poweredImage from './assets/powered.png'
import { GridItem } from './components/GridItem/index';
import leftArrow from './assets/leftarrow.png'

import { levels, calculateImc, Level } from './helpers/imc'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos');
    }

  } 

  const handleBackButton = () => {
    setToShow (null);
    setHeightField(0);
    setWeightField(0);

  }
  
  return(
    <div className="bg-white font-arial sm:mb-14">
      <header>
        <div className="max-w-4xl my-12 mx-auto md:px-5 sm:px-5">
          <img src={poweredImage} alt="logo do imc" className='w-40'/>
        </div>
      </header>
      <div className='flex max-w-4xl m-auto md:px-5 md:flex-col lg:flex-row sm:flex-col sm:px-5'>
        <div className='flex-1 lg:mr-7'>
          <h1 className='font-bold text-4xl mb-5 text-gray-600'>Calcule o seu IMC</h1>
          <p className='text-base mb-14 text-gray-500'>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number" 
          className='border border-gray-300 border-0 mb-6 border-b pr-52 outline-none disabled:opacity-50 md:pr-96 sm:pr-20' 
          placeholder='Digite a sua Altura. Ex: 1.5 (Em métros)' 
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <input 
          type="number" 
          className='border border-gray-300 w-max border-0 mb-14 border-b pr-52 outline-none disabled:opacity-50 md:pr-94 sm:pr-20 md:pr-96' 
          placeholder='Digite o seu peso. Ex: 75.3 (Em Kg)' 
          value={weightField > 0 ? weightField : ''} 
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          
          <button 
          className='text-white text-lg border-none rounded-md w-full py-4 cursor-pointer hover:bg-opacity-75 bg-blue-600 transition duration-[350ms] disabled:opacity-50 sm:mb-10' 
          onClick={handleCalculateButton}
          disabled={toShow ? true : false}
          >Calcular
          </button>
        </div>

        <div className='flex-1 md:mt-10 lg:mt-0'>
          {!toShow &&
            <div className='flex-1 grid grid-cols-2 gap-5'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className=''>
              <div 
                className='absolute bg-blue-500 w-16 h-16 lg:rounded-full flex justify-center items-center cursor-pointer m-2 lg:mt-24 lg:-mx-7 hover:bg-blue-800 transition duration-300 md:mt-0 md:mx-0 md:rounded-2xl sm:mt-0 sm:mx-0 sm:rounded-2xl'
                onClick={handleBackButton}
                >
                <img src={leftArrow} alt="icon de seta para esquerda" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>

  );
}

export default App;