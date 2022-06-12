# 新手 `react` 训练项目

## 目标

本项目通过一步步迭代实现一个`TODO-LIST`功能的应用，让新手可以在实战中掌握`react`开发

1. 搭建项目(`create-react-app`创建，不使用`TS`，掌握切分支 commit 规范)
2. 静态页面开发
3. 功能实现
4. 逻辑和代码封装

### 阶段一（6.12 - 6.26）

本阶段目标是实现基础页面开发，功能实现（数据不持久化，仅实现功能为主）

### 阶段二（6.27 - 07.03）

本阶段目标是实现数据本地缓存

### 阶段三（07.04 - 07.10）

本阶段目标是实现数据后台接口获取及加入路由和登录页面功能

### 阶段四（07.11 - 07.17）

本阶段实现一个对应的后台管理系统，用于管理 `TODO-LIST` 用户登录，项目管理等功能（用于熟悉后台管理的）

## 开发规范

1. 开发者在本地创建分支，阶段开发完成后，向主分支`合并`代码,不可向`master`分支直接提交
2. 分支名字创建规则 以阶段结束时间为名，如阶段一开发分支则可以是`V20220626`
3. 代码 `commit` 规范参照下方

```
feat：新功能（feature）。
fix：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
docs：文档（documentation）。
style：格式（不影响代码运行的变动）。
refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
perf：优化相关，比如提升性能、体验。
test：增加测试。
chore：构建过程或辅助工具的变动。
merge：代码合并。
```
