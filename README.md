# dva-model-persist

#### 软件架构
适用于 dva 项目

#### Why
之前基于`redux-persist@5.*`开发的`dva-resist-persist`，在异步加载`model`时并不会存贮`model`的`state`,所以使用`redux`的`enhancer`特性开发这个支持异步`model`加载的工具 

#### 安装教程

```
yarn add dva-model-persist
```
或者
```
npm i -S dva-model-persist
```

#### 使用说明

dva示例
```
//src/index.js
import dva from 'dva';
import { persistEnhancer } from 'dva-model-persist';

const app = dva();
app.use({
  extraEnhancers: [
    persistEnhancer()
  ],
});
```

umi示例（或dva-cli@1.0.0.bate4版）
```
// src/dva.js
import { persistEnhancer } from 'dva-model-persist';

export function config () {
  return {
    extraEnhancers: [
      persistEnhancer()
    ],
  };
}
```

#### API 
##### persistEnhancer(opts)
```
type opts = Object
```
###### opts
`type key = String`: storage 的 key，默认：`model`

`type storage = Object`: storage 对象,默认：`sessionStorage`，更多的支持可以引入[`store`](https://www.npmjs.com/package/store) 
``` ecmascript 6
//  使用 localStorage
import storage from 'dva-model-persist/storage';
//  使用 sessionStorage
import storage from 'dva-model-persist/storage/sission';
```

`type blacklist = Array`: 黑名单，当白名单为空时生效，默认：`['@@dva','routing']`

`type whitelist = Array`: 白名单，默认：`[]`

`type keyPrefix = String`: key 前缀，默认：`persist`

#### Other

目前会出现`Unexpected key [你的异步model名] found in previous state received by the reducer. Expected to find one of the known reducer keys instead: "routing", "@@dva". Unexpected keys will be ignored.`的错误，暂时没有找到解决方法，但不影响功能。

出现原因：`dva-model-persist`恢复数据到`model`时，异步的`model`由于没有加载而报出的错误，该错误是由`redux`抛出

当异步的`model`加载后，会优先恢复数据到`model`，所以并不影响使用。
