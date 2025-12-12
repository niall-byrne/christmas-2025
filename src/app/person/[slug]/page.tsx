import Main from "@/components/main";

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <Main personId={slug} />
    </div>
  );
}
