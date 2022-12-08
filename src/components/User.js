import React from 'react'
import { useGlobalContext } from '../helper/context'
import Card from './Card'
import { FaBuilding } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import { SiSitepoint } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

const User = () => {
  const { users } = useGlobalContext()
  console.log(users)
  const {
    bio,
    avatar_url: avatar,
    location,
    name,
    twitter_username: twitter,
    url,
    login,
    company,
    blog,
  } = users

  return (
    <Card>
      <section className='flex justify-between items-start before-custom before:content-["User"]'>
        <div>
          {/* Content */}
          <div className='flex gap-4 mb-4'>
            <img src={avatar} alt='profile' className='h-20 rounded-full' />
            <div className='flex flex-col  gap-2'>
              <h3 className='text-xl'>{name}</h3>
              <a
                href={url}
                className='text-gray-300 text-sm hover:text-amber-400 transition-all'
                target='_blank'
                rel='noreferrer'
              >
                @{login}
              </a>
            </div>
          </div>
          <p className='text-md mb-4'>{bio}</p>

          {/* INFO   */}
          {company && (
            <div className='flex items-center gap-2 mb-2'>
              <FaBuilding className='h-5 w-5' />
              <span>{company}</span>
            </div>
          )}

          {location && (
            <div className='flex items-center gap-2 mb-2'>
              <BiCurrentLocation className='h-5 w-5' />
              <span>{location}</span>
            </div>
          )}

          {twitter && (
            <div className='flex items-center gap-2 mb-2'>
              <BsTwitter className='h-5 w-5' />
              <span>{twitter}</span>
            </div>
          )}

          {blog && (
            <div className='flex items-center gap-2'>
              <SiSitepoint className='h-5 w-5' />
              <a
                href={blog}
                target='_blank'
                rel='noreferrer'
                className='hover:text-amber-400 transition-all text-cyan-500'
              >
                {blog}
              </a>
            </div>
          )}
        </div>
        <button className='bg-gray-700 px-4 py-2 rounded-lg border border-gray-400 hover:bg-amber-500  hover:-translate-y-0.5 transition-all duration-200'>
          <a href={url}>Follow</a>
        </button>
      </section>
    </Card>
  )
}

export default User
