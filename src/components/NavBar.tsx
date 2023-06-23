import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './ui/Button'
import ThemeSwitcher from './ThemeSwitcher'
import Menu from './Menu'
import ProfileButton from './ProfileButton'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return <div className=' shadow-md shadow-zinc-400 dark:shadow-zinc-600 flex py-2 md:py-5 items-center justify-evenly'>
    <Link href={''} className={buttonVariants({ variant: 'logo', size: 'logo' })}>GymNerd</Link>
    <ThemeSwitcher />
    <Menu />
    <ProfileButton />
  </div>
}

export default NavBar