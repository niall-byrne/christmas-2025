import Quiz from "@/components/quiz";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <Quiz personId={slug} />
    </div>
  );
}
