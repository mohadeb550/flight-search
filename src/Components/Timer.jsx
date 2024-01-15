
import Countdown from 'react-countdown-now';

const Timer = () => {
  
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time is over!</span>;
    } else {
      return (
        <div className='flex gap-3 my-4'>
          <div className='flex flex-col  items-center'>
          <span className='bg-red-500 rounded-sm text-xl text-white font-semibold px-5 py-[6px]'>{minutes} </span>
          <p className='text-sm'> min</p>
          </div>

          <span className='text-red-600 text-xl font-semibold'> : </span>

          <div className='flex flex-col  items-center'>
          <span className='bg-red-500 rounded-sm text-xl text-white font-semibold px-5 py-[6px]'>{seconds} </span>
          <p className='text-sm'> sec</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-timer">
      <Countdown date={Date.now() + 2000000} renderer={renderer} />
    </div>
  );

};

export default Timer;
