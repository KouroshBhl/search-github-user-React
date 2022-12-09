import React from 'react'
import { useGlobalContext } from '../helper/context'
import { GoRepoClone } from 'react-icons/go'
import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri'
import { SiGitlfs } from 'react-icons/si'
import InfoDetail from './InfoDetail'

const Info = () => {
  const { users } = useGlobalContext()
  const { followers, following, public_gists: gist, public_repos: repo } = users
  const dataInfo = [
    {
      id: '1',
      type: 'Reposotories',
      icon: <GoRepoClone className='h-8 w-8' />,
      value: repo,
    },
    {
      id: '2',
      type: 'Followers',
      icon: <RiUserFollowFill className='h-8 w-8' />,
      value: followers,
    },
    {
      id: '3',
      type: 'Following',
      icon: <RiUserUnfollowFill className='h-8 w-8' />,
      value: following,
    },
    {
      id: '4',
      type: 'Gists',
      icon: <SiGitlfs className='h-8 w-8' />,
      value: gist,
    },
  ]

  return (
    <section className='w-full grid grid-cols-1 sm:grid-cols-2 lg:flex max-w-full md:justify-between md:flex-row gap-4 md:gap-8'>
      {dataInfo.map((item) => {
        return <InfoDetail key={item.id} {...item} />
      })}
    </section>
  )
}

export default Info
