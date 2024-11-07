/** @format */

const PlanTree = ({ placeById, id, onComplete, parentId }) => {
  const place = placeById[id];
  const childIds = place.childIds;
  // console.log(childs, id);
  return (
    <>
      <li>
        {place.title}
        <button onClick={() => onComplete(parentId, id)}>Completed</button>
      </li>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlanTree
              id={childId}
              placeById={placeById}
              parentId={id}
              key={childId}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </>
  );
};

export default PlanTree;
