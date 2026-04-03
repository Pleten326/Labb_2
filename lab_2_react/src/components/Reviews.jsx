import { useState, useEffect } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);
  const variantNumber = 21; // замініть на свій номер варіанту

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Помилка при завантаженні коментарів:", error));
  }, []);

  return (
    <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-emerald-500/10 transition-all">
      <h2 className="text-2xl font-bold text-sky-400 mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-sky-400 rounded-full"></span>
        Відгуки попередніх роботодавців
      </h2>

      {comments.length === 0 ? (
        <p className="text-slate-300">Відгуки завантажуються...</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li 
              key={comment.id} 
              className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-sky-500 hover:bg-slate-800/70 transition-colors text-slate-200"
            >
              <p className="font-bold text-sky-300">{comment.name}</p>
              <p className="text-slate-400 text-sm">{comment.email}</p>
              <p className="mt-2 text-slate-200">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Reviews;