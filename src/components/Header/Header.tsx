import { useTheme } from 'next-themes'
import React from 'react'
import { SunDim, Moon, GithubLogo } from 'phosphor-react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <nav className='flex w-full h-16 border-b-[0.05px] bg-transparent border-slate-300 dark:bg-darknav dark:border-darkbg'>
        <div className='flex items-center w-[1300px] justify-between px-6 py-3 my-0 mx-auto'>
          <div className='flex flex-row items-center gap-8'>
            <h1 className='font-bold text-[16px] sm:text-2xl dark:text-white'>
              <a className='cursor-pointer ' href='/'>
                So today
              </a>
            </h1>
            <ul className='flex flex-row gap-10 mr-10'>
              {['Postagens', 'Contato', 'Sobre'].map((item, key) => {
                return (
                  <a key={key}>
                    <li className='cursor-pointer text-black hover:text-blue-500  dark:text-white dark:hover:text-blue-500 '>{item}</li>
                  </a>
                )
              })}
            </ul>
          </div>
          <div className='dark:text-white mt-1'>
            <div className='flex flex-row gap-2'>
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ?
                  <SunDim size={25} />
                  :
                  <Moon size={25} />}
              </button>
              <div>
                <a
                  href='https://github.com/Lucal22/so-today'
                  target='_blank'
                  rel='noopener noreferrer'
                ><GithubLogo size={25} /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

