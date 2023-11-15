export default function Msg({ msg, style, user }) {
  return (
    <div className={style}>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <div className="rounded-full bg-green-400 w-8 h-8 flex items-center justify-center">
            <span className="text-white">A</span>
          </div>
          <div className="ml-3">
            <p className="text-gray-600">{user}</p>
            <p className="text-gray-600 text-sm">10:00</p>
          </div>
        </div>
        <div  className="rounded-lg bg-gray-100 p-3 mt-3">
          <p className="text-gray-600 break-words">{msg}</p>
        </div>
      </div>
    </div>
  );
}
