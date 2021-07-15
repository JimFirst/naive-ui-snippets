## This is Code Snippets of Naive UI for VS Code.
[English](README.md) | 中文
### 安装

#### 手动安装

跳转到[git](https://github.com/JimFirst/naive-ui-snippets)，下载文件夹，然后直接安装naive-ui-snippets-0.0.1.vsix文件  

#### Through VS Code Extensions

+ From website: Go to Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/vscode), and search 'Naive UI Snippets', then click the install button.
+ From VS Code: click extensions sidebar, and search 'Naive UI Snippets', then click the install button.

### Special Instruction

1. For the components like `n-table` which need children components to be its content, use `v-for` to loop to generate the children components.

### Snippets List

1. All the Naive UI tags below, ignore the closure and more detailed information. Such as `nr` to `<n-radio>`, actually that represents `<n-radio v-model="${1}" label="${2}">$3</n-radio>`
2. The sinppets' order follows the order of the components of Guide on Naive UI official website basically. <!--Supply extra General and Options parts.-->
3. Totally 108 snippets. Will add more if necessary.
4. **Only work in .vue file for now.**

#### Basic Part

|No.|Trigger&nbsp;Key|Naive Tag|
|:------:|:--------------:|:--------|
|1. | `nava` | `n-avatar>` |
|2. | `nb` | `<n-button>` |  
一行行复制实在太蠢了，后面拿脚本写一个，等我空了补上，待续。。。

