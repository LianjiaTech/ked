#!/bin/sh

echo '->清空依赖'

rm -rf node_modules

echo '->正在检查 pre-commit 强制校验问题'

if [ -e ./.git/hooks/pre-commit.old ]; then
  mv .git/hooks/pre-commit.old .git/hooks/pre-commit
  echo '->已解决冲突'
else
  rm -rf .git/hooks/pre-commit
  echo '->未发现冲突'
fi

echo '->重新安装依赖'

npm install




