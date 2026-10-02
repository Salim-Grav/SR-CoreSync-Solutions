with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Check head tags
import re
head_match = re.search(r'<head>(.*?)</head>', content, re.DOTALL)
if head_match:
    head = head_match.group(1)
    links = re.findall(r'<link\b[^>]*>', head)
    scripts = re.findall(r'<script\b[^>]*>.*?</script>|<script\b[^>]*>', head)
    print("=== HEAD LINKS ===")
    for l in links[:20]:
        print(l)
    print("=== HEAD SCRIPTS ===")
    for s in scripts:
        print(s[:100])

# Check footer scripts at the end of index.html
body_end = content[content.rfind('<!-- Javascript -->') if '<!-- Javascript -->' in content else len(content)-3000:]
print("=== END SCRIPTS ===")
print(body_end[:1500])
