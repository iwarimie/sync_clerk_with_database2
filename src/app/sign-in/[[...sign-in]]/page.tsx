import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center py-3">
      <SignIn />
    </div>
  );
}
