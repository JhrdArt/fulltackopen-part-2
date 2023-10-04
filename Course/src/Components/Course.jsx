import { Title } from "./Title";

export const Course = () => {
  return (
    <section className="w-96 h-auto border-b mb-7 ">
      {/* primer curso */}
      <div>
        <ul className="flex flex-col">
          <Title name={courses[0].name} />
          {courses[0].parts.map((part) => (
            <>
              <div className="flex gap-2 border-b border-blue-400 justify-between px-2">
                <li className="font-semibold ">{part.name}</li>
                <li className="font-light">{part.exercises}</li>
              </div>
            </>
          ))}
        </ul>
        <div className="flex gap-2 mt-1">
          <p className="uppercase font-medium">
            total of
            <span>
              {" "}
              {courses[0].parts.reduce((i, part) => i + part.exercises, 0)}
            </span>{" "}
            exercises
          </p>
        </div>
      </div>
      {/* segundo curso */}
      <div className="mt-2">
        <ul className="">
          <Title key={courses[1].id} name={courses[1].name} />
          {courses[1].parts.map((part) => (
            <>
              <div className="flex gap-2 border-b border-blue-400 justify-between px-2">
                <li className="font-semibold">{part.name}</li>
                <li className="font-light">{part.exercises}</li>
              </div>
            </>
          ))}
        </ul>
        <div className="flex gap-2">
          <p className="uppercase font-medium mt-1">
            total of
            <span>
              {" "}
              {courses[1].parts.reduce((i, part) => i + part.exercises, 0)}
            </span>{" "}
            exercises
          </p>
        </div>
      </div>
    </section>
  );
};

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]
