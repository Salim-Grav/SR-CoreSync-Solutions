import re

with open(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all direct children of <main id="wrapper">
main_match = re.search(r'<main id="wrapper">(.*?)</main>', html, re.DOTALL)
if main_match:
    main_content = main_match.group(1)
    # Find all sections/divs with id
    sections = re.findall(r'(<(?:section|div|footer)[^>]*\bid="([^"]+)"[^>]*>)', main_content)
    print("=== SECTIONS IN MAIN ===")
    for tag, sid in sections:
        print(f"ID: #{sid} -> {tag[:80]}")

# Find elements after </main>
after_main = html[html.find('</main>') + 7:html.find('</body>')]
modals = re.findall(r'(<(?:div|aside)[^>]*\bid="([^"]+)"[^>]*>)', after_main)
print("\n=== MODALS / OVERLAYS AFTER MAIN ===")
for tag, mid in modals:
    print(f"ID: #{mid} -> {tag[:80]}")
