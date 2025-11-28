import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../../../lib/prisma"
import bcrypt from "bcrypt"

export default NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        })

        if (!user) return null

        const valid = await bcrypt.compare(credentials!.password, user.password)
        if (!valid) return null

        return user
      }
    })
  ],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
})
