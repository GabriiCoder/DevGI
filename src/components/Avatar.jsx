
import MotionTransition from './TransitionComponent';
import Image from 'next/image';

const Avatar = () => {
  return (
    <MotionTransition position="right">
      <div className='xl:flex xl:max-w-none'>
        <Image 
          src={'/avatar.png'} 
          width={660}
          height={600} 
          alt="Avatar" 
          className='translate-z-0 w-full h-full'
          priority 
        />
      </div>
    </MotionTransition>
  );
}

export default Avatar;