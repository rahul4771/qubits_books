import * as Comlink from 'comlink/dist/esm/comlink'
import { PYODIDE_URL, PYODIDE_INDEX_URL } from "./constants/pyodide";

self.importScripts(PYODIDE_URL)

function pythonCodeRun() {
  return (pythonCode) => {
    let  results = self.pyodide.runPythonAsync(pythonCode)
    return results
  }
}

async function loadPyodideAndPackages() {
  await self.loadPyodide({ indexURL: PYODIDE_INDEX_URL })
  await self.pyodide.loadPackage(['numpy','matplotlib','cycler',
  'six','kiwisolver','numpy','pillow',
  'pyparsing','python-dateutil','pytz'])
}

const pyodideReadyPromise = loadPyodideAndPackages()

const pythonContext = {
  async setup() {
    await pyodideReadyPromise
    this.pythonCodeRun = pythonCodeRun()
  }
}

Comlink.expose(pythonContext)
