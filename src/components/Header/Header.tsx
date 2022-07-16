import { useTheme } from 'next-themes';
import React from 'react';
import { SunDim, Moon, GithubLogo } from 'phosphor-react';
import MenuButton from './components/MenuButton';

export const navBar = [
  {
    id: 1,
    name: 'Postagens',
    route: '/posts',
  },
  {
    id: 2,
    name: 'Contato',
    route: '/contact',
  },
  {
    id: 3,
    name: 'Sobre',
    route: '/about',
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header>
      <nav className="flex h-16 w-full border-b-[0.05px] border-slate-300 bg-transparent dark:border-darkbg dark:bg-darknav">
        <div className="my-0 mx-auto flex w-[1300px] items-center justify-between px-6 py-3">
          <div className="flex flex-row items-center gap-8">
            {/* Logo */}
            <h1 className="text-2xl font-bold dark:text-white">
              <a className="cursor-pointer " href="/">
                So Today
              </a>
            </h1>
            {/* Navbar */}
            <ul className="mr-10 hidden flex-row gap-10  sm:flex">
              {navBar.map((item) => {
                return (
                  <a key={item.id} href={item.route}>
                    <li className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500  ">
                      {item.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="mt-1 hidden dark:text-white sm:flex">
            {/* theme button and github link */}
            <div className="flex flex-row gap-2">
              <button
                className="hover:text-blue-500 dark:hover:text-blue-500"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <SunDim size={25} /> : <Moon size={25} />}
              </button>
              <div>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-500"
                  href="https://github.com/Lucal22/so-today"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={25} />
                </a>
              </div>
              {/* Mini menu */}
            </div>
          </div>
          <div className="block sm:hidden ">
            <MenuButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
