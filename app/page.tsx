import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-4 mt-10">
        <Link
          href="/page"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
        >
          Page 1
        </Link>
      </div>
    </div>
  );
}
