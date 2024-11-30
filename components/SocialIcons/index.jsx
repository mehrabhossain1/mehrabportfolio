import { GitHubLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons'
import React from 'react'
import {AtSymbolIcon} from "@heroicons/react/24/outline"
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const icons = [{
    Icon: GitHubLogoIcon,
    link: "https://github.com/rijvi"
}, {
    Icon: LinkedInLogoIcon,
    link: "https://www.linkedin.com/in/rijvi/"
}, {
    Icon: SiLeetcode,
    link: "https://leetcode.com/rijvi/"
}, {
    Icon: AtSymbolIcon,
    link: "mailto:VHkzT@example.com"
}]

const SocialIcons = () => {
  return (
    <div className='flex gap-5 ml-1'>
       {icons.map((icon, index) => (
           <Link href={icon.link} target="_blank" key={index}>
               <icon.Icon className={cn(
                 
                 'size-6 hover:scale-110 transition',
                 icon.link.match(/^mailto?:\/\//) ? 'hover:stroke-green-500' : 'hover:text-green-500'
               )} />
           </Link>
       ))}
    </div>
  )
}

export default SocialIcons