export default function TextPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
