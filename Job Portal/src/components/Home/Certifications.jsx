import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function CertificationCard({ image, title, skills, rating, reviews }) {
  return (
    <div className='certCard bg-white w-full max-w-[400px] px-3 py-2 h-[100%] rounded-[5px] flex flex-col gap-2'>
      
      <div className='cet-image w-full flex justify-center items-center'>
        <img src={image} alt={title} className='w-full rounded-[6px]' />
      </div>

      <div className='cert-heading'>
        <h2 className='font-bold text-[16px]'>{title}</h2>
      </div>

      <div>
        <h4 className='font-bold text-[14px]'>Skills</h4>
        <p className='text-[13px]'>{skills}</p>
      </div>

      <div className='flex gap-2 items-center mt-auto'>
        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
        <span className='text-[14px] font-bold'>{rating}</span>
        <p className='text-[11px] font-medium'>({reviews} reviews)</p>
      </div>
    </div>
  )
}

export default CertificationCard