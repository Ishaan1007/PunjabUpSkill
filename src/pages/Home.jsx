import React from 'react'
import { courses } from '../data/courses'
import CourseRow from '../components/course/CourseRow'
import { filterCourses } from '../utils/filterCourses'

export default function Home({ query }) {
  const filtered = filterCourses(courses, query)
  return (
    <div>
      <CourseRow title="Suggested" courses={filtered} />
      <CourseRow title="DSA Courses" courses={filtered.filter(c => c.category === 'DSA')} />
      <CourseRow title="Web Development Courses" courses={filtered.filter(c => c.category === 'Web Development')} />
    </div>
  )
}
