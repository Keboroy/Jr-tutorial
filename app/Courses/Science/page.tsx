import React from 'react'
import Image from 'next/image'
import Playlist from '../playlist'
const page = () => {
  return (
    <div className='my-5 flex justify-between space-x-5'>
      <div className=''>
        <span className='text-lg text-white font-bold'>COURSE</span>
        <div className=' my-5'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={700} height={400} className="rounded-xl" />
          <div className='my-3'>
            <div className="flex space-x-3">
              <button className='border-b-2 border-gray-600 text-white px-2 font-medium'>Overview</button>
              <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Downloads</button>
              <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Comments</button>
              <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Announcements</button>
            </div>
            <div className=''>
              <h2 className='my-3 text-2xl font-medium'>Trending Songs non stop lofi Songs [Slowed N Reverb]</h2>
              {/* <div className="w-3/4">
                <p>137,417 views  Streamed live on Nov 17, 2022
                  PARIS Chill Lofi Work 🥀 Deep Focus [chill lo-fi hip hop beats]
                  #Lofi #Paris #Chill #HipHop #Beats #Study #Work #Lofi #DeepFocus #ChillVillage
                  Help me to reach 100,000 subscribers: https://bit.ly/sub_Chill_Village

                  🍂 Track list:
                  00:00:00 | 1. Opening the Window For Some Fresh Air - Purrple Cat
                  00:01:40 | 2. Waiting for the Sun - Purrple Cat
                  https://open.spotify.com/track/7cQhr9...
                  00:04:50 | 3. Saturday Morning - Purrple Cat
                  https://open.spotify.com/track/5I9s2s...
                  00:06:38 | 4. Stranded - Purrple Cat
                  https://open.spotify.com/track/5PooEi...
                  00:10:14 | 5. Dancing Shadows - Purrple Cat
                  https://open.spotify.com/track/1WgTIC...
                  00:12:34 | 6. Bird Watching - Purrple Cat
                  https://open.spotify.com/track/2SbLKB...
                  00:15:18 | 7. Treat Time - Purrple Cat
                  https://open.spotify.com/track/3lPTtT...
                  00:17:26 | 8. Cardboard Box Adventure - Purrple Cat
                  https://open.spotify.com/track/59XW55...
                  00:20:05 | 9. Ball of Yarn - Purrple Cat
                  https://open.spotify.com/track/1rylrE...

                  🌊 Suggested Videos:
                  Just go anywhere listening to lofi 🏝️ Study/Work/Relax: https://bit.ly/Lofi_Chill_Village
                  Lofi Hip Hop music with Real Life Sound Effect 🐄: https://bit.ly/Lofi_SoundEffect_Chill...

                  🐾 Music provided by Purrple Cat:
                  ➤ https://open.spotify.com/artist/73aKn...
                  ➤ https://www.instagram.com/purrplecatm...
                  ➤ https://www.youtube.com/c/PurrpleCatm...

                  🌿 Artwork by Sylvain Sarrailh
                  Follow this amazing artist on:
                  ►   https://www.instagram.com/sylvainsarr...
                  ►   https://www.artstation.com/tohad
                  ►   https://www.behance.net/Tohad

                  ️🪶 Follow Hikend for new release every week:
                  Spotify: https://music.hitkend.me/Lofi
                  Instagram: https://music.hitkend.me/ig
                  Sub Instagram: https://music.hitkend.me/IG
                  Youtube: https://music.hitkend.me/YTB
                  ➤ More Lofi music on Spotify playlist:  https://music.hitkend.me/Lofi

                  🐋 Music by Hitkend ChillLab
                  Spotify: https://music.hitkend.me/artist
                  Instagram: https://music.hitkend.me/iga

                  Chill Village with smoothing vibes bringing you far away from the madding crowd 🌾
                  Find me anytime you need a space. I got anywhere for you to feel free and do things effectively with:
                  - Relaxed moments, Chill feeling,...
                  - Stop Overthinking, Calm Your Mind, Relieve Anxiety,...
                  - Lofi Chillhop, Lofi chill feeling, Relaxing music, Music for study, Music for sleep, Music for work,...
                  - Lofi hip hop mix, Lofi Hip Hop radio, Anime Lofi, Lofi to Study/Relax to,...

                  ►All rights belong to their respective owners.
                  ✔ This video was given a special license directly from the artists and the right holders.
                  ❗ Any requirements please send us an email and we will get back to you soon.

                  ► IMAGES/ARTWORKS promotion: https://forms.gle/uGjpERK7PbtFBkhZA
                  ► VIDEOS/FOOTAGE promotion: https://forms.gle/a33dq1XS6d5HtBfV9
                  ► Music promotion: https://forms.gle/WBQgqr4oHfeZy1Qv8
                  ► GET YOUR MUSIC released on all platforms: https://forms.gle/GDvHPEfB47MU3xjy6

                  📣 Contact email for any inquiries: ✉ speiserxgreilly@gmail.com ✉

                  Video key words:
                  chill village,paris,lofi paris,paris lofi,lofi deep focus,lofi work,work lofi,lofi vibes,chill lofi mix,music,lofi,lofi chill,lofi girl,lofi music,lofi hiphop,chillhop,vibes,relax,study,chill,work,beats,chill lofi,lofi mix,lofi hip hop,jazzhop,lofi beats,jazz,hip hop,chilledcow,chill lofi music,lofi zone,lofi hip hop mix,lofi chill beats,lofi study,lofi type beat,lofi hip hop beats,ロフィ,로파이,lofi study music,deep focus,focus music,study lofi</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Playlist />
    </div>
  )
}

export default page
