import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>
        Real time collaboratory Whiteboard Application
      </h1>
      <h2>
        This is a screen for authenticated users only
      </h2>
      <div>
        <UserButton/>
      </div>
    </div>
  );
}
