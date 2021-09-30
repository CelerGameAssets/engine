/*
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/**
 * @packageDocumentation
 * @module core
 */

import {
    ALIPAY,
    BAIDU,
    BUILD,
    COCOSPLAY,
    DEBUG,
    DEV,
    EDITOR,
    JSB,
    MINIGAME,
    PREVIEW,
    RUNTIME_BASED,
    SUPPORT_JIT,
    TEST,
    BYTEDANCE,
    WECHAT,
    XIAOMI,
    HUAWEI,
    OPPO,
    VIVO,
    EXPORT_TO_GLOBAL,
    CELER_X,
} from "internal:constants";

const _global = typeof window === "undefined" ? global : window;

/**
 * @en
 * The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace.
 * @zh
 * Cocos 引擎的主要命名空间，引擎代码中所有的类，函数，属性和常量都在这个命名空间中定义。
 * @deprecated
 */
export const legacyCC: Record<string, any> & {
    _global: typeof globalThis;
} = {
    _global,
};

// For internal usage
legacyCC.internal = {};

if (EXPORT_TO_GLOBAL) {
    // _global.CELER_X = false;
    // Supports dynamically access from external scripts such as adapters and debugger.
    // So macros should still defined in global even if inlined in engine.
    /**
     * @en The pre-compilation constant for code tree shaking: CC_BUILD (Available for built package)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BUILD（在构建后生效）
     */
    _global.CC_BUILD = BUILD;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_TEST (Available for ci test environment)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_TEST（在 CI 测试环境下生效）
     */
    _global.CC_TEST = TEST;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_EDITOR (Available for editor environment)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_EDITOR（在编辑器环境下生效）
     */
    _global.CC_EDITOR = EDITOR;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_PREVIEW (Available for preview)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_PREVIEW（预览时生效）
     */
    _global.CC_PREVIEW = PREVIEW;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_DEV (Internal)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEV（内部使用）
     */
    _global.CC_DEV = DEV;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_DEBUG (Available for debug environment)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEBUG（在调试模式下生效）
     */
    _global.CC_DEBUG = !CELER_X;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_JSB (Available for native application environment)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_JSB（在原生应用环境下生效）
     */
    _global.CC_JSB = JSB;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_BYTEDANCE (Available for Bytedance platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BYTEDANCE（在字节平台上生效）
     */
    _global.CC_BYTEDANCE = BYTEDANCE;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_WECHAT (Available for Wechat mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_WECHAT（在微信小游戏平台上生效）
     */
    _global.CC_WECHAT = WECHAT;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_ALIPAY (Available for Alipay mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_ALIPAY（在支付宝小游戏平台上生效）
     */
    _global.CC_ALIPAY = ALIPAY;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_XIAOMI (Available for MI mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_XIAOMI（在小米小游戏平台上生效）
     */
    _global.CC_XIAOMI = XIAOMI;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_BAIDU (Available for Baidu mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BAIDU（在百度小游戏平台上生效）
     */
    _global.CC_BAIDU = BAIDU;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_COCOSPLAY (Available for Cocos Play platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_COCOSPLAY（在 CocosPlay 小游戏平台上生效）
     */
    _global.CC_COCOSPLAY = COCOSPLAY;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_HUAWEI (Available for Huawei mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_HUAWEI（在华为快游戏平台上生效）
     */
    _global.CC_HUAWEI = HUAWEI;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_OPPO (Available for OPPO mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_OPPO（在 OPPO 小游戏平台上生效）
     */
    _global.CC_OPPO = OPPO;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_VIVO (Available for Vivo mini game platform)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_VIVO（在 Vivo 小游戏平台上生效）
     */
    _global.CC_VIVO = VIVO;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_MINIGAME (Available for general mini game platforms)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_MINIGAME（在各个小游戏平台上生效）
     */
    _global.CC_MINIGAME = MINIGAME;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_RUNTIME_BASED (Available for Huawei, OPPO, Vivo and Cocos Play)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_RUNTIME_BASED（在华为、OPPO、Vivo 和 CocosPlay 平台上生效）
     */
    _global.CC_RUNTIME_BASED = RUNTIME_BASED;
    /**
     * @en The pre-compilation constant for code tree shaking: CC_SUPPORT_JIT (Available for platforms support JIT)
     * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_SUPPORT_JIT（在支持 JIT 的平台上生效）
     */
    _global.CC_SUPPORT_JIT = SUPPORT_JIT;
}

if (DEV) {
    legacyCC._Test = {};
}

const engineVersion = "美丽大方吃吃定制版3.3.1";

/**
 * The current version of Cocos2d being used.<br/>
 * Please DO NOT remove this String, it is an important flag for bug tracking.<br/>
 * If you post a bug to forum, please attach this flag.
 */
_global.CocosEngine = legacyCC.ENGINE_VERSION = engineVersion;

_global.cc = legacyCC;

/**
 * 多语言
 */
class lan {
    private _tMap: {
        [key: string]: {
            [key: number]: {
                [key: number]: string;
            };
        };
    } = {};

    private _styleMap: {
        [key: number]: {
            [key: number]: {
                FontSize: number;
                /**  (0: left, 1: center, 2: right)*/
                HorizontalAlign: number;
                /** (0: top, 1: center, 2: bottom) */
                VerticalAlign: number;
                MaxWidth: number;
                LineHeight: number;
            };
        };
    } = {};
    /**
   *en  英语

pt  葡萄牙语

es  西班牙语

in | id   印尼语

tl | fil   菲律宾
   */
    private _lan: string = "en";

    /**
     *
     * @param {string} lan
     * @param {{[key:number]: {[key:number]:{}}}}  styleMap
     */
    defineStyle(lanType: string, styleMap: any) {
        if (this._styleMap[lanType]) {
            Object.assign(this._styleMap[lanType], styleMap);
        } else {
            this._styleMap[lanType] = styleMap;
        }
    }

    /**
     *
     * @param {string} lan
     * @param {{[key:number]: {[key:string]:number}}} stringMap
     */
    define(lanType: string, stringMap: any) {
        if (this._tMap[lanType]) {
            Object.assign(this._tMap[lanType], stringMap);
        } else {
            this._tMap[lanType] = stringMap;
        }
    }

    /**
     * 设置当前语种
     * @param {string} lan
     */
    set(lan: string) {
        this._lan = lan;
    }

    /**
     * 获取文本
     * @param {number} key
     * @param {number} originStr
     */
    t(key: number, contentType: number, replaceText: string[]) {
        if (!this._tMap[this._lan]) return "";

        if (!this._tMap[this._lan][key]) return "";

        if (!this._tMap[this._lan][key][contentType]) return "";
        let resultText = this._tMap[this._lan][key][contentType];
        if (replaceText && replaceText instanceof Array) {
            for (let text of replaceText) {
                resultText = resultText.replace("${##}", text);
            }
        }
        return resultText;
    }

    /**
     *
     * @param {number} key
     * @param {number} contentType
     */
    style(key: string, contentType: string) {
        if (!this._styleMap[this._lan]) return {};

        if (!this._styleMap[this._lan][key]) return {};

        if (!this._styleMap[this._lan][key][contentType]) return {};

        return this._styleMap[this._lan][key][contentType];
    }
}

_global.lan = new lan();

/**
 *  科学计数法
 */
legacyCC.ScienceNumber = (
    fromNumber: number,
    maxLength: number,
    fixCount: number,
    isUpper: boolean = true,
    isSingle: boolean = true,
    smartFix: boolean = true
) => {
    let testResult = "";
    if (smartFix) {
        let testValue = Math.pow(10, fixCount) * fromNumber;
        if (Math.floor(testValue) == testValue) {
            testResult = fromNumber.toFixed(0);
        } else {
            testResult = fromNumber.toFixed(fixCount);
        }
    } else {
        testResult = fromNumber.toFixed(fixCount);
    }

    if (testResult.length <= maxLength || maxLength == 0) {
        return testResult;
    }

    /**
     * 000  k
     * 000,000  m
     * 000,000,000  g
     * 000,000,000,000  t
     */

    let format = isUpper
        ? ["K", "M", "B", "T", "P"]
        : ["k", "m", "b", "t", "p"];
    let mod = Math.pow(1000, format.length);
    let value = fromNumber;
    let fixedResult = "";
    let count = 0;

    while (format.length > 0) {
        let fix: string = format.pop() as string;
        let fixValue = value / mod;
        mod = mod / 1000;

        if (mod < 1) break;
        if (fixValue < 1) {
            if (format.length <= 0) {
                fixedResult =
                    (
                        Math.floor(fixValue * Math.pow(10, fixCount)) /
                        Math.pow(10, fixCount)
                    ).toFixed(fixCount) + fix;
            }
            continue;
        }

        //  console.error("fixValue:", fixValue, count);
        let result =
            ((fixedResult + fixValue.toFixed(fixCount)).length >= maxLength
                ? count > 0 && isSingle == false
                    ? Math.floor(fixValue)
                    : fixValue.toFixed(fixCount)
                : isSingle
                ? fixValue.toFixed(fixCount)
                : Math.floor(fixValue)) + fix;

        fixedResult += result;
        count++;

        if (isSingle) return fixedResult;
        if (fixedResult.length >= maxLength) {
            return fixedResult;
        }

        value =
            Math.floor(fixValue * mod * 1000) -
            Math.floor(fixValue) * mod * 1000;
    }

    return fixedResult;
};

let start_callback = (match: any) => {};
let match_info = {
    /** 匹配ID */
    matchId: "",
    /** 随机种子 */
    sharedRandomSeed: Math.random(),
    /** 难度信息(目前根据游戏有的游戏不需要用到) */
    difficultyLevel: 1,
    /** 是否  新手 */
    shouldLaunchTutorial: false,
    /** 语种 en_US|zh_CN|pt_BR */
    locale: "en_US",
};
legacyCC.OnStart = function (callback, defaultMatch) {
    start_callback = callback;
    Object.assign(match_info, defaultMatch);
};

legacyCC.StartGame = function (matchInfo) {
    if (typeof matchInfo != "object") {
        matchInfo = JSON.parse(matchInfo);
    }
    Object.assign(match_info, matchInfo);
    if (start_callback) {
        start_callback(match_info);
    } else {
        console.error("start callback is null:", match_info);
    }
};

legacyCC.TimeScale = 1;
export { engineVersion as VERSION };
