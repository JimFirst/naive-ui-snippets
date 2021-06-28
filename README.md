## This is Code Snippets of Naive UI for VS Code.

### Install

#### Manual Install

Go to the [git](https://github.com/JimFirst/naive-ui-snippets) and download the snippets folder, then copy the files in the folder to the path directly:

+ **Mac**: /Users/*< your-user-name >*/Library/Application Support/Code/User/snippets/
+ **Windows**: *< your-installed-driver >* :\Users\ *< your-user-name >* \AppData\Roaming\Code\User\snippets\

#### Through VS Code Extensions

+ From website: Go to Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/vscode), and search 'Naive UI Snippets', then click the install button.
+ From VS Code: click extensions sidebar, and search 'Naive UI Snippets', then click the install button.

### Special Instruction

1. For the components like `n-table` which need children components to be its content, use `v-for` to loop to generate the children components.

### Snippets List

1. All the Naive UI tags below, ignore the closure and more detailed information. Such as `elr` to `<n-radio>`, actually that represents `<n-radio v-model="${1}" label="${2}">$3</n-radio>`
2. The sinppets' order follows the order of the components of Guide on Naive UI official website basically. <!--Supply extra General and Options parts.-->
3. Totally 108 snippets. Will add more if necessary.
4. **Only work in .vue file for now.**

#### Basic Part

|No.|Trigger&nbsp;Key|Naive Tag|
|:------:|:--------------:|:--------|
|1. | `nrow` | `<n-row>` |
|2. | `ncol` | `<n-col>` |
|3. | `nhc` | `hidden-xs-only,hidden-sm-only,etc` |
|4. | `ncon` | `<n-container>` |

