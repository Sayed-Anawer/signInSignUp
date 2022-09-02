import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <div className="mx-auto w-2/5">
        <ul className="flex gap-3 ">
          <li>
            <Link href="/signin">
              <span className=" cursor-pointer text-blue-700 text-xl">
                Signin
              </span>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <span className="cursor-pointer text-blue-700 text-xl">
                Signup
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
