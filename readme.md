# web app bazelize attempt

```text
1. ts infra & toolchian & dep, upgrade related rules 
2. react sample project 
3. linter & basic ide 
4. porting the first project 

framework 比如sensedesign/umijs 可能涉及自己写一些便利的rules 这个按需着就行了
```

## 尝试路径

- 依赖安装
- 构建：UMI_ENV=release max build
- 项目启动
- linter
- 测试

## bazelize

### 确认 bazel 版本

`bazel version` 查看本机 bazel 版本，修改项目 .bazelversion 内容为自己版本，确保版本 bazel 校验通过

### install dependencies

> corepack enable
> pnpm install --lockfile-only

当前 lockfile 是基于 higgs-frontend 依赖 pnpm@8.15.8 生成

~~To install dependencies with Bazel-managed pnpm, run": "bazel run @pnpm//:pnpm -- --dir $PWD install~~