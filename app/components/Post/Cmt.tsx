export const Cmt = ({value, id}: { value: any, id: any }) => {
    return <li className="border border-rose-600 rounded-md p-3 mx-3 my-3" key={id}>
        <div className="flex gap-3 items-center">
            <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                 className="object-cover w-8 h-8 rounded-full
                            border-2 border-emerald-400  shadow-emerald-400
                            "/>
            <h3 className="font-bold">
                {value.email}
            </h3>
        </div>
        <p className="text-gray-600 mt-2 whitespace-pre-wrap">
            {value.body}
        </p>
    </li>
}
