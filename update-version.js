#!/usr/bin/env node

/**
 * バージョン自動更新スクリプト
 * 使用方法: node update-version.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function updateVersion() {
    const now = new Date();
    
    // 日本時間に変換
    const jstOffset = 9 * 60; // JST = UTC+9
    const jstTime = new Date(now.getTime() + jstOffset * 60000);
    
    // バージョン情報生成
    const version = {
        major: 2,
        minor: 1,
        build: parseInt(jstTime.toISOString().slice(0, 10).replace(/-/g, '')), // YYYYMMDD
        revision: parseInt(jstTime.toTimeString().slice(0, 5).replace(':', '')), // HHMM
        buildTime: jstTime.toISOString().slice(0, 19).replace('T', ' ')
    };
    
    const fullVersion = `v${version.major}.${version.minor}.${version.build}.${version.revision}`;
    
    // 現在のGitコミットハッシュを取得
    let commitHash = 'unknown';
    try {
        commitHash = execSync('git rev-parse --short HEAD').toString().trim();
    } catch (error) {
        console.warn('⚠️ Could not get git commit hash');
    }
    
    console.log(`🔄 Updating version to: ${fullVersion}`);
    console.log(`📅 Build time: ${version.buildTime}`);
    console.log(`🔖 Commit hash: ${commitHash}`);
    
    // index.htmlファイルを読み込み
    const indexPath = path.join(__dirname, 'index.html');
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // APP_CONFIGセクションを更新
    const configRegex = /const APP_CONFIG = \{[\s\S]*?version: \{[\s\S]*?\}[\s\S]*?\};/;
    const newConfig = `const APP_CONFIG = {
            version: {
                major: ${version.major},
                minor: ${version.minor},
                build: ${version.build},
                revision: ${version.revision},
                get fullVersion() {
                    return \`v\${this.major}.\${this.minor}.\${this.build}.\${this.revision}\`;
                },
                get displayVersion() {
                    return this.fullVersion;
                },
                buildTime: '${version.buildTime}',
                get buildTimeShort() {
                    return this.buildTime.split(' ')[1].substring(0, 5);
                },
                commitHash: '${commitHash}'
            }
        };`;
    
    content = content.replace(configRegex, newConfig);
    
    // HTMLの初期バージョン表示も更新
    const versionDisplayRegex = /<div class="version-info"[^>]*>[\s\S]*?<\/div>/;
    const newVersionDisplay = `<div class="version-info" id="versionInfo" title="クリックで詳細表示">
        ${fullVersion}
    </div>`;
    
    content = content.replace(versionDisplayRegex, newVersionDisplay);
    
    // ファイルに書き戻し
    fs.writeFileSync(indexPath, content, 'utf8');
    
    console.log('✅ Version updated successfully!');
    console.log(`📝 Updated: ${indexPath}`);
    
    return {
        version: fullVersion,
        buildTime: version.buildTime
    };
}

// スクリプトが直接実行された場合
if (require.main === module) {
    updateVersion();
}

module.exports = updateVersion;