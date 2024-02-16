interface MovieDetailsProps {
  id: string;
}

export default function MovieDetails({id}: MovieDetailsProps) {
  return <p>{id}</p>
}