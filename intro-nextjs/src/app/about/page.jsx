import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1> this is about page</h1>
      <div>
      <div>
      <ul>
        <Link href={'/about/history'}>History</Link>
        <Link href={'/about/log'}>Log</Link>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default about;