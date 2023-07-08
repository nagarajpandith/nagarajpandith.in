import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "5r8fjybd",
  dataset: "production",
  title: "Nagaraj Pandith - Portfolio",
  apiVersion: "2023-07-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas},
})

export default config