import path from 'path'
import { fileURLToPath } from 'url'
// Obter o equivalente a __dirname para ES modules
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)