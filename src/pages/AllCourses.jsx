import React from 'react'
import { courses } from '../data/courses'
import CourseRow from '../components/course/CourseRow'
import { filterCourses } from '../utils/filterCourses'
import { getYoutubeId } from '../utils/youtube'
import { withBase } from '../utils/assets'

export default function AllCourses({ query }) {
  const filtered = filterCourses(courses, query)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(c => {
          if (c.type === 'playlist') {
            const href = `https://www.youtube.com/playlist?list=${c.playlistId}`
            return (
              <div key={c.id} className="w-full">
                <a href={href} className="block" aria-label={`Open ${c.title} playlist`}>
                  <div className="w-full h-40 rounded-md bg-gray-800/50 flex items-center justify-center">
                    <div className="text-sm uppercase tracking-wider text-gray-300">Playlist</div>
                  </div>
                </a>
                <h3 className="mt-3 font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.category}</p>
              </div>
            )
          }
          const id = getYoutubeId(c.youtubeId)
          const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : withBase(c.thumbnail)
          const href = id ? `https://www.youtube.com/watch?v=${id}` : null
          return (
            <div key={c.id} className="w-full">
              {href ? (
                <a
                  href={href}
                  aria-label={`Open ${c.title} on YouTube`}
                  className="block"
                >
                  <img src={thumb} alt={c.title} className="w-full h-40 object-cover rounded-md" />
                </a>
              ) : (
                <img src={thumb} alt={c.title} className="w-full h-40 object-cover rounded-md" />
              )}
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-400">{c.category}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
