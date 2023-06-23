'use client'
import { FC, useState } from 'react'
import { User } from 'lucide-react'
import { Button, buttonVariants } from './ui/Button'

interface ProfileButtonProps {

}

const ProfileButton: FC<ProfileButtonProps> = ({ }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return <div className='flex flex-col justify-center items-center'>
    <User onClick={handleMenuToggle} />
    {menuIsOpen ? <div className='relative flex flex-col justify-center items-center'>
      <div className='z-50 absolute top-4 bg-zinc-200 dark:bg-stone-700 rounded-md'>
        <Button className={buttonVariants({ variant: 'link', size: 'default' })}>Login</Button>
      </div>
    </div> : null}
  </div>
}

export default ProfileButton