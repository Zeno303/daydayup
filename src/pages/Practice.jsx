import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { lessons } from '../data/lessons'

export default function Practice() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = lessons.find(l => l.id === Number(id))
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!lesson) return <p className="text-gray-500">课程不存在</p>

  const questions = lesson.questions
  const score = submitted
    ? questions.filter(q => answers[q.id]?.trim().toLowerCase() === q.answer.trim().toLowerCase()).length
    : 0

  function handleSubmit() {
    setSubmitted(true)
    localStorage.setItem(`lesson_${id}_done`, 'true')
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link to={`/lesson/${id}`} className="text-blue-500 hover:underline text-sm">← 返回课文</Link>
      </div>

      <h1 className="text-xl font-bold text-gray-800 mb-6">Lesson {lesson.lesson_no} · 练习</h1>

      <div className="space-y-6">
        {questions.map((q, i) => {
          const correct = submitted && answers[q.id]?.trim().toLowerCase() === q.answer.trim().toLowerCase()
          const wrong = submitted && !correct
          return (
            <div key={q.id} className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${submitted ? (correct ? 'border-green-400' : 'border-red-400') : 'border-blue-200'}`}>
              <p className="font-medium text-gray-800 mb-3">{i + 1}. {q.content}</p>

              {q.type === 'choice' ? (
                <div className="space-y-2">
                  {q.options.map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`q_${q.id}`}
                        value={opt}
                        disabled={submitted}
                        onChange={() => setAnswers(a => ({ ...a, [q.id]: opt }))}
                        className="accent-blue-500"
                      />
                      <span className="text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  disabled={submitted}
                  placeholder="填写答案..."
                  onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                  className="border rounded-lg px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              )}

              {submitted && (
                <div className={`mt-3 text-sm ${correct ? 'text-green-600' : 'text-red-500'}`}>
                  {correct ? '✅ 正确！' : `❌ 正确答案：${q.answer}`}
                  <p className="text-gray-500 mt-1">{q.explanation}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-2">得分：{score} / {questions.length}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            返回课程列表
          </button>
        </div>
      )}
    </div>
  )
}
