#!/usr/bin/env python3
"""
5万行のテストファイルを生成するスクリプト
"""

def generate_large_markdown_file(filename="test_large_note.md", lines=50000):
    """5万行のMarkdownファイルを生成"""
    
    sections = [
        "# メインセクション",
        "## サブセクション", 
        "### 詳細項目",
        "#### 補足事項",
        "- リスト項目",
        "1. 番号付きリスト",
        "```python\nprint('コードブロック')\n```",
        "**太字テキスト** と *斜体テキスト*",
        "| 表 | データ | テスト |",
        "|-----|-------|--------|",
        "| 値1 | 値2   | 値3   |",
        "> 引用ブロック内容",
        "[リンクテキスト](https://example.com)",
        "![画像](image.png)",
        "---",
    ]
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("# 5万行テストファイル\n\n")
        f.write("このファイルはパフォーマンステスト用に生成された大容量Markdownファイルです。\n\n")
        
        current_line = 3
        section_counter = 1
        
        while current_line < lines:
            f.write(f"\n## セクション {section_counter}\n\n")
            current_line += 2
            
            for i, section in enumerate(sections):
                if current_line >= lines:
                    break
                    
                if section.startswith("#"):
                    f.write(f"{section} {section_counter}-{i+1}\n\n")
                elif section.startswith("```"):
                    f.write(f"```python\n# セクション {section_counter} のコード例 {i+1}\n")
                    f.write(f"def function_{section_counter}_{i+1}():\n")
                    f.write(f"    return 'セクション{section_counter}の結果{i+1}'\n```\n\n")
                    current_line += 5
                elif section.startswith("| 表"):
                    f.write(f"| セクション{section_counter} | データ{i+1} | テスト項目 |\n")
                    f.write("|-------------------|------------|----------|\n")
                    for j in range(3):
                        f.write(f"| 値{section_counter}-{j+1} | データ{i+1}-{j+1} | 結果{j+1} |\n")
                        current_line += 1
                    f.write("\n")
                    current_line += 3
                else:
                    f.write(f"{section} (セクション{section_counter}-{i+1})\n")
                    current_line += 1
                
                if current_line >= lines:
                    break
                    
            section_counter += 1
            
            if current_line < lines:
                f.write(f"\n段落テキストの例です。セクション{section_counter}の詳細な説明がここに続きます。" * 5)
                f.write("\n\n")
                current_line += 2
    
    print(f"✅ {filename} を生成しました ({lines}行)")
    
    # ファイルサイズを確認
    import os
    size_mb = os.path.getsize(filename) / (1024 * 1024)
    print(f"📊 ファイルサイズ: {size_mb:.2f} MB")
    
    # 実際の行数を確認
    with open(filename, 'r', encoding='utf-8') as f:
        actual_lines = sum(1 for line in f)
    print(f"📋 実際の行数: {actual_lines} 行")

if __name__ == "__main__":
    generate_large_markdown_file()