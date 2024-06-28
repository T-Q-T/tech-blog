# 记录一些易忘的命令

1. 更新远程分支列表 git remote update origin --prune
2. 本地分支重命名 git branch -m old new
3. 删除远端分支 git push --delete origin [branchName]
4. 搜索某次提交 git log -g --grep="search content"
5. 合并某次提交，只更新工作区和暂存区，不产生新的提交。git cherry-pick -n
6. gitk -all 查看所有分支提交记录 
7.舍弃本地所有commit  git reset --hard FETCH_HEAD
8. 批量删除分支
    - 批量删除本地分支  git branch |grep 'xxx' |xargs git branch -D
    - 批量删除远程分支git branch -r | grep 'hotfix' | grep 'vspex' | sed 's/origin\///g' | xargs -I {} git push origin :{}
    > https://blog.csdn.net/qq_32452623/article/details/86317091   
    > https://www.cnblogs.com/Windge/p/15505552.html  
    > https://qa.1r1g.com/sf/ask/3158266261/
