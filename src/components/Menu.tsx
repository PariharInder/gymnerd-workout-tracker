'use client'
import Link from 'next/link'
import { FC, useState } from 'react'
import { buttonVariants } from './ui/Button'
import { MenuIcon } from 'lucide-react'
import ProfileButton from './ProfileButton'

interface MenuProps {

}

const Menu: FC<MenuProps> = ({ }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return <>
    <div className='hidden md:flex'>
      <Link href={'/'} className={buttonVariants({ variant: 'link', size: 'default' })}>Home</Link>
      <Link href={'/dashboard'} className={buttonVariants({ variant: 'link', size: 'default' })}>Dashboard</Link>
      <Link href={'/shop'} className={buttonVariants({ variant: 'link', size: 'default' })}>Shop</Link>
    </div>
    <div className='flex flex-col md:hidden'>
      <MenuIcon onClick={handleMenuToggle} />
      {menuIsOpen ? <div className='relative flex flex-col justify-center items-center'>
        <div className='z-50 absolute top-4 flex flex-col bg-zinc-200 dark:bg-stone-700 rounded-md'>
          <Link href={'/'} className={buttonVariants({ variant: 'link', size: 'default' })}>Home</Link>
          <Link href={'/dashboard'} className={buttonVariants({ variant: 'link', size: 'default' })}>Dashboard</Link>
          <Link href={'/shop'} className={buttonVariants({ variant: 'link', size: 'default' })}>Shop</Link>
        </div>
      </div> : null}
    </div>
  </>
}

export default Menu