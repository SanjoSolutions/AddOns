import { createPackageMetaFile } from '@sanjo/add-on-builder'
import { readdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import * as process from 'node:process'

const __dirname = dirname(fileURLToPath(import.meta.url))

const addOnsPath = join(__dirname, 'AddOns')
const addOnNames = (await readdir(addOnsPath, {withFileTypes: true}))
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

for (const addOnName of addOnNames) {
  const addOnPath = join(addOnsPath, addOnName)
  await createPackageMetaFile(addOnPath)
}
