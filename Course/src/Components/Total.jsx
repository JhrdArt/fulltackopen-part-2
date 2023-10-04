export const Total = ({ courses }) => {
  return (
    <div className="flex gap-2">
      <p className="uppercase font-medium">
        total of
        <span> {courses[0].parts.reduce((i, part) =>
        i + part.exercises, 0)}</span> exercises
      </p>
    </div>
  );
};
