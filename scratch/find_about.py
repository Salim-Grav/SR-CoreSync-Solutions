import re

with open('index.html', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if any(k in line for k in ['id="about"', 'id=\'about\'', 'نبذة', 'founder', 'section-about', 'signature-neon.svg']):
        print(f"Line {i+1}: {line.strip()[:80].encode('ascii', 'replace').decode('ascii')}")
