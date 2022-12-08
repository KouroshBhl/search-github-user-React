import React from 'react'
import { useGlobalContext } from '../helper/context'
import Card from './Card'

const Followers = () => {
  const { followers } = useGlobalContext()
  return (
    <Card>
      <div className='h-[270px] overflow-y-scroll'>
        {followers.map((person) => {
          const { id, avatar_url: img, login, html_url: url } = person

          return (
            <div key={id} className='flex items-center gap-6 mb-6'>
              <figure>
                <img src={img} alt='' className='h-14 rounded-full' />
              </figure>

              <div>
                <p className='font-semibold'>{login}</p>
                <a
                  href={url}
                  className='text-sm text-cyan-500 hover:text-amber-400 transition-all'
                >
                  {url}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default Followers
