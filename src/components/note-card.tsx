export function NoteCard(){
    return (
    <button className="rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-small font-medium text-slate-200">Há 2 dias</span>
        <p className="text-small leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis dolor tempora culpa voluptas mollitia, a tenetur magni vero eveniet ipsam laudantium quas maiores molestias, sequi dicta possimus nesciunt fuga?
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
  </button>)
}