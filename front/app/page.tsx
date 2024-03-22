async function getData() {
  const res = await fetch('http://server:3000/tasks')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type task = {
  id: number
  createdAt: string
  updatedat: string
  name: string
  detail: string
}

export default async function Home() {
  const data = await getData();

  return (
    <ul role="list" className="divide-y divide-gray-300 mx-20">
      {data.map((task: task) => (
        <li className="flex p-5" key={task.id}>
          <div className="m-2 p-1">
            <p className="font-bold text-xl">{task.name}</p>
          </div>
          <div className="m-2 p-1">
            <p className="text-gray-500">{task.detail || 'hoge'}</p>
          </div>
          <button type="button" className="bg-teal-600 text-white ml-auto rounded m-2 p-1">Done</button>
        </li>
      ))}
    </ul>
  );
}
