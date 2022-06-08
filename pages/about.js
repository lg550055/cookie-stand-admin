import Link from "next/link";

export default function About() {
  return (
    <div className="text-center mx-auto my-8  py-24 bg-green-500 w-72 h-72 text-gray-50 rounded-lg">
      <h1 className="text-3xl">About Page</h1>
      <Link href="/">
        <a className="block underline">Return Home</a>
      </Link>
    </div>
  );
}
