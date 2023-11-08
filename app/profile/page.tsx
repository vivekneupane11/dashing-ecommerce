import Button from "@/components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  return <>{session ? <Button type="signout" /> : <Button type="signin" />}</>;
}
