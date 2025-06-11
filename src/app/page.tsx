
import Link from "next/link";

export default async function GuessCountryPage() {

  return (
    <main
      className="w-[90rem] block my-8 mx-auto bg-amber-500/0"
    >
      <h1>Choose a game</h1>
      <ul className="flex-flex col space-y-3 p-2">
        <li className="cursor-pointer w-fit py-1 px-2 rounded-md bg-slate-200 duration-200 linear hover:bg-slate-100 focus:bg-slate-200">
          <Link href="/guess">
            Guess
          </Link>
        </li>
        <li className="cursor-pointer w-fit py-1 px-2 rounded-md bg-slate-200 duration-200 linear hover:bg-slate-100 focus:bg-slate-200">
          <Link href="#">
            Royality
          </Link>
        </li>
        <li className="cursor-pointer w-fit py-1 px-2 rounded-md bg-slate-200 duration-200 linear hover:bg-slate-100 focus:bg-slate-200">
          <Link href="#">
            Coat of arms
          </Link>
        </li>
      </ul>
    </main>
  )
}