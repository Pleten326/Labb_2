function Experience() {
  const skills = [
    "Навчання на 3-му курсі НУЛП (Кібербезпека)",
    "Монтаж в Adobe Premiere Pro & After Effects",
    "Гра на гітарі"
  ];

  return (
    <section className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-emerald-500/10 transition-all mb-6">
      
      <h2 className="text-2xl font-bold text-sky-400 mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-sky-400 rounded-full"></span>
        Досвід та навички
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li 
  key={index} 
  className="bg-slate-900 p-4 rounded-xl border-l-4 border-sky-500 hover:bg-slate-800 transition-colors text-white"
>
  {skill}
</li>
        ))}
      </ul>
    </section>
  );
}
export default Experience;