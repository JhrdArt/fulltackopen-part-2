import { MdOutlineDeleteForever } from "react-icons/md"


export const Person = ({ filteredPerson, handleDelete }) => {
  return (
    <>
      <ul className="">
        {filteredPerson.map((person) => (
          <li className="flex gap-2 text-sm justify-between mb-1" key={person.name}>
            <span className="italic font-medium">{person.name}</span><strong>{person.number}</strong>
            <button className="text-lg text-red-600 bg-slate-300 p-1 rounded-full" 
            onClick={() => handleDelete(person.id)}><MdOutlineDeleteForever /></button>
          </li>
        ))}
      </ul>
    </>
  );
};
