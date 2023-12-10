import Link from "next/link";

function AboutUsPage() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">About Us</h1>
      </header>
      <p className="text-base">
        We are a team of passionate developers dedicated to creating the best
        todo application. Our mission is to help people stay organized and
        productive in their daily lives.
      </p>
      <Link
        className="border border-slate-300 
        text-slate-300 px-2 py-1 rounded hover:bg-slate-700 
        focus-within:bg-slate-700 outline-none"
        href="/"
      >
        Back
      </Link>
    </>
  );
}

export default AboutUsPage;
