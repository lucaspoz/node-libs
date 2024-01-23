import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(3, { message: 'the name needs 3 characters' }),
  age: z.number().min(18, { message: 'you need to be of legal age' }),
})

type User = z.infer<typeof userSchema>

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user)

  console.log(name, age)
}

saveUserToDatabase({
  name: 'John',
  age: 30,
})
