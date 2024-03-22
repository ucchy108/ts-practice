export default function Page() {
  return (
    <>
      <h1 className="font-bold text-xl text-center">新規作成ページ</h1>
      <form>
        <div className="mb-6">
          <input type="text" className="block rounded-lg border focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <textarea rows={8} className="rounded-lg border focus:ring-blue-500 focus:border-blue-500"></textarea> 
        </div>
      </form>
    </>
  )
}