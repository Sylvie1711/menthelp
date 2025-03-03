import { handleLogout } from "@/utils/action";
import Link from "next/link";


export default function Btn({ text }) {
  return (
    <div>
      {text === "Logout" ? ( 
        <form action={handleLogout}>
           <button class="login-btn">
            <span class="login-btn-content text-lg">Logout</span>
          </button>
        </form>
      ) : 
      text==="Login" ? (
        <Link href="/login">
          <button class="login-btn">
            <span class="login-btn-content text-lg">Login</span>
          </button>
        </Link>
      ) : (
        <Link href="/profile">
          <button class="login-btn">
            <span class="login-btn-content text-lg">Profile</span>
          </button>
        </Link>
      ) }
    </div> 
  )
}
