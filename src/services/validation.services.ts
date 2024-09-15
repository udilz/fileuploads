import z from "zod";

const blogSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export async function handleCreateBlog(title: string, body: string) {
  const dataValidation = blogSchema.safeParse({
    title,
    body,
  });

  if (!dataValidation.success) {
    return dataValidation.error.issues;
  }
  return "success";
}

const registerSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters long"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function handleRegister(name: string, email: string, password: string) {
  const dataValidation = registerSchema.safeParse({
    name,
    email,
    password,
  });
  if (!dataValidation.success) {
    return dataValidation.error.issues;
  }
  return "success";
}

