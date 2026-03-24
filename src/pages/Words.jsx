import { lessons } from '../data/lessons'

export default function Words() {
  const allWords = lessons.flatMap(l =>
    l.words.map(w => ({ ...w, lesson_no: l.lesson_no, lesson_title: l.title }))
  )

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">单词本</h1>
      <div className="grid gap-3">
        {allWords.map((w, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-start justify-between">
            <div>
              <p className="font-semibold text-gray-800">{w.word} <span className="text-gray-400 text-sm font-normal">{w.phonetic}</span></p>
              <p className="text-blue-600 text-sm mt-1">{w.meaning}</p>
              <p className="text-gray-400 text-xs mt-1">{w.example}</p>
            </div>
            <span className="text-xs text-gray-300 whitespace-nowrap ml-4">L{w.lesson_no}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
