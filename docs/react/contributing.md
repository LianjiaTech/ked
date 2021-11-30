---
order: 1
title: 贡献指南
---

KED 组件库脚手架使用 `@ke/ked-cli`，文档工具使用 `bisheng`

- 自 `1.1.1` 版本后，组件源码已实现自管理，功能覆盖到 `antd@3.26.20`，官网已实现自举。
- 自 `2.0.0` 版本后，组件样式均已 `ked` 为前缀，与其他组件库样式隔离。
- 自 `2.0.2` 版本后，主题自定义定制功能可以正常使用。
- 1.x 版本的代码迁移至 1.x 分支，master 为最新正式版的代码。

## 开发流程规范

### 安装依赖

> npm install -g @ke/ked-cli

安装组件库项目依赖

> npm install

### 启动项目

> npm start

### 打包 npm

> ked build lib

打包输出产物：

1. lib
2. es
3. dist

### 打包 site

> ked build site

### 发布 lib

> npm run pub

### 部署 site

> npm run deploy

## 组件结构规范

组件添加是在 `components` 文件夹下添加。需要提供以下几部分：

1. `index.js` => 组件入口文件
2. `index.md` => 组件说明文档（如何使用/API/静态属性/动态属性）
3. `index.json` => 组件信息（组件/作者信息）
4. `demo` 文件夹 => 描述组件使用方式，md 头部需要 title 和 order 两个参数来标示标题和序号
5. `__tests__` 文件夹 => 检查组件功能正常的测试用例，默认提交代码时检查
6. `style` 文件夹 => 组件样式，patch.less 为 UI 规范走查的补丁

### 组件目录结构

以 `button` 组件为例，组件目录结构如下

```tree
.
├── __tests__
│   ├── __snapshots__
│   ├── demo.test.js
│   └── index.test.js
├── demo
│   ├── basic.md
│   ├── block.md
│   ├── button-group.md
│   ├── disabled.md
│   ├── ghost.md
│   ├── icon.md
│   └── loading.md
├── style
│   ├── index.less
│   ├── index.tsx
│   ├── mixin.less
│   └── patch.less
├── index.json
├── index.md
└── index.tsx
```

## 代码规范

遵循 [stylelint](https://stylelint.io/)、[eslint](https://eslint.org/) 、[prettier](https://prettier.io/) 即可。

详细配置查看 [ESLint](./.eslintrc.js) 即可。

## 新建分支 规范

- 分支名语义化，比如：fix-modal-position-bug、feature-modal-bg。
- 基于`master`切出新分支。

## 代码提交规范

[commit lint rules](https://commitlint.js.org/#/reference-rules?id=rules)

> `<type>(<scope>): <subject>`

Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）。Body 和 Footer 不做限制。

type 用于说明 commit 的类别，只允许使用下面 11 个标识。

- feat 新功能（feature）
- fix 修补 bug
- docs 文档（documentation）
- style 格式（不影响代码运行的变动）
- refactor 重构（即不是新增功能，也不是修改 bug 的代码变动）
- revert 回滚
- test 增加测试
- chore 构建过程、辅助工具的变动
- perf 提高性能
- build 修改项目的的构建系统（glup，webpack，rollup 等）的提交
- ci 修改项目的持续集成流程（Jenkins、GitLab CI 等）的提交

如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

subject 是 commit 目的的简短描述，不超过 50 个字符。

## Issue 规范

- issue 仅用于提交 Bug 或 Feature，其它内容可能会被直接关闭。
- 在提交 issue 之前，请搜索相关内容是否已被提出。
- 在提交 issue 时，请说明 ked 的版本号，并提供操作系统和浏览器信息。

## Merge Request 规范

- **不要提交 `dist` 里面打包的文件**

- 提交时，确保 commit 记录的清晰、明确、整洁

- 如果是修复 bug 或者提一个增加 新功能，请在 MR 中给出描述信息

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并

## 注意事项

1. 执行单测失败时，可以删除报错组件下的快照文件重新执行，即 `__test__/__snapshots__` 文件夹
