import cv from '../resume.json'
import { AtSign, Phone, Link, MapPin } from 'lucide-react'

function stripHttp(url: string) {
  return url.replace('http://', '').replace('https://', '')
}

const App: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      {/* Header Section */}
      <div className='text-center py-2'>
        <h1 className='text-lg font-bold'>{cv.basics.name}</h1>
        <p className='text-xs pt-1'>{cv.basics.label}</p>
      </div>
      <div className='flex flex-row items-center gap-12 justify-center pt-4'>
        <div className='flex flex-row gap-1 items-center'>
          <AtSign size={16} color="#4b5563" />
          <p className='text-sm'>
            {cv.basics.email}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <Phone size={16} color="#4b5563" />
          <p className='text-sm'>
            {cv.basics.phone}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <Link size={16} color="#4b5563" />
          <p className='text-sm'>
            {stripHttp(cv.basics.url)}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <MapPin size={16} color="#4b5563" />
          <p className='text-sm'>
            {`${cv.basics.location.city}, ${cv.basics.location.region}`}
          </p>
        </div>
      </div>
      <div className='pt-2 flex flex-row gap-12 items-center justify-center'>
        {cv.basics.profiles.map((profile, i) => (
          <div key={i} className='flex flex-row items-center gap-2'>
            <p className='text-sm font-bold'>{profile.network}</p>
            <p className='text-sm'>{stripHttp(profile.url)}</p>
          </div>
        ))}
      </div>

      {/* Work Section */}
      <div>
        {cv.work.map((workItem, i) => (
          <div key={i}>
            <div className='flex flex-row items-center'>
              <p className='grow'>{workItem.name}</p>
              <p>{workItem.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
