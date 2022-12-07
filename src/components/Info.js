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
      type: 'Repos',
      icon: <GoRepoClone className='h-10 w-10' />,
      value: repo,
    },
    {
      id: '2',
      type: 'Followers',
      icon: <RiUserFollowFill className='h-10 w-10' />,
      value: followers,
    },
    {
      id: '3',
      type: 'Following',
      icon: <RiUserUnfollowFill className='h-10 w-10' />,
      value: following,
    },
    {
      id: '4',
      type: 'Gists',
      icon: <SiGitlfs className='h-10 w-10' />,
      value: gist,
    },
  ]

  return (
    <section className='flex w-full justify-between'>
      {dataInfo.map((item) => {
        return <InfoDetail key={item.id} {...item} />
      })}
    </section>
  )
}

export default Info
