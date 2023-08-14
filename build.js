import { build, buildWithEmbedding } from '@sanjo/add-on-builder'
import { readdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import * as process from 'node:process'

const __dirname = dirname(fileURLToPath(import.meta.url))

const addOnsPath = join(__dirname, 'AddOns')
const addOnNames = (await readdir(addOnsPath, {withFileTypes: true}))
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

const addOnsToBuildWithEmbedding = new Set([
  'CommoditiesBuyer',
  'MoneyMakingAssistant'
])

for (const addOnName of addOnNames) {
  process.chdir(join(addOnsPath, addOnName))
  if (addOnsToBuildWithEmbedding.has(addOnName)) {
    await buildWithEmbedding()
  } else {
    await build()
  }
}
