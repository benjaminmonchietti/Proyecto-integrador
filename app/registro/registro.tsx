import { useState } from "react"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iwuwqcfcvhccvclwpdho.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dXdxY2ZjdmhjY3ZjbHdwZGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MDIzNzUsImV4cCI6MjEwNDA3ODM3NX0.C5cNHQHUfaY_vounj9scjTIjNYXrvP_7aKalJn1l7fg'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)


export default function Registro() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  async function registrarse() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMensaje(error.message)
      return
    }

    setMensaje('¡Usuario creado! Revisá tu email.')
  }

  return (
    <div>
      <h1>Crear cuenta</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={registrarse}>
        Registrarme
      </button>

      <p>{mensaje}</p>
    </div>
  )
}
