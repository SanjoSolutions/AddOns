import { updateDependencyIncludes } from '@sanjo/add-on-builder'
import { fileURLToPath } from 'node:url'
import * as path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

await updateDependencyIncludes(path.join(__dirname, 'AddOns', 'CommoditiesBuyer'))
await updateDependencyIncludes(path.join(__dirname, 'AddOns', 'MoneyMakingAssistant'))
