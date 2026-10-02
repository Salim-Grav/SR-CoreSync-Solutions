import re

def analyze(filepath, outname):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    results = [f"=== {filepath} (Total: {len(lines)} lines) ==="]
    for idx, line in enumerate(lines, 1):
        if re.search(r'<(section|footer|header)\b|id="(wrapper|home|work|services?|about|pricing|roi-calculator|faq|contact|compliance)"|class="[^"]*(hero-editorial|project-modal|sr-booking-modal|sr-portal-modal)', line):
            results.append(f"L{idx}: {line.strip()[:120]}")
    
    with open(outname, 'w', encoding='utf-8') as out:
        out.write('\n'.join(results))

analyze(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\index.html', r'f:\I-Ai\App\S&R CoreSync Solutions\Project\scratch\index_sections.txt')
analyze(r'f:\I-Ai\App\S&R CoreSync Solutions\Project\en\index.html', r'f:\I-Ai\App\S&R CoreSync Solutions\Project\scratch\en_sections.txt')
print("Done writing section maps.")
