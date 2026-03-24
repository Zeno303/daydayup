-- 课程表
CREATE TABLE IF NOT EXISTS lessons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book INTEGER NOT NULL,
  lesson_no INTEGER NOT NULL,
  title TEXT NOT NULL,
  text_en TEXT NOT NULL,
  text_zh TEXT NOT NULL,
  audio_url TEXT
);

-- 单词表
CREATE TABLE IF NOT EXISTS words (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id INTEGER NOT NULL,
  word TEXT NOT NULL,
  phonetic TEXT,
  meaning TEXT NOT NULL,
  example TEXT,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

-- 练习题表
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('choice', 'fill')),
  content TEXT NOT NULL,
  options TEXT,
  answer TEXT NOT NULL,
  explanation TEXT,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);
