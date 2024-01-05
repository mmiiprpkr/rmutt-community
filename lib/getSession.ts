import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
// todo from serveraction รับ session มาจาก server components ถ้าเป็น client ก็จะเป็น useSession แต่ต้อง wrap ตรง file context ด้วย layout

export default async function getSession() {
   return await getServerSession(options);
}