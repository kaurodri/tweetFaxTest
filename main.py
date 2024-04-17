import subprocess

def runJS(jsFile):
    process = subprocess.Popen(['node', jsFile], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    return output.decode(), error.decode()
output, error = runJS("index.js")

def result(output):
    mapping = {
        'true\n': True,
        'false\n': False
    }
    return mapping.get(output.lower(), None)

print(result(output))