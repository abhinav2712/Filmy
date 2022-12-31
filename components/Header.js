import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    BeakerIcon
} from '@heroicons/react/solid'

import * as Unicons from '@iconscout/react-unicons';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row sm:m-5 items-center justify-between h-auto'>
       <div className="flex flex-group justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={Unicons.UilEstate}/>
        <HeaderItem title='TRENDING' Icon={Unicons.UilFire}/>
        <HeaderItem title='COLLECTION' Icon={Unicons.UilBooks}/>
        <HeaderItem title='SEARCH' Icon={Unicons.UilSearch}/>
        <HeaderItem title='ACCOUNT' Icon={Unicons.UilUser}/>
       
       </div>
     
        <Image 
        className="object-contain -mt-20"
        src="/images/logi.png" width={250} height={150}
        />
    </header>
  )
}

export default Header