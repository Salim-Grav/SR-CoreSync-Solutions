with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
if style_match:
    style = style_match.group(1)
    rtl_rules = []
    for line in style.split('\n'):
        if any(k in line.lower() for k in ['rtl', 'right', 'left', 'row-reverse', 'direction: rtl', 'margin-right', 'margin-left', 'padding-right', 'padding-left']):
            rtl_rules.append(line.strip()[:100])
    print(f"Total CSS lines: {len(style.splitlines())}")
    print(f"RTL-related lines: {len(rtl_rules)}")
    with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\scratch\rtl_css.txt', 'w', encoding='utf-8') as out:
        out.write('\n'.join(rtl_rules))
