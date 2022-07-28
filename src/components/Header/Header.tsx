import { useTheme } from 'next-themes';
import React from 'react';
import { SunDim, Moon, GithubLogo } from 'phosphor-react';
import MenuButton from './components/MenuButton';

export const navBar = [
  {
    id: 1,
    name: 'Posts',
    route: '/posts',
  },
  {
    id: 2,
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
            <h1 className="text-4xl font-bold text-slate-500  dark:text-slate-500">
              <a className="cursor-pointer " href="/">
                LUCAL<span className="hidden text-[14px] mobile:inline-block">THOUGHTS</span>
              </a>
            </h1>
            {/* Navbar */}
            <ul className="mr-10 hidden flex-row gap-10  sm:flex">
              {navBar.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500  "
                  >
                    <a href={item.route}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-1 hidden dark:text-white sm:flex">
            {/* theme button and github link */}
            <div className="flex flex-row gap-2">
              <button
                aria-label="Botão do tema"
                className="hover:text-blue-500 dark:hover:text-blue-500"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? (
                  <SunDim aria-label="Mudar para tema escuro" size={25} />
                ) : (
                  <Moon aria-label="Mudar para tema claro" size={25} />
                )}
              </button>
              <div>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-500"
                  href="https://github.com/Lucal22/so-today"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo
                    className="block"
                    aria-label="Botão para página do github"
                    size={25}
                  />
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
