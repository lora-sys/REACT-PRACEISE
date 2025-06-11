# REACT-PRACTISE

React 学习实践项目，记录从项目搭建到组件开发的全过程。

## 项目结构概览
```
charity-finder/
├── src/
│   ├── fakadata.jsx
│   ├── contact/
│   │   └── contact.jsx
│   ├── result/
│   │   ├── card.jsx
│   │   └── result.jsx
│   ├── search/
│   │   └── search.jsx
│   └── top/
│       └── top.jsx
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 配置指南

### 1. 项目初始化
```bash
# 创建Vite+React项目
pnpm create vite@latest charity-finder --template react
cd charity-finder
pnpm install
```

### 2. Tailwind CSS 集成
```bash
# 安装依赖
pnpm add -w tailwindcss postcss autoprefixer

# 初始化配置
cd charity-finder
npx tailwindcss init -p
```

`tailwind.config.js` 配置：
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. 工作区配置
`pnpm-workspace.yaml`:
```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'charity-finder'
```

`package.json`:
```json
{
  "name": "root-project",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*",
    "charity-finder"
  ],
  "dependencies": {
    "axios": "^1.6.0",
    "lodash": "^4.17.21",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
}
```

## 学习日志

### Day1 - 项目搭建
- 初始化Vite+React项目
- 配置Tailwind CSS基础样式
- 创建项目基础文件结构
- 安装核心依赖（axios/lodash）

### Day2 - 组件开发
- 实现Top组件布局
- 添加加载状态控制逻辑
- 开发Search搜索组件
- 构建Result结果展示组件
- 集成SVGR图标支持

### Day3 - TypeScript入门

> 注：根据您的学习计划，这是开始学习TypeScript的第一天！

#### 初始体验
- 将`.jsx`文件重命名为`.tsx`以启用TypeScript支持
- 配置基本的`tsconfig.json`文件
- 在组件中尝试添加类型定义
- 使用联合类型处理多种可能的输入

#### 遇到的问题与解决
- 图片加载问题：使用类型断言处理
- 模块声明缺失：创建.d.ts声明文件
- 函数参数类型注解：添加明确类型定义
- 属性名一致性：严格匹配接口定义

#### contact组件完成
- 创建contact组件
- 添加联系信息
- 添加社交媒体图标链接
