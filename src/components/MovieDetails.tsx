interface MovieDetailsProps {
  id: string;
  onCloseMovie: () => void;
}

export default function MovieDetails({id, onCloseMovie}: MovieDetailsProps) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
      {id}
    </div>
  )
}