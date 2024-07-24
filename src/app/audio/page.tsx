import { getAllListAudios } from '@/service/audio'
import React from 'react'
import ListAudio from './components/ListAudio'

export default async function AudioPage() {
  const audios = await getAllListAudios()

  const AudioList = audios.data.audios
  return (
    <>
     <ListAudio audios={AudioList} />
    </> 
  )
}
