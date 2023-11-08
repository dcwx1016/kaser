const { execSync } = require('child_process');

// 本地构建目录
const localBuildDir = 'dist/';

// 远程 ECS 服务器信息
const remoteServer = '139.196.98.255';
const remoteUser = 'root';
const remoteDir = '/var/www/html/';

// 使用 rsync 命令将构建文件复制到远程服务器
try {
  const rsyncCommand = `rsync -avz -e "ssh" ${localBuildDir} ${remoteUser}@${remoteServer}:${remoteDir}`;
  execSync(rsyncCommand);
  console.log('Build files copied to remote server successfully.');
} catch (error) {
  console.error('Error copying build files to remote server:', error);
}