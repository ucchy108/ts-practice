export default function Dashboard() {
  return (
    <ul role="list" className="divide-y divide-gray-300 mx-20">
      <li className="flex p-5">
        <div className="m-2 p-1">
          <p className="font-bold text-xl">Title1</p>
          <p className="text-gray-500">hoge</p>
        </div>
        <div className="m-2 p-1">
          <p className="text-gray-500">It is Description hoge hoge hoge hoge hoge hoge aaaaaaaaaaa</p>
        </div>
        <button type="button" className="bg-teal-600 text-white ml-auto rounded m-2 p-1">Done</button>
      </li>
    </ul>
  )
}