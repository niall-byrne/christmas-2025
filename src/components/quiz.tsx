"use client";

import Background from "@/components/background";
import Dialogue from "@/components/dialogue";
import Riddle from "@/components/riddle";
import useToggle from "@/components/hooks/useToggle";
import Confirmation from "@/components/buttons/confirmation";

export default function Quiz({ personId }: { personId: string }) {
  const toggle = useToggle();

  return (
    <div>
      <Background />
      {!toggle.value ? (
        <Riddle personId={personId} />
      ) : (
        <Dialogue
          title="Christmas Delivery System"
          messages={[
            "Thank goodness you're here !",
            " ",
            "Due to the Canadian postal strikes Santa has developed an advanced AI to help deliver Christmas cards.",
            " ",
            "Unfortunately, the AI loves riddles... ",
            " ",
            "Can you please solve a riddle to help us deliver this card ?",
          ]}
        >
          <Confirmation onClick={toggle.flip} />
        </Dialogue>
      )}
    </div>
  );
}
