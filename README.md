# BlazeKit 🔥

BlazeKit is a code generation tool designed to speed up your development workflow. With BlazeKit, you can automatically generate TypeScript types, database controllers, and Next.js API routes from a single schema file.

---

## 🚀 Getting Started

### 1. Install BlazeKit

Install BlazeKit globally by running:

```bash
npm install blazekit
```

### 2. Auto-generate a config file

Generate the configuration file by running:

```bash
npx blazekit --create-config
```

This will create a `.blazerc` file in your project:

```json
{
  "database": "prisma",
  "databaseName": "database_name",
  "typesOutputDir": "src/types",
  "controllersOutputDir": "src/controllers",
  "apiRoutesOutputDir": "src/app/api"
}
```

---

## 🔥 Start Defining Models

### 3. Create your models

Create your models in a `schema.blaze` file. For example:

```bash
model User {
  name: string
  email: string
  age: number
}
```

Typically, you would create the `schema.blaze` file in `src/blaze/schema.blaze` for a Next.js app.

### 4. Compile the schema

Run the following command to compile the schema:

```bash
npx blazekit schema.blaze
```

And bam! That's it!

---

## 🚀 What Happens After Compiling?

After compiling, BlazeKit generates:

- `src/controllers/`

  - `User.controller.ts`
  - `Programmer.controller.ts`

- `src/types/`
  - `User.ts`
  - `Programmer.ts`

Your code is now ready to be used!

---

## 📚 Ready to build faster?

Hit the ground running with BlazeKit and check out the docs for more details.

👉 [View Docs](https://blaze-kit.vercel.app)

---

# Blaze faster. Build smarter. 🔥
