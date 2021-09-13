import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@pri