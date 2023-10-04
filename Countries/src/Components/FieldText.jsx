import { BsSearch } from 'react-icons/bs'

export const FieldText = ({ search, onSubmitValue, onChangeVal, }) => {
    return (
        <div className='w-80 flex flex-col gap-2 mt-2'>
            <label className="font-bold text-lg " htmlFor="search">
                Buscar detalles del país {search.toUpperCase()}
            </label>
            <form
                className="w-full flex items-center justify-center p-1  rounded-full bg-blue-900 pl-5"
                action=""
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className=" font-semibold w-72 bg-transparent outline-none text-white"
                    type="text"
                    value={search}
                    onChange={onChangeVal}
                />
                <button className="h-full text-white font-bold p-2 px-3 rounded-r-full ">
                    <BsSearch />
                </button>
            </form>
        </div>
    )
}
