import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { lessons } from '../data/lessons'

export default function Lesson() {
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === Number(id))
  const [speed, setSpeed] = useState(1)
  const [flipped, setFlipped] = useState({})

  if (!lesson) return <p className="text-gray-500">课程不存在</p>

  const lines_en = lesson.text_en.split('\n')
  const lines_zh = lesson.text_zh.split('\n')

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link to="/" className="text-blue-500 hover:underline text-sm">← 返回</Link>
        <span className="text-gray-300">|</span>
        <span className="text-sm text-gray-500">Lesson {lesson.lesson_no}</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">{lesson.title}</h1>

      {/* 课文 */}
      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">课文</h2>
        <div className="space-y-2">
          {lines_en.map((line, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <p className="text-gray-800">{line}</p>
              <p className="text-gray-400 text-sm">{lines_zh[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 音频 */}
      {lesson.audio_url && (
        <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase mb-3">音频</h2>
          <div className="flex items-center gap-4">
            <audio controls src={lesson.audio_url} onRateChange={e => setSpeed(e.target.playbackRate)} />
            <div className="flex gap-2">
              {[0.75, 1, 1.25].map(s => (
                <button
                  key={s}
                  onClick={() => {
                    const audio = document.querySelector('audio')
                    if (audio) audio.playbackRate = s
                    setSpeed(s)
                  }}
                  className={`px-3 py-1 rounded-full text-xs border ${speed === s ? 'bg-blue-500 text-white border-blue-500' : 'text-gray-500 border-gray-300'}`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 单词 */}
      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">生词</h2>
        <div className="grid grid-cols-2 gap-3">
          {lesson.words.map((w, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition"
              onClick={() => setFlipped(f => ({ ...f, [i]: !f[i] }))}
            >
              {flipped[i] ? (
                <div>
                  <p className="text-blue-600 font-semibold">{w.meaning}</p>
                  <p className="text-xs text-gray-400 mt-1">{w.example}</p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold text-gray-800">{w.word}</p>
                  <p className="text-xs text-gray-400">{w.phonetic}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">点击卡片翻转查看释义</p>
      </section>

      <Link
        to={`/lesson/${id}/practice`}
        className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        开始练习 →
      </Link>
    </div>
  )
}
