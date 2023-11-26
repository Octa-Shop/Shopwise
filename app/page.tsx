import Image from 'next/image'
import lens from '@/images/camera_lense_0.jpeg'
export default function Home() {
 let x = 500
  return (
      <main>
          <div className='container flex justify-between items-center mb-20 mt-20'>
          <div>
          <h1 className='text-3xl'>
              WHO WE ARE ...
            </h1>
            <p className='max-w-[448px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe temporibus eius sed aperiam voluptas nostrum ipsam totam facilis modi corporis!
            </p>
            
          </div>
            <Image 
            src={lens}
            alt='Home-page-img'
            height={x}
            width={x}
            />
          </div>
      </main>
  )
}
