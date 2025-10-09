"use client"
import { useState } from "react"
import { InputFields } from "@/components/login/InputFields"
import { Card, Flex } from "@radix-ui/themes"
import { Button } from "../Button/Button"

export const LoginCard = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }
    if(email === "admin@rivedix.com" && password === "123@cykruit"){
      window.location.href = "/admin/dashboard"
    }
    else{
      setError("Email or Password are wrong.")
    }
  }

  return (
    <Card size="5" className="w-full max-w-md p-6 shadow-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-foreground">Login</h1>
        <p className="text-sm text-muted-foreground">
          Access your admin dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Flex direction="column" gap="3">
          <InputFields
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputFields
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          <Button type="submit" className="mt-5">
            Sign In
          </Button>
        </Flex>
      </form>
    </Card>
  )
}
