/** @format */
import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";
import PlanTree from "./PlanTree.jsx";
const PlanTravels = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const plantsIds = root.childIds;
  // console.log(root);
  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    // console.log(parent);
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };
  return (
    <div>
      <h2>Plan Travels</h2>
      <ol>
        {plantsIds.map((id) => (
          <PlanTree
            onComplete={handleComplete}
            key={id}
            id={id}
            placeById={plan}
            parentId={0}
          />
        ))}
      </ol>
    </div>
  );
};

export default PlanTravels;
