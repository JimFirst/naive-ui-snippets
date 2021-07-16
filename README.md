## This is Code Snippets of Naive UI for VS Code.
English | [中文](README.zh-CN.md)
### Install

#### Manual Install

Go to the [git](https://github.com/JimFirst/naive-ui-snippets) and download the snippets folder, then copy the files in the folder to the path directly:

+ **Mac**: /Users/*< your-user-name >*/Library/Application Support/Code/User/snippets/
+ **Windows**: *< your-installed-driver >* :\Users\ *< your-user-name >* \AppData\Roaming\Code\User\snippets\

#### Through VS Code Extensions

+ From website: Go to Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/vscode), and search 'Naive UI Snippets', then click the install button.
+ From VS Code: click extensions sidebar, and search 'NaiveUISnippets', then click the install button.

### Special Instruction

1. For the components like `n-table` which need children components to be its content, use `v-for` to loop to generate the children components.

### Snippets List

1. All the Naive UI tags below, ignore the closure and more detailed information. Such as `nr` to `<n-radio>`, actually that represents `<n-radio v-model="${1}" label="${2}">$3</n-radio>`
2. The sinppets' order follows the order of the components of Guide on Naive UI official website basically. <!--Supply extra General and Options parts.-->
3. Totally 78 snippets. Will add more if necessary.
4. **Only work in .vue file for now.**

#### Basic Part

|No.|Trigger&nbsp;Key|Naive Tag|
|:------:|:--------------:|:--------|
|1. | `nava` | `<n-avatar>` |
|2. | `nb` | `<n-button>` |
|3. | `nbg` | `<n-button-group>` |
|4. | `ncard` | `<n-card>` |
|5. | `ncolla` | `<n-collapse>` |
|6. | `ncollai` | `<n-collapse-item>` |
|7. | `ndiv` | `<n-divider>` |
|8. | `ndro` | `<n-dropdown>` |
|9. | `nel` | `<n-ellipsis>` |
|10. | `ngt` | `<n-ellipsis>` |
|11. | `nic` | `<n-icon>` |
|12. | `nta` | `<n-tag>` |
|13. | `nau` | `<n-auto-complete>` |
|14. | `ncas` | `<n-cascader>` |
|15. | `ncp` | `<n-color-picker>` |
|16. | `nc` | `<n-checkbox>` |
|17. | `ncg` | `<n-checkbox-group>` |
|18. | `ndp` | `<n-date-picker>` |
|19. | `ndyi` | `<n-dynamic-input>` |
|20. | `ndyt` | `<n-dynamic-tags>` |
|21. | `nf` | `<n-form>` |
|22. | `nipt` | `<n-input>` |
|23. | `niptn` | `<n-input-number>` |
|24. | `nmen` | `<n-mention>` |
|25. | `nr` | `<n-radio>` |
|26. | `nrg` | `<n-radio-group>` |
|27. | `nra` | `<n-rate>` |
|28. | `nsel` | `<n-select>` |
|29. | `nsl` | `<n-slider>` |
|30. | `nsw` | `<n-switch>` |
|31. | `ntp` | `<n-time-picker>` |
|32. | `ntr` | `<n-transfer>` |
|33. | `nup` | `<n-upload>` |
|34. | `ncal` | `<n-calendar>` |
|35. | `ndt` | `<n-data-table>` |
|36. | `ndes` | `<n-descriptions>` |
|37. | `nemp` | `<n-empty>` |
|38. | `nim` | `<n-image>` |
|39. | `nimg` | `<n-image-group>` |
|40. | `nl` | `<n-list>` |
|41. | `nli` | `<n-list-item>` |
|42. | `nsta` | `<n-statistic>` |
|43. | `nt` | `<n-table>` |
|44. | `nth` | `<n-thing>` |
|45. | `ntim` | `<n-time>` |
|46. | `ntl` | `<n-timeline>` |
|47. | `ntli` | `<n-timeline-item>` |
|48. | `ntree` | `<n-tree>` |
|49. | `naf` | `<n-affix>` |
|50. | `nan` | `<n-anchor>` |
|51. | `nbt` | `<n-back-top>` |
|52. | `nbr` | `<n-breadcrumb>` |
|53. | `nm` | `<n-menu>` |
|54. | `np` | `<n-pagination>` |
|55. | `nst` | `<n-steps>` |
|56. | `ntabs` | `<n-tabs>` |
|57. | `ntabp` | `<n-tab-pane>` |
|58. | `nal` | `<n-alert>` |
|59. | `nba` | `<n-badge>` |
|60. | `ndr` | `<n-drawer>` |
|61. | `nmo` | `<n-modal>` |
|62. | `npopc` | `<n-popconfirm>` |
|63. | `npopo` | `<n-popover>` |
|64. | `npops` | `<n-popselect>` |
|65. | `npro` | `<n-progress>` |
|66. | `nres` | `<n-result>` |
|67. | `nsk` | `<n-skeleton>` |
|68. | `nsp` | `<n-spin>` |
|69. | `nto` | `<n-tooltip>` |
|70. | `nla` | `<n-layout>` |
|71. | `ngr` | `<n-grid>` |
|72. | `ngri` | `<n-grid-item>` |
|73. | `ns` | `<n-space>` |
|74. | `nload` | `<n-loading-bar-provider>` |
|75. | `ndi` | `<n-dialog-provider>` |
|76. | `nmes` | `<n-message-provider>` |
|77. | `nno` | `<n-nofitication-provider>` |
|78. | `nco` | `<n-config-provider>` |