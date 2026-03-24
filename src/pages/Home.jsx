import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'

function getProgress(lessonId) {
  return localStorage.getItem(`lesson_${lessonId}_done`) === 'true'
}

export default function Home() {
  const done = lessons.filter(l => getProgress(l.id)).length
  const pct = Math.round((done / lessons.length) * 100)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">新概念英语 · 第一册</h1>
      <p className="text-gray-500 mb-4">共 {lessons.length} 课 · 已完成 {done} 课</p>

      {/* 进度条 */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* 课程列表 */}
      <div className="grid gap-3">
        {lessons.map(lesson => {
          const done = getProgress(lesson.id)
          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm px-5 py-4 hover:shadow-md transition"
            >
              <div>
                <span className="text-xs text-gray-400 mr-2">Lesson {lesson.lesson_no}</span>
                <span className="font-semibold text-gray-800">{lesson.title}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${done ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                {done ? '已完成' : '未开始'}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
