import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/landing"); // Redirect to the landing page
}
