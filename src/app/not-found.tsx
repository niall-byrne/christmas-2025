import Background from "@/components/background";
import FourOhFour from "@/components/errors/404";

export default async function NotFound() {
  return (
    <div>
      <Background />
      <FourOhFour />
    </div>
  );
}
