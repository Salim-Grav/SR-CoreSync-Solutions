with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Total script tags: {len(scripts)}")
for i, s in enumerate(scripts):
    print(f"\n--- Script {i+1} (length: {len(s)}) ---")
    lines = [l.strip() for l in s.split('\n') if l.strip()]
    funcs = [l for l in lines if l.startswith('function ') or 'const ' in l or 'let ' in l or 'var ' in l]
    print(f"First 10 declarations: {funcs[:10]}")
