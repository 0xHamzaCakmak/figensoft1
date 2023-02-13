import { useState } from "react";
import { register } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password,names);
    console.log(user);
  };
  return (
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            E-Posta
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="E-Posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
         <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="names"
          >
            Ad Soyad
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="names"
            type="text"
            placeholder="Ad Soyad"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
        </div> 

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <div class="flex items-center justify-between">
          <button disabled={!email || !password}
            class="disabled:opacity-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            
            type="submit"
          >
            Sign UP
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
