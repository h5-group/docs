# 登录

项目中已内置一套完整的登录组件，包含短信登录、蜂窝登录，日常使用时，直接修改样式可以应对大部分情况，其 ref 已通过 provide 在 App.vue 中提供

**源码路径：`@/components/custom/login/`**

## 登录组件使用

```typescript
import type Login from "@/components/custom/login/Login.vue";

const login = inject<InstanceType<typeof Login> | null>("login");

// 打开登录窗口（根据当前实际状态自动选择打开蜂窝登录窗口或者短信验证码登录窗口）
login?.open();

// 打开蜂窝登录窗口
login?.openCellularLogion();

// 打开短信登录窗口
login?.openSMSLogin();
```

## 号码信息

### store

号码信息会自动存储在 UseInformationStore 中，目前根据 store.phone 是否为 null 判断是否已经登录

```typescript
import { useUserInformationStore } from "@/stores";
const store = useUserInformationStore();

// 加密后的手机号 137****1234
store.getEncryptedPhone;

// 后端返回的原始加密手机号
store.getPhoneRaw;

// 用户手机号明文
store.getPhone;

// 注销
store.logout();
```

### state

| 名称  | 说明                   | 类型           |
| :---: | ---------------------- | -------------- |
| phone | 后端返回的加密的手机号 | [null, string] |

### getters

|       名称        | 说明                             | 类型           |
| :---------------: | -------------------------------- | -------------- |
|     getPhone      | 用户手机号明文                   | [null, string] |
|    getPhoneRaw    | 后端返回的原始加密手机号         | [null, string] |
| getEncryptedPhone | 加密后的手机号 (137\*\*\*\*1234) | [null, string] |

### actions

|   名称   | 说明                             | 类型           | 参数          | 返回值 |
| :------: | -------------------------------- | -------------- | ------------- | ------ |
| setPhone | 设置手机号（无需再次使用）       | [null, string] | phone: string | void   |
|  logout  | 注销，将 state.phone 设置为 null | [null, string] | -             | void   |

## AES 解密秘钥

**配置文件在 `./src/config/Crypto.ts`**

| 名称     | 对应字段        |
| -------- | --------------- |
| 解密秘钥 | AES_DECRYPT_KEY |

## 直接调用功能

### 静默登录

在确定 UseInformationStore 中 phone 不为 null 后，执行下面代码

```typescript
import { loginByCellular } from "./Cellular";

const login = async () => {
  const result = await loginByCellular();
  if (result) {
    console.log("登录成功");
  } else {
    console.log("蜂窝网络登录失败");
  }
};
```
