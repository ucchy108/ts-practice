export default function Page() {
  return (
    <>
      <h1 className="font-bold text-xl mx-auto mb-10">タスクの一覧ページ</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border border-soli shadow-sm rounded p-2">
          <p>Task name</p>
          <p>Detail</p>
        </div>

        <div className="border border-soli shadow-sm rounded p-2">
          <p>Task name</p>
          <p>Detail</p>
        </div>

        <div className="border border-soli shadow-sm rounded p-2">
          <p>Task name</p>
          <p>Detail</p>
        </div>

        <div className="border border-soli shadow-sm rounded p-2">
          <p>Task name</p>
          <p>Detail</p>
        </div>
      </div>
    </>
  )
}