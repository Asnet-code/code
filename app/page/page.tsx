import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>page</h1>

      <img src="/logo.png" alt="logo" />

      <div className="text-center ">
        <Link
          className="
        bg-slate-300
        rounded-lg
        p-4
        
        "
          href={"/"}
        >
          Powrót
        </Link>
      </div>
      {/**--------------------------------------------------------------------- */}
      <h1>h1 Główny tytuł</h1>
      <h2>h2 Podtytuł sekcji</h2>
      <p>p Treść sekcji...</p>
      <div className="box">div Element bez znaczenia semantycznego</div>
    </div>
  );
};

export default Page;
