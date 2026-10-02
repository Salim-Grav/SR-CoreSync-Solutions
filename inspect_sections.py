import re

with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', 'r', encoding='utf-8') as f:
    ar_lines = f.readlines()

print(f"Total lines in index.html: {len(ar_lines)}")

# Find all major sections and their line numbers
for idx, line in enumerate(ar_lines, 1):
    if '<section' in line or 'class="hero-' in line or 'id="wrapper"' in line or '<footer' in line or 'class="modal' in line or 'class="sr-' in line and 'overlay' in line:
        print(f"L{idx}: {line.strip()[:100]}")
