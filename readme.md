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

## 准备

`bazel version` 查看本机 bazel 版本，修改项目 .bazelversion 内容为自己版本，确保版本 bazel 校验通过

## Install dependencies

### Generate pnpm-lock

> corepack enable
> pnpm install --lockfile-only

当前 lockfile 是基于 higgs-frontend 依赖 pnpm@8.15.8 生成

## react-webpack

### Build

To run the Bazel build execute the following:

```shell
bazel build //react-webpack/...
```

### Dev server

To run the Bazel dev server execute the following:

```shell
ibazel run //react-webpack:dev_server
```

visit http://localhost:8080/

### Build

To run the Bazel build execute the following:

```shell
bazel build //react-project-1/...
```

### Dev server

To run the Bazel dev server execute the following:

```shell
ibazel run //react-project-1:dev_server
```

## react-project-1

```shell
cd react-project-1
npm run bazel-build
```


## umi-app