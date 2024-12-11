'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Recipe Generator</h1>
      <button onClick={()=> router.push('/recipe/generate')}>Click me to get started!</button>
    </div>
  );
}
