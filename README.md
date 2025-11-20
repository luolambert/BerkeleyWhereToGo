# 🎓 Berkeley Where-To-Go

<div align="center">

**一个专为加州大学伯克利分校学生设计的智能校园路线规划应用**

_Intelligent Campus Route Planning App for UC Berkeley Students_

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Google Maps](https://img.shields.io/badge/Google%20Maps-API-4285F4?logo=google-maps)](https://developers.google.com/maps)

帮助新生和全体学生轻松规划课间路线，准时到达教室！

_Helping freshmen and all students easily plan their inter-class routes and arrive on time!_

</div>

---

## 📸 预览 Preview

<!-- 在此处添加应用截图 -->
<!-- Add application screenshots here -->

---

## ✨ 核心特性 Core Features

### 🗺️ 智能地图导航 Smart Map Navigation

- **Google Maps 深度集成** - 基于真实地理数据的精确路线规划
  - _Deep Google Maps Integration - Accurate route planning based on real geographic data_
- **坡度可视化路线** - 路线颜色根据陡峭程度动态变化
  - 🔵 **浅蓝**：平缓路线 (< 3% 坡度)
  - 🔵 **中蓝**：中等坡度 (3-8% 坡度)
  - 🔵 **深蓝**：陡峭路段 (> 8% 坡度)
  - _Slope-Colored Routes - Route colors change dynamically based on steepness_
- **智能路线标记** - 优雅的起点/终点标识，显示完整建筑名称
  - _Smart Route Markers - Elegant start/end markers showing full building names_
- **动态标记定位** - 标记自动调整位置，避免遮挡路线
  - _Dynamic Marker Positioning - Markers auto-adjust to avoid obscuring routes_

### 📊 海拔分析工具 Elevation Analysis

- **交互式海拔剖面图** - 实时显示路线的地形变化
  - _Interactive Elevation Profile - Real-time display of route terrain changes_
- **爬升数据统计** - 显示总爬升高度和海拔范围
  - _Climb Statistics - Shows total elevation gain and range_
- **坡度图例** - 地图上清晰的坡度等级说明
  - _Slope Legend - Clear slope grade indicators on map_

### 🏢 智能建筑选择器 Smart Building Selector

- **全屏浮动面板** - 现代化的建筑选择界面，浮动在地图上方
  - _Full-Screen Floating Panel - Modern building selection interface floating over map_
- **实时搜索** - 支持建筑名称即时搜索过滤
  - _Real-Time Search - Instant building name search filtering_
- **分类浏览** - 8 大类别快速定位：
  - 📚 **全部** All Buildings
  - ⭐ **热门** Popular Buildings
  - 🧪 **STEM** Science & Engineering
  - 🎓 **人文** Humanities & Social Sciences
  - 💼 **商科** Business School
  - 🎨 **艺术** Arts & Design
  - 📖 **图书馆** Libraries
  - 👥 **校园生活** Campus Life
- **网格布局展示** - 所有建筑一目了然，支持 PC 和移动端
  - _Grid Layout Display - All buildings at a glance, PC and mobile friendly_
- **智能交互** - 支持 ESC 键关闭、点击切换等便捷操作
  - _Smart Interactions - ESC to close, click to toggle, and more_

### 🏛️ 建筑数据库 Building Database

覆盖**38 个校园重点建筑**，包括：

- **三大教学楼**：Dwinelle, Wheeler, Pimentel
- **工程学院**：Soda, Cory, Etcheverry, Jacobs
- **科学楼**：Evans, LeConte, VLSB, Stanley
- **商学院**：Haas, Chou, Cheit
- **图书馆**：Moffitt, Doe, Kresge
- **校园生活**：RSF, MLK Student Union, Sproul
- **更多**：Wurster, Hertz, Morgan 等

_Covers **38 key campus buildings**, including major lecture halls, engineering buildings, science complexes, libraries, and campus life facilities_

### ⏱️ 精确时间计算 Precise Time Calculation

- **多种交通方式**：
  - 🚶‍♂️ **步行时间** - 基于真实路线和地形
  - 🛴 **滑板车/自行车** - 快速出行选项（约为步行时间的 1/4）
  - _Multiple Transportation Modes - Walking and scooter/bike options_
- **"伯克利时间"智能提醒** - 超过 10 分钟自动警告
  - _"Berkeley Time" Smart Alert - Automatic warning for routes over 10 minutes_
- **实时 API 计算** - 基于 Google Maps Directions API 的准确估算
  - _Real-Time API Calculation - Accurate estimates via Google Maps API_

### 🎨 现代化 UI 设计 Modern UI Design

- **毛玻璃效果** - 优雅的模糊背景
  - _Glassmorphism Effects - Elegant blurred backgrounds_
- **流畅动画** - 基于 Framer Motion 的丝滑交互
  - _Smooth Animations - Silky interactions powered by Framer Motion_
- **响应式布局** - 完美适配桌面、平板和手机
  - _Responsive Design - Perfect for desktop, tablet, and mobile_
- **Berkeley 品牌元素** - 集成伯克利官方标志
  - _Berkeley Branding - Integrated official UC Berkeley seal_
- **浮动面板设计** - 所有 UI 元素带阴影效果，层次分明
  - _Floating Panel Design - All UI elements with shadow effects, clear hierarchy_

---

## 🚀 快速开始 Quick Start

### 前置要求 Prerequisites

- **Node.js** 18.x 或更高版本 _(18.x or higher)_
- **Google Maps API Key** 需启用以下服务 _(with the following APIs enabled)_:
  - Maps JavaScript API
  - Places API
  - Directions API
  - Elevation API

### 安装步骤 Installation

```bash
# 1. 克隆项目 Clone the repository
git clone <your-repo-url>
cd berkeley-where-to-go

# 2. 安装依赖 Install dependencies
npm install

# 3. 配置环境变量 Configure environment variables
# 创建 .env 文件并添加你的 Google Maps API Key
# Create .env file and add your Google Maps API Key
echo "VITE_GOOGLE_MAPS_API_KEY=your_api_key_here" > .env

# 4. 启动开发服务器 Start development server
npm run dev

# 5. 在浏览器中打开 Open in browser
# 通常是 http://localhost:5173
```

### 生产构建 Production Build

```bash
# 构建生产版本 Build for production
npm run build

# 预览生产构建 Preview production build
npm run preview
```

---

## 📖 使用指南 Usage Guide

### 基本操作 Basic Operations

1. **选择起点**

   - 点击 "Start" 输入框
   - 浮动选择面板将出现在右侧
   - 使用搜索或分类浏览找到建筑
   - 点击选择，面板自动关闭

   _Select Start Location - Click input → Use floating panel → Search or browse → Select building_

2. **选择终点**

   - 点击 "Destination" 输入框
   - 同样的方式选择目的地建筑

   _Select Destination - Same process as start location_

3. **获取路线**

   - 点击 "Get Directions" 按钮
   - 等待路线计算（通常<2 秒）

   _Get Route - Click button and wait for calculation_

4. **查看结果**

   - 🗺️ 地图上显示坡度编码路线
   - ⏱️ 左侧显示步行和滑板车时间
   - 📊 底部显示海拔剖面图
   - 🏷️ 查看路线坡度图例

   _View Results - See route on map, travel times on left, elevation profile at bottom_

### 高级功能 Advanced Features

- **键盘快捷键**：按 `ESC` 关闭建筑选择面板
  - _Keyboard Shortcuts: Press ESC to close building selection panel_
- **快速切换**：点击已激活的输入框可关闭选择面板
  - _Quick Toggle: Click active input to close selection panel_
- **分类过滤**：使用顶部标签快速筛选建筑类别
  - _Category Filtering: Use top tabs to quickly filter building categories_

---

## 🏗️ 项目结构 Project Structure

```
berkeley-where-to-go/
├── src/
│   ├── components/                    # React 组件 Components
│   │   ├── Header.jsx                # 页面标题 Page header
│   │   ├── RouteInput.jsx            # 路线输入表单 Route input form
│   │   ├── BuildingSelect.jsx        # 建筑输入组件 Building input component
│   │   ├── BuildingSelectionPanel.jsx # 建筑选择面板 Building selection panel
│   │   ├── MapContainer.jsx          # 地图容器和路线渲染 Map container & route rendering
│   │   ├── TravelTimeDisplay.jsx     # 时间显示卡片 Travel time display
│   │   └── ElevationChart.jsx        # 海拔剖面图 Elevation profile chart
│   ├── data/
│   │   └── buildings.js              # 38个校园建筑数据 38 campus buildings data
│   ├── App.jsx                       # 主应用组件 Main app component
│   ├── main.jsx                      # 应用入口 App entry point
│   └── index.css                     # 全局样式 Global styles
├── public/                           # 静态资源 Static assets
├── .env                              # 环境变量 Environment variables
├── package.json                      # 项目依赖 Project dependencies
├── vite.config.js                   # Vite 配置 Vite configuration
├── tailwind.config.js               # Tailwind 配置 Tailwind configuration
└── README.md                        # 项目文档 Project documentation
```

---

## 🛠️ 技术栈 Tech Stack

### 核心框架 Core Frameworks

- **React 19.2.0** - 最新的 React 框架，支持并发特性
- **Vite 7.2.2** - 极速开发构建工具
- **TailwindCSS 4.1.17** - 现代化原子 CSS 框架

### UI & 动画 UI & Animations

- **Framer Motion 12.23.24** - 高性能动画库
- **Lucide React 0.554.0** - 精美图标库
- **Recharts 3.4.1** - React 数据可视化图表

### 地图服务 Map Services

- **@react-google-maps/api 2.20.7** - Google Maps React 集成
- **Google Maps JavaScript API** - 地图显示
- **Google Directions API** - 路线规划
- **Google Elevation API** - 海拔数据获取

### 开发工具 Development Tools

- **ESLint 9.39.1** - 代码质量保证
- **PostCSS + Autoprefixer** - CSS 处理和兼容性

---

## 🎯 适用场景 Use Cases

### 👶 新生入学 Freshmen Orientation

- 快速熟悉校园地理位置
- 评估宿舍到教室的距离
- 提前规划开学第一周的路线

### 📅 课程规划 Course Planning

- 选课时评估课间转换时间
- 避免连续课程间距离太远
- 优化每日课程安排

### 🏃 日常通勤 Daily Commute

- 选择最快/最平缓的路线
- 决定步行还是骑车/滑板车
- 了解路线的体力消耗

### 🎉 活动参与 Event Participation

- 快速找到活动地点
- 计划从宿舍/停车场的路线
- 为访客提供导航指引

---

## 🌍 部署方案 Deployment Options

### 推荐平台 Recommended Platforms

**Vercel** (推荐 Recommended) ⭐

```bash
# 一键部署 One-click deployment
npm install -g vercel
vercel
```

**Netlify**

```bash
# 拖拽 dist/ 文件夹即可
# Simply drag and drop dist/ folder
npm run build
```

**GitHub Pages**

```bash
# 构建并推送到 gh-pages 分支
# Build and push to gh-pages branch
npm run build
# 将 dist/ 内容部署到 GitHub Pages
```

### 环境变量配置 Environment Variables

生产部署时，确保在平台上配置 `VITE_GOOGLE_MAPS_API_KEY`

_When deploying to production, make sure to configure `VITE_GOOGLE_MAPS_API_KEY` in your platform settings_

---

## 📊 性能指标 Performance Metrics

| 指标 Metric                       | 数值 Value            |
| --------------------------------- | --------------------- |
| 首屏加载时间 Initial Load         | < 3s                  |
| 路线计算时间 Route Calculation    | < 2s                  |
| 海拔数据获取 Elevation Data Fetch | < 1s                  |
| 移动端适配 Mobile Compatibility   | ✅ 完美 Perfect       |
| 响应式布局 Responsive Layout      | ✅ 全设备 All Devices |
| PWA 支持 PWA Support              | 🔄 可扩展 Extensible  |

---

## 🗺️ 路线图 Roadmap

### ✅ 已完成 Completed

- [x] Google Maps 核心集成
- [x] 38 个建筑数据库
- [x] 智能建筑选择面板（分类、搜索）
- [x] 路线规划和时间计算
- [x] 海拔数据和坡度可视化
- [x] 响应式 UI 设计
- [x] 动画和交互效果
- [x] 自定义地图标记

### 🚧 规划中 Planned

- [ ] 更多校园建筑数据
- [ ] 保存常用路线
- [ ] 多路线比较
- [ ] 实时天气影响提示
- [ ] 夜间模式
- [ ] 多语言支持（英文/中文切换）
- [ ] PWA 离线支持
- [ ] 用户评论和建议功能

---

## 🤝 贡献指南 Contributing

欢迎提交 Issue 和 Pull Request！

_Issues and Pull Requests are welcome!_

### 贡献流程 Contribution Workflow

1. **Fork 本仓库** _(Fork this repository)_
2. **创建特性分支** _(Create feature branch)_
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **提交更改** _(Commit changes)_
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **推送到分支** _(Push to branch)_
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **创建 Pull Request** _(Open Pull Request)_

### 开发规范 Development Guidelines

- 遵循现有代码风格
- 添加适当的注释
- 更新相关文档
- 确保通过 ESLint 检查

---

## 📝 更新日志 Changelog

### v1.1.0 (Current - 2025-11)

- ✨ 全新建筑选择器 UI - 浮动面板设计
- ✨ 建筑分类系统 - 8 大类别
- ✨ 实时搜索功能
- ✨ 网格布局显示所有建筑
- ✨ ESC 快捷键和智能交互
- 🐛 修复标记遮挡路线问题
- 💄 UI 层次优化和阴影效果

### v1.0.0 (2025-11)

- ✨ 集成 Google Elevation API
- ✨ 海拔剖面图表
- ✨ 坡度颜色编码路线
- ✨ 自定义地图标记系统
- ✨ 升级到 React 19
- ✨ Framer Motion 动画
- ✨ Recharts 图表集成

### v0.1.0 (Initial)

- 基础路线规划
- 简单地图显示
- 时间计算

---

## 📄 许可证 License

本项目采用 **MIT License** 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

_This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details_

---

## 🙏 致谢 Acknowledgments

- **UC Berkeley** - 校园数据和灵感来源
- **Google Maps Platform** - 强大的地图和地理服务
- **React 社区** - 优秀的开源工具和库
- **所有贡献者** - 感谢每一位改进本项目的开发者

---

<div align="center">

**Made with ❤️ for UC Berkeley Students**

**为伯克利学生精心打造**

🐻 _Go Bears!_ 🐻

> "帮助每个伯克利学生都能准时到达目的地，不再为课间转换时间而烦恼！"
>
> _"Helping every Berkeley student arrive on time, no more worrying about inter-class transition times!"_

[🐛 报告问题](https://github.com/your-repo/issues) · [✨ 功能建议](https://github.com/your-repo/issues) · [📖 文档](https://github.com/your-repo/wiki)

</div>
